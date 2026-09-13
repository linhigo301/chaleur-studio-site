// Navigation remains visible when JavaScript is unavailable.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
if (menu && navigation) {
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.dataset.open = 'false';
  };
  closeMenu();
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    navigation.dataset.open = String(!expanded);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
}
