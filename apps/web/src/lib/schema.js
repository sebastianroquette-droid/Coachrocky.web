// Zentrale strukturierte Daten (JSON-LD) für Coach Rocky.
//
// Die Startseite gibt den vollständigen @graph aus (Organization,
// LocalBusiness, Person, WebSite). Alle anderen Seiten geben einen
// schlanken WebPage-/Article-/Product-Knoten aus, der über isPartOf /
// about / provider auf den Startseiten-@graph verweist.
//
// BreadcrumbList wird separat durch die <Breadcrumbs>-Komponente
// ausgegeben und hier nicht dupliziert.

const SITE_URL = 'https://www.coachrocky.de';
const LOGO_URL = `${SITE_URL}/icon-512.png`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const COACH_ID = `${SITE_URL}/#coach`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Stammdaten — überall identisch.
const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Alter Teichweg 11-13',
  addressLocality: 'Hamburg',
  postalCode: '22081',
  addressCountry: 'DE',
};

// Social-Links ohne Tracking-Parameter.
const sameAs = [
  'https://www.instagram.com/coach_rocky_since2014/',
  'https://www.linkedin.com/in/sebastian-roquette-517875269',
];

/**
 * Vollständiger @graph — nur auf der Startseite ausgeben.
 */
export const homepageGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Coach Rocky',
      url: SITE_URL,
      logo: LOGO_URL,
      sameAs,
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': BUSINESS_ID,
      name: 'Coach Rocky',
      image: OG_IMAGE,
      url: SITE_URL,
      telephone: '+49 176 80268219',
      email: 'sebastianroquette@gmail.com',
      address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.582654,
        longitude: 10.0487634,
      },
      areaServed: 'Hamburg',
      parentOrganization: { '@id': ORG_ID },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49 176 80268219',
        email: 'sebastianroquette@gmail.com',
        contactType: 'customer service',
        availableLanguage: 'de',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '09:00',
          closes: '20:00',
        },
      },
    },
    {
      '@type': 'Person',
      '@id': COACH_ID,
      name: 'Sebastian Roquette',
      alternateName: 'Coach Rocky',
      jobTitle: 'Personal Trainer',
      worksFor: { '@id': ORG_ID },
      sameAs,
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Trainer A-Lizenz',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Blindow Akademie',
        },
        dateCreated: '2010',
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: 'Coach Rocky',
      inLanguage: 'de-DE',
      publisher: { '@id': ORG_ID },
    },
  ],
});

/**
 * WebPage-Knoten für generische Unterseiten.
 */
export const webPageSchema = ({ url, name, description }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  inLanguage: 'de-DE',
});

/**
 * Article-Knoten für Ratgeber-Seiten.
 * datePublished bewusst weggelassen (nicht angegeben).
 */
export const articleSchema = ({ url, headline, description, image }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${url}#article`,
  headline,
  description,
  image: image || OG_IMAGE,
  dateModified: '2026-10-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  author: { '@id': COACH_ID },
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': WEBSITE_ID },
  inLanguage: 'de-DE',
});

/**
 * Product-Knoten für Programm-Seiten.
 * price = regulärer sichtbarer Preis in Euro (Zahl oder String).
 */
export const productSchema = ({ name, description, image, sku, price, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: image || OG_IMAGE,
  sku,
  brand: { '@type': 'Brand', name: 'Coach Rocky' },
  offers: {
    '@type': 'Offer',
    url,
    priceCurrency: 'EUR',
    price: String(price),
    availability: 'https://schema.org/InStock',
  },
});
