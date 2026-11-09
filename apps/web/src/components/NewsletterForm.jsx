import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient.js';
import { trackEvent as trackFbEvent } from '@/lib/facebookPixel.js';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics.js';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { trackEvent, trackConversion } = useGoogleAnalytics();

  const extractDomain = (emailAddress) => {
    if (!emailAddress || !emailAddress.includes('@')) return 'unknown';
    return emailAddress.split('@')[1];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    trackEvent('newsletter_form_interaction', { action: 'submit' });

    if (!name.trim() || !email.trim()) {
      const validationError = 'Bitte fülle alle Pflichtfelder aus.';
      setErrorMessage(validationError);
      toast.error(validationError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const validationError = 'Bitte gib eine gültige E-Mail-Adresse ein.';
      setErrorMessage(validationError);
      toast.error(validationError);
      return;
    }

    if (!consentGiven) {
      const validationError = 'Bitte stimme der Datenschutzerklärung zu.';
      setErrorMessage(validationError);
      toast.error(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiServerClient.fetch('/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: name || '' })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || 'Die Anmeldung konnte nicht gespeichert werden. Versuch es noch einmal.');
      }

      const data = await response.json();

      if (data.success) {
        setEmail('');
        setName('');
        setConsentGiven(false);
        const successMsg = 'Danke. Ich melde mich in Kürze bei dir.';
        setSuccessMessage(successMsg);
        toast.success(successMsg);

        setTimeout(() => setSuccessMessage(''), 5000);

        try { trackFbEvent('Lead', { source: 'Newsletter', status: 'Subscribed' }, { email }); } catch (e) {}
        try { trackConversion('newsletter_signup', { email_domain: extractDomain(email) }); } catch (e) {}
      } else {
        throw new Error(data.message || 'Ein Fehler ist aufgetreten');
      }
    } catch (error) {
      const errorMsg = error.message || 'Fehler beim Anmelden. Bitte versuche es später erneut.';
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 md:p-10 rounded-lg border border-border text-card-foreground">
      <div className="mb-8">
        <h3 className="t-h3 mb-2">Trag dich ein</h3>
        <p className="text-label font-body text-muted-foreground">
          Kein Spam. Nur Wissen zu Krafttraining und Ernährung.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-label font-medium text-card-foreground mb-2">
            Dein Name <span className="text-foreground" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="z.B. Sarah"
            className="w-full px-4 py-3 bg-background border border-input rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-label font-medium text-card-foreground mb-2">
            Deine E-Mail <span className="text-foreground" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sarah@beispiel.de"
            className="w-full px-4 py-3 bg-background border border-input rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary bg-background"
          />
          <label htmlFor="consent" className="text-label text-muted-foreground font-body leading-snug">
            Ich stimme zu, dass meine Daten zur Bearbeitung meiner Newsletter-Anmeldung gespeichert werden. Mehr in der <Link to="/datenschutz" className="underline hover:text-primary transition-colors">Datenschutzerklärung</Link>.
          </label>
        </div>

        {errorMessage && (
          <div className="status-box status-error" role="alert">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-destructive" />
            <span className="text-foreground">{errorMessage}</span>
          </div>
        )}
        {successMessage && (
          <div className="status-box status-success" role="status">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
            <span className="text-foreground">{successMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !consentGiven}
          className="btn-primary w-full mt-2"
        >
          {isLoading ? 'Wird angemeldet...' : 'Jetzt eintragen'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
