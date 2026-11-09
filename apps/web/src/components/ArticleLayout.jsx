import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import Layout from '@/components/Layout.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

/**
 * Gemeinsames Layout für Wissens-Artikel.
 * Oben: Hinweis "Artikel in Überarbeitung".
 * Unten: Autorenbox, Prüfdatum, ärztlicher Hinweis, CTA.
 */
const ArticleLayout = ({ title, description, children }) => (
  <Layout title={title} description={description}>
    <div className="bg-primary-light border-b border-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
        <Info className="h-4 w-4 flex-shrink-0 text-primary" />
        <span className="text-label font-body font-medium text-foreground">Artikel in Überarbeitung</span>
      </div>
    </div>

    {children}

    {/* Autorenbox + Hinweise */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="font-heading font-bold text-body text-card-foreground mb-1">Rocky</p>
          <p className="text-label text-muted-foreground font-body mb-4">Personal Trainer seit 2014</p>
          <p className="text-label text-muted-foreground font-body mb-6">Zuletzt geprüft: folgt</p>
          <div className="status-box status-info mb-6">
            <Info className="h-5 w-5 flex-shrink-0 text-primary" />
            <span className="text-foreground">Dieser Artikel ersetzt keine ärztliche Abklärung.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Erstes Training buchen</a>
            <Link to="/wissen" className="btn-secondary">Zurück zum Wissen</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ArticleLayout;
