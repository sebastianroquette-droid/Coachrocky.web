# HTTPS/SSL Security Audit Report

**Datum:** 2026-05-02
**Status:** Audit abgeschlossen

Dieses Dokument fasst die Ergebnisse der Überprüfung aller HTTP/HTTPS-Einstellungen, API-Aufrufe und Sicherheits-Header im Projekt zusammen.

## 1. Frontend API-Aufrufe (`apps/web/src`)
- **`apiServerClient.js`**: Verwendet den relativen Pfad `"/hcgi/api"`. Dies ist **sicher** und Best Practice, da der Client so automatisch das Protokoll der aktuellen Seite übernimmt (HTTPS in der Produktion, HTTP nur lokal).
- **Komponenten (`NewsletterForm.jsx`, `WarumKrafttrainingFrauenPage.jsx`, etc.)**: Alle `fetch()`-Aufrufe nutzen den `apiServerClient` und sind somit implizit über HTTPS abgesichert. Es gibt keine hartkodierten `http://` URLs im Code.
- **Externe Links & Assets (`Footer.jsx` etc.)**:
  - Logo-Bild: `https://horizons-cdn.hostinger.com/...` (HTTPS ✅)
  - Google Maps Link: `https://maps.google.com/...` (HTTPS ✅)

## 2. Backend API-Aufrufe (`apps/api/src`)
- **`main.js`**: Der Express-Server bindet an einen Port und loggt `http://localhost:3001`. Dies ist **korrekt und sicher**, da die SSL-Terminierung (Verschlüsselung) auf Ebene des Reverse Proxies (Hostinger) stattfindet. Interner Traffic zum Node.js-Prozess darf unverschlüsselt (HTTP) bleiben.
- **Externe Aufrufe in Routes**:
  - `hostinger-reach.js`: Nutzt `fetch()` an `https://api.reach.hostinger.com/v1/contacts` (HTTPS ✅)
  - `newsletter.js`: Nutzt `fetch()` an `process.env.HOSTINGER_REACH_URL` (wird über Environment als HTTPS geladen ✅)

## 3. Environment Variablen (`apps/api/.env`)
- `HOSTINGER_REACH_URL=https://developers.hostinger.com/api/reach/v1/contacts` (HTTPS ✅)
- Es wurden in der bereitgestellten Konfiguration **keine** unsicheren HTTP-URLs für externe Dienste gefunden.

## 4. Externe APIs
- **Hostinger Reach API**: Alle Aufrufe im Backend leiten strikt an `https://` URLs weiter.
- **Google Analytics / Facebook Pixel**: Externe Skripte und Tracking-Pixel für diese Dienste (eingebunden über Tracker-Komponenten) nutzen standardmäßig sicheres HTTPS.

## 5. Sicherheits-Header (Express.js)
Die Basis-Sicherheit wird durch die Middleware `helmet()` in `main.js` bereitgestellt.
- **HSTS (Strict-Transport-Security)**: Wird von `helmet()` standardmäßig aktiviert (meist `max-age=15552000; includeSubDomains`). Dies zwingt Browser, zukünftig immer HTTPS zu verwenden. ✅
- **X-Frame-Options**: Wird von `helmet()` auf `SAMEORIGIN` gesetzt. Schützt vor Clickjacking. ✅
- **X-Content-Type-Options**: Wird von `helmet()` auf `nosniff` gesetzt. Verhindert MIME-Type-Sniffing. ✅
- **Content-Security-Policy (CSP)**: Wird von neueren `helmet()`-Versionen restriktiv gesetzt. Da externe Assets geladen werden (Bilder von Hostinger CDN, Skripte von Google/Meta), könnte die Standard-CSP hier zu streng sein und legitime Aufrufe blockieren.

## 6. HTTPS-Redirect
- In `main.js` ist `app.use(domainRedirectMiddleware);` als **erstes** Middleware-Glied eingebunden. Außerdem ist `app.set('trust proxy', true);` gesetzt.
- Dies ist hervorragend: `trust proxy` ist zwingend erforderlich, damit Express hinter dem Hostinger-Proxy den tatsächlichen Ursprung und das Protokoll (HTTPS) ausliest. Die Redirect-Logik selbst befindet sich in der verborgenen `domain-redirect.js`.

---

## 7. Zusammenfassung & Maßnahmen für Phase 2

**Gefundene HTTP URLs:**
- Es wurden **keine kritischen HTTP-URLs** für externe API-Aufrufe, Assets oder Integrationen gefunden. Das System nutzt bereits konsequent HTTPS.
- HTTP-Referenzen beschränken sich ausschließlich auf die lokalen Development-Ports (`http://localhost:3001` / `http://localhost:3000`), was beabsichtigt und technisch korrekt ist.

**Notwendige Anpassungen für die nächste Phase:**

1. **CSP (Content-Security-Policy) optimieren (`apps/api/src/main.js`)**
   Die `helmet()`-Konfiguration sollte explizit erweitert werden, um folgende externe Ressourcen explizit zu erlauben (Verhinderung von Blockaden durch den Browser):
   - Bilder: `https://horizons-cdn.hostinger.com`
   - Skripte: Google Analytics (`https://*.google-analytics.com`, `https://*.googletagmanager.com`), Meta Pixel (`https://connect.facebook.net`)

2. **Redirect-Middleware verifizieren (`apps/api/src/middleware/domain-redirect.js`)**
   Sicherstellen, dass die Datei folgende Prüfung enthält, um HTTP explizit auf HTTPS umzuleiten (falls nicht ohnehin durch den Hostinger-Proxy abgewickelt):