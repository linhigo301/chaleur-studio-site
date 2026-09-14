// Test-only Playwright dependency; no dependency is shipped to the website.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js/analytics.js'), 'utf8');
const prefix = '/chaleur-studio-site/';
const pages = ['', 'en/', 'products/handover-system/', 'en/products/handover-system/',
  'products/emberlite/', 'en/products/emberlite/'];
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (!pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
  const relative = pathname.slice(prefix.length);
  const file = path.resolve(root, relative + (pathname.endsWith('/') ? 'index.html' : ''));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404).end(); return; }
    const type = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
      '.png': 'image/png', '.jpg': 'image/jpeg' }[path.extname(file)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type }); res.end(data);
  });
});
let base;
let checks = 0;
const check = (value, message) => { assert(value, message); checks++; };
async function setup(browser, { width = 1440, real = true, blocked = false, consent = false, disabled = false, badID = false } = {}) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  let googleLoads = 0;
  let code = source;
  // This ID exists only in an intercepted response; all external network is blocked.
  if (real) code = code.replace("const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'", "const GA_MEASUREMENT_ID = 'G-OFFLINETEST'");
  if (badID) code = code.replace("const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'", "const GA_MEASUREMENT_ID = 'invalid'");
  if (consent) code = code.replace('const REQUIRE_CONSENT = false', 'const REQUIRE_CONSENT = true');
  if (disabled) code = code.replace('const ANALYTICS_ENABLED = true', 'const ANALYTICS_ENABLED = false');
  await context.route('**/*', async route => {
    const requestURL = route.request().url();
    if (requestURL.startsWith(base)) {
      if (new URL(requestURL).pathname.endsWith('/js/analytics.js')) {
        await route.fulfill({ contentType: 'text/javascript', body: code });
      } else await route.continue();
    } else {
      if (requestURL.startsWith('https://www.googletagmanager.com/gtag/js?')) {
        googleLoads++;
        if (blocked) await route.abort();
        else await route.fulfill({ contentType: 'text/javascript', body: '/* Offline GA transport stub: no Google requests. */' });
      } else await route.abort();
    }
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  return { context, page, errors, loads: () => googleLoads };
}
const commands = page => page.evaluate(() => (window.dataLayer || []).map(command => Array.from(command)));
const events = async page => (await commands(page)).filter(c => c[0] === 'event');
async function clickWithoutNavigation(page, selector) {
  await page.evaluate(() => document.addEventListener('click', e => e.preventDefault(), { once: true }));
  await page.locator(selector).first().click();
}
async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}${prefix}`;
  for (const channel of (process.env.TEST_BROWSERS || 'chrome,msedge').split(',')) {
    const browser = await chromium.launch({ channel });
    try {
      for (const width of [375, 1440]) for (const route of pages) {
        const t = await setup(browser, { width }); const p = t.page;
        await p.goto(base + route + '?utm_source=email&utm_medium=outreach&utm_campaign=rehab_home_tw_01');
        const language = route.startsWith('en/') ? 'en-GB' : 'zh-TW';
        let es = await events(p);
        check(es.length === 1 && es[0][1] === 'page_view', channel + route + ' single pageview');
        check(es[0][2].page_path === prefix + route, 'public path');
        check(es[0][2].language === language && es[0][2].site_language === language, 'language');
        check(es[0][2].page_title === await p.title(), 'title');
        check(new URL(es[0][2].page_location).searchParams.get('utm_campaign') === 'rehab_home_tw_01', 'campaign');
        check(t.loads() === 1, 'one async GA script');
        check(await p.locator('script[src*="googletagmanager"]').evaluate(el => el.async), 'async');
        if (width === 375) {
          await p.locator('.menu-toggle').click();
          check(await p.locator('.menu-toggle').getAttribute('aria-expanded') === 'true', 'mobile menu');
          await p.keyboard.press('Escape');
        }
        await clickWithoutNavigation(p, '.actions a.button');
        await clickWithoutNavigation(p, '.contact-email');
        await clickWithoutNavigation(p, '.contact-details a[href^="https://line.me"]');
        if (!route.includes('products/')) {
          await clickWithoutNavigation(p, '.card-link[href*="handover-system"] span');
          await clickWithoutNavigation(p, '.card-link[href*="emberlite"] span');
          es = await events(p);
          check(es.some(c => c[1] === 'product_view_click' && c[2].product === 'handover-system'), 'handover card');
          check(es.some(c => c[1] === 'product_view_click' && c[2].product === 'emberlite'), 'emberlite card');
          check(es.filter(c => c[1] === 'cta_click' && c[2].cta_name === 'learn_product').length === 2, 'product CTAs');
        }
        await clickWithoutNavigation(p, '.language a:not([aria-current])');
        es = await events(p);
        check(es.some(c => c[1] === 'language_switch' && c[2].from_language === language && c[2].to_language !== language), 'language switch');
        check(es.some(c => c[1] === 'cta_click'), 'CTA');
        check(es.some(c => c[1] === 'contact_click' && c[2].contact_method === 'email'), 'email');
        check(es.some(c => c[1] === 'contact_click' && c[2].contact_method === 'line'), 'LINE after scenario render');
        check(!JSON.stringify(await commands(p)).includes('linhigo301'), 'no contact PII');
        await p.evaluate(() => { location.hash = 'contact'; });
        check((await events(p)).filter(c => c[1] === 'page_view').length === 1, 'no duplicate hash pageview');
        check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'no horizontal overflow');
        check(t.errors.length === 0, t.errors.join('\n'));
        await t.context.close();
      }
      // A–E, persistent exclusion across pages and browser-context independence.
      for (const real of [false, true]) {
        const t = await setup(browser, { real }); const p = t.page;
        await p.goto(base);
        check((await p.evaluate(() => chaleurAnalytics.status())).mode === (real ? 'enabled' : 'dry-run'), 'A normal');
        const initialLoads = t.loads();
        await p.goto(base + '?internal=1&utm_source=email&utm_medium=outreach&utm_campaign=rehab_home_tw_01&other=keep#contact');
        check(await p.evaluate(() => localStorage.getItem('chaleurAnalyticsInternal')) === 'true', 'B saved');
        check(!new URL(p.url()).searchParams.has('internal'), 'internal cleaned');
        check(new URL(p.url()).searchParams.get('other') === 'keep' && new URL(p.url()).hash === '#contact', 'other/hash preserved');
        check(new URL(p.url()).searchParams.get('utm_source') === 'email', 'UTM preserved');
        await clickWithoutNavigation(p, '.contact-email');
        check(t.loads() === initialLoads && (await commands(p)).length === 0, 'excluded no GA init/events');
        await p.goto(base + 'products/handover-system/');
        check((await p.evaluate(() => chaleurAnalytics.status())).internal && (await commands(p)).length === 0, 'C persists');
        const other = await setup(browser, { real }); await other.page.goto(base);
        check(!(await other.page.evaluate(() => chaleurAnalytics.status())).internal, 'independent browser storage');
        await other.context.close();
        await p.goto(base + '?internal=0&utm_source=email');
        check(await p.evaluate(() => localStorage.getItem('chaleurAnalyticsInternal')) === null, 'D cleared');
        check(!new URL(p.url()).searchParams.has('internal'), '0 cleaned');
        await p.goto(base);
        check((await p.evaluate(() => chaleurAnalytics.status())).mode === (real ? 'enabled' : 'dry-run'), 'E resumed');
        if (!real) {
          check(t.loads() === 0 && (await commands(p)).length === 0, 'placeholder never sends');
          const logs = []; p.on('console', message => logs.push(message.text()));
          await p.evaluate(() => chaleurAnalytics.debug(true));
          await clickWithoutNavigation(p, '.contact-email');
          check(logs.some(l => l.includes('Dry run: contact_click')), 'console dry-run binding');
        }
        await t.context.close();
      }
      const privacy = await setup(browser);
      await privacy.page.goto(base + 'products/handover-system/?internal=0&scenario=rehab-home&email=private@example.com&name=Alice&phone=0912345678&utm_source=private@example.com&utm_campaign=Alice#secret', {
        referer: 'https://example.com/private/Alice?email=private@example.com'
      });
      const payload = JSON.stringify(await commands(privacy.page));
      check(!/Alice|private|0912345678|secret|scenario=/.test(payload), 'sensitive URL/referrer removed');
      check(payload.includes('https://example.com/'), 'referrer origin retained');
      check((await commands(privacy.page)).find(c => c[0] === 'config')[2].campaign_source === '', 'unapproved source override');
      const lang = privacy.page.locator('.language a:not([aria-current])');
      await lang.click();
      check(new URL(privacy.page.url()).searchParams.get('scenario') === 'rehab-home', 'scenario language navigation');
      check(await privacy.page.locator('.contact-details a[href^="https://line.me"]').count() === 1, 'LINE survives navigation');
      await privacy.context.close();
      const future = await setup(browser); await future.page.goto(base);
      await future.page.evaluate(() => {
        const card = document.createElement('article'); card.className = 'product-card';
        card.innerHTML = '<a class="card-link" href="products/future-tool/"><span>Future tool fixture</span></a>';
        document.querySelector('.product-grid').appendChild(card);
      });
      await clickWithoutNavigation(future.page, '.card-link[href*="future-tool"] span');
      check((await events(future.page)).some(c => c[1] === 'product_view_click' && c[2].product === 'future-tool'), 'future delegated product binding');
      for (const campaign of ['dormitory_tw_01', 'uk_care_home_test_01']) {
        await future.page.goto(base + '?utm_source=email&utm_medium=outreach&utm_campaign=' + campaign);
        check((await commands(future.page)).find(c => c[0] === 'config')[2].campaign_name === campaign, 'approved campaign override');
      }
      const sibling = await future.context.newPage();
      await sibling.goto(base + '?internal=1');
      await future.page.waitForFunction(() => chaleurAnalytics.status().internal);
      const before = (await events(future.page)).length;
      await clickWithoutNavigation(future.page, '.contact-email');
      check((await events(future.page)).length === before, 'active sibling stops events');
      check(await future.page.evaluate(() => window['ga-disable-G-OFFLINETEST']) === true, 'active sibling disables GA');
      await future.context.close();
      const unavailable = await setup(browser);
      await unavailable.page.addInitScript(() => { Storage.prototype.getItem = () => { throw new Error('blocked'); }; });
      await unavailable.page.goto(base + '?internal=1&utm_source=email');
      check(unavailable.loads() === 0 && (await commands(unavailable.page)).length === 0, 'storage blocked fail closed');
      check(unavailable.errors.length === 0, 'storage error isolated');
      await unavailable.context.close();
      for (const options of [{ disabled: true }, { badID: true, real: false }, { consent: true }]) {
        const t = await setup(browser, options); await t.page.goto(base);
        check(t.loads() === 0 && (await commands(t.page)).length === 0, 'configuration gate');
        if (options.consent) {
          await t.page.evaluate(() => chaleurAnalytics.setConsent(true));
          await t.page.waitForFunction(() => document.querySelector('script[src*="googletagmanager"]'));
          check((await events(t.page)).filter(c => c[1] === 'page_view').length === 1, 'grant starts once');
          await Promise.all([t.page.waitForEvent('load'), t.page.evaluate(() => chaleurAnalytics.setConsent(false))]);
          check((await commands(t.page)).length === 0, 'revocation unloads GA');
          await t.page.evaluate(() => chaleurAnalytics.setConsent(true));
          check((await events(t.page)).length === 1, 'regrant works');
        }
        await t.context.close();
      }
      const failure = await setup(browser, { blocked: true }); await failure.page.goto(base);
      await failure.page.waitForFunction(() => chaleurAnalytics.status().mode === 'disabled');
      await failure.page.locator('.language a:not([aria-current])').click();
      check(new URL(failure.page.url()).pathname === prefix + 'en/', 'network failure navigation works');
      check(failure.errors.length === 0, 'network failure isolated');
      await failure.context.close();
      console.log(channel + ': passed');
    } finally { await browser.close(); }
  }
  console.log(`${checks} assertions passed. Offline transport only; no claim of GA receipt.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
