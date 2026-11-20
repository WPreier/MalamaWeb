# Projektdokumentation – MalamaWeb

Stand: **2026-11-20** · Website-Version: **0.1.1**

Malama IT GmbH – IT-Dienstleistungen in Ostösterreich.  
Claim: „IT, die sich kümmert.“

---

## 1. Was liegt wo?

```
MalamaWeb/
??? VERSION                 ? aktuelle Versionsnummer (eine Zeile)
??? CHANGELOG.md            ? alle Änderungen mit Datum + Version
??? README.md               ? Kurzüberblick + Deploy
??? .gitignore
??? theweb/                 ? ? ONLINE-INHALT (nur das deployen)
?   ??? index.html          ? Startseite (enthält Versionsnummer)
?   ??? kontakt.html
?   ??? kosten.html         ? IT-Kostenkompass
?   ??? hosting.html        ? Hosting-Detailkalkulation
?   ??? referenzen.html
?   ??? impressum.html
?   ??? datenschutz.html
?   ??? assets/
?       ??? css/styles.css
?       ??? fonts/          ? lokale DM Sans (DSGVO)
?       ??? js/main.js, kompass.js, hosting-calc.js
?       ??? images/
??? docs/                   ? interne Dokumentation & Entwürfe
?   ??? PROJEKTDOKUMENTATION.md  ? diese Datei
?   ??? VERSIONIERUNG.md
?   ??? *.docx / *.pdf      ? Feedback, Agentur-Entwürfe, Rechnungen
??? calc/                   ? Excel-Kalkulationen (intern)
??? Malama_Logo/            ? Logos, Vorlagen, Signatur
```

| Ordner | Online? | Zweck |
|---|---|---|
| `theweb/` | **Ja** | Öffentliche Website |
| `docs/` | Nein | Feedback, Entwürfe, diese Doku |
| `calc/` | Nein | Interne Preis-/Server-Kalkulation |
| `Malama_Logo/` | Nein | Markenassets |

---

## 2. Seitenübersicht (Website)

| Datei | URL (Beispiel) | Inhalt |
|---|---|---|
| `index.html` | `/` | Start, Leistungen, Über uns, Unterschied, CTA |
| `kontakt.html` | `/kontakt.html` | Formular + Ansprechpartner |
| `kosten.html` | `/kosten.html` | 5-Schritte-Kostenkompass |
| `hosting.html` | `/hosting.html` | Mengenrechner Hosting |
| `referenzen.html` | `/referenzen.html` | Vertrauen / Social Proof |
| `impressum.html` | `/impressum.html` | Rechtliche Angaben |
| `datenschutz.html` | `/datenschutz.html` | DSGVO-Hinweise |

Standorte auf der Site: **Pilgersdorf** und **Wolkersdorf** (nicht Leobendorf).  
Zielregion: **Ostösterreich**.

---

## 3. Online stellen (Deploy)

1. Inhalt von `theweb/` (nicht den Ordnernamen `MalamaWeb`) in den Webroot von **malama.at** kopieren/überschreiben.
2. Besonders mitnehmen: neue HTML-Dateien, `assets/fonts/`, `assets/js/`, `favicon.png`, `og-image.jpg`, `styles.css`.
3. Nicht hochladen: `docs/`, `calc/`, `Malama_Logo/`, `.git`, `VERSION`, `CHANGELOG.md` (dürfen mit, sind aber nicht nötig).
4. Prüfen:
   - https://malama.at/
   - https://malama.at/kontakt.html
   - https://malama.at/kosten.html
   - https://malama.at/datenschutz.html

### Lokale Vorschau

```powershell
cd theweb
npx --yes serve -p 8000
```

Browser: http://localhost:8000

---

## 4. Typische Aufgaben

### Text oder Design anpassen
- HTML in `theweb/*.html`, Styles in `theweb/assets/css/styles.css`
- Nach Änderung: Patch-Version erhöhen und Changelog führen (siehe VERSIONIERUNG.md)

### Kontaktformular
- Statisch: öffnet das E-Mail-Programm an `info@malama.at`
- Kein Server-Backend nötig

### Kostenkompass
- Logik: `theweb/assets/js/kompass.js`
- Markup: `theweb/kosten.html`
- Ergebnis-CTA füllt `kontakt.html` voraus

### Hosting-Rechner
- Logik: `theweb/assets/js/hosting-calc.js`
- Seite: `theweb/hosting.html`

---

## 5. GitHub sichern

Remote: `https://github.com/WPreier/MalamaWeb.git`  
Branch: `main`

```powershell
cd "…\MalamaWeb"
git status
git add -A
git commit -m "Release 0.x.y: Kurzbeschreibung"
git push origin main
```

Das ist die zentrale Sicherung. Zusätzlich bleibt die lokale Kopie (ggf. Google Drive) als Arbeitsordner.

---

## 6. Ansprechpartner (Inhalt)

| Person | Rolle | Telefon |
|---|---|---|
| Ing. Wolfgang Preier | GF · Technik | 0670 / 35 92 519 |
| Jakob Mayer | GF · Betreuung | 0664 / 85 85 826 |

E-Mail allgemein: info@malama.at · Web: https://malama.at/
