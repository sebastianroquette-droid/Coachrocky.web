import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import { WHATSAPP_URL } from '@/lib/constants.js';

const ImpressumPage = () => (
  <Layout
    title="Impressum | Coach Rocky"
    description="Impressum von Coach Rocky Personal Training Hamburg. Rechtliche Angaben, Kontaktmöglichkeiten und Haftungsausschluss."
    canonicalPath="/impressum"
  >
    <section className="section-spacing max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="t-h1 mb-10 text-foreground">Impressum</h1>

      <div className="prose prose-lg max-w-none font-body font-normal text-foreground space-y-10 [overflow-wrap:anywhere]">
        <div>
          <h2 className="t-h2 mb-4 text-foreground">Angaben gemäß § 5 DDG</h2>
          <p className="leading-relaxed">
            Sebastian Roquette<br />
            Alter Teichweg 11-13<br />
            22081 Hamburg
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Kontakt</h2>
          <p className="leading-relaxed">
            Telefon: +49 176 80268219<br />
            E-Mail: <a href="mailto:sebastianroquette@gmail.com" className="text-primary hover:underline">sebastianroquette@gmail.com</a><br />
            WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Nachricht an Coach Rocky senden</a>
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Umsatzsteuer-ID</h2>
          <p className="leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE329061030
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="leading-relaxed">
            Sebastian Roquette<br />
            Alter Teichweg 11-13<br />
            22081 Hamburg
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p className="leading-relaxed">
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Haftung für Inhalte</h2>
          <p className="leading-relaxed">
            Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Haftung für Links</h2>
          <p className="leading-relaxed">
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Urheberrecht</h2>
          <p className="leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>

      <p className="mt-10">
        <Link to="/" className="text-label text-primary hover:underline">Zurück zur Startseite</Link>
      </p>
    </section>
  </Layout>
);

export default ImpressumPage;
