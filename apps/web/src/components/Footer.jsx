import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon.jsx';
import { WHATSAPP_URL, SOCIAL_WHATSAPP_URL } from '@/lib/constants.js';

const Footer = () => {
  const navLinks = [
    { path: '/personal-training', label: 'Personal Training' },
    { path: '/shop', label: 'Shop' },
    { path: '/wissen', label: 'Wissen' },
    { path: '/app', label: 'App' },
    { path: '/uber-rocky', label: 'Über Coach Rocky' },
    { path: '/standort', label: 'Standort' },
    { path: '/newsletter', label: 'Newsletter' },
  ];

  const legalLinks = [
    { path: '/impressum', label: 'Impressum' },
    { path: '/datenschutz', label: 'Datenschutz' },
    { path: '/agb', label: 'AGB' },
    { path: '/widerrufsbelehrung', label: 'Widerrufsbelehrung' },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center mb-4" aria-label="Coach Rocky Startseite">
              <img src="/logo-coach-rocky.svg" alt="Coach Rocky" className="h-8 w-auto" loading="lazy" />
            </Link>
            <p className="text-label text-foreground leading-relaxed">
              Personal Training in Hamburg-Barmbek. Klar aufgebaut, persönlich begleitet.
            </p>
          </div>

          <div>
            <span className="font-body font-medium text-caption mb-4 block text-foreground">Navigation</span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-label text-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-body font-medium text-caption mb-4 block text-foreground">Kontakt</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-label text-foreground">
                <WhatsAppIcon className="h-4 w-4 mt-1 flex-shrink-0 text-foreground" />
                <a href={SOCIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                  WhatsApp
                </a>
              </li>
              <li className="text-label text-foreground pl-6">Mo–Fr 9–20 Uhr per WhatsApp</li>
              <li className="flex items-start gap-2 text-label text-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-foreground" />
                <a href="mailto:sebastianroquette@gmail.com" className="hover:text-primary transition-colors duration-200">
                  sebastianroquette@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-label text-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-foreground" />
                <a href="tel:+4917680268219" className="hover:text-primary transition-colors duration-200">
                  +49 176 80268219
                </a>
              </li>
              <li className="text-label text-foreground">
                <a href="https://www.instagram.com/coach_rocky_since2014/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li className="text-label text-foreground">
                <a href="https://www.linkedin.com/in/sebastian-roquette-517875269" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li className="text-label text-foreground">
                Alter Teichweg 11-13<br />22081 Hamburg
              </li>
            </ul>
          </div>

          <div>
            <span className="font-body font-medium text-caption mb-4 block text-foreground">App</span>
            <p className="text-label text-muted-foreground">Web-App im Browser. Kommt bald.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-label text-foreground">
          <p>© 2026 Coach Rocky. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-primary transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
