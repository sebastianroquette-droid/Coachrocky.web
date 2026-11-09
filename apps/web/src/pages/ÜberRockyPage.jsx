import React from 'react';
import Layout from '@/components/Layout.jsx';
import StartgespraechButton from '@/components/StartgespraechButton.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

const ÜberRockyPage = () => (
  <Layout
    title="Über Coach Rocky | Coach Rocky"
    description="Hallo, ich bin Coach Rocky. Seit 2012 arbeite ich als Trainer, seit 2014 als Personal Trainer in Hamburg."
    canonicalPath="/uber-rocky"
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="t-h1 mb-6 text-foreground">Über Coach Rocky</h1>
            <p className="text-body-lg font-body text-foreground leading-relaxed mb-4">
              Hallo, ich bin Coach Rocky. Seit 2012 arbeite ich als Trainer, seit 2014 als Personal Trainer in Hamburg.
            </p>
            <p className="text-body-lg font-body text-foreground leading-relaxed mb-8">
              Meine Trainer-A-Lizenz (Blindow Akademie) habe ich seit 2010. Zusätzlich war ich als Prüfer für das Deutsche Sportabzeichen tätig.
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
              src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/e989f0adcaaf805a236422f9dd8d3ba8.jpg"
              alt="Porträt von Coach Rocky"
              className="rounded-sm w-full aspect-[4/3] object-cover object-right"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
        <h2 className="t-h2 mb-8 text-foreground">Wie ich arbeite</h2>

        <p className="font-body text-body text-foreground leading-relaxed mb-4">
          Kraft ist die Basis. Wer stärker wird, stabilisiert seine Gelenke besser und bewegt sich ökonomischer. Deshalb steht bei mir nicht die Maschine im Mittelpunkt, sondern der Körper, der vor ihr steht.
        </p>
        <p className="font-body text-body text-foreground leading-relaxed mb-8">
          Ich arbeite ursachenorientiert. Statt ein Symptom zu umgehen, suchen wir nach dem, was dahinterstecken kann: eine schwache Muskelpartie, eine Dysbalance, eine ungünstige Bewegung. Genau dort setzen wir an. Das bedeutet mehr Aufwand als Schonung, dafür baust du Kraft und Belastbarkeit auf.
        </p>

        <h3 className="t-h3 mb-4 text-foreground">Was anders ist</h3>
        <p className="font-body text-body text-foreground leading-relaxed">
          Der Unterschied zu einem Standard-Studio-Plan ist nicht die Übungsauswahl, sondern wer den Plan macht. Ein Standardplan ist für einen Durchschnittskörper geschrieben, den es nicht gibt. Ich sehe mir deinen Körper einzeln an und passe an, was nicht passt, Woche für Woche. Dazu gehört Ehrlichkeit: Ich sage dir, was ich für sinnvoll halte, auch wenn es nicht der einfachste Weg ist.
        </p>
        </div>
        <img src="https://horizons-cdn.hostinger.com/ad386736-af24-4dd7-90cb-e0d579c78642/f61f7f40258264d41ddb07a5ceb0cdf5.jpg" alt="Coach Rocky sitzt lächelnd auf einer Bank im Studio" className="rounded-sm w-full max-h-[360px] md:w-[390px] md:max-h-[520px] md:mx-auto aspect-[3/4] object-cover" width="600" height="800" loading="lazy" />
      </div>
    </section>

    <section className="section-spacing bg-secondary border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 mb-4 text-foreground">Beschwerden</h2>
        <p className="font-body text-body text-foreground leading-relaxed">
          Wenn du Schmerzen hast, empfehle ich dir vorher eine ärztliche Abklärung. Danach stimme ich das Training darauf ab.
        </p>
      </div>
    </section>
  </Layout>
);

export default ÜberRockyPage;
