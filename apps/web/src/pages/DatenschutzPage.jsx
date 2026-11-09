import React from 'react';
import Layout from '@/components/Layout.jsx';

const DatenschutzPage = () => (
  <Layout
    title="Datenschutz | Coach Rocky"
    description="Datenschutzerklärung von Coach Rocky: Hosting, Cookies, Analyse-Tools, Zahlungsdienstleister und deine Rechte."
    canonicalPath="/datenschutz"
  >
    <section className="section-spacing max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="t-h1 mb-10 text-foreground break-words hyphens-auto">Datenschutzerklärung</h1>

      <div className="prose prose-lg max-w-none font-body font-normal text-foreground space-y-10 [overflow-wrap:anywhere]">
        <div>
          <h2 className="t-h2 mb-4 text-foreground">1. Verantwortliche Stelle</h2>
          <p className="leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            Sebastian Roquette<br />
            Alter Teichweg 11-13<br />
            22081 Hamburg<br />
            Telefon: +49 176 80268219<br />
            E-Mail: <a href="mailto:sebastianroquette@gmail.com" className="text-primary hover:underline">sebastianroquette@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">2. Hosting</h2>
          <p className="leading-relaxed">
            Diese Website wird bei Hostinger (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern) gehostet. Hostinger erhebt beim Aufruf der Website automatisch technische Zugriffsdaten (Server-Logfiles wie IP-Adresse, Datum/Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp) und speichert diese zur Sicherstellung eines störungsfreien Betriebs sowie zur Auswertung der Systemsicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website).
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p className="leading-relaxed">
            Der Schutz deiner personenbezogenen Daten ist mir wichtig. Ich behandle deine Daten vertraulich und entsprechend den gesetzlichen Vorschriften (DSGVO, BDSG, TDDDG). Personenbezogene Daten werden nur erhoben, soweit dies für die Bereitstellung einer funktionsfähigen Website sowie meiner Inhalte und Leistungen erforderlich ist. Dir stehen jederzeit die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung zu. Zudem besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (in Hamburg: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit).
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">4. Datenerfassung auf dieser Website</h2>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Cookies</h3>
          <p className="leading-relaxed">
            Technisch notwendige Cookies und vergleichbare Speicher im Browser werden nur eingesetzt, soweit sie für den Betrieb der Website erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TDDDG). Cookies und ähnliche Technologien für Marketingzwecke (Google Ads, siehe unten) werden erst nach deiner ausdrücklichen Einwilligung über den Cookie-Banner aktiviert (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG). Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen widerrufen.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Kontaktaufnahme per E-Mail oder Telefon</h3>
          <p className="leading-relaxed">
            Wenn du mich per E-Mail oder Telefon kontaktierst, verarbeite ich deine Angaben (zum Beispiel Name, E-Mail-Adresse, Telefonnummer und den Inhalt deiner Anfrage), um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage mit einem Vertrag oder dessen Anbahnung zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Mein E-Mail-Postfach wird von Google (Gmail, Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) bereitgestellt.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Kontaktaufnahme per WhatsApp</h3>
          <p className="leading-relaxed">
            Du hast die Möglichkeit, über WhatsApp (Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland) mit mir Kontakt aufzunehmen. Dabei werden deine Telefonnummer sowie der Inhalt deiner Nachrichten von WhatsApp verarbeitet. Da WhatsApp zum Meta-Konzern gehört, kann eine Übermittlung deiner Daten in die USA und andere Drittländer nicht ausgeschlossen werden. Meta hat sich hierfür den EU-Standardvertragsklauseln der Europäischen Kommission unterworfen. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (deine Einwilligung durch aktive Kontaktaufnahme) bzw. Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags).
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Newsletter (Hostinger Reach)</h3>
          <p className="leading-relaxed">
            Wenn du dich für meinen Newsletter anmeldest, verarbeite ich deine E-Mail-Adresse und deinen Namen, um dir Tipps zu Krafttraining und Ernährung sowie gelegentlich Neuigkeiten per E-Mail zu schicken. Für den Versand nutze ich den E-Mail-Marketing-Dienst „Hostinger Reach" (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern). Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
          <p className="leading-relaxed">
            Nach deiner Anmeldung nehme ich dich in den Verteiler auf. Zum Nachweis deiner Einwilligung speichere ich den Zeitpunkt der Anmeldung sowie die dabei verwendete IP-Adresse (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse am Nachweis der Einwilligung).
          </p>
          <p className="leading-relaxed">
            Der Newsletter-Dienst erfasst, ob und wann du den Newsletter öffnest und auf welche Links du klickst. Ich nutze das, um die Inhalte zu verbessern. Auch dies erfolgt auf Grundlage deiner Einwilligung, die du mit der Anmeldung erteilst.
          </p>
          <p className="leading-relaxed">
            Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, zum Beispiel über den Abmeldelink in jedem Newsletter oder per E-Mail an mich. Nach der Abmeldung lösche ich deine Daten aus dem Verteiler, soweit keine gesetzliche Pflicht zur Aufbewahrung besteht.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Personal Training</h3>
          <p className="leading-relaxed">
            Wenn du bei mir trainierst, verarbeite ich die Daten, die für die Durchführung erforderlich sind, zum Beispiel Name, Kontaktdaten, Termine, Zahlungen und deine Trainingsziele (Art. 6 Abs. 1 lit. b DSGVO). Rechnungsdaten bewahre ich nach den handels- und steuerrechtlichen Vorschriften auf (Art. 6 Abs. 1 lit. c DSGVO).
          </p>
          <p className="leading-relaxed">
            Angaben zu deiner Gesundheit, zum Beispiel Beschwerden, Verletzungen oder Medikamente, erfrage ich vor dem Training in einem Anamnesebogen auf Papier. Diese Angaben verarbeite ich nur mit deiner ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO) und nur, um das Training sicher auf dich abzustimmen. Der Bogen wird während deiner Betreuung in einem Ordner aufbewahrt und ein Jahr nach Ende der Betreuung vernichtet, soweit keine gesetzliche Pflicht zur Aufbewahrung besteht. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">5. Links zu anderen Diensten und Schriftarten</h2>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Instagram und LinkedIn</h3>
          <p className="leading-relaxed">
            Auf dieser Website verlinke ich auf meine Profile bei Instagram (Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland) und LinkedIn (LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland). Es handelt sich um einfache Links, Inhalte dieser Dienste werden nicht eingebettet. Erst wenn du einen Link anklickst, wirst du zum jeweiligen Dienst weitergeleitet. Dieser verarbeitet deine Daten (u. a. IP-Adresse) dann nach seinen eigenen Datenschutzbestimmungen, ggf. auch in den USA.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Google Maps und HVV</h3>
          <p className="leading-relaxed">
            Für die Anfahrt verlinke ich auf Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) und auf die Fahrplanauskunft des Hamburger Verkehrsverbunds (HVV). Eine Karte wird nicht eingebettet. Erst wenn du einen Link anklickst, wirst du zum jeweiligen Dienst weitergeleitet, der deine Daten (u. a. IP-Adresse) nach seinen eigenen Datenschutzbestimmungen verarbeitet.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Schriftarten</h3>
          <p className="leading-relaxed">
            Die Schriftarten dieser Website werden vom Server meines Hosters geladen. Eine Verbindung zu Servern von Google (Google Fonts) findet dabei nicht statt.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">6. Werbung: Google Ads</h2>
          <p className="leading-relaxed">
            Nach deiner Einwilligung über den Cookie-Banner nutze ich Google Ads (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) mit Conversion-Tracking und Remarketing. Mit dem Conversion-Tracking sehe ich, ob Besucher nach dem Klick auf eine meiner Anzeigen bestimmte Aktionen auf dieser Website ausführen. Remarketing ermöglicht es, dir bei späteren Besuchen anderer Websites Anzeigen von mir zu zeigen. Dazu werden Besucher dieser Website in Nutzerlisten aufgenommen.
          </p>
          <p className="leading-relaxed">
            Dabei können Cookies gesetzt und Daten (u. a. IP-Adresse, Geräte- und Browserinformationen, besuchte Seiten) an Google übermittelt werden, auch an Google LLC in den USA. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG). Ohne deine Einwilligung wird Google Ads nicht geladen. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen widerrufen.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">7. Zahlungsabwicklung</h2>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Überweisung und Barzahlung</h3>
          <p className="leading-relaxed">
            Bei Zahlung per Überweisung verarbeite ich die Angaben, die für die Zuordnung der Zahlung nötig sind (zum Beispiel Name, Kontoinhaber, Betrag, Verwendungszweck). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (handels- und steuerrechtliche Aufbewahrungspflichten).
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">PayPal</h3>
          <p className="leading-relaxed">
            Bei Zahlungen über PayPal werden deine Zahlungsdaten an PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg, übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Weitere Informationen entnimmst du der Datenschutzerklärung von PayPal.
          </p>
          <h3 className="t-h3 mb-2 text-foreground mt-6">Hostinger Horizons Online Store</h3>
          <p className="leading-relaxed">
            Sofern du digitale Produkte über den Shop dieser Website kaufst, erfolgt der Kauf über den „Hostinger Horizons Online Store" (Hostinger International Ltd.). Im Rahmen der Kaufabwicklung werden deine Bestelldaten (u. a. Name, E-Mail-Adresse, Rechnungsanschrift, gekaufte Produkte, Zahlungsstatus) verarbeitet und gespeichert, um den Kaufvertrag abzuwickeln, Zugang zu den digitalen Inhalten zu gewähren und gesetzlichen Aufbewahrungspflichten nachzukommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (handels- und steuerrechtliche Aufbewahrungspflichten).
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">8. Affiliate-Links in PDF-Produkten</h2>
          <p className="leading-relaxed">
            Die von mir verkauften PDF-Produkte können Affiliate-Links zum Anbieter edubily enthalten. Klickst du einen solchen Link an und tätigst anschließend einen Kauf, erhalte ich unter Umständen eine Provision. Für dich entstehen dadurch keine zusätzlichen Kosten. Beim Anklicken eines Affiliate-Links werden Daten (u. a. IP-Adresse, Zeitpunkt des Klicks) an edubily übermittelt und dort im Rahmen deren eigener Datenschutzbestimmungen verarbeitet. Ich habe keinen Einfluss auf die Datenverarbeitung durch edubily.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">9. Speicherdauer</h2>
          <p className="leading-relaxed">
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. handels- und steuerrechtliche Fristen von bis zu 10 Jahren für Rechnungsdaten) dies vorschreiben.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">10. Deine Rechte</h2>
          <p className="leading-relaxed">
            Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit unter der oben genannten Adresse an mich wenden.
          </p>
        </div>

        <p className="text-sm text-muted-foreground pt-6">Stand: November 2026</p>
      </div>
    </section>
  </Layout>
);

export default DatenschutzPage;
