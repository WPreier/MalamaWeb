# Versionierung – MalamaWeb

## Schema

```
MAJOR.MINOR.PATCH
   ?     ?     ??? Patch: kleine Fixes, Texte, Quick Wins, Doku
   ?     ????????? Minor: neue Seiten/Features ohne Breaking Change
   ??????????????? Major: grundlegende Umbauten / Breaking Changes
```

Aktuelle Version steht in:

| Ort | Zweck |
|---|---|
| `VERSION` | eine Zeile, z.?B. `0.1.1` – Quelle der Wahrheit |
| `theweb/index.html` | `<meta name="version" content="…">` und sichtbarer Footer-Hinweis |
| `CHANGELOG.md` | alle Änderungen mit **Datum** und **Versionsnummer** |

## Wann welche Nummer erhöhen?

| Änderung | Beispiel | Neue Version |
|---|---|---|
| Tippfehler, CSS-Feintuning, Doku | Patch | `0.1.1` ? `0.1.2` |
| Neue Seite oder Feature | Minor | `0.1.2` ? `0.2.0` |
| Kompletter Relaunch / Breaking | Major | `0.2.0` ? `1.0.0` |

## Ablauf bei jeder Änderung

1. Arbeit erledigen und lokal prüfen (`theweb/` im Browser).
2. In `CHANGELOG.md` unter einer neuen Überschrift eintragen:
   ```md
   ## [0.1.2] – JJJJ-MM-TT

   ### Geändert
   - Kurze Beschreibung
   ```
3. Datei `VERSION` auf die neue Nummer setzen.
4. In `theweb/index.html` die Meta-Version und den Footer-Text anpassen.
5. Commit mit Hinweis auf die Version, z.?B.:
   ```
   Release 0.1.2: Kurzbeschreibung
   ```
6. Nach GitHub pushen (`origin` ? `https://github.com/WPreier/MalamaWeb.git`).
7. Inhalt von `theweb/` online deployen (siehe [PROJEKTDOKUMENTATION.md](PROJEKTDOKUMENTATION.md)).

## Git-Hinweis (Google Drive)

Dieses Projekt liegt oft in „Meine Ablage“. Google Drive kann Git-Dateien umbenennen (`HEAD (1)`, `config (2)`). Dann erkennt Git das Repo nicht mehr.

Reparatur:

```powershell
cd "…\MalamaWeb"
Move-Item -Force ".git\HEAD (1)" ".git\HEAD"
Move-Item -Force ".git\config (2)" ".git\config"
git status
```

Danach wieder normal committen und pushen.
