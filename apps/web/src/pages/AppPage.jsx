import React from 'react';
import Layout from '@/components/Layout.jsx';

const AppPage = () => (
  <Layout
    title="Die Web-App | Coach Rocky"
    description="Läuft direkt im Browser, ohne Download aus einem Store. Kommt bald."
    canonicalPath="/app"
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="t-h1 mb-6 text-foreground">Die Web-App</h1>
        <p className="text-body-lg font-body text-foreground leading-relaxed">
          Läuft direkt im Browser, ohne Download aus einem Store. Kommt bald.
        </p>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h2 className="t-h2 mb-3 text-card-foreground">Movement Snack</h2>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Kurze Bewegungseinheiten für deinen Alltag, zum Beispiel für Pausen am Arbeitsplatz. Übungen aus acht Kategorien, dazu Atemübungen.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h2 className="t-h2 mb-3 text-card-foreground">Ernährung</h2>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Dein individueller Ernährungsplan. Du gibst deine Rahmendaten ein, ich prüfe den Plan persönlich, bevor du ihn bekommst.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-md bg-secondary border border-border px-6 py-4 text-center">
          <p className="text-label text-foreground font-body">
            Die App ist ein eigenes Angebot und nicht Teil der Trainingspakete.
          </p>
        </div>
      </div>
    </section>

    <section className="pb-16 md:pb-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-6 text-foreground">Preise</h2>
        <p className="font-body text-body text-foreground leading-relaxed mb-8">
          Alle Preise inklusive gesetzlicher MwSt. Die App startet bald, buchen kannst du noch nicht.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h3 className="t-h3 mb-3 text-card-foreground">Complete monatlich</h3>
            <p className="font-body text-body text-card-foreground leading-relaxed mb-6">
              Movement Snack und Ernährung zusammen. Ein Ernährungsplan alle 3 Monate ist im Preis enthalten. Monatlich kündbar.
            </p>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Einführungspreis: 19,99 € pro Monat
            </p>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Regelpreis: 26,99 € pro Monat
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h3 className="t-h3 mb-3 text-card-foreground">Complete 3 Monate</h3>
            <p className="font-body text-body text-card-foreground leading-relaxed mb-6">
              Movement Snack und Ernährung zusammen für 3 Monate. Ein Ernährungsplan ist im Preis enthalten. Einmalzahlung, keine automatische Verlängerung.
            </p>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Einführungspreis: 54,99 € einmalig
            </p>
            <p className="font-body text-body text-card-foreground leading-relaxed">
              Regelpreis: 79,99 € einmalig
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm font-body text-muted-foreground leading-relaxed">
          Den Einführungspreis zahlst du, wenn du in den ersten 21 Tagen nach dem Start der App buchst oder mit einem Freundschaftscode.
        </p>
      </div>
    </section>
  </Layout>
);

export default AppPage;
