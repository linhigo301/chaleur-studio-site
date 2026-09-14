// The URL holds the presentation state; product paths, titles and images stay stable.
(() => {
  const picker = document.querySelector('#scenario');
  const registry = window.handoverScenarios;
  if (!picker || !registry) return;
  const locale = document.documentElement.lang;
  const bindings = [...document.querySelectorAll('[data-scenario-copy]')];
  const languages = [...document.querySelectorAll('.language a')];
  const items = registry.items.filter(item => item.published &&
    languages.every(link => item.locales[link.hreflang]) &&
    bindings.every(node => item.locales[locale]?.content[node.dataset.scenarioCopy]));
  if (!items.length) return;
  picker.replaceChildren(...items.map(item => new Option(item.locales[locale].label, item.id)));

  function render(fromSelection = false) {
    const url = new URL(location.href);
    const requested = fromSelection ? picker.value : url.searchParams.get('scenario');
    const selected = items.find(item => item.id === requested) ||
      items.find(item => item.id === registry.defaultId) || items[0];
    picker.value = selected.id;
    document.querySelector('main').dataset.scenario = selected.id;
    for (const node of bindings) {
      const copy = selected.locales[locale].content[node.dataset.scenarioCopy];
      // HTML comes exclusively from the checked-in registry, never from the URL.
      node.innerHTML = copy.html;
      if (node.matches('a') && copy.href) node.setAttribute('href', copy.href);
    }
    if (fromSelection || url.searchParams.has('scenario')) {
      url.searchParams.set('scenario', selected.id);
      if (url.href !== location.href) history[fromSelection ? 'pushState' : 'replaceState'](null, '', url);
    }
    for (const link of languages) {
      const destination = new URL(link.href);
      destination.search = url.search;
      destination.searchParams.set('scenario', selected.id);
      destination.hash = url.hash;
      link.href = destination.href;
    }
  }
  picker.addEventListener('change', () => render(true));
  window.addEventListener('popstate', () => render());
  window.addEventListener('hashchange', () => render());
  render();
})();
