import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Kundenstimmen auf der Startseite. Vollständige Originaltexte, ungekürzt,
// jede Person genau einmal. Nur Vorname. highlight = exakt hervorgehobener Textteil.
const testimonials = [
  {
    name: 'Frederike',
    highlight: 'Das Training ist intensiv, aber immer zu 100% sicher und kontrolliert.',
    quote:
      'Zu Rocky ins PT bin ich eher zufällig gekommen, nachdem ich jahrelang erfolglos versucht habe, meine Schulterprobleme mit Physiotherapie und leichten Übungen in den Griff zu bekommen. Schon nach der ersten Analyse wusste Rocky genau, wo das Problem lag. Das Training ist intensiv, aber immer zu 100% sicher und kontrolliert. Nach 4 Monaten bin ich im Alltag komplett schmerzfrei und habe ein völlig neues Körpergefühl entwickelt.',
  },
  {
    name: 'Mathis',
    highlight: 'Mit extrem viel Geduld, Fachwissen und einem perfekt abgestimmten Plan',
    quote:
      'Im Jahr 2019 wurde ich nach einem sehr komplizierten Bruch im Schultergelenk operiert. Die Ärzte sagten mir, ich würde den Arm nie wieder über Kopfhöhe heben können. Rocky hat das nicht akzeptiert. Mit extrem viel Geduld, Fachwissen und einem perfekt abgestimmten Plan haben wir uns Millimeter für Millimeter vorgearbeitet. Heute stemme ich wieder Gewichte über Kopf. Eine unglaubliche Leistung als Coach!',
  },
  {
    name: 'Christian',
    highlight: 'Kein Blabla, nur Ergebnisse.',
    quote:
      'Rocky hat mir enorm geholfen, nach einer Sportverletzung die verlorene Muskelkraft und Stabilität wieder aufzubauen. Dank Rockys zielgerichteten Trainings habe ich meine Form nicht nur zurück: Ich hab mich derbe gesteigert. Wer einen Trainer sucht, der wirklich Ahnung von Biomechanik und Trainingssteuerung hat, ist hier genau richtig. Kein Blabla, nur Ergebnisse.',
  },
  {
    name: 'Jenny',
    highlight: 'Man fühlt sich immer sicher, auch wenn die Gewichte schwerer werden.',
    quote:
      'Ich wollte noch ein kurzes Feedback zum intensiven 2-monatigen Training geben: Du hast meine Schwächen absolut erkannt und mit mir aufgebaut. Ich hab mich fitter gefühlt und die Übungen gingen immer leichter. Was mir besonders gefallen hat, ist die ständige Kontrolle der Ausführung. Man fühlt sich immer sicher, auch wenn die Gewichte schwerer werden.',
  },
  {
    name: 'Svenja',
    highlight: 'komplett die Angst vor dem Freihantelbereich verloren',
    quote:
      'Ich arbeite seit über einem Jahr mit Rocky zusammen. Angefangen habe ich, weil ich mich im Fitnessstudio immer unwohl und unsicher gefühlt habe. Die Geräte waren einschüchternd und ich wusste nie, ob ich etwas falsch mache. Durch Rockys Anleitung habe ich komplett die Angst vor dem Freihantelbereich verloren. Das Training ist zu einem festen, positiven Bestandteil meiner Woche geworden.',
  },
  {
    name: 'Petra',
    highlight: 'meine Sport-Hemmungen überwunden',
    quote:
      'Ich hab mein halbes Leben als klassischer Sportmuffel verbracht. Aber dank Rocky habe ich meine Sport-Hemmungen überwunden. Rocky bringt fundiertes Wissen mit und schafft es, einen genau da abzuholen, wo man steht. Auch an Tagen, an denen die Motivation fehlt, geht man mit einem guten Gefühl nach Hause.',
  },
  {
    name: 'Stephan',
    highlight: 'Die professionelle und gleichzeitig lockere Art von Rocky',
    quote:
      'Ich bin zu Coach Rocky gekommen, weil ich nach jahrelangem Bürojob massive Rückenprobleme hatte. Rocky hat nicht nur die Ursachen analysiert, sondern auch einen perfekt auf mich zugeschnittenen Trainingsplan entwickelt. Nach 3 Monaten bin ich absolut schmerzfrei und habe deutlich mehr Energie im Alltag. Die professionelle und gleichzeitig lockere Art von Rocky macht jedes Training zu einem Highlight der Woche. Absolute Empfehlung für jeden, der nachhaltig etwas für seine Gesundheit tun möchte!',
  },
  {
    name: 'Jacqueline',
    highlight: 'Ich fühle mich so stark und selbstbewusst wie noch nie zuvor!',
    quote:
      'Das Training mit Rocky ist genau das, was ich gebraucht habe. Als Anfängerin im Krafttraining hatte ich großen Respekt vor den schweren Gewichten und der richtigen Ausführung. Rocky nimmt sich extrem viel Zeit, erklärt jede Bewegung im Detail und achtet penibel auf die richtige Haltung. Durch das geduldige Coaching habe ich meine Angst verloren und stattdessen eine riesige Leidenschaft für das Krafttraining entwickelt. Ich fühle mich so stark und selbstbewusst wie noch nie zuvor!',
  },
];

// Rendert das Zitat mit genau einer hervorgehobenen Textstelle (Marker-Hintergrund).
const renderQuote = (quote, highlight) => {
  if (!highlight) return quote;
  const idx = quote.indexOf(highlight);
  if (idx === -1) return quote;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <mark className="bg-primary-light text-primary rounded-[2px] px-[2px] font-body font-medium" style={{ backgroundColor: '#D6E2F5', color: '#000000' }}>
        {highlight}
      </mark>
      {after}
    </>
  );
};

const TestimonialCarousel = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    const child = track.children[clamped];
    if (child) {
      track.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.scrollLeft;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - target);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  // Beim Laden die erste Karte aktivieren und Scrollposition zurücksetzen.
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.scrollLeft = 0;
    }
    setActiveIndex(0);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Kundenstimmen – horizontal scrollbar"
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            aria-label={`Kundenstimme von ${t.name}`}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white flex flex-col"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.12)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              padding: '24px',
            }}
          >
            <span
              aria-hidden="true"
              className="font-heading font-black leading-none mb-4 block"
              style={{ color: '#3F72C3', fontSize: '36px' }}
            >
              &ldquo;
            </span>
            <p className="font-body text-body text-card-foreground leading-relaxed flex-grow">
              {renderQuote(t.quote, t.highlight)}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span
                className="flex items-center justify-center rounded-full font-body font-medium shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#D6E2F5',
                  color: '#000000',
                  fontSize: '16px',
                }}
                aria-hidden="true"
              >
                {t.name.charAt(0)}
              </span>
              <span className="font-body font-medium text-body" style={{ color: '#3F72C3' }}>
                {t.name}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Pfeile und Punkte-Indikator unter den Karten */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Vorherige Kundenstimme"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-primary hover:text-foreground hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex flex-wrap justify-center gap-1">
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Zur Kundenstimme von ${t.name}`}
              aria-current={i === activeIndex}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span
                className="block rounded-full transition-colors"
                style={{ width: '10px', height: '10px', backgroundColor: i === activeIndex ? '#3F72C3' : 'rgba(0,0,0,0.24)' }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label="Nächste Kundenstimme"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-primary hover:text-foreground hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
