# Changelog

Alle wesentlichen ƒnderungen an diesem Projekt werden hier dokumentiert.

Format: **Semantic Versioning** `MAJOR.MINOR.PATCH`  
Beispiel: `0.1.1` ? Major `0`, Minor `1`, Patch `1`

Regeln siehe [docs/VERSIONIERUNG.md](docs/VERSIONIERUNG.md).

---

## [0.2.2] ñ 2026-11-22

### Behoben
- Encoding: `kontakt.html`, `kosten.html`, `datenschutz.html`, `404.html` sowie `humans.txt`, `robots.txt`, `security.txt` von Windows-1252 nach UTF-8
- Darstellungsfehler bei Umlauten und Sonderzeichen (ù) auf betroffenen Seiten
- Kaputte Pfeile/`??` in CTAs und Theme-Toggle vereinheitlicht

---

## [0.2.1] ñ 2026-11-22

### Ge‰ndert
- Startseite und globales CSS: professionellerer Auftritt (Typografie, Abst‰nde, Hover, Fokus)
- Hero: Markenzeile ÑMalama ITì, klarere Text-/Visual-Anordnung
- Emoji-Icons durch SVG-Icons ersetzt (Leistungen, Vorteile, Theme-Toggle)
- Header mit Blur und Scroll-Zustand; dezente Reveal-Animationen
- Theme-Toggle und Scroll-Verhalten in `main.js` ¸berarbeitet

---

## [0.2.0] ñ 2026-11-20

### Hinzugef¸gt
- `/.well-known/security.txt` (RFC 9116) mit Kontakt und G¸ltigkeit bis 2027-11-20
- `robots.txt` und `sitemap.xml` f¸r Suchmaschinen
- `humans.txt` und `site.webmanifest`
- `404.html` Fehlerseite
- `.htaccess` mit Security-Headern, Cache und ErrorDocument (Apache)
- Canonical-URLs, Twitter Cards, theme-color, apple-touch-icon auf allen Seiten
- JSON-LD Structured Data (`ProfessionalService`) auf der Startseite

### Ge‰ndert
- Versionsnummer in `index.html` auf 0.2.0

---

## [0.1.1] ñ 2026-11-20

### Hinzugef¸gt
- Kontaktseite `theweb/kontakt.html` mit Anfrageformular und Durchwahlen
- IT-Kostenkompass-Seite `theweb/kosten.html` (Einbindung von `kompass.js`)
- Datenschutzerkl‰rung `theweb/datenschutz.html`
- Lokale DM-Sans-Schriftarten unter `theweb/assets/fonts/` (ohne Google Fonts)
- Favicon und Open-Graph-Bild
- Meta-Descriptions und OG-Tags auf allen Seiten
- Sticky-Mobile-Leiste (Anrufen / Anfrage senden)
- Abschnitt ÑSo klingt der Unterschiedì auf der Startseite
- Trust-Leiste unter dem Hero (Erfahrung, RZ ÷sterreich, R¸ckmeldung, Standorte)
- Projektdokumentation und Versionierung (`docs/PROJEKTDOKUMENTATION.md`, `docs/VERSIONIERUNG.md`)

### Ge‰ndert
- Zielregion: Ostˆsterreich
- Navigation: PPC-Logo vom Header in den Footer; Men¸punkt ÑKostenì; CTAs auf Kontaktseite
- Hero: Claim, Subline, Buttons ÑErstgespr‰chì und ÑWas kostet meine IT?ì
- Referenzen: Platzhalter durch Trust-Block ersetzt
- Hosting: Hinweis auf interne Kalkulation entfernt, Ñnettoì statt ÑVKì, Link zum Kompass
- Impressum: Fokus auf Rechtliches, Verweis auf Kontakt und Datenschutz
- Footer: ÑMade with Grokì entfernt; Datenschutz-Link; PPC-Logo
- Signatur: Standort Leobendorf entfernt

### Behoben
- Git-Metadaten nach Google-Drive-Umbenennung (`config` / `HEAD`) wiederhergestellt

---

## [0.1.0] ñ 2026-11-20

### Hinzugef¸gt
- Initiale statische Website (`theweb/`)
- Logos, Feedback-Dokumente, Hosting-/Server-Kalkulationen
- Erstes Repository-Setup auf GitHub (`WPreier/MalamaWeb`)
