import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout.jsx';
import { buildLocalBusinessSchema } from '@/lib/localBusinessSchema.js';
import DraftForm from '@/components/DraftForm.jsx';
import TestimonialCarousel from '@/components/TestimonialCarousel.jsx';
import StartgespraechButton from '@/components/StartgespraechButton.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

const trainCards = [
  {
    title: 'Personal Training',
    text: 'Persönliche Termine im Studio in Hamburg-Barmbek. Wir beginnen mit dem Ersten Training.',
    link: '/personal-training',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Shop',
    text: 'Kommt bald.',
    link: '/shop',
    cta: 'Zum Shop',
  },
  {
    title: 'App',
    text: 'Kurze Bewegungseinheiten für deinen Alltag und ein individueller Ernährungsplan, als Web-App direkt im Browser. Kommt bald.',
    link: '/app',
    cta: 'Mehr zur App',
  },
];

const workBlocks = [
  {
    title: 'Klar statt kompliziert',
    text: 'Du bekommst einen Plan mit wenigen, gut erklärten Übungen. Ich zeige dir, was du tust und warum.',
  },
  {
    title: 'Schritt für Schritt',
    text: 'Wir steigern Gewicht und Umfang in kleinen Schritten und richten sie danach aus, wie du dich fühlst.',
  },
  {
    title: 'Muss ich regelmäßig kommen?',
    text: 'Nein. Regelmäßige Termine sind kein Muss. Nach dem Ersten Training kannst du auf Wunsch einen persönlichen Trainingsplan zu deinem Ziel bekommen (50 €) und selbstständig trainieren. Ob du darüber hinaus Begleitung möchtest, entscheidest du.',
  },
];

const firstTrainingSteps = [
  { n: 1, title: 'Kennenlernen', text: 'Ziele, Alltag, Erfahrung, Beschwerden.' },
  { n: 2, title: 'Bewegungsanalyse', text: 'Ich schaue mir an, wie du dich bewegst.' },
  { n: 3, title: 'Erste Einheit', text: 'Du trainierst die ersten Übungen mit mir.' },
];

const faqs = [
  { q: 'Für wen ist Personal Training?', a: 'Du brauchst keine Vorerfahrung. Wir starten bei dem, was du heute kannst.' },
  { q: 'Was passiert im Ersten Training?', a: 'Kennenlernen, Bewegungsanalyse, erste Einheit.' },
  { q: 'Wie läuft die Buchung ab?', a: 'Schreib mir per WhatsApp oder E-Mail. Im kostenlosen Startgespräch besprechen wir deine Ziele und Situation. Dann vereinbaren wir einen Termin für dein Erstes Training.' },
  { q: 'Kann ich erst mal ausprobieren?', a: 'Das Erste Training (90 Minuten, 150 €) ist dein Einstieg. Du lernst mich kennen, ich lerne dich kennen, und wir finden heraus, ob wir zusammenpassen. Danach entscheidest du, wie es weitergeht.' },
  { q: 'Wie flexibel sind die Termine?', a: 'Wir vereinbaren Termine, die zu deinem Zeitplan passen.' },
  { q: 'Wie lange dauert eine Einheit?', a: '60 Minuten.' },
  { q: 'Was kostet das?', a: 'Aktuelle Preise stehen auf der Seite Personal Training.' },
  { q: 'Wie sage ich einen Termin ab?', a: 'Bis 24 Stunden vorher kannst du kostenlos absagen oder verschieben. Bei kurzfristigeren Absagen berechne ich 50% der Trainingsgebühr. Bei Nicht-Erscheinen die volle Gebühr. Sag gerne per WhatsApp ab.' },
];

const HomePage = () => (
  <Layout
    title="Personal Trainer Hamburg-Barmbek – Schulter & Kraft | Coach Rocky"
    description="Persönliches Training in Hamburg-Barmbek mit Schwerpunkt Schulter, Kraft und Beweglichkeit. Bewegungsanalyse und individueller Plan, ohne Dauerbindung."
    canonicalPath="/"
    jsonLd={{ ...buildLocalBusinessSchema(), description: 'Personal Training in Hamburg-Barmbek mit Schwerpunkt Schulter, Kraft und Beweglichkeit.' }}
  >
    {/* 1. Einstieg */}
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="t-display mb-6 text-foreground">
              Personal Training in Hamburg-Barmbek. Schwerpunkt Schulter, Kraft und Beweglichkeit.
            </h1>
            <p className="text-body-lg font-body text-foreground mb-8 leading-relaxed">
              Ich bin Coach Rocky, dein Personal Trainer hier in Hamburg-Barmbek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StartgespraechButton />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Erstes Training buchen
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/f860da999d5b5763c4538026b24bc871.jpg"
              alt="Coach Rocky im Coach-Rocky-Shirt, an eine Betonwand gelehnt"
              className="rounded-sm w-full aspect-[4/3] object-cover object-right"
              width="800"
              height="600"
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>

    {/* 1b. Wofür du zu mir kommst */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-12 text-center text-foreground">Wofür du zu mir kommst</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h3 className="t-h3 mb-3 text-card-foreground">Schulter, Rücken und Knie</h3>
            <p className="font-body text-body text-card-foreground leading-relaxed">Kraft, Stabilität und saubere Bewegung für Schulter, Rücken und Knie, passend zu deinem Alltag.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
            <h3 className="t-h3 mb-3 text-card-foreground">Kraft und Beweglichkeit</h3>
            <p className="font-body text-body text-card-foreground leading-relaxed">Muskelaufbau, Kraft und Beweglichkeit. Saubere Technik, Schritt für Schritt gesteigert.</p>
          </div>
        </div>
      </div>
    </section>

    {/* 2. Wie möchtest du trainieren? */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-12 text-center text-foreground">Wie möchtest du trainieren?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainCards.map((card) => (
            <div key={card.title} className="bg-card border border-border rounded-lg p-8 flex flex-col">
              <h3 className="t-h3 mb-3 text-card-foreground">{card.title}</h3>
              <p className="font-body text-body text-card-foreground leading-relaxed mb-6 flex-grow">{card.text}</p>
              <Link to={card.link} className="inline-flex items-center gap-2 font-body font-medium text-foreground hover:opacity-80 transition-opacity">
                {card.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. So arbeite ich */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-8 text-center text-foreground">So arbeite ich</h2>
        <div className="space-y-4">
          {workBlocks.map((block) => (
            <details key={block.title} className="group rounded-lg border border-border bg-card">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 font-body font-medium text-body-lg text-foreground select-none">
                {block.title}
                <span className="font-body font-medium text-foreground text-body transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="font-body text-body text-card-foreground leading-relaxed">{block.text}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* 4. So läuft dein Erstes Training */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-8 text-center text-foreground">So läuft dein Erstes Training</h2>
        <div className="status-box status-info mb-8 max-w-2xl mx-auto">
          <p className="text-foreground font-body text-body leading-relaxed">
            <strong>Kostenloses Startgespräch, 15 Minuten:</strong> Lerne mich kennen, stell deine Fragen und finde heraus, ob wir zusammenpassen. Schreib mir per WhatsApp.
          </p>
        </div>
        <div className="text-center mb-8">
          <StartgespraechButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        <div className="rounded-md bg-background px-6 py-4 mb-8 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
          <p className="text-label text-muted-foreground font-body">Dauer und Preis: 90 Minuten, 150 €</p>
        </div>
        <p className="text-center font-body text-body text-foreground mb-8">
          Auf Wunsch gibt es nach dem Ersten Training zusätzlich einen persönlichen Trainingsplan (50 €).
        </p>
        <div className="text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Erstes Training buchen
          </a>
        </div>
      </div>
    </section>

    {/* 5. Newsletter */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-sand rounded-lg p-8">
          <h2 className="t-h2 mb-2 text-foreground">Newsletter</h2>
          <p className="font-body text-body text-foreground leading-relaxed mb-6">
            Tipps zu Krafttraining und Ernährung, ab und zu Neuigkeiten von mir. Abmelden jederzeit.
          </p>
          <DraftForm buttonLabel="Eintragen" emailPlaceholder="Deine E-Mail-Adresse" />
          <p className="mt-4">
            <Link to="/newsletter" className="text-label underline text-foreground hover:text-foreground">Mehr zum Newsletter</Link>
          </p>
        </div>
      </div>
    </section>

    {/* 6. Das sagen Kundinnen und Kunden */}
    <section className="section-spacing border-t border-b" style={{ backgroundColor: '#F2E6CE', borderColor: 'rgba(0,0,0,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-12 text-center text-foreground">Das sagen Kundinnen und Kunden</h2>
        <TestimonialCarousel />
      </div>
    </section>

    {/* 7. Über Coach Rocky und Standort */}
    <section className="section-spacing bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="t-h2 mb-4 text-foreground">Standort und Anfahrt</h2>
            <p className="font-body text-body text-foreground leading-relaxed mb-2">
              Anfahrt: Mit S1 oder U3 bis Barmbek, von dort etwa 5 bis 10 Minuten zu Fuß.
            </p>
            <p className="font-body text-body text-foreground leading-relaxed mb-2">
              Alter Teichweg 11-13, 22081 Hamburg
            </p>
            <p className="font-body text-body text-foreground leading-relaxed mb-6">
              Parkplätze direkt vor dem Studio. Training nur nach Termin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.google.com/maps/search/?api=1&query=Alter+Teichweg+11-13%2C+22081+Hamburg" target="_blank" rel="noopener noreferrer" className="btn-secondary md:whitespace-nowrap">In Google Maps öffnen</a>
              <a href="https://www.hvv.de/de/fahrplaene/abruf-fahrplaninfos" target="_blank" rel="noopener noreferrer" className="btn-secondary md:whitespace-nowrap">Verbindung mit dem HVV planen</a>
            </div>
          </div>
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/4e0df7e2ad3624101097cdc7346f4706.jpg"
              alt="Coach Rocky, Personal Trainer in Hamburg"
              className="rounded-sm border border-border w-full h-auto"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* 8. Fragen */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-8 text-center text-foreground">Fragen</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-lg border border-border bg-card">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 font-body font-medium text-body-lg text-foreground select-none">
                {faq.q}
                <span className="font-body font-medium text-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="font-body text-body text-card-foreground leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="text-center">
          <h3 className="t-h3 mb-4 text-foreground">Bereit für dein Erstes Training?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StartgespraechButton />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Erstes Training buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
