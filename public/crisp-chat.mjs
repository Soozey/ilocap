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
  launcher.title = `${label} · Glisser pour déplacer`;
}

labelLauncher(openLabel);
launcher.setAttribute('aria-description', 'Déplacez l’icône avec les flèches. Échap rétablit sa position initiale.');

const header = document.querySelector('.header');
const menuToggle = header?.querySelector('.nav-wrap > .menu-toggle');
const compactLayout = window.matchMedia('(max-width: 800px), (max-width: 1024px) and (pointer: coarse)');
const viewport = window.visualViewport;
const margin = 10;
let position;
let drag;
let ignorePointerClick = false;

function resetPosition() {
  position = undefined;
  delete launcher.dataset.chatPositioned;
  launcher.style.removeProperty('--chat-left');
  launcher.style.removeProperty('--chat-top');
}

function moveLauncher(left, top, settling = false) {
  const viewportLeft = viewport?.offsetLeft ?? 0;
  const viewportTop = viewport?.offsetTop ?? 0;
  const viewportRight = viewportLeft + (viewport?.width ?? document.documentElement.clientWidth);
  const viewportBottom = viewportTop + (viewport?.height ?? document.documentElement.clientHeight);
  const width = launcher.offsetWidth;
  const height = launcher.offsetHeight;
  const minLeft = viewportLeft + margin;
  const maxLeft = Math.max(minLeft, viewportRight - width - margin);
  const x = Math.min(maxLeft, Math.max(minLeft, left));
  let minTop = viewportTop + margin;
  let maxTop = viewportBottom - height - margin;

  if (settling) {
    minTop = Math.max(minTop, (header?.getBoundingClientRect().bottom ?? 0) + margin);
    for (const bar of document.querySelectorAll('.reader-controls, .mobile-service-cta:not([hidden]), .measure-choice:not([hidden])')) {
      const rect = bar.getBoundingClientRect();
      if (rect.height && rect.top >= minTop && x < rect.right && x + width > rect.left) {
        maxTop = Math.min(maxTop, rect.top - height - margin);
      }
    }
    if (maxTop < minTop) {
      resetPosition();
      return;
    }
  }

  const y = Math.max(minTop, Math.min(maxTop, top));
  position = { x, y };
  launcher.style.setProperty('--chat-left', `${x}px`);
  launcher.style.setProperty('--chat-top', `${y}px`);
  launcher.dataset.chatPositioned = '';
}

function keepPositionInView() {
  if (position && !drag && !launcher.hidden) moveLauncher(position.x, position.y, true);
}

function placeLauncher() {
  if (drag) return;
  const inHeader = compactLayout.matches && menuToggle;
  const parent = inHeader ? menuToggle.parentElement : document.body;
  if (launcher.parentElement !== parent) {
    const restoreFocus = document.activeElement === launcher;
    if (inHeader) menuToggle.before(launcher);
    else parent.append(launcher);
    if (restoreFocus) launcher.focus({ preventScroll: true });
  }
  keepPositionInView();
}

placeLauncher();
compactLayout.addEventListener('change', placeLauncher);
window.addEventListener('resize', keepPositionInView);
viewport?.addEventListener('resize', keepPositionInView);
viewport?.addEventListener('scroll', keepPositionInView);

launcher.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0 || launcher.disabled || drag) return;
  const rect = launcher.getBoundingClientRect();
  ignorePointerClick = false;
  drag = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    left: rect.left,
    top: rect.top,
    moved: false,
  };
  launcher.setPointerCapture(event.pointerId);
});

launcher.addEventListener('pointermove', event => {
  if (event.pointerId !== drag?.id) return;
  const dx = event.clientX - drag.x;
  const dy = event.clientY - drag.y;
  if (!drag.moved && Math.hypot(dx, dy) < 7) return;
  drag.moved = true;
  launcher.dataset.chatDragging = '';
  moveLauncher(drag.left + dx, drag.top + dy);
});

function finishDrag(event) {
  if (event.pointerId !== drag?.id) return;
  if (event.type === 'pointerup' && drag.moved && compactLayout.matches && header &&
      event.clientY < header.getBoundingClientRect().bottom) {
    resetPosition();
  }
  ignorePointerClick = drag.moved;
  drag = undefined;
  delete launcher.dataset.chatDragging;
  placeLauncher();

  // Touch browsers may omit the compatibility click after a drag.
  if (event.type === 'pointerup' && event.pointerType === 'touch' && !ignorePointerClick) {
    ignorePointerClick = true;
    openChat();
  }
}

launcher.addEventListener('pointerup', finishDrag);
launcher.addEventListener('pointercancel', finishDrag);
launcher.addEventListener('lostpointercapture', finishDrag);

const arrowDirections = {
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
};
launcher.addEventListener('keydown', event => {
  if (drag || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'Escape' && position) {
    event.preventDefault();
    resetPosition();
    return;
  }
  if (!Object.hasOwn(arrowDirections, event.key)) return;
  event.preventDefault();
  const [dx, dy] = arrowDirections[event.key];
  const { left, top } = launcher.getBoundingClientRect();
  moveLauncher(left + dx * 20, top + dy * 20, true);
});

launcher.addEventListener('click', event => {
  if (ignorePointerClick && (event.detail > 0 || event.pointerType)) {
    event.preventDefault();
    ignorePointerClick = false;
    return;
  }
  openChat();
});

function openChat() {
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
      keepPositionInView();
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
}
