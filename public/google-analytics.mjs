import { campaign, validPage } from './conversion-core.mjs';

const measurementId = 'G-KEF5H5P9Y9';
const disableKey = `ga-disable-${measurementId}`;
let allowed = false;
let initialized = false;

function pageDetails() {
  const path = validPage(location.pathname);
  const page = new URL(path === '/index.html' ? '/' : path, location.origin);
  for (const [key, value] of Object.entries(campaign(location.search))) {
    page.searchParams.set(key, value);
  }

  let referrer = '';
  if (document.referrer) {
    try {
      const source = new URL(document.referrer);
      if (source.protocol === 'https:' || source.protocol === 'http:') {
        referrer = source.origin;
      }
    } catch {
      // Leave malformed referrers out of Analytics.
    }
  }
  return { page_location: page.href, page_referrer: referrer };
}

export function setAnalyticsConsent(granted) {
  if (allowed === granted) return;
  allowed = granted;
  window[disableKey] = !granted;

  if (initialized) {
    window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    ...pageDetails(),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 180 * 86400,
    cookie_update: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);
  initialized = true;
}

export function trackAnalyticsLead() {
  if (allowed) window.gtag('event', 'generate_lead', { send_to: measurementId });
}
