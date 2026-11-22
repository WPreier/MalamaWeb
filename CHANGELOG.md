# Changelog

Alle wesentlichen Änderungen an diesem Projekt werden hier dokumentiert.

Format: **Semantic Versioning** `MAJOR.MINOR.PATCH`  
Beispiel: `0.1.1` ? Major `0`, Minor `1`, Patch `1`

Regeln siehe [docs/VERSIONIERUNG.md](docs/VERSIONIERUNG.md).

---

## [0.2.1] – 2026-11-22

### Geändert
- Startseite und globales CSS: professionellerer Auftritt (Typografie, Abstände, Hover, Fokus)
- Hero: Markenzeile „Malama IT“, klarere Text-/Visual-Anordnung
- Emoji-Icons durch SVG-Icons ersetzt (Leistungen, Vorteile, Theme-Toggle)
- Header mit Blur und Scroll-Zustand; dezente Reveal-Animationen
- Theme-Toggle und Scroll-Verhalten in `main.js` überarbeitet

---

## [0.2.0] – 2026-11-20

### Hinzugefügt
- `/.well-known/security.txt` (RFC 9116) mit Kontakt und Gültigkeit bis 2027-11-20
- `robots.txt` und `sitemap.xml` für Suchmaschinen
- `humans.txt` und `site.webmanifest`
- `404.html` Fehlerseite
- `.htaccess` mit Security-Headern, Cache und ErrorDocument (Apache)
- Canonical-URLs, Twitter Cards, theme-color, apple-touch-icon auf allen Seiten
- JSON-LD Structured Data (`ProfessionalService`) auf der Startseite

### Geändert
- Versionsnummer in `index.html` auf 0.2.0

---

## [0.1.1] – 2026-11-20

### Hinzugefügt
- Kontaktseite `theweb/kontakt.html` mit Anfrageformular und Durchwahlen
- IT-Kostenkompass-Seite `theweb/kosten.html` (Einbindung von `kompass.js`)
- Datenschutzerklärung `theweb/datenschutz.html`
- Lokale DM-Sans-Schriftarten unter `theweb/assets/fonts/` (ohne Google Fonts)
- Favicon und Open-Graph-Bild
- Meta-Descriptions und OG-Tags auf allen Seiten
- Sticky-Mobile-Leiste (Anrufen / Anfrage senden)
- Abschnitt „So klingt der Unterschied“ auf der Startseite
- Trust-Leiste unter dem Hero (Erfahrung, RZ Österreich, Rückmeldung, Standorte)
- Projektdokumentation und Versionierung (`docs/PROJEKTDOKUMENTATION.md`, `docs/VERSIONIERUNG.md`)

### Geändert
- Zielregion: Ostösterreich
- Navigation: PPC-Logo vom Header in den Footer; Menüpunkt „Kosten“; CTAs auf Kontaktseite
- Hero: Claim, Subline, Buttons „Erstgespräch“ und „Was kostet meine IT?“
- Referenzen: Platzhalter durch Trust-Block ersetzt
- Hosting: Hinweis auf interne Kalkulation entfernt, „netto“ statt „VK“, Link zum Kompass
- Impressum: Fokus auf Rechtliches, Verweis auf Kontakt und Datenschutz
- Footer: „Made with Grok“ entfernt; Datenschutz-Link; PPC-Logo
- Signatur: Standort Leobendorf entfernt

### Behoben
- Git-Metadaten nach Google-Drive-Umbenennung (`config` / `HEAD`) wiederhergestellt

---

## [0.1.0] – 2026-11-20

### Hinzugefügt
- Initiale statische Website (`theweb/`)
- Logos, Feedback-Dokumente, Hosting-/Server-Kalkulationen
- Erstes Repository-Setup auf GitHub (`WPreier/MalamaWeb`)
