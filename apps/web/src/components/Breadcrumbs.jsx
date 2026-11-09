import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEGMENT_LABELS = {
  'uber-rocky': 'Über Coach Rocky',
  'methodik': 'Methodik',
  'personal-training': 'Personal Training',
  'schulterprobleme': 'Schulterbeschwerden',
  'programme': 'Programme',
  'krafttraining-frauen': 'Krafttraining für Frauen',
  'warum-krafttraining-fuer-frauen': 'Warum Krafttraining wichtig ist',
  'mythos-rosa-hanteln': 'Mythos: Rosa Hanteln',
  'preise': 'Preise',
  'testimonials': 'Kundenfeedback',
  'boxenprogramm': 'Coach Rocky Boxenprogramm',
  'schulterprogramm': 'Coach Rocky Schulterprogramm',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz',
  'agb': 'AGB',
  'widerrufsbelehrung': 'Widerrufsbelehrung',
  'personal-trainer-wandsbek': 'Personal Trainer Wandsbek',
  'personal-trainer-winterhude': 'Personal Trainer Winterhude',
  'personal-trainer-barmbek': 'Personal Trainer Barmbek',
  'personal-trainer-eilbek': 'Personal Trainer Eilbek',
  'personal-trainer-dulsberg': 'Personal Trainer Dulsberg',
  'personal-trainer-uhlenhorst': 'Personal Trainer Uhlenhorst',
  'personal-trainer-wellingsbuettel': 'Personal Trainer Wellingsbüttel',
};

const Breadcrumbs = ({ currentLabel, items: customItems }) => {
  const location = useLocation();

  let items;
  if (customItems && customItems.length) {
    items = customItems.map((it, i) => ({ ...it, isCurrent: i === customItems.length - 1 }));
  } else {
    const path = location.pathname.replace(/\/+$/, '');
    const segments = path.split('/').filter(Boolean);
    items = [{ label: 'Startseite', path: '/' }];
    let acc = '';
    segments.forEach((seg, i) => {
      acc += '/' + seg;
      const isLast = i === segments.length - 1;
      const label = isLast && currentLabel ? currentLabel : (SEGMENT_LABELS[seg] || seg);
      items.push({ label, path: acc, isCurrent: isLast });
    });
  }

  if (items.length <= 1) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `https://www.coachrocky.de${item.path === '/' ? '' : item.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Brotkrumen" className="bg-background border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-label font-body text-muted-foreground">
            {items.map((item, i) => (
              <li key={item.path} className="flex items-center gap-1">
                {i > 0 && <span className="mx-1" aria-hidden="true">›</span>}
                {item.isCurrent ? (
                  <span className="text-foreground" aria-current="page">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:text-foreground transition-colors">{item.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
