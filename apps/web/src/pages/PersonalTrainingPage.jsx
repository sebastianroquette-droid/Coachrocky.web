import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import StartgespraechButton from '@/components/StartgespraechButton.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

const firstTrainingSteps = [
  { n: 1, title: 'Kennenlernen', text: 'Ziele, Alltag, Erfahrung, Beschwerden.' },
  { n: 2, title: 'Bewegungsanalyse', text: 'Ich schaue mir an, wie du dich bewegst.' },
  { n: 3, title: 'Erste Einheit', text: 'Du trainierst die ersten Übungen mit mir.' },
];

const pakete = [
  { name: 'Probe-Monat', einheiten: '2x pro Woche (8 gesamt)', laufzeit: '4 Wochen', preis: '720 €', proEinheit: '90 € pro Einheit', hinweis: 'Nur für Neukundinnen und Neukunden oder als Gutschein.' },
  { name: 'Monats-Paket', einheiten: '1x pro Woche (4 gesamt)', laufzeit: '4 Wochen', preis: '400 €', proEinheit: '100 € pro Einheit', hinweis: '' },
  { name: 'Intensiv-Paket', einheiten: '2x pro Woche (8 gesamt)', laufzeit: '4 Wochen', preis: '800 €', proEinheit: '100 € pro Einheit', hinweis: '' },
];

const PersonalTrainingPage = () => (
  <Layout
    title="Personal Training in Hamburg-Barmbek | Coach Rocky"
    description="Du trainierst persönlich mit mir. Ich erkläre jede Übung, achte auf deine Technik und passe die Belastung an dich an."
    canonicalPath="/personal-training"
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="t-h1 mb-6 text-foreground">Personal Training in <span className="whitespace-nowrap">Hamburg-Barmbek</span></h1>
            <p className="text-body-lg font-body text-foreground leading-relaxed">
              Du trainierst persönlich mit mir. Ich erkläre jede Übung, achte auf deine Technik und passe die Belastung an dich an.
            </p>
          </div>
          <div>
            <img src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/25ef45137e0e49124eeb28afa87d0696.jpg" alt="Coach Rocky mit Faszienrolle im Studio" className="rounded-sm w-full max-h-[360px] lg:w-[315px] lg:max-h-[420px] lg:ml-auto aspect-[3/4] object-cover" width="315" height="420" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Erstes Training */}
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-12 text-center text-foreground">Erstes Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {firstTrainingSteps.map((step) => (
            <div key={step.n} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-body font-medium text-body mb-4 mx-auto">
                {step.n}
              </div>
              <h3 className="t-h3 mb-2 text-card-foreground">{step.title}</h3>
              <p className="font-body text-body text-card-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-md bg-secondary border border-border px-6 py-4 text-center">
          <p className="text-label text-foreground font-body">90 Minuten, 150 € – Anamnese, Bewegungsanalyse und erste Einheit.</p>
        </div>
      </div>
    </section>

    {/* So läuft eine Einheit */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
        <h2 className="t-h2 mb-4 text-foreground">So läuft eine Einheit</h2>
        <p className="font-body text-body text-foreground leading-relaxed mb-6">
          Jede Einheit dauert 60 Minuten. Ein Training folgt immer derselben Logik, aber nie demselben Ablauf. Was konstant bleibt, ist die Reihenfolge – der Inhalt richtet sich nach dir.
        </p>
        <ol className="space-y-5">
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-body font-medium text-body shrink-0">1</span>
            <p className="font-body text-body text-foreground leading-relaxed pt-1"><strong>Ankommen und Check-in:</strong> Wie fühlt sich dein Körper an, was hat sich seit dem letzten Training verändert? Daraus leiten wir ab, was heute dran ist.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-body font-medium text-body shrink-0">2</span>
            <p className="font-body text-body text-foreground leading-relaxed pt-1"><strong>Aufwärmen und Mobilisation:</strong> Gezieltes Freimachen der Gelenke und Bewegungsmuster, die im Hauptteil gebraucht werden.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-body font-medium text-body shrink-0">3</span>
            <p className="font-body text-body text-foreground leading-relaxed pt-1"><strong>Hauptteil – Kraft:</strong> Die Kernübungen des Plans, mit Technikkorrektur am ersten Satz und dosierter Laststeigerung. Qualität vor Quantität.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-body font-medium text-body shrink-0">4</span>
            <p className="font-body text-body text-foreground leading-relaxed pt-1"><strong>Zusatz- und Ausgleichsarbeit:</strong> Schwachstellen, die im Hauptteil nicht genug bekommen haben – oft Rumpf, Schulterstabilisation oder die Gegenseite einer einseitigen Belastung.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-body font-medium text-body shrink-0">5</span>
            <p className="font-body text-body text-foreground leading-relaxed pt-1"><strong>Auslauf und Ausblick:</strong> Kurzes Cool-down, Feedback zum Training und was wir nächstes Mal weiterentwickeln.</p>
          </li>
        </ol>
        </div>
        <img src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/bcbc98ed6e8fd87d35c544b9f65c5636.jpg" alt="Coach Rocky betreut eine Übung auf der Bank im Studio" className="rounded-sm w-full aspect-[3/4] object-cover" width="600" height="800" loading="lazy" />
      </div>
    </section>

    {/* Meine Methoden */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
        <h2 className="t-h2 mb-4 text-foreground">Meine Methoden</h2>
        <ul className="space-y-4">
          <li className="font-body text-body text-foreground leading-relaxed">
            <span className="font-body font-medium text-body text-foreground">Hypertrophie-Training:</span> Muskelaufbau mit moderatem Volumen und sauberer Technik, nicht auf Maximallast.
          </li>
          <li className="font-body text-body text-foreground leading-relaxed">
            <span className="font-body font-medium text-body text-foreground">Ursachenanalyse statt Symptombehandlung:</span> Wir schauen hin, wo eine Bewegung einsackt, und trainieren genau die Schwachstelle, nicht drumherum.
          </li>
          <li className="font-body text-body text-foreground leading-relaxed">
            <span className="font-body font-medium text-body text-foreground">Progressive Überlastung:</span> Jede Woche ein wenig mehr, dosiert statt sprunghaft. So passt sich der Körper an.
          </li>
          <li className="font-body text-body text-foreground leading-relaxed">
            <span className="font-body font-medium text-body text-foreground">Mobilisation und Stabilisation:</span> Beweglichkeit und Rumpfstabilität als Fundament. Wer stabil ist, bewegt Last sauber.
          </li>
          <li className="font-body text-body text-foreground leading-relaxed">
            <span className="font-body font-medium text-body text-foreground">Individuelle Planung:</span> Kein Standardplan vom Band. Jeder Plan geht von deiner Ausgangslage, deinen Zielen und deiner Beweglichkeit aus.
          </li>
        </ul>
        </div>
        <img src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/a02dbbd89484a76a3390a91958720e45.jpg" alt="Coach Rocky erklärt eine Übung mit Kurzhanteln" className="rounded-sm w-full aspect-[3/4] object-cover" width="600" height="800" loading="lazy" />
      </div>
    </section>

    {/* Pakete */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-4 text-center text-foreground">Pakete</h2>
        <p className="text-center font-body text-body text-foreground mb-8">Alle Preise inkl. gesetzl. MwSt.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: '1px solid #000' }}>
                <th className="px-4 py-3 font-body font-medium text-[14px] text-left" style={{ color: 'rgba(0,0,0,0.6)' }}>Paket</th>
                <th className="px-4 py-3 font-body font-medium text-[14px] text-right" style={{ color: 'rgba(0,0,0,0.6)' }}>Einheiten pro Woche</th>
                <th className="px-4 py-3 font-body font-medium text-[14px] text-right whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.6)' }}>Laufzeit</th>
                <th className="px-4 py-3 font-body font-medium text-[14px] text-right" style={{ color: 'rgba(0,0,0,0.6)' }}>Preis</th>
              </tr>
            </thead>
            <tbody>
              {pakete.map((p) => (
                <tr key={p.name} className="border-b border-border">
                  <td className="px-4 py-3 font-body text-body text-foreground">
                    {p.name}
                    {p.hinweis && <span className="block text-label text-muted-foreground mt-1">{p.hinweis}</span>}
                  </td>
                  <td className="px-4 py-3 font-body text-body text-foreground text-right">{p.einheiten}</td>
                  <td className="px-4 py-3 font-body text-body text-foreground text-right whitespace-nowrap">{p.laufzeit}</td>
                  <td className="px-4 py-3 font-body text-body text-foreground text-right">
                    {p.preis}
                    <span className="block text-label text-muted-foreground mt-1">{p.proEinheit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center font-body text-body text-foreground">
          Jedes Paket endet nach vier Wochen. Es verlängert sich nicht automatisch, ein Abo gibt es nicht.
        </p>

        <div
          className="mt-8 p-6 rounded-lg"
          style={{ backgroundColor: '#F2E6CE', border: '1px solid rgba(0,0,0,0.12)' }}
        >
          <h3 className="t-h3 mb-2 text-foreground">Individueller Trainingsplan</h3>
          <p className="font-body text-body text-foreground leading-relaxed">
            Nach deinem Ersten Training kannst du dir zusätzlich einen persönlichen Trainingsplan erstellen lassen. Die Laufzeit des Plans lege ich individuell für dich fest. Preis: 50 € (inkl. gesetzl. MwSt.).
          </p>
        </div>
      </div>
    </section>

    {/* Ernährung */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-4 text-foreground">Ernährung</h2>
        <div className="rounded-md bg-secondary border border-border px-6 py-8">
          <p className="text-label text-foreground font-body">
            Ernährung findest du später in der Web-App. Mehr dazu auf der <Link to="/app" className="text-foreground underline hover:text-foreground">Seite App</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Gut zu wissen */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-4 text-foreground">Gut zu wissen</h2>
        <p className="font-body text-body text-foreground leading-relaxed">
          Bei Schmerzen, Verletzung, Schwangerschaft oder Medikamenten sprich bitte vorher mit deiner Ärztin oder deinem Arzt. Das Training ersetzt keine Behandlung.
        </p>
      </div>
    </section>

    {/* Termine und Absagen */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-4 text-foreground">Termine und Absagen</h2>
        <p className="font-body text-body text-foreground leading-relaxed mb-8">
          Training nur nach Termin. Wir vereinbaren Termine, die zu deinem Zeitplan passen. Du erreichst mich per WhatsApp Montag bis Freitag von 9 bis 20 Uhr, per E-Mail antworte ich normalerweise innerhalb von 24 Stunden. Bis 24 Stunden vorher kannst du kostenlos absagen oder verschieben. Bei kurzfristigeren Absagen berechne ich 50% der Trainingsgebühr. Bei Nicht-Erscheinen die volle Gebühr. Sag gerne per WhatsApp ab.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <StartgespraechButton />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">Erstes Training buchen</a>
          <Link to="/standort" className="btn-secondary">Standort ansehen</Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default PersonalTrainingPage;
