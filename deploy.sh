#!/bin/bash

# TanzaBoost - Deployment Script für GitHub
# Dieses Script pusht den Code zu GitHub

echo "🚀 TanzaBoost - Deployment zu GitHub"
echo "====================================="
echo ""

# Prüfe ob Git bereits initialisiert ist
if [ ! -d ".git" ]; then
    echo "📦 Initialisiere Git Repository..."
    git init
    git branch -M main
fi

# Prüfe ob Remote bereits existiert
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Remote 'origin' existiert bereits:"
    git remote get-url origin
    read -p "Möchtest du die Remote-URL ändern? (j/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[JjYy]$ ]]; then
        # Prüfe ob SSH-Key existiert
        if [ -f ~/.ssh/id_ed25519_tanzaboost ] || [ -f ~/.ssh/config ]; then
            echo "🔐 Verwende SSH-Verbindung..."
            git remote set-url origin git@github.com-tanzaboost:TanzaBoost/TanzaBoost.git 2>/dev/null || \
            git remote set-url origin git@github.com:TanzaBoost/TanzaBoost.git
        else
            echo "🌐 Verwende HTTPS-Verbindung..."
            git remote set-url origin https://github.com/TanzaBoost/TanzaBoost.git
        fi
        echo "✅ Remote-URL aktualisiert"
    fi
else
    echo "🔗 Füge GitHub Remote hinzu..."
    # Prüfe ob SSH-Key existiert
    if [ -f ~/.ssh/id_ed25519_tanzaboost ] || [ -f ~/.ssh/config ]; then
        echo "🔐 Verwende SSH-Verbindung..."
        git remote add origin git@github.com-tanzaboost:TanzaBoost/TanzaBoost.git 2>/dev/null || \
        git remote add origin git@github.com:TanzaBoost/TanzaBoost.git
    else
        echo "🌐 Verwende HTTPS-Verbindung..."
        git remote add origin https://github.com/TanzaBoost/TanzaBoost.git
    fi
fi

# Alle Dateien hinzufügen
echo "➕ Füge alle Dateien hinzu..."
git add .

# Commit erstellen
echo "💾 Erstelle Commit..."
git commit -m "Initial commit: TanzaBoost Website" || echo "⚠️  Keine Änderungen zum Committen"

# Zu GitHub pushen
echo "📤 Pushe zu GitHub..."
echo ""

# Prüfe ob SSH verwendet wird
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [[ $REMOTE_URL == *"git@"* ]]; then
    echo "🔐 Verwende SSH-Verbindung (keine Credentials erforderlich)"
else
    echo "⚠️  WICHTIG: Du wirst nach deinen GitHub-Credentials gefragt!"
    echo "   Falls du 2FA aktiviert hast, verwende ein Personal Access Token als Passwort"
    echo ""
    echo "💡 Tipp: Für zukünftige Deployments empfehle ich SSH:"
    echo "   ./setup-ssh.sh"
fi
echo ""
git push -u origin main

echo ""
echo "✅ Deployment abgeschlossen!"
echo ""
echo "📝 Nächste Schritte:"
echo "1. Gehe zu: https://github.com/TanzaBoost/TanzaBoost/settings/pages"
echo "2. Unter 'Source' wähle: 'GitHub Actions'"
echo "3. Die Seite wird dann verfügbar sein unter:"
echo "   https://tanzaboost.github.io/TanzaBoost/"
echo ""

