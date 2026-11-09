import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';

const Section = ({ n, title, children }) => (
  <div>
    <h2 className="t-h2 mb-4 text-foreground break-words hyphens-auto">§ {n} {title}</h2>
    <div className="space-y-3 leading-relaxed">{children}</div>
  </div>
);

const AGBPage = () => (
  <Layout
    title="AGB | Coach Rocky"
    description="Allgemeine Geschäftsbedingungen (AGB) von Coach Rocky für digitale Produkte und Trainingsleistungen."
    canonicalPath="/agb"
  >
    <section className="section-spacing max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="t-h1 mb-10 text-foreground break-words hyphens-auto">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <div className="prose prose-lg max-w-none font-body font-normal text-foreground space-y-10 [overflow-wrap:anywhere] break-words hyphens-auto">
        <Section n="1" title="Geltungsbereich">
          <p>Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge zwischen Sebastian Roquette, Alter Teichweg 11-13, 22081 Hamburg (nachfolgend „Anbieter“) und seinen Kunden (nachfolgend „Kunde“), die über die Website coachrocky.de oder auf anderem Weg (zum Beispiel per WhatsApp, E-Mail oder persönlich) geschlossen werden, insbesondere über Personal-Training-Leistungen sowie digitale Produkte (PDF-Dateien).</p>
        </Section>

        <Section n="2" title="Vertragsgegenstand">
          <p>(1) Der Anbieter stellt Personal-Training-Leistungen sowie digitale Produkte bereit.</p>
          <p>(2) Die Leistungsbeschreibung ergibt sich aus der jeweiligen Produkt- bzw. Leistungsseite zum Zeitpunkt der Bestellung.</p>
          <p>(3) Personal-Training-Leistungen umfassen individuelle Trainingsbetreuung vor Ort im Studio in Hamburg-Barmbek gemäß der Leistungsbeschreibung auf der Seite Personal Training. Digitale Produkte umfassen insbesondere PDF-Trainingsanleitungen aus dem Bereich Kraft- und Fitnesstraining, sofern sie im Shop angeboten werden.</p>
        </Section>

        <Section n="3" title="Widerrufsbelehrung">
          <p>Verbrauchern steht bei Fernabsatzverträgen grundsätzlich ein Widerrufsrecht zu. Die vollständige Widerrufsbelehrung sowie das Muster-Widerrufsformular sind auf der eigenständigen Seite <Link to="/widerrufsbelehrung" className="text-primary hover:underline">Widerrufsbelehrung</Link> abrufbar und Bestandteil dieser AGB.</p>
          <p>Bei digitalen Inhalten erlischt das Widerrufsrecht vorzeitig, wenn der Kunde der sofortigen Ausführung ausdrücklich zustimmt und bestätigt, dass er hierdurch sein Widerrufsrecht verliert (siehe § 9 Abs. 10).</p>
        </Section>

        <Section n="4" title="Vertragsschluss und Lieferung">
          <p>Der Vertrag kommt durch die Bestellung des Kunden und deren Annahme durch den Anbieter zustande. Bei digitalen Produkten erfolgt die Bereitstellung durch elektronischen Zugriff bzw. Download-Link nach vollständiger Zahlung.</p>
        </Section>

        <Section n="5" title="Preise und Zahlung">
          <p>(1) Alle angegebenen Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
          <p>(2) Personal-Training-Leistungen können per Überweisung, bar oder über PayPal bezahlt werden.</p>
          <p>(3) Digitale Produkte werden über die im Bestellprozess angebotenen Zahlungsmethoden bezahlt, unter anderem PayPal sowie ggf. weitere über den Hostinger Horizons Online Store bereitgestellte Zahlungsarten.</p>
        </Section>

        <Section n="6" title="Versand und Versandkosten">
          <p>Bei rein digitalen Produkten (PDF-Dateien) fällt kein physischer Versand an. Sofern zukünftig physische Produkte angeboten werden, gelten die auf der jeweiligen Produktseite ausgewiesenen Versandkosten.</p>
        </Section>

        <Section n="7" title="Eigentumsvorbehalt">
          <p>Bei digitalen Inhalten erwirbt der Kunde ein einfaches, nicht übertragbares Nutzungsrecht gemäß § 16. Ein Eigentumsübergang im sachenrechtlichen Sinne findet nicht statt.</p>
        </Section>

        <Section n="8" title="Gewährleistung">
          <p>Es gelten die gesetzlichen Gewährleistungsrechte. Mängel an digitalen Produkten sind unverzüglich per E-Mail an sebastianroquette@gmail.com zu melden.</p>
        </Section>

        <Section n="9" title="Pflichten des Kunden / Zustimmung zur sofortigen Vertragsausführung">
          <p>(1)–(9) Der Kunde ist verpflichtet, wahrheitsgemäße Angaben zu machen und die digitalen Inhalte nur im Rahmen der eingeräumten Nutzungsrechte (§ 16) zu verwenden.</p>
          <p>(10) Vor Abschluss der Bestellung bestätigt der Kunde durch eine gesonderte Checkbox: „Ich verlange ausdrücklich, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und bestätige, dass ich hierdurch mit Beginn der Vertragsausführung mein Widerrufsrecht verliere." Neben der Checkbox wird auf die <Link to="/widerrufsbelehrung" className="text-primary hover:underline">Widerrufsbelehrung</Link> verlinkt. Der Verzicht auf das Widerrufsrecht wird dem Kunden zusätzlich per automatischer Bestätigungsmail schriftlich bestätigt.</p>
        </Section>

        <Section n="10" title="Transportschäden und Zoll">
          <p>Da der Anbieter aktuell ausschließlich digitale Produkte ohne physischen Versand anbietet, sind Regelungen zu Transportschäden und Zoll derzeit nicht einschlägig. Sollte der Anbieter zukünftig physische Produkte anbieten, haftet er für Transportschäden nach den gesetzlichen Bestimmungen; anfallende Zollgebühren bei Lieferungen außerhalb der EU trägt in diesem Fall der Kunde.</p>
        </Section>

        <Section n="11" title="Haftung">
          <p>Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.</p>
        </Section>

        <Section n="12" title="Haftungsausschluss Trainingsleistungen">
          <p>Trainings- und Coaching-Inhalte ersetzen keine ärztliche Beratung. Der Kunde nimmt eigenverantwortlich teil und bestätigt seine gesundheitliche Eignung.</p>
        </Section>

        <Section n="13" title="Änderungen der AGB">
          <p>Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern, sofern dies zur Anpassung an geänderte Rechtslagen oder technische Gegebenheiten erforderlich ist.</p>
        </Section>

        <Section n="14" title="Vertragssprache">
          <p>Vertragssprache ist ausschließlich Deutsch.</p>
        </Section>

        <Section n="15" title="Speicherung des Vertragstextes">
          <p>Der Vertragstext wird vom Anbieter gespeichert. Der Kunde erhält eine Bestellbestätigung per E-Mail.</p>
        </Section>

        <Section n="16" title="Nutzungsrechte an digitalen Inhalten">
          <p>Mit vollständiger Bezahlung erhält der Kunde ein einfaches, zeitlich unbefristetes, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an den erworbenen digitalen Inhalten (PDF-Dateien) ausschließlich zum persönlichen, nicht kommerziellen Gebrauch.</p>
          <p>Eine Weitergabe, Vervielfältigung, öffentliche Zugänglichmachung oder ein Weiterverkauf der PDF-Dateien oder ihrer Inhalte – auch auszugsweise – ist ohne vorherige schriftliche Zustimmung des Anbieters nicht gestattet. Ein entsprechender Hinweis ist im Footer der PDF-Dateien enthalten.</p>
        </Section>

        <Section n="17" title="Datenschutz">
          <p>Informationen zur Verarbeitung personenbezogener Daten finden sich in der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.</p>
        </Section>

        <Section n="18" title="Laufzeit der Trainingspakete, Termine und Absagen">
          <p>(1) Trainingspakete haben eine feste Laufzeit von vier Wochen. Sie enden mit Ablauf der Laufzeit, ohne dass es einer Kündigung bedarf, und verlängern sich nicht automatisch.</p>
          <p>(2) Einheiten, die innerhalb der Laufzeit nicht genutzt wurden, können nach Absprache mit dem Anbieter nachgeholt werden.</p>
          <p>(3) Termine werden individuell vereinbart. Bis 24 Stunden vor dem Termin kann der Kunde kostenlos absagen oder verschieben. Bei kurzfristigeren Absagen berechnet der Anbieter 50 % der Trainingsgebühr. Bei Nicht-Erscheinen wird die volle Gebühr berechnet.</p>
          <p>(4) Im Übrigen gelten die gesetzlichen Regelungen.</p>
        </Section>

        <Section n="19" title="Aufrechnung und Zurückbehaltungsrecht">
          <p>Dem Kunden stehen Aufrechnungs- oder Zurückbehaltungsrechte nur zu, soweit sein Anspruch rechtskräftig festgestellt oder unbestritten ist.</p>
        </Section>

        <Section n="20" title="Salvatorische Klausel">
          <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
        </Section>

        <Section n="21" title="Anwendbares Recht und Gerichtsstand">
          <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende verbraucherschützende Bestimmungen des Staates, in dem der Kunde seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.</p>
        </Section>

        <Section n="22" title="Streitbeilegung">
          <p>Der Anbieter ist nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </Section>

        <p className="text-sm text-muted-foreground pt-6">Stand: November 2026</p>
      </div>
    </section>
  </Layout>
);

export default AGBPage;
