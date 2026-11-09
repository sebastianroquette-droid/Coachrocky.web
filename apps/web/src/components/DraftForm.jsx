import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

/**
 * Deaktiviertes Formular für den Entwurf (Newsletter, E-Book, Warteliste).
 * Sendet nichts ab und speichert nichts – nach Klick nur Hinweis (A4).
 */
const DraftForm = ({
  emailPlaceholder = 'Deine E-Mail-Adresse',
  consentText,
  buttonLabel = 'Eintragen',
}) => {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="status-box status-info" role="status">
        <Info className="h-5 w-5 flex-shrink-0 text-primary" />
        <span className="text-foreground">Entwurf: Formular noch nicht aktiv</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        required
        aria-required="true"
        placeholder="Dein Name"
        className="w-full px-4 py-3 bg-background border border-input rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body"
      />
      <input
        type="email"
        required
        aria-required="true"
        placeholder={emailPlaceholder}
        className="w-full px-4 py-3 bg-background border border-input rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body"
      />
      <label className="flex items-start gap-3 text-label text-muted-foreground font-body leading-snug">
        <input
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary bg-background"
        />
        <span>
          {consentText || (
            <>
              Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anmeldung gespeichert werden. Mehr in der{' '}
              <Link to="/datenschutz" className="underline text-foreground hover:text-foreground">Datenschutzerklärung</Link>.
            </>
          )}
        </span>
      </label>
      <button type="submit" className="btn-primary w-full">
        {buttonLabel}
      </button>
    </form>
  );
};

export default DraftForm;
