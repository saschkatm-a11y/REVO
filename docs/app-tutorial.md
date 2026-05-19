---
layout: default
title: REVO App-Tutorial
description: Anleitung für Installation, ersten Start, Produkte, Bestellungen, Rechnungen, Finanzen, Monatsabschluss und Backups.
---

# REVO App-Tutorial

REVO ist eine private Offline-First-App zur einfachen digitalen Rechnungserstellung und Betriebsverwaltung für den deutschen Markt. Die App speichert Daten lokal auf dem Gerät, erstellt PDFs lokal und kann Backups lokal oder optional über Google Drive sichern.

Dieses Tutorial erklärt die wichtigsten Abläufe für Nutzer und Tester.

## 1. Installation

### APK installieren

1. Lade die aktuelle APK aus dem GitHub-Release herunter.
2. Öffne die APK auf deinem Android-Gerät.
3. Erlaube bei Bedarf die Installation aus dieser Quelle.
4. Starte die App mit dem Namen `REVO`.

Hinweis: REVO wird privat bereitgestellt und nicht über einen offiziellen App Store verteilt.

### Für Entwickler starten

```bash
npm install
npm run start
```

Danach kann die App mit Expo Go oder einem Entwicklungs-Build getestet werden.

## 2. Erster App-Start

Beim ersten Start läuft REVO immer in dieser Reihenfolge:

1. Nutzungsbedingungen und rechtliche Hinweise akzeptieren
2. Firmendaten einrichten oder später hinzufügen
3. Dashboard öffnen

Das Dashboard ist erst erreichbar, wenn die Nutzungsbedingungen akzeptiert wurden und das Firmendaten-Setup abgeschlossen oder übersprungen wurde.

## 3. Nutzungsbedingungen akzeptieren

Beim ersten Start erscheint zuerst die Seite `Nutzungsbedingungen und rechtliche Hinweise für REVO`.

Du musst alle Checkboxen aktivieren:

- Nutzungsbedingungen gelesen und verstanden
- REVO ersetzt keine steuerliche, rechtliche, buchhalterische oder finanzielle Beratung
- Du bist selbst für die Richtigkeit deiner Daten und Rechnungen verantwortlich

Erst danach wird der Button `Akzeptieren und fortfahren` aktiv.

Die Zustimmung wird lokal gespeichert. Die Seite erscheint nur erneut, wenn die Nutzungsbedingungen aktualisiert werden oder die App-Daten zurückgesetzt werden.

## 4. Firmendaten einrichten

Nach den Nutzungsbedingungen öffnet sich das Firmendaten-Setup.

Du kannst folgende Angaben eintragen:

- Firmenname
- Adresse
- Steuernummer
- USt-IdNr.
- Logo

Mit `Speichern und Einrichtung abschließen` werden die Angaben gespeichert. Sie erscheinen später auf Rechnungs-PDFs, sofern sie eingetragen wurden.

Mit `Später hinzufügen` kannst du die App direkt öffnen. In diesem Fall zeigt REVO später einen dezenten Hinweis, dass Firmendaten noch unvollständig sind. Rechnungen können trotzdem erstellt werden, aber vor dem PDF-Export warnt die App bei fehlenden Pflichtangaben.

Firmendaten kannst du später unter `Dashboard > Einstellungen > Firmendaten vervollständigen` ändern.

## 5. Dashboard

Das Dashboard ist die Startseite der App. Dort findest du Schnellzugriffe auf:

- Kunden erstellen
- Bestellungen
- Produkte
- Rechnungen
- Einkaufsliste
- Monatsabschluss
- Backup
- Einstellungen

Außerdem zeigt das Dashboard wichtige Kennzahlen wie offene Bestellungen, offene Rechnungen, geplante Einkaufskosten und Finanzwerte des aktuellen Monats.

## 6. Kunden verwalten

Kunden werden für Bestellungen und Rechnungen benötigt.

So legst du einen Kunden an:

1. Öffne das Dashboard.
2. Tippe auf `Kunde erstellen`.
3. Trage die Kundendaten ein.
4. Speichere den Kunden.

Du kannst Kunden später bearbeiten oder löschen. Bestehende Rechnungen und Bestellungen behalten ihre gespeicherten Kundendaten.

## 7. Kategorien und Produkte anlegen

Produkte bilden die Grundlage für Bestellungen, Bestelllisten, Rechnungen, Einkaufsliste und Finanzen.

### Kategorie erstellen

1. Öffne `Produkte`.
2. Wechsle auf `Kategorien`.
3. Tippe auf `+ Neue Kategorie erstellen`.
4. Gib den Kategorienamen ein.
5. Speichere die Kategorie.

### Produkt erstellen

1. Öffne `Produkte`.
2. Bleibe im Tab `Produkte`.
3. Tippe auf `+ Produkt hinzufügen`.
4. Trage Produktname, Artikelnummer, Kategorie, Verkaufspreis, Einkaufspreis, MwSt.-Satz, Einheit/Gebinde und optional Lieferant ein.
5. Speichere das Produkt.

Bei der MwSt. kann je Produkt zwischen `7%` und `19%` gewählt werden. Diese Einstellung wird später für Rechnung und Finanzbereich verwendet.

Die Einheit/Gebinde ist frei beschreibbar, zum Beispiel:

- `1 kg`
- `1 Packung`
- `6 Flaschen`
- `1 Karton`

## 8. Bestellliste als PDF erstellen

Unter `Produkte` kannst du eine Bestellliste als PDF erstellen.

Die Bestellliste enthält:

- Titel `BESTELLLISTE`
- Datum
- Produkte nach Kategorien gruppiert
- Artikelnummer
- Artikelname
- Preis je Einheit inkl. MwSt.
- freie Spalte für Bestellmenge
- Einheit
- Seitenzahlen

Wichtig: Es existiert immer nur eine aktuelle Bestellliste. Wenn du eine neue Bestellliste erstellst, ersetzt REVO die alte Datei automatisch. So bleibt der Speicherverbrauch klein.

## 9. Neue Bestellung erstellen

Bestellungen werden aus den vorhandenen Produkten erstellt.

So funktioniert es:

1. Öffne `Bestellungen`.
2. Tippe auf `+`.
3. Wähle optional einen Kunden aus.
4. Trage bei den gewünschten Produkten die Menge ein.
5. Speichere die Bestellung.

Die Produktliste bleibt untereinander sichtbar. Du kannst bei jedem Produkt direkt die gewünschte Menge eintragen.

Solange die Bestellung aktiv ist, erscheint sie im Bereich `Bestellungen`.

## 10. Bestellung bezahlen oder Rechnung erstellen

In einer Bestellung gibt es mehrere Aktionen:

- `Bezahlt`: Erstellt eine Rechnung, trägt die Zahlung ein und entfernt die Bestellung aus der aktiven Bestellliste.
- `Rechnung`: Erstellt eine Rechnung aus der Bestellung.
- `PDF`: Erstellt ein Bestell-PDF.
- `Löschen`: Entfernt die Bestellung.

Wenn eine Bestellung als bezahlt markiert wurde, findest du sie anschließend im Bereich `Rechnungen`.

## 11. Rechnungen verwalten

Im Bereich `Rechnungen` findest du alle erstellten Rechnungen.

Du kannst:

- nach Rechnungsnummer suchen
- nach Kunde, Datum oder Status suchen
- Rechnungen öffnen
- Rechnungs-PDFs öffnen oder teilen
- versehentlich erstellte Rechnungen löschen

Rechnungsnummern werden fortlaufend vergeben:

```text
RE-2026-001
RE-2026-002
RE-2026-003
```

Wichtig: Die Nummerierung wird nicht zurückgesetzt, wenn Rechnungen gelöscht werden oder ein Monatsabschluss gemacht wurde. Dadurch bleiben Rechnungsnummern eindeutig.

## 12. Einkaufsliste

Die Einkaufsliste fasst offene Bestellungen automatisch zusammen.

Beispiel:

- Kunde A bestellt `3 kg Lachs`
- Kunde B bestellt `5 kg Lachs`

Dann zeigt die Einkaufsliste:

```text
Lachs: 8 kg kaufen
```

Die Einkaufsliste nutzt nur aktive, noch nicht bezahlte Bestellungen.

## 13. Finanzen

Der Bereich `Finanzen` zeigt den aktuellen Monat.

REVO berechnet:

- Umsatz brutto
- Einkaufskosten intern für die Gewinnberechnung
- Gewinn vor MwSt.
- MwSt. ans Finanzamt
- MwSt. 7%
- MwSt. 19%
- Laden-Gewinn nach MwSt.
- offene Forderungen

Die Einkaufskosten werden für die Gewinnberechnung verwendet, aber nicht als eigene Ausgabenliste in den Vordergrund gestellt.

Die MwSt. wird je Produkt nach dem gespeicherten Satz berechnet. Produkte mit `7%` und Produkte mit `19%` werden getrennt ausgewiesen.

Hinweis: REVO ist keine Steuerberatung. Prüfe die Werte vor Verwendung selbst oder mit einem Steuerberater.

## 14. Monatsabschluss

Der Monatsabschluss erstellt ein Archiv für einen Monat.

So funktioniert es:

1. Öffne `Monatsabschluss`.
2. Tippe auf `Monat abschließen`.
3. Wähle im Speichern-Dialog den Speicherort aus.
4. REVO erstellt ein ZIP-Archiv.

Das Archiv enthält je nach vorhandenen Daten:

- Rechnungs-PDFs
- Bestellungen
- Bestelllisten
- Monatsbericht
- Finanzübersicht
- Datenbank-Snapshot
- durchsuchbare Metadaten

Nach einem erfolgreichen Monatsabschluss erscheint ein Bereich zum Bereinigen. Dort kannst du die Rechnungen dieses abgeschlossenen Monats aus der aktiven App löschen. Das Archiv bleibt erhalten, und der neue Monat startet sauberer.

## 15. Backup

Backups können lokal erstellt werden.

So erstellst du ein Backup:

1. Öffne `Backup`.
2. Tippe auf `Backup erstellen`.
3. Wähle den Speicherort aus.
4. REVO erstellt eine lokale Sicherung.

Backups enthalten wichtige lokale App-Dateien wie Datenbank, PDFs, Archive und Einstellungen.

## 16. Google Drive

Google Drive ist optional. Die App funktioniert auch ohne Internet vollständig lokal.

Für Google Drive wird eine eigene OAuth Client ID benötigt. Ohne konfigurierte OAuth Client ID zeigt REVO einen freundlichen Hinweis und erlaubt weiterhin lokale Backups.

Die benötigten Umgebungsvariablen sind:

```bash
EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS=...
EXPO_PUBLIC_GOOGLE_CLIENT_ID_ANDROID=...
EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB=...
```

Nach erfolgreicher Verbindung kann REVO Backups und Archive in Google Drive hochladen.

## 17. Einstellungen

Unter `Einstellungen` kannst du:

- Sprache ändern
- Hellmodus, Darkmode oder Systemstandard wählen
- Akzentfarbe ändern
- Firmendaten vervollständigen
- Infos und Credits lesen

Die Standard-Akzentfarbe ist Türkis. Änderungen werden sofort sichtbar und lokal gespeichert.

## 18. Lokale Speicherung

REVO arbeitet offline-first.

Die App speichert lokal:

- SQLite-Datenbank
- Rechnungs-PDFs
- Bestelllisten-PDF
- Monatsarchive
- Backups
- Einstellungen

Die App startet ohne Beispieldaten. Es werden keine Demo-Produkte, Fake-Kunden oder Beispielpreise angelegt.

## 19. APK lokal bauen

Wenn du selbst eine APK bauen möchtest:

```bash
npm install
npm run typecheck
cd android
.\gradlew.bat assembleRelease
```

Die APK liegt danach normalerweise hier:

```text
android/app/build/outputs/apk/release/app-release.apk
```

Die aktuelle App-Version steht in:

- `package.json`
- `app.json`
- `android/app/build.gradle`

## 20. Rechtlicher Hinweis

REVO ist ein kostenloses privates Hobby-Projekt zur einfachen digitalen Rechnungserstellung für den deutschen Markt.

Die App stellt keine steuerliche, rechtliche, buchhalterische oder finanzielle Beratung dar. Alle Rechnungen, Steuerangaben, Preise und Pflichtangaben müssen vor Verwendung eigenständig geprüft werden.
