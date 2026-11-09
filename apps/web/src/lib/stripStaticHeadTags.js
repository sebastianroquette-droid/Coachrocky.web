// Entfernt beim App-Start die statischen Default-Meta-Tags aus index.html
// (meta description, og:*, twitter:* und canonical), damit pro Route nur
// die seitenbezogenen Tags via react-helmet-async im Head verbleiben.
//
// Crawlers ohne JavaScript sehen weiterhin die statischen Tags in der
// ausgelieferten index.html. Sobald React hydratisiert und Helmet die
// seitenbezogenen Tags setzt, gibt es keine Duplikate mehr.
//
// Muss genau einmal VOR dem ersten Render aufgerufen werden, damit Helmet
// anschliessend nur noch seine eigenen Tags vorfindet bzw. ergaenzt.
const STATIC_SELECTORS = [
  'meta[name="description"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'link[rel="canonical"]',
  // Statisches JSON-LD aus index.html (LocalBusiness / ProfessionalService).
  // Wird VOR dem ersten Render entfernt, also bevor die Seitenkomponenten
  // ihre eigenen JSON-LD-Bloecke via Helmet einfuegen. Letztere bleiben unangetastet.
  'script[type="application/ld+json"]',
];

export function stripStaticHeadTags() {
  if (typeof document === 'undefined') return;
  for (const selector of STATIC_SELECTORS) {
    document.head
      .querySelectorAll(selector)
      .forEach((el) => el.remove());
  }
}
