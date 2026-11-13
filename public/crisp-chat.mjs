const websiteId = '104e1a86-e960-4edc-a486-5c5471c370bd';

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '/crisp-chat.css';
document.head.append(stylesheet);

const launcher = document.createElement('button');
launcher.type = 'button';
launcher.className = 'ilocap-chat-launcher';
launcher.innerHTML = `
  <span class="ilocap-chat-icon" aria-hidden="true"><span class="ilocap-chat-bubble"></span></span>
  <span class="ilocap-chat-label">Discuter</span>
`;
const label = launcher.querySelector('.ilocap-chat-label');
launcher.setAttribute('aria-label', 'Discuter avec ILOCAP');
document.body.append(launcher);

launcher.addEventListener('click', () => {
  label.textContent = 'Discuter';
  launcher.setAttribute('aria-label', 'Discuter avec ILOCAP');
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
    label.textContent = 'Réessayer le chat';
    launcher.setAttribute('aria-label', 'Réessayer le chat ILOCAP');
    launcher.dataset.chatRetry = '';
  }, { once: true });
  document.head.append(script);
});
