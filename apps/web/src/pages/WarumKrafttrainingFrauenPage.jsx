import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';
import ArticleLayout from '@/components/ArticleLayout.jsx';

const WarumKrafttrainingFrauenPage = () => (
  <ArticleLayout
    title="Warum Krafttraining für Frauen sinnvoll ist | Coach Rocky"
    description="Warum Krafttraining für Frauen so wichtig ist — Vorteile für Knochendichte, Hormonsystem, Psyche und Selbstständigkeit im Alter."
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-primary-light text-foreground text-label font-medium mb-6 rounded-sm">Dein Körper. Deine Stärke.</span>
            <h1 className="t-display mb-6 text-foreground">Warum Krafttraining für Frauen wichtig ist</h1>
            <p className="text-body-lg font-body text-foreground mb-8 leading-relaxed">
              Es geht nicht nur um Optik. Es geht um Knochendichte, hormonelle Balance, psychische Resilienz und Selbstständigkeit im Alter.
            </p>
            <Link to="/krafttraining-frauen" className="btn-secondary">← Zurück zur Übersicht</Link>
          </div>
          <div>
            <img
              src="/fotos/warum-krafttraining-gruppe.jpg"
              alt="Coach Rocky trainiert eine Gruppe mit Gewichten im Personal Training in Hamburg"
              className="rounded-sm border border-border w-full h-auto object-cover"
              width="800"
              height="600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none font-body text-foreground">
        <h2 className="t-h2 mb-6 text-foreground">Der weibliche Körper und Krafttraining</h2>

        <div className="flex items-start gap-4 bg-secondary border-l-4 border-foreground p-6 rounded-r-lg my-8 not-prose">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-foreground" />
          <div>
            <h3 className="t-h3 mt-0 mb-2 text-foreground">Mythos</h3>
            <p className="m-0 text-body text-foreground leading-relaxed">
              Jahrelang wurde Frauen suggeriert, Krafttraining sei reine Männersache. „Du wirst zu massiv“, „Mach lieber Cardio“, „Nimm die leichten Hanteln für die Straffung“. All diese Mythen halten sich hartnäckig – und sie richten massiven gesundheitlichen Schaden an.
            </p>
          </div>
        </div>

        <p>Die Wahrheit ist: Der weibliche Körper profitiert exponentiell von schwerem, progressivem Krafttraining. Nicht trotz, sondern gerade wegen unserer biologischen und hormonellen Voraussetzungen. Hier ist der detaillierte Einblick, warum das Bewegen von Gewichten die wichtigste Investition in deine Zukunft ist.</p>

        <h3 className="t-h3 mt-12 mb-6 text-foreground">1. Gesundheit &amp; Langlebigkeit</h3>
        <p>Herz-Kreislauf-Erkrankungen sind die Todesursache Nummer eins bei Frauen. Krafttraining reduziert dieses Risiko drastisch. Es senkt den Ruheblutdruck, verbessert die Blutfettwerte und erhöht die Insulinsensitivität. Letzteres ist besonders wichtig, um Typ-2-Diabetes vorzubeugen.</p>

        <h3 className="t-h3 mt-10 mb-6 text-foreground">2. Knochen &amp; Gelenke</h3>
        <p>Ab dem 30. Lebensjahr nimmt die Knochendichte bei Frauen langsam ab. Nach der Menopause beschleunigt sich das durch den sinkenden Östrogenspiegel. Das Risiko für Osteoporose steigt. Knochenbrüche im Alter können die Selbstständigkeit stark einschränken.</p>
        <ul>
          <li><strong>Mechanischer Stress:</strong> Schwere Gewichte üben Zug auf die Sehnen und Druck auf die Knochen aus.</li>
          <li><strong>Die Reaktion:</strong> Der Körper lagert Mineralien ein und verdichtet die Knochenstruktur.</li>
          <li><strong>Das Ergebnis:</strong> Eine gute Grundlage für stabile Knochen im Alter.</li>
        </ul>

        <h3 className="t-h3 mt-10 mb-6 text-foreground">3. Körperzusammensetzung &amp; Metabolismus</h3>
        <p>Viele Frauen verbringen Stunden auf dem Laufband, in der Hoffnung, Fett zu verlieren. Dabei geht auch Muskelmasse verloren. Krafttraining erhält Muskulatur und baut sie auf. Du wirst nicht „massig“, sondern kräftiger und belastbar.</p>

        <h3 className="t-h3 mt-10 mb-6 text-foreground">4. Psyche &amp; Stimmung</h3>
        <p>Die mentale Komponente von Krafttraining wird massiv unterschätzt. Das Überwinden von physischen Widerständen – das Heben eines Gewichts, von dem du dachtest, es sei zu schwer – verändert deine Selbstwahrnehmung radikal. Zudem kann Bewegung die Stimmung heben und Stress abbauen. Bei anhaltender Niedergeschlagenheit oder Angst sprich bitte mit deiner Ärztin oder deinem Arzt.</p>

        <h3 className="t-h3 mt-10 mb-6 text-foreground">5. Haltung &amp; Alltag</h3>
        <p>Vom Tragen der Kinder bis zum stundenlangen Sitzen am Schreibtisch: Der Alltag zieht nach vorn. Die Schultern fallen ein, der obere Rücken rundet sich, der untere Rücken schmerzt. Gezieltes Krafttraining, insbesondere für die posteriore Kette (Rücken, Gesäß, hintere Oberschenkel), zieht dich wieder aufrecht.</p>

        <h3 className="t-h3 mt-10 mb-6 text-foreground">6. Hormone &amp; Zyklus</h3>
        <p>Krafttraining kann sich positiv auf Wohlbefinden und Zyklus auswirken. Manche Frauen berichten von weniger PMS-Beschwerden, sobald sie strukturiert trainieren. Bei starken Zyklusbeschwerden gehört die Abklärung zu deiner Ärztin oder deinem Arzt.</p>

        <h3 className="t-h3 mt-12 mb-6 text-foreground">Fazit</h3>
        <p>Schwere Gewichte zu bewegen ist kein Trend. Es ist eine biologische Notwendigkeit für den weiblichen Körper, um gesund, belastbar und stark zu bleiben. Es ist an der Zeit zu erkennen, dass leichte Gewichte oft nicht reichen, und Training mit Progression für sich zu entdecken.</p>

        <div className="mt-12 not-prose">
          <div className="border border-border p-8 rounded-lg bg-card">
            <p className="font-medium text-label mb-4 text-muted-foreground">Weitere Artikel</p>
            <ul className="space-y-4">
              <li>
                <Link to="/mythos-rosa-hanteln" className="group flex items-center gap-2 font-body font-medium text-foreground hover:opacity-70 transition-colors">
                  <ArrowRight className="h-4 w-4" />Mythos: Rosa Hanteln
                </Link>
              </li>
              <li>
                <Link to="/krafttraining-frauen" className="group flex items-center gap-2 font-body font-medium text-foreground hover:opacity-70 transition-colors">
                  <ArrowRight className="h-4 w-4" />Krafttraining für Frauen — Übersicht
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </ArticleLayout>
);

export default WarumKrafttrainingFrauenPage;
