import React from 'react';
import Layout from '@/components/Layout.jsx';

const studien = [
  {
    label: 'Muskelaufbau · Auswertung mehrerer Studien',
    heading: 'Frauen und Männer bauen bei gleichem Training ähnlich Muskeln auf',
    text: 'In einer Auswertung mehrerer Studien (Roberts et al., 2020) gab es beim Muskelwachstum keinen deutlichen Unterschied zwischen Frauen und Männern, die dasselbe Krafttraining gemacht haben. Bei der Zunahme der Oberkörperkraft lagen die Frauen im Schnitt sogar vorn.',
    wichtig: 'Das heißt nicht, dass Frauen absolut genauso stark werden wie Männer.',
    quellen: [{ text: 'Quelle', url: 'https://journals.lww.com/nsca-jscr/fulltext/2020/05000/sex_differences_in_resistance_training__a.30.aspx' }],
  },
  {
    label: 'Zyklus und Training · Studie und Übersichtsarbeit',
    heading: 'Spielt der Zyklus für den Muskelaufbau eine Rolle?',
    text: 'In einer Studie mit 24 gesunden Frauen (D\'Souza et al., 2025) haben alle Trainingsgruppen Muskeln und Kraft aufgebaut, unabhängig davon, in welcher Zyklusphase sie ihr Trainingsvolumen erhöht haben. Eine Übersichtsarbeit (Colenso-Semple et al., 2023) bewertet die Datenlage insgesamt als uneinheitlich.',
    wichtig: 'Das ist kein Beweis, dass es nie einen Unterschied gibt. Einzelne Frauen können ihren Zyklus beim Training anders erleben.',
    quellen: [
      { text: 'Quelle 1', url: 'https://doi.org/10.1249/MSS.0000000000004031' },
      { text: 'Quelle 2', url: 'https://doi.org/10.3389/fspor.2023.1054542' },
    ],
  },
  {
    label: 'Instabile Untergründe · Auswertung mehrerer Studien',
    heading: 'Training auf Wackelflächen: Nutzen und Grenzen',
    text: 'Eine Übersichtsarbeit (Behm et al., 2015) zeigt: Krafttraining auf instabilen Flächen verbessert Kraft, Power und Gleichgewicht im Vergleich zu keinem Training, bei Jugendlichen, jungen und älteren Erwachsenen. Im Vergleich zu Training auf stabilem Untergrund fand sie dagegen nur einen begrenzten Zusatznutzen.',
    wichtig: 'Für Kinder und Menschen mittleren Alters gab es dazu keine Vergleichsstudien.',
    quellen: [{ text: 'Quelle', url: 'https://doi.org/10.1007/s40279-015-0384-x' }],
  },
];

const ratgeber = [
  {
    label: 'Ratgeber',
    heading: 'Krafttraining für Frauen',
    absaetze: [
      'Frauen können mit Krafttraining Muskeln und Kraft aufbauen. In der Auswertung mehrerer Studien weiter oben (Roberts et al., 2020) gab es beim Muskelwachstum keinen deutlichen Unterschied zwischen Frauen und Männern, die dasselbe Training gemacht haben.',
      'Der Zyklus muss dein Training nicht bestimmen. In einer Studie mit 24 gesunden Frauen (D\'Souza et al., 2025) bauten alle Gruppen Muskeln und Kraft auf, egal in welcher Zyklusphase sie ihr Trainingsvolumen erhöht haben. Insgesamt ist die Datenlage uneinheitlich (Colenso-Semple et al., 2023). Wenn du dich in bestimmten Phasen anders fühlst, passen wir die Einheit an.',
    ],
    wichtig: 'Das heißt nicht, dass Frauen absolut genauso stark werden wie Männer. Studien beschreiben Gruppen und sagen nichts über dich persönlich. Im Ersten Training schauen wir deshalb, wo du stehst und was du erreichen willst.',
    quellenText: 'Allgemeine Informationen, keine individuelle Beratung. Quellen: siehe die Studien-Karten weiter oben.',
    quellen: [],
  },
  {
    label: 'Ratgeber',
    heading: 'Training bei Schulterbeschwerden',
    absaetze: [
      'Bei Beschwerden an der Rotatorenmanschette, der Muskel- und Sehnengruppe, die das Schultergelenk führt, empfiehlt eine Leitlinie für Fachleute (Desmeules et al., 2025) ein aktives Übungsprogramm als ersten Schritt. Dazu können Übungen für die Bewegungskontrolle und Krafttraining mit unterschiedlichen Lasten gehören.',
      'Die Studien, auf denen diese Empfehlung beruht, haben überwiegend eine niedrige bis sehr niedrige Aussagesicherheit. Welches Programm und welche Dosierung am besten sind, ist offen.',
      'Ein Überblick über 14 Studien mit 396 Teilnehmenden (Littlewood et al., 2015) fand bei Erwachsenen mit länger bestehenden Beschwerden im Mittel eine deutliche Besserung von Schmerz und Funktion. Sechs der 14 Programme dauerten 12 Wochen. Die Studien hatten meist keine Kontrollgruppe, deshalb zeigt das nicht, dass die Übungen die Ursache der Besserung waren.',
    ],
    wichtig: 'Das gilt für Erwachsene mit Rotatorenmanschetten-Beschwerden, nicht für jeden Schulterschmerz. Wenn du Schmerzen hast, empfehle ich dir vorher eine ärztliche Abklärung. Danach stimme ich das Training darauf ab.',
    quellenText: null,
    quellen: [
      { text: 'Desmeules et al., 2025', url: 'https://doi.org/10.2519/jospt.2025.13182' },
      { text: 'Littlewood et al., 2015', url: 'https://doi.org/10.1097/MRR.0000000000000113' },
    ],
  },
];

const WissenPage = () => (
  <Layout
    title="Wissen | Coach Rocky"
    description="Kurz und verständlich: was Studien zu Training sagen. Allgemeine Informationen, keine individuelle Beratung."
    canonicalPath="/wissen"
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="t-h1 mb-6 text-foreground">Wissen</h1>
        <p className="text-body-lg font-body text-foreground leading-relaxed">
          Kurz und verständlich: was Studien zu Training sagen. Allgemeine Informationen, keine individuelle Beratung.
        </p>
      </div>
    </section>

    {/* Studien kurz erklärt */}
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-8 text-center text-foreground">Studien kurz erklärt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studien.map((s) => (
            <article
              key={s.heading}
              className="bg-white flex flex-col"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.12)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
              }}
            >
              <span className="font-body font-medium text-label mb-3 block" style={{ color: '#3F72C3' }}>
                {s.label}
              </span>
              <h3 className="font-heading font-bold text-h3 mb-3 text-foreground leading-snug">{s.heading}</h3>
              <p className="font-body text-body text-foreground leading-relaxed mb-4">{s.text}</p>
              <p className="font-body font-medium text-body text-foreground leading-relaxed mb-4">
                Wichtig: {s.wichtig}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                {s.quellen.map((q) => (
                  <a
                    key={q.url}
                    href={q.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body hover:underline break-words"
                    style={{ color: '#3F72C3' }}
                  >
                    {q.text}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Ratgeber */}
    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-8 text-center text-foreground">Ratgeber</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratgeber.map((r) => (
            <article
              key={r.heading}
              className="bg-white flex flex-col"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.12)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
              }}
            >
              <span className="font-body font-medium text-label mb-3 block" style={{ color: '#3F72C3' }}>
                {r.label}
              </span>
              <h3 className="font-heading font-bold text-h3 mb-3 text-foreground leading-snug">{r.heading}</h3>
              {r.absaetze.map((a, i) => (
                <p key={i} className="font-body text-body text-foreground leading-relaxed mb-4">{a}</p>
              ))}
              <p className="font-body font-medium text-body text-foreground leading-relaxed mb-4">
                Wichtig: {r.wichtig}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                {r.quellenText && (
                  <p className="font-body text-body text-foreground leading-relaxed">{r.quellenText}</p>
                )}
                {r.quellen.map((q) => (
                  <a
                    key={q.url}
                    href={q.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body hover:underline break-words"
                    style={{ color: '#3F72C3' }}
                  >
                    {q.text}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-label text-muted-foreground font-body">
          Allgemeine Informationen, keine medizinische Beratung. Bei Beschwerden sprich bitte mit deiner Ärztin oder deinem Arzt.
        </p>
      </div>
    </section>
  </Layout>
);

export default WissenPage;
