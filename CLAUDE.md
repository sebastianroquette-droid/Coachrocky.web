# Coach Rocky – Website (coachrocky.de)

Personal Training Hamburg-Barmbek. Dieses Projekt ist der Code des Horizons-Klons (Export vom 09.11.2026, Klon-ID ad386736-af24-4dd7-90cb-e0d579c78642). Die Original-Seite (ID bfe2270d-ae90-40f2-b582-b0e2cfa1c864) wird am 17.12.2026 auf diesen Stand umgestellt.

## Aufbau
- `apps/web` – Website (React, Vite, Tailwind). Seiten in `src/pages`, Layout/Meta in `src/components/Layout.jsx`, Routen und Weiterleitungen in `src/App.jsx`.
- `apps/api` – Node-Server für Newsletter und Hostinger Reach. Newsletter-Formular ist bewusst deaktiviert.
- `apps/pocketbase` – Datenbank. Zugangsdaten nur über Umgebungsvariablen.
- `apps/web/public/.htaccess`, `robots.txt`, `sitemap.xml` – fertige Regeln für einen eigenen Server (lokal mit Apache getestet). **In Horizons wirken sie nicht** (siehe „Betrieb und Grenzen“).
- Befehle: `bun install`, `npm run build` (Ausgabe: `dist/apps/web`), `npm run dev`.

## Betrieb und Grenzen (Stand 10.11.2026, Entscheidung Coach: Weg A)
- Die Seite läuft bei **Hostinger Horizons** (Business-Tarif, Vertrag verlängert). Der Code hier ist Arbeitsgrundlage und Sicherung. Änderungen gehen per Anweisung an Horizons ins Live-System, nicht durch Hochladen aus GitHub.
- Horizons verwaltet `robots.txt` und `sitemap.xml` selbst (schreibgeschützt, Antwort des Horizons-Assistenten 09.11. und 10.11.). Edit-Versuche mit `.htaccess`, `robots.txt` und `sitemap.xml` am Klon blieben ohne Wirkung. SEO- und Indexierungsoptionen lassen sich nur per Prompt einstellen.
- Echte 301-Weiterleitungen und echter 404-Status sind in Horizons nicht verfügbar. Alte Adressen springen per Skript (`src/App.jsx`), Fehlerseite meldet Status 200. Bewusst zurückgestellt, kleine SEO-Schwäche, Besucher merken nichts.
- Newsletter: Formular ruft `/hcgi/api/newsletter` (Horizons-Plattform). Der Server hält den Reach-Schlüssel und leitet an Hostinger Reach weiter. Die Datenbank (PocketBase) nutzt die Website nicht.
- Weg B (eigene Website aus GitHub, ebenfalls bei Hostinger) ist nur eine Option für später. Dafür wären nötig: Newsletter-Server selbst betreiben, `/hcgi`-Aufrufe anpassen, Reach-Schlüssel als Umgebungsvariable. Fotos liegen dafür bereits im Zweig `fotos-lokal`.

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

## Go-live-Checkliste 17.12.2026 (Weg A, über Horizons)
1. `noindex` und Entwurf-Banner entfernen (per Anweisung an Horizons). Erst nach ausdrücklichem GO des Coaches.
2. Canonical und `og:url` **fest auf https://www.coachrocky.de** + Pfad setzen (nicht aus der aktuellen Domain ableiten). Das ersetzt die fehlende Weiterleitung coachrocky.de -> www.
3. Cookie-Banner: Ablehnen und Akzeptieren gleichwertig, Google Ads und Meta-Pixel erst nach Einwilligung (Logik in `src/lib/cookieConsent.js`, `consent.js`).
4. Newsletter-Formular erst aktivieren, wenn Double-Opt-in in Hostinger Reach abgeschaltet ist.
5. Nach dem Go-live Sitemap der Plattform prüfen. Ist sie veraltet (enthält Weiterleitungsseiten, lässt Standort, Shop, Wissen, App, Newsletter aus), den Horizons-Assistenten per Prompt um Aktualisierung bitten. Search Console und Unternehmensprofil legt der Coach mit dem Gmail-Konto an.
6. Alte Adressen aus dem Original vorher gegen die Original-Sitemap prüfen.
7. Nach dem Go-live prüfen: alle 12 Seiten laden, Canonical zeigt auf www, Tracking erst nach Einwilligung, Newsletter-Status.

## Später, ohne Eile
- Echte 301-Weiterleitungen, echter 404-Status, eigene Sitemap: nur mit Weg B oder Änderungen auf DNS-Ebene (kein Cloudflare vor dem Go-live, DNS liegt bei Hostinger).
