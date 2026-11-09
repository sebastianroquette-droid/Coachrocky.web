import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Instagram, Linkedin } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet.jsx';
import { WHATSAPP_URL, SOCIAL_INSTAGRAM_URL, SOCIAL_LINKEDIN_URL } from '@/lib/constants.js';

const navLinks = [
  { path: '/personal-training', label: 'Personal Training' },
  { path: '/shop', label: 'Shop' },
  { path: '/wissen', label: 'Wissen' },
  { path: '/app', label: 'App' },
  { path: '/uber-rocky', label: 'Über Coach Rocky' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `text-label font-body font-medium transition-colors ${
      isActive(path)
        ? 'text-primary'
        : 'text-foreground hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center shrink-0 min-h-[44px]"
            aria-label="Coach Rocky Startseite"
          >
            <img
              src="/logo-coach-rocky.svg"
              alt="Coach Rocky"
              className="h-10 w-auto"
              height="40"
              loading="eager"
            />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={SOCIAL_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden lg:inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:text-foreground hover:bg-primary-light transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden lg:inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:text-foreground hover:bg-primary-light transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-10 px-4 hidden sm:inline-flex"
            >
              Startgespräch
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-md text-foreground hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Menü öffnen"
                aria-expanded={open}
              >
                <Menu className="h-6 w-6" />
              </button>

              <SheetContent
                side="right"
                className="w-full sm:max-w-sm p-0 flex flex-col bg-background border-l border-border"
              >
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center h-16 px-4 border-b border-border shrink-0">
                  <img src="/logo-coach-rocky.svg" alt="Coach Rocky" className="h-8 w-auto" />
                </div>
                <nav aria-label="Hauptnavigation" className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-md font-body font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-primary bg-primary-light'
                          : 'text-foreground hover:bg-primary-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-border flex flex-col gap-1">
                    <a
                      href={SOCIAL_INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-md font-body font-medium text-foreground hover:bg-primary-light transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </a>
                    <a
                      href={SOCIAL_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-md font-body font-medium text-foreground hover:bg-primary-light transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </div>
                </nav>
                <div className="shrink-0 border-t border-border px-4 py-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Startgespräch
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
