# MalamaWeb

Website-Quellen, Dokumentation und Kalkulationen für **Malama IT GmbH** (Pilgersdorf / Wolkersdorf, Ostösterreich).

**Aktuelle Version: [0.2.0](CHANGELOG.md)** (2026-11-20)  
Claim: „IT, die sich kümmert“.

## Dokumentation

| Datei | Inhalt |
|---|---|
| [docs/PROJEKTDOKUMENTATION.md](docs/PROJEKTDOKUMENTATION.md) | Was wo liegt, Deploy, typische Aufgaben |
| [docs/VERSIONIERUNG.md](docs/VERSIONIERUNG.md) | Versionsnummern, Changelog-Ablauf |
| [CHANGELOG.md](CHANGELOG.md) | Alle Änderungen mit Datum und Nummer |
| [VERSION](VERSION) | Aktuelle Versionsnummer (eine Zeile) |

## Struktur

- `theweb/` – Statische Website (**Deploy-Inhalt**)
- `docs/` – Feedback, Entwürfe, Projektdoku
- `calc/` – Excel-Kalkulationen (Hosting, Server)
- `Malama_Logo/` – Logos und Vorlagen

## Online stellen (Deploy)

Inhalt von `theweb/` in den Webroot von **https://malama.at/** kopieren.  
Details: [docs/PROJEKTDOKUMENTATION.md](docs/PROJEKTDOKUMENTATION.md#3-online-stellen-deploy).

## Lokale Vorschau

```bash
cd theweb
npx --yes serve -p 8000
```

## GitHub

Repository: https://github.com/WPreier/MalamaWeb  
Branch: `main`

## Lizenz

Internes Projekt von Malama IT GmbH / Wolfgang Preier. Alle Rechte vorbehalten.
