import { hasConsent } from '@/lib/consent.js';

/**
 * Meta Pixel: PageView wird vom GTM Meta-Pixel-Base-Code-Tag gefeuert.
 * Die Site selbst feuert keinen PageView, um Doppelzählung zu vermeiden.
 */
export const trackPageView = () => {
  /* no-op: GTM Base-Code-Tag übernimmt den PageView */
};

const getCookie = (name) => {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : undefined;
};

/**
 * Feuert ein Meta-Event über zwei Wege mit gemeinsamer event_id (Dedup):
 *  1. Browser-Pixel via GTM: Event wird ins dataLayer gepusht. Im GTM ein
 *     Meta-Pixel-Tag mit Trigger 'meta_event' anlegen, das
 *     fbq('track', {{meta_event_name}}, {{meta_event_data}},
 *        {eventID: {{meta_event_id}}}) feuert.
 *  2. Serverseitige Conversions API (CAPI) an /hcgi/api/meta-capi.
 *
 * Nur nach Consent. fbevents.js wird NICHT direkt geladen — der Meta
 * Pixel läuft als GTM-Tag.
 */
export const trackEvent = (eventName, eventData = {}, userInfo = {}) => {
  if (typeof window === 'undefined') return;
  if (!hasConsent()) return;

  const eventId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()) + Math.random().toString(16).slice(2);

  // Browser-Pixel via GTM (dataLayer)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'meta_event',
    meta_event_name: eventName,
    meta_event_data: eventData,
    meta_event_id: eventId,
  });

  // Serverseitige CAPI (Dedup über event_id)
  try {
    fetch('/hcgi/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        custom_data: eventData,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
        email: userInfo.email || undefined,
        phone: userInfo.phone || undefined,
      }),
    }).catch((err) => {
      console.warn('Meta CAPI request failed:', err);
    });
  } catch (err) {
    console.warn('Meta CAPI request failed:', err);
  }
};
