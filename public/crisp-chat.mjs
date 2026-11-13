const websiteId = '104e1a86-e960-4edc-a486-5c5471c370bd';
const openLabel = 'Ouvrir le chat ILOCAP';

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '/crisp-chat.css';
document.head.append(stylesheet);

const launcher = document.createElement('button');
launcher.type = 'button';
launcher.className = 'ilocap-chat-launcher';
const icon = document.createElement('span');
icon.className = 'ilocap-chat-icon';
icon.setAttribute('aria-hidden', 'true');
launcher.append(icon);

function labelLauncher(label) {
  launcher.setAttribute('aria-label', label);
  launcher.title = label;
}

labelLauncher(openLabel);

const menuToggle = document.querySelector('.header .nav-wrap > .menu-toggle');
const compactLayout = window.matchMedia('(max-width: 800px), (max-width: 1024px) and (pointer: coarse)');

function placeLauncher() {
  const restoreFocus = document.activeElement === launcher;
  if (compactLayout.matches && menuToggle) {
    menuToggle.before(launcher);
  } else {
    document.body.append(launcher);
  }
  if (restoreFocus) launcher.focus({ preventScroll: true });
}

placeLauncher();
compactLayout.addEventListener('change', placeLauncher);

launcher.addEventListener('click', () => {
  labelLauncher(openLabel);
  delete launcher.dataset.chatRetry;

  if (window.CRISP_WEBSITE_ID) {
    window.$crisp.push(['do', 'chat:show']);
    window.$crisp.push(['do', 'chat:open']);
    return;
  }

  launcher.disabled = true;
  window.CRISP_WEBSITE_ID = websiteId;
  window.CRISP_RUNTIME_CONFIG = { locale: 'fr' };
  window.$crisp = [
    ['on', 'chat:opened', () => { launcher.hidden = true; }],
    ['on', 'chat:closed', () => {
      window.$crisp.push(['do', 'chat:hide']);
      launcher.hidden = false;
      launcher.focus({ preventScroll: true });
    }],
    ['do', 'chat:open'],
  ];

  const script = document.createElement('script');
  script.src = 'https://client.crisp.chat/l.js';
  script.async = true;
  script.addEventListener('load', () => { launcher.disabled = false; }, { once: true });
  script.addEventListener('error', () => {
    script.remove();
    delete window.CRISP_WEBSITE_ID;
    delete window.$crisp;
    launcher.disabled = false;
    labelLauncher('Réessayer d’ouvrir le chat ILOCAP');
    launcher.dataset.chatRetry = '';
  }, { once: true });
  document.head.append(script);
});
