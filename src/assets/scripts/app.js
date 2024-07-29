// © Manuel Matuzović: https://web.dev/website-navigation/

const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const svg = nav.querySelector('svg');

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);



(() => {
  const code = document.querySelectorAll('pre[class*="language"]');

  const buttonClasses = [
    'code-copy-button'
  ];

  code.forEach((pre) => {
    pre.classList.add('relative');

    const button = document.createElement('button');
    button.classList.add(...buttonClasses);
    button.title = 'Copy';
    button.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.textContent);
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 3000);
    });
    pre.appendChild(button);
  });
})();