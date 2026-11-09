import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const SITE_NAME = 'Coach Rocky';

/**
 * Zentrales Seitenlayout für den Entwurf.
 * Setzt pro Seite genau einen Titel, eine Description, noindex,nofollow,
 * einen Canonical-Link (aus window.location.origin + canonicalPath dynamisch),
 * Open-Graph-Angaben und optional einen JSON-LD-Block.
 *
 * canonicalPath wird weggelassen (z. B. 404-Seite), wenn die Seite keinen
 * Canonical erhalten soll. So entsteht nie ein zweites Canonical-Element.
 */
const Layout = ({ title, description, canonicalPath, jsonLd, children }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = canonicalPath ? `${origin}${canonicalPath}` : null;
  // og:title ohne den Zusatz " | Coach Rocky"
  const ogTitle = title ? title.replace(/\s*\|\s*Coach Rocky\s*$/, '').trim() : title;
  const ogImageUrl = origin ? `${origin}/og-image.png` : '';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex,nofollow" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={description} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="de_DE" />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta name="twitter:card" content="summary" />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
