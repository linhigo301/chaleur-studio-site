/* Public website analytics only. Never include this file in a product app. */
(() => {
  'use strict';
  if (window.chaleurAnalytics) return;

  // Central configuration. The placeholder never loads Google or sends data.
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  const ANALYTICS_ENABLED = true;
  const REQUIRE_CONSENT = false; // Set true when integrating a consent UI.
  const INTERNAL_KEY = 'chaleurAnalyticsInternal';
  const CONSENT_KEY = 'chaleurAnalyticsConsent';
  // Only reviewed, public campaign labels may reach GA. Extend before a campaign.
  const UTM_VALUES = {
    utm_source: ['email'],
    utm_medium: ['outreach'],
    utm_campaign: ['rehab_home_tw_01', 'dormitory_tw_01', 'uk_care_home_test_01'],
    utm_id: [], utm_content: [], utm_term: []
  };
  const language = document.documentElement.lang;
  // Read the page's static language link, never a visitor-supplied URL path/title.
  const pageLink = document.querySelector(`link[rel="alternate"][hreflang="${language}"]`);
  const publicPage = pageLink ? new URL(pageLink.getAttribute('href'), location.href) : null;
  const pagePath = publicPage ? publicPage.pathname : '';
  const pageTitle = document.title;
  let internal = false;
  let storageOK = true;
  let consent = false;
  let consentDenied = false;
  let started = false;
  let debug = false;
  let failed = false;
  const dryRun = GA_MEASUREMENT_ID === 'G-XXXXXXXXXX';
  const validID = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && !dryRun;
  const url = new URL(location.href);
  try {
    internal = localStorage.getItem(INTERNAL_KEY) === 'true';
    const directive = url.searchParams.get('internal');
    if (directive === '1') {
      internal = true;
      localStorage.setItem(INTERNAL_KEY, 'true');
    } else if (directive === '0') {
      localStorage.removeItem(INTERNAL_KEY);
      internal = false;
    }
    consent = localStorage.getItem(CONSENT_KEY) === 'granted';
    consentDenied = localStorage.getItem(CONSENT_KEY) === 'denied';
  } catch (_) {
    storageOK = false; // Cannot reliably read exclusion: fail closed.
    console.info('[Chaleur Analytics] Storage unavailable; analytics disabled.');
  }
  if (url.searchParams.has('internal')) {
    url.searchParams.delete('internal');
    try { history.replaceState(history.state, '', url.pathname + url.search + url.hash); }
    catch (_) { storageOK = false; }
  }

  // Keep the real address intact (except internal); sanitise only the GA payload.
  const pageLocation = publicPage ? new URL(publicPage.origin + pagePath) : null;
  if (pageLocation) {
    for (const [key, allowed] of Object.entries(UTM_VALUES)) {
      const value = url.searchParams.get(key);
      if (allowed.includes(value)) pageLocation.searchParams.set(key, value);
    }
  }
  const campaigns = {};
  const campaignFields = { utm_source: 'campaign_source', utm_medium: 'campaign_medium',
    utm_campaign: 'campaign_name', utm_id: 'campaign_id',
    utm_content: 'campaign_content', utm_term: 'campaign_term' };
  for (const [key, field] of Object.entries(campaignFields)) {
    if (url.searchParams.has(key)) campaigns[field] = pageLocation?.searchParams.get(key) || '';
  }
  let referrer = '';
  try { if (document.referrer) referrer = new URL(document.referrer).origin + '/'; }
  catch (_) { /* No unparsed referrer is ever sent. */ }
  const common = {
    page_location: pageLocation ? pageLocation.href : '', page_path: pagePath,
    page_title: pageTitle, page_referrer: referrer,
    language, site_language: language
  };
  const permitted = () => ANALYTICS_ENABLED && storageOK && !internal && !failed && !consentDenied &&
    !!publicPage && ['zh-TW', 'en-GB'].includes(language) && (!REQUIRE_CONSENT || consent);
  const gtag = function () { window.dataLayer.push(arguments); };
  const emit = (name, params = {}) => {
    if (!permitted() || !started) return;
    const payload = { ...common, ...params };
    if (debug) console.info('[Chaleur Analytics] ' + (dryRun ? 'Dry run: ' : '') + name, payload);
    if (!dryRun) gtag('event', name, { ...payload, transport_type: 'beacon' });
  };
  const start = () => {
    if (started || !permitted() || (!dryRun && !validID)) return;
    started = true;
    if (dryRun) {
      console.info('[Chaleur Analytics] Placeholder ID; dry run only. No data sent.');
    } else {
      window.dataLayer = window.dataLayer || [];
      window['ga-disable-' + GA_MEASUREMENT_ID] = false;
      gtag('consent', 'default', {
        analytics_storage: 'granted', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied'
      });
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        ...common, ...campaigns, send_page_view: false, allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
      const script = document.createElement('script');
      script.async = true;
      script.referrerPolicy = 'no-referrer';
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
      script.onerror = () => {
        failed = true;
        console.info('[Chaleur Analytics] Analytics unavailable; website remains usable.');
      };
      document.head.appendChild(script);
      console.info('[Chaleur Analytics] Analytics enabled.');
    }
    emit('page_view');
  };
  const stop = () => { window['ga-disable-' + GA_MEASUREMENT_ID] = true; };
  window.chaleurAnalytics = Object.freeze({
    status: () => ({
      mode: internal ? 'internal' : !permitted() ? 'disabled' :
        !validID && !dryRun ? 'invalid-id' : dryRun ? 'dry-run' : 'enabled',
      internal, storageOK, consentRequired: REQUIRE_CONSENT, consent, started
    }),
    debug: value => { debug = value === true; },
    // Future consent UI calls this; revocation reloads to unload the Google tag.
    setConsent: granted => {
      if (typeof granted !== 'boolean') return;
      try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied'); }
      catch (_) { storageOK = false; stop(); return; }
      consent = granted;
      consentDenied = !granted;
      if (!granted) { stop(); location.reload(); }
      else start();
    }
    // Reserved event names: demo_request, demo_download. No current binding/API.
  });
  window.addEventListener('storage', event => {
    if (event.key === INTERNAL_KEY && event.newValue === 'true') { internal = true; stop(); }
    if (event.key === CONSENT_KEY && event.newValue !== 'granted') { consent = false; consentDenied = true; stop(); }
  });

  const onClick = event => {
    if (event.type === 'auxclick' && event.button !== 1) return;
    const anchor = event.target.closest && event.target.closest('a[href]');
    if (!anchor) return;
    const target = new URL(anchor.href, location.href);
    const toLanguage = anchor.getAttribute('hreflang');
    if (anchor.closest('.language') && ['zh-TW', 'en-GB'].includes(toLanguage) && toLanguage !== language) {
      emit('language_switch', { from_language: language, to_language: toLanguage, current_page: pagePath });
    }
    const productMatch = target.pathname.match(/\/products\/([a-z0-9-]+)\/$/);
    if (anchor.matches('.product-card .card-link') && target.origin === location.origin && productMatch) {
      emit('product_view_click', { product: productMatch[1], source_page: pagePath });
      emit('cta_click', { cta_name: 'learn_product', page: pagePath });
    }
    let method = '';
    if (target.protocol === 'mailto:') method = 'email';
    if (target.protocol === 'https:' && ['line.me', 'lin.ee'].includes(target.hostname)) method = 'line';
    if (method) emit('contact_click', { contact_method: method });
    const ctas = { '#products': 'explore_tools', '#contact': 'contact_us',
      '#approach': 'our_approach', '#screenshots': 'view_screenshots',
      '#workflow': 'view_workflow', '#downloads': 'view_downloads' };
    if (target.origin === location.origin && ctas[target.hash] &&
        anchor.matches('.actions a, .navigation a, a.button, a.text-link')) {
      emit('cta_click', { cta_name: ctas[target.hash], page: pagePath });
    }
  };
  document.addEventListener('click', onClick);
  document.addEventListener('auxclick', onClick);
  if (internal) console.info('[Chaleur Analytics] Internal traffic excluded.');
  start();
})();
