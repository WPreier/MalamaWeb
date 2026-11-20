# MalamaWeb

Website-Quellen, Dokumentation und Kalkulationen für **Malama IT GmbH** (Pilgersdorf, Österreich).

Malama IT bietet IT-Dienstleistungen mit dem Anspruch: „IT, die sich kümmert“.

## Struktur

- `theweb/` – Statische Website (HTML, CSS, JS, Assets)
  - `index.html` – Startseite
  - `hosting.html`, `referenzen.html`, `impressum.html`
  - `assets/` – Styles, Skripte und Bilder
- `docs/` – Feedback-Dokumente, Website-Entwürfe (PDF), Rechnungsunterlagen
- `calc/` – Excel-Kalkulationen (Hosting, Server)
- `Malama_Logo/` – Logos und Vorlagen in verschiedenen Formaten

## Versionierung

Dieses Repository dient der Versionierung aller Quelldateien und Unterlagen des Malama-Web-Projekts.

## Lokale Entwicklung

Die Website ist statisch. Einfach `theweb/index.html` im Browser öffnen oder einen lokalen Server verwenden:

```bash
cd theweb
python3 -m http.server 8000
```

## Lizenz

Internes Projekt von Malama IT GmbH / Wolfgang Preier. Alle Rechte vorbehalten.
