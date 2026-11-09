import React from 'react';
import Layout from '@/components/Layout.jsx';

const WiderrufsbelehrungPage = () => (
  <Layout
    title="Widerrufsbelehrung | Coach Rocky"
    description="Widerrufsbelehrung für digitale Produkte (PDF-Downloads) von Coach Rocky."
    canonicalPath="/widerrufsbelehrung"
  >
    <section className="section-spacing max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="t-h1 mb-4 text-foreground">Widerrufsbelehrung</h1>
      <p className="text-label text-muted-foreground mb-10">
        Diese Widerrufsbelehrung entspricht § 3 der Allgemeinen Geschäftsbedingungen (AGB) von Coach Rocky und gilt für den Kauf digitaler Inhalte (PDF-Produkte).
      </p>

      <div className="prose prose-lg max-w-none font-body font-normal text-foreground space-y-8 [overflow-wrap:anywhere]">
        <div>
          <h2 className="t-h2 mb-4 text-foreground">Widerrufsrecht</h2>
          <p className="leading-relaxed">
            Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
          </p>
          <p className="leading-relaxed">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie mich, Sebastian Roquette, Alter Teichweg 11-13, 22081 Hamburg, Telefon: +49 176 80268219, E-Mail: sebastianroquette@gmail.com, mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das untenstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          </p>
          <p className="leading-relaxed">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Folgen des Widerrufs</h2>
          <p className="leading-relaxed">
            Wenn Sie diesen Vertrag widerrufen, habe ich Ihnen alle Zahlungen, die ich von Ihnen erhalten habe, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei mir eingegangen ist. Für diese Rückzahlung verwende ich dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Vorzeitiges Erlöschen des Widerrufsrechts bei digitalen Inhalten</h2>
          <p className="leading-relaxed">
            Bei Verträgen über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten (z. B. PDF-Dateien) erlischt Ihr Widerrufsrecht vorzeitig, wenn ich mit der Ausführung des Vertrags begonnen habe, nachdem Sie
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ausdrücklich zugestimmt haben, dass ich mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginne, und</li>
            <li>Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.</li>
          </ul>
          <p className="leading-relaxed">
            Diese Zustimmung geben Sie im Bestellprozess über eine gesonderte Checkbox ab (vgl. § 9 Abs. 10 AGB). Der Verzicht auf Ihr Widerrufsrecht wird Ihnen zusätzlich per Bestätigungs-E-Mail schriftlich bestätigt.
          </p>
        </div>

        <div>
          <h2 className="t-h2 mb-4 text-foreground">Muster-Widerrufsformular</h2>
          <p className="leading-relaxed">(Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
          <p className="leading-relaxed">
            An Sebastian Roquette, Alter Teichweg 11-13, 22081 Hamburg, E-Mail: sebastianroquette@gmail.com:
          </p>
          <p className="leading-relaxed">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf des folgenden digitalen Produkts (*):<br />
            — Bestellt am (*)/erhalten am (*):<br />
            — Name des/der Verbraucher(s):<br />
            — Anschrift des/der Verbraucher(s):<br />
            — Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br />
            — Datum
          </p>
          <p className="text-label text-muted-foreground">(*) Unzutreffendes streichen.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default WiderrufsbelehrungPage;
