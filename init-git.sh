#!/bin/bash

# TanzaBoost - Git Initialisierung Script
# Dieses Script initialisiert das lokale Git Repository und verbindet es mit GitHub

echo "🚀 TanzaBoost - Git Repository Initialisierung"
echo "=============================================="
echo ""

# Prüfe ob bereits ein Git Repository existiert
if [ -d ".git" ]; then
    echo "⚠️  Git Repository existiert bereits!"
    read -p "Möchtest du fortfahren? (j/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[JjYy]$ ]]; then
        exit 1
    fi
fi

# Git initialisieren
echo "📦 Initialisiere Git Repository..."
git init

# Alle Dateien hinzufügen
echo "➕ Füge alle Dateien hinzu..."
git add .

# Ersten Commit erstellen
echo "💾 Erstelle ersten Commit..."
git commit -m "Initial commit: TanzaBoost Website"

# Branch auf 'main' umbenennen
echo "🌿 Benenne Branch auf 'main' um..."
git branch -M main

# Remote hinzufügen
echo "🔗 Füge GitHub Remote hinzu..."
echo ""
echo "Welchen GitHub-Benutzernamen verwendest du?"
echo "  A) Bestehenden Account (empfohlen)"
echo "  B) Neuen Account 'TanzaBoost'"
read -p "Wähle (A/B) oder drücke Enter für Option A: " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Bb]$ ]]; then
    GITHUB_USER="TanzaBoost"
    GITHUB_URL="https://github.com/TanzaBoost/TanzaBoost.git"
    PAGES_URL="https://tanzaboost.github.io/TanzaBoost/"
else
    read -p "Gib deinen GitHub-Benutzernamen ein: " GITHUB_USER
    GITHUB_URL="https://github.com/${GITHUB_USER}/TanzaBoost.git"
    PAGES_URL="https://${GITHUB_USER}.github.io/TanzaBoost/"
fi

git remote add origin ${GITHUB_URL}

echo ""
echo "✅ Git Repository erfolgreich initialisiert!"
echo ""
echo "📝 Nächste Schritte:"
echo "1. Erstelle das Repository auf GitHub: https://github.com/new"
echo "   - Name: TanzaBoost"
echo "   - Public wählen"
echo "   - KEIN README initialisieren!"
echo ""
echo "2. Falls du einen anderen Benutzernamen gewählt hast, passe die Remote-URL an:"
echo "   git remote set-url origin https://github.com/DEIN-USERNAME/TanzaBoost.git"
echo ""
echo "3. Dann führe aus:"
echo "   git push -u origin main"
echo ""
echo "4. Aktiviere GitHub Pages:"
echo "   Repository → Settings → Pages → Source: 'GitHub Actions'"
echo ""
echo "🌐 Die Seite wird dann verfügbar sein unter:"
echo "   ${PAGES_URL}"
echo ""

