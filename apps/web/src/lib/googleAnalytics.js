import { hasConsent, GA_MEASUREMENT_ID as CONSENT_GA_ID } from '@/lib/consent.js';

export const GA_MEASUREMENT_ID = CONSENT_GA_ID;

/**
 * Google Ads Conversion-Ziel. Solange null, werden keine direkten
 * Ads-Conversions gesendet. Nach Anlegen einer Conversion-Aktion in
 * Google Ads hier 'AW-XXXXXXXXX/LABEL' eintragen ODER im GTM ein
 * Ads-Tag mit Trigger auf das Event 'lead_conversion' konfigurieren.
 */
const GOOGLE_ADS_SEND_TO = null;

const canTrack = () =>
  typeof window !== 'undefined' &&
  typeof window.gtag === 'function' &&
  hasConsent();

export const trackPageView = (pagePath, pageTitle) => {
  try {
    if (!canTrack()) return;
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (!canTrack()) return;
    window.gtag('event', eventName, eventParams);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export const trackConversion = (conversionName, params = {}) => {
  try {
    if (!canTrack()) return;

    window.gtag('event', 'generate_lead', {
      lead_source: conversionName,
      ...params,
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_conversion',
      conversion_name: conversionName,
      ...params,
    });

    if (GOOGLE_ADS_SEND_TO) {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_SEND_TO,
        ...params,
      });
    }
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
};

export const trackUserEngagement = (engagementType, params = {}) => {
  try {
    if (!canTrack()) return;
    window.gtag('event', engagementType, {
      ...params,
    });
  } catch (error) {
    console.error('Error tracking user engagement:', error);
  }
};
