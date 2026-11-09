import React from 'react';
import { WHATSAPP_URL } from '@/lib/constants.js';

/**
 * Primaerer CTA-Button: kostenloses Startgespraech (15 Minuten).
 * Gefuellt in Rocky Blau, zwei Zeilen (Titel + Zusatztext).
 * Verlinkt auf denselben WhatsApp-Kontaktweg wie bisher.
 */
const StartgespraechButton = ({ className = '' }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-primary flex-col py-2 ${className}`}
  >
    <span>Startgespräch</span>
    <span className="text-[12px] font-normal opacity-90 leading-tight">kostenlos, 15 Minuten</span>
  </a>
);

export default StartgespraechButton;
