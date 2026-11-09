# Coach Rocky – Website (coachrocky.de)

Personal Training Hamburg-Barmbek. Dieses Projekt ist der Code des Horizons-Klons (Export vom 09.11.2026, Klon-ID ad386736-af24-4dd7-90cb-e0d579c78642). Die Original-Seite (ID bfe2270d-ae90-40f2-b582-b0e2cfa1c864) wird am 17.12.2026 auf diesen Stand umgestellt.

## Aufbau
- `apps/web` – Website (React, Vite, Tailwind). Seiten in `src/pages`, Layout/Meta in `src/components/Layout.jsx`, Routen und Weiterleitungen in `src/App.jsx`.
- `apps/api` – Node-Server für Newsletter und Hostinger Reach. Newsletter-Formular ist bewusst deaktiviert.
- `apps/pocketbase` – Datenbank. Zugangsdaten nur über Umgebungsvariablen.
- `apps/web/public/.htaccess` – echte 301-Weiterleitungen, 404/410-Status, Umleitung coachrocky.de -> www.
- Befehle: `bun install`, `npm run build` (Ausgabe: `dist/apps/web`), `npm run dev`.

## Feste Regeln
- Hauptadresse ist **https://www.coachrocky.de**. Canonical entsteht automatisch aus der aktuellen Domain.
- Marke: Schriften nur Figtree (h1 900, h2/h3 700) und Barlow (400/500). Farben nur Rocky Blau #3F72C3, Blau hell #D6E2F5, Sand #F2E6CE, Grau #DADEDF (nur inaktiv), Schwarz oder rgba(0,0,0,0.6). Radien: 4 px Bilder/Eingaben, 8 px Buttons, 12 px Karten. Rahmen rgba(0,0,0,0.12).
- Preise, Laufzeiten, Angebote nur aus Notion „Angebots-Übersicht“. Abweichungen melden, nicht übernehmen.
- Keine Heilsversprechen, kein Reha-Vergleich, kein Online-Coaching als Angebot, keine Kundennamen.
- Rechtstexte (AGB, Datenschutz, Impressum, Widerruf) nicht inhaltlich ändern. Der Anwalt prüft nach dem Go-live.
- Supplement- und Rabattlinks als „Werbung“ kennzeichnen.
- Nie Zugangsdaten in den Code oder ins Repository. `.env` bleibt außerhalb.
- Nichts am Original ohne ausdrückliches GO des Coaches.

## Zustand bis zum Go-live
- `index.html` hat `noindex,nofollow`, und der Banner „Entwurf – nicht öffentlich“ ist aktiv (`DraftBanner.jsx`).
- Newsletter-Formular deaktiviert, bis Double-Opt-in in Hostinger Reach abgeschaltet ist.

## Go-live-Checkliste 17.12.2026
1. `noindex` aus `index.html` entfernen, Entwurf-Banner entfernen.
2. Cookie-Banner: Ablehnen und Akzeptieren gleichwertig, Google Ads und Meta-Pixel erst nach Einwilligung (Logik in `src/lib/cookieConsent.js`, `consent.js`).
3. Fotos: 9 Bilder liegen auf dem Horizons-Bildserver. Herunterladen und in `public/brand` ablegen, falls die Seite Horizons verlässt.
4. `sitemap.xml`: Datum aktualisieren, nur die 12 Seiten.
5. Domain-Umzug klären (www als Hauptadresse), danach in der Search Console die Sitemap einreichen.
6. Alte Adressen aus dem Original, die nicht in `.htaccess` stehen, vorher gegen die Original-Sitemap prüfen.
7. Nach dem Deploy: Statuscodes prüfen (Seiten 200, alte Adressen 301, /knieprobleme 410, unbekannt 404).
