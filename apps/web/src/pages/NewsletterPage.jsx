import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import DraftForm from '@/components/DraftForm.jsx';

const NewsletterPage = () => (
  <Layout
    title="Der Newsletter | Coach Rocky"
    description="Tipps zu Krafttraining und Ernährung, ab und zu Neuigkeiten von mir. Abmelden jederzeit."
    canonicalPath="/newsletter"
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="t-h1 mb-6 text-foreground">Der Newsletter</h1>
        <p className="text-body-lg font-body text-foreground leading-relaxed">
          Tipps zu Krafttraining und Ernährung, ab und zu Neuigkeiten von mir. Abmelden jederzeit.
        </p>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-sand rounded-lg p-8">
          <h2 className="t-h2 mb-4 text-foreground">Newsletter</h2>
          <DraftForm buttonLabel="Eintragen" emailPlaceholder="Deine E-Mail-Adresse" />
        </div>
        <p className="mt-6 text-center">
          <Link to="/" className="text-label text-primary hover:underline">Zurück zur Startseite</Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default NewsletterPage;
