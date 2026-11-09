import React from 'react';
import Layout from '@/components/Layout.jsx';
import { buildLocalBusinessSchema } from '@/lib/localBusinessSchema.js';
import StartgespraechButton from '@/components/StartgespraechButton.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

const StandortPage = () => (
  <Layout
    title="Standort und Anfahrt | Coach Rocky"
    description="Studio in Hamburg-Barmbek. Mit S1 oder U3 bis Barmbek, von dort etwa 5 bis 10 Minuten zu Fuß. Parkplätze direkt vor dem Studio."
    canonicalPath="/standort"
    jsonLd={buildLocalBusinessSchema()}
  >
    <section className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="t-h1 mb-6 text-foreground">Standort und Anfahrt</h1>
            <p className="font-body text-body-lg text-foreground leading-relaxed mb-2">
              Alter Teichweg 11-13, 22081 Hamburg
            </p>
            <p className="font-body text-body-lg text-foreground leading-relaxed mb-2">
              Anfahrt: Mit S1 oder U3 bis Barmbek, von dort etwa 5 bis 10 Minuten zu Fuß.
            </p>
            <p className="font-body text-body-lg text-foreground leading-relaxed mb-8">
              Parkplätze direkt vor dem Studio. Training nur nach Termin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="https://www.google.com/maps/search/?api=1&query=Alter+Teichweg+11-13%2C+22081+Hamburg" target="_blank" rel="noopener noreferrer" className="btn-secondary md:whitespace-nowrap">In Google Maps öffnen</a>
              <a href="https://www.hvv.de/de/fahrplaene/abruf-fahrplaninfos" target="_blank" rel="noopener noreferrer" className="btn-secondary md:whitespace-nowrap">Verbindung mit dem HVV planen</a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <StartgespraechButton />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Erstes Training buchen
              </a>
            </div>
          </div>
          <div>
            <img
              src="/fotos/standort-studio.jpg"
              alt="Personal Training im Studio in Hamburg-Barmbek"
              className="rounded-sm border border-border w-full h-auto"
              width="800"
              height="600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default StandortPage;
