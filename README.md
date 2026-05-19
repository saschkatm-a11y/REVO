# REVO

Private, offline-first mobile App zur einfachen digitalen Rechnungserstellung und Betriebsverwaltung.

## App-Tutorial

Eine ausführliche Anleitung für Installation, ersten Start, Produkte, Bestellungen, Rechnungen, Finanzen, Monatsabschluss und Backups steht hier:

[REVO App-Tutorial](docs/app-tutorial.md)

## GitHub Pages

Die GitHub-Page liegt im Ordner `docs/`:

- [Landingpage](docs/index.html)
- [App-Tutorial](docs/app-tutorial.md)

Zum Veröffentlichen in GitHub:

1. Repository auf GitHub öffnen.
2. `Settings > Pages` öffnen.
3. Unter `Build and deployment` die Quelle `Deploy from a branch` auswählen.
4. Branch `main` und Ordner `/docs` auswählen.
5. Speichern.

Danach stellt GitHub die REVO-Seite automatisch bereit.

Die geplante Custom Domain für REVO ist:

```text
revo.saschaskaskaden.de
```

Bei IONOS muss dafür die Subdomain `revo` als `CNAME` auf `saschkatm-a11y.github.io` zeigen.

## Architektur

- Expo / React Native mobile app
- SQLite lokal über `expo-sqlite`
- Keine Demo-Seeds und keine Beispieldaten
- Lokale PDFs, Backups und Monatsarchive im App-Dokumentenordner
- Optionale Google-Drive-Anbindung mit eingeschränktem `drive.file` Scope
- iOS-inspirierte UI mit weichen Karten, Blur-Navigation, Segment Tabs und Mikroanimationen

## Start

```bash
npm install
npm run start
```

Für Google Drive müssen eigene OAuth Client IDs gesetzt werden:

```bash
EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS=...
EXPO_PUBLIC_GOOGLE_CLIENT_ID_ANDROID=...
EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB=...
```

Die App funktioniert auch ohne diese Werte vollständig lokal. Google Drive zeigt dann einen freundlichen leeren Zustand.

## Lokale Dateien

Die App speichert unter `BetriebsManager/`:

- `Rechnungen/Jahr/`
- `Bestellungen/`
- `Bestelllisten/`
- `Monatsberichte/`
- `Archive/`
- `Backups/`
- `Datenbank/`

Bestelllisten-PDFs werden beim Erzeugen einer neuen Bestellliste automatisch ersetzt. Es gibt nur eine aktuelle Datei: `Aktuelle_Bestellliste.pdf`. Rechnungs-PDFs werden nicht automatisch gelöscht.

## Wichtige Regel

Die Datenbank startet leer. Es werden keine Kategorien, Produkte, Kunden, Rechnungen oder Kosten automatisch angelegt.
