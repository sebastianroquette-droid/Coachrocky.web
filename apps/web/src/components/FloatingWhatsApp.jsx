import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon.jsx';

const WHATSAPP_DIRECT_URL = 'https://wa.me/4917680268219';

/**
 * Feststehender runder WhatsApp-Button unten rechts auf jeder Seite.
 * Bleibt beim Scrollen sichtbar, verdeckt keine Inhalte oder Banner.
 */
const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_DIRECT_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Per WhatsApp schreiben"
    className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default FloatingWhatsApp;
