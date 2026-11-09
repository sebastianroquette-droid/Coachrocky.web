import { trackEvent as trackFbEvent } from '@/lib/facebookPixel.js';
import { trackEvent as trackGaEvent } from '@/lib/googleAnalytics.js';

/**
 * Pusht das dataLayer-Event 'lead_conversion' für Google Ads.
 * Im GTM ein Google-Ads-Conversion-Tag mit Trigger auf 'lead_conversion' anlegen.
 */
const pushLeadConversion = (contactType, location, extra = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_conversion',
    conversion_name: 'contact_click',
    contact_type: contactType,
    contact_location: location,
    ...extra,
  });
};

/**
 * Tracking für WhatsApp-/Kontakt-CTAs.
 * Sendet GLEICHZEITIG an Meta Pixel, GA4 und das dataLayer
 * (lead_conversion für Google Ads), mit Fehlertoleranz.
 *
 * @param {string} contentName - beschreibender Name des CTAs, z.B. "Home Seite - Hero CTA"
 * @param {object} extraParams - zusätzliche Parameter (optional)
 */
export const trackContactClick = (contentName, extraParams = {}) => {
  try {
    trackFbEvent('Contact', {
      content_name: contentName,
      content_category: 'Contact',
      ...extraParams,
    });
  } catch (err) {
    console.warn('Meta tracking failed:', err);
  }

  try {
    trackGaEvent('contact_click', {
      content_name: contentName,
      ...extraParams,
    });
  } catch (err) {
    console.warn('GA4 tracking failed:', err);
  }

  pushLeadConversion('whatsapp', contentName, extraParams);
};

/**
 * Tracking für Telefon-Links.
 *
 * @param {string} location - z.B. "Home Hero", "Preise Hero", "Footer"
 */
export const trackPhoneClick = (location) => {
  try {
    trackFbEvent('Contact', {
      content_name: `Telefon - ${location}`,
      content_category: 'Contact',
    });
  } catch (err) {
    console.warn('Meta tracking failed:', err);
  }

  try {
    trackGaEvent('phone_click', {
      link_location: location,
    });
  } catch (err) {
    console.warn('GA4 tracking failed:', err);
  }

  pushLeadConversion('phone', location);
};

/**
 * Tracking für E-Mail-Links.
 *
 * @param {string} location - z.B. "Home Hero", "Footer", "Booking Modal"
 */
export const trackEmailClick = (location) => {
  try {
    trackFbEvent('Contact', {
      content_name: `E-Mail - ${location}`,
      content_category: 'Contact',
    });
  } catch (err) {
    console.warn('Meta tracking failed:', err);
  }

  try {
    trackGaEvent('email_click', {
      link_location: location,
    });
  } catch (err) {
    console.warn('GA4 tracking failed:', err);
  }

  pushLeadConversion('email', location);
};
