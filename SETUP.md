# 🚀 TanzaBoost - GitHub Setup Anleitung

## Schnellstart

### 1. GitHub Repository erstellen

**Du hast zwei Optionen:**

#### Option A: Bestehenden GitHub-Account verwenden (Empfohlen) ✅

1. Logge dich mit deinem bestehenden GitHub-Account ein
2. Klicke auf "New repository" (grüner Button)
3. Repository-Name: `TanzaBoost`
4. Wähle "Public" (für kostenlose GitHub Pages)
5. **WICHTIG:** Lasse "Initialize this repository with a README" **NICHT** angehakt
6. Klicke auf "Create repository"
7. **URL wird sein:** `https://github.com/DEIN-USERNAME/TanzaBoost`
8. **GitHub Pages URL:** `https://DEIN-USERNAME.github.io/TanzaBoost/`

#### Option B: Neuen GitHub-Account mit Benutzernamen "TanzaBoost" erstellen

1. Gehe zu [GitHub.com](https://github.com) und erstelle einen neuen Account
2. Benutzername: `TanzaBoost` (oder falls bereits vergeben, einen ähnlichen Namen wählen)
3. Nach dem Login: Klicke auf "New repository" (grüner Button)
4. Repository-Name: `TanzaBoost`
5. Wähle "Public" (für kostenlose GitHub Pages)
6. **WICHTIG:** Lasse "Initialize this repository with a README" **NICHT** angehakt
7. Klicke auf "Create repository"
8. **URL wird sein:** `https://github.com/TanzaBoost/TanzaBoost`
9. **GitHub Pages URL:** `https://tanzaboost.github.io/TanzaBoost/`

### 2. Lokales Repository initialisieren

Öffne ein Terminal im `TanzaBoost` Ordner und führe aus:

```bash
cd /home/ralf/Dokumente/marketing/Websites/TanzaBoost

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: TanzaBoost Website"

# Branch auf 'main' umbenennen
git branch -M main

# GitHub Repository als Remote hinzufügen
# ERsetze DEIN-USERNAME mit deinem GitHub-Benutzernamen!
# Oder wenn du einen Account "TanzaBoost" erstellt hast: https://github.com/TanzaBoost/TanzaBoost.git
git remote add origin https://github.com/DEIN-USERNAME/TanzaBoost.git

# Code zu GitHub pushen
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben im Menü)
3. Scrolle zu **Pages** (links im Menü)
4. Unter **Source** wähle: **"GitHub Actions"**
5. Die Seite wird automatisch gebaut und ist nach wenigen Minuten verfügbar unter:
   ```
   https://DEIN-USERNAME.github.io/TanzaBoost/
   ```
   (Ersetze DEIN-USERNAME mit deinem GitHub-Benutzernamen)

### 4. Automatisches Deployment

Ab jetzt wird die Seite automatisch aktualisiert, wenn du Änderungen pusht:

```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

Die Seite wird innerhalb von 1-2 Minuten aktualisiert!

## 📝 Wichtige Hinweise

- Die Website ist eine statische Seite, kein Build-Schritt erforderlich
- Alle Dateien werden direkt auf GitHub Pages bereitgestellt
- Die URL ist: `https://DEIN-USERNAME.github.io/TanzaBoost/` (ersetze DEIN-USERNAME)
- Für eine Custom Domain siehe: [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🔧 Troubleshooting

**Problem:** Workflow läuft nicht
- Lösung: Gehe zu Settings → Pages → Source und wähle "GitHub Actions"

**Problem:** Seite ist nicht erreichbar
- Lösung: Warte 2-3 Minuten nach dem ersten Push, dann prüfe erneut

**Problem:** Änderungen werden nicht angezeigt
- Lösung: Prüfe den Workflow-Status unter "Actions" im GitHub Repository

