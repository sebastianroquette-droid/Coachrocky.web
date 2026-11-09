import { SOCIAL_INSTAGRAM_URL, SOCIAL_LINKEDIN_URL } from './constants.js';

/**
 * Baut den JSON-LD-Block vom Typ LocalBusiness für die Startseite und /standort.
 *
 * WICHTIG: Keine aggregateRating, keine reviews, keine openingHours,
 * keine geo-Koordinaten, kein priceRange, kein image, kein Gründungsdatum.
 * Die url wird dynamisch aus window.location.origin gebildet.
 */
export function buildLocalBusinessSchema() {
  const url = typeof window !== 'undefined' ? window.location.origin : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Coach Rocky',
    description: 'Personal Training in Hamburg-Barmbek. Krafttraining mit Technik-Fokus.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alter Teichweg 11-13',
      postalCode: '22081',
      addressLocality: 'Hamburg',
      addressCountry: 'DE',
    },
    telephone: '+49 176 80268219',
    email: 'sebastianroquette@gmail.com',
    url,
    knowsAbout: ['Krafttraining', 'Schultertraining', 'Rückentraining', 'Knietraining', 'Beweglichkeitstraining'],
    sameAs: [SOCIAL_INSTAGRAM_URL, SOCIAL_LINKEDIN_URL],
  };
}
