/**
 * Zentrale Consent-Verwaltung (Single Source of Truth).
 * Liest/schreibt localStorage synchron, steuert Google Consent Mode v2
 * und initialisiert den Meta Pixel erst NACH Zustimmung.
 */

export const GA_MEASUREMENT_ID = 'G-3C4010T59K';
export const META_PIXEL_ID = '860498406653629';
export const GTM_CONTAINER_ID = 'GTM-5NFGRG7K';

const STORAGE_KEY = 'cookie_consent';
export const CONSENT_EVENT = 'cr:consent-changed';

let tagsActivated = false;

const safeGetItem = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* Safari Private Mode etc. */
  }
};

/** 'accepted' | 'declined' | null (noch keine Entscheidung) */
export const getStoredConsent = () => {
  if (typeof window === 'undefined') return null;
  return safeGetItem(STORAGE_KEY);
};

export const hasConsent = () => getStoredConsent() === 'accepted';

const updateGoogleConsent = (granted) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const state = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
};

const notify = (accepted) => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { accepted } }));
};

/** Aktiviert alle Tags nach Zustimmung. Idempotent. Feuert selbst KEINEN PageView. */
const activateTags = () => {
  if (typeof window === 'undefined' || tagsActivated) return;
  tagsActivated = true;

  updateGoogleConsent(true);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'consent_granted' });

  // GTM wird erst hier (nach Zustimmung) geladen.
  // GA4 und Meta Pixel laufen als Tags im GTM, nicht direkt.
  loadGTM();
};

/** Injiziert den Google Tag Manager asynchron nach Zustimmung. */
const loadGTM = () => {
  if (typeof document === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  document.head.appendChild(s);
};

export const acceptConsent = () => {
  safeSetItem(STORAGE_KEY, 'accepted');
  activateTags();
  notify(true);
};

export const declineConsent = () => {
  safeSetItem(STORAGE_KEY, 'declined');
  updateGoogleConsent(false);
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('consent', 'revoke');
  }
  notify(false);
};

/** Beim App-Start VOR dem Render aufrufen. */
export const initConsent = () => {
  if (hasConsent()) {
    activateTags();
  }
};

/** Setzt die Cookie-Entscheidung zurück, damit der Banner erneut erscheint. */
export const resetConsent = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* Safari Private Mode etc. */
  }
};
