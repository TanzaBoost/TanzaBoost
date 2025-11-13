#!/bin/bash

# TanzaBoost - Trigger GitHub Pages Deployment
# Dieses Script triggert den GitHub Pages Workflow

echo "🚀 TanzaBoost - Trigger GitHub Pages Deployment"
echo "==============================================="
echo ""

# Prüfe ob wir in einem Git Repository sind
if [ ! -d ".git" ]; then
    echo "❌ Kein Git Repository gefunden!"
    exit 1
fi

# Prüfe ob Remote existiert
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Kein Remote 'origin' gefunden!"
    exit 1
fi

echo "📝 Erstelle leeren Commit, um Workflow zu triggern..."
echo ""

# Erstelle einen leeren Commit (nur um den Workflow zu triggern)
git commit --allow-empty -m "Trigger GitHub Pages deployment"

echo "📤 Pushe zu GitHub..."
git push origin main

echo ""
echo "✅ Workflow getriggert!"
echo ""
echo "📋 Nächste Schritte:"
echo "1. Gehe zu: https://github.com/TanzaBoost/TanzaBoost/actions"
echo "2. Prüfe den Status des 'Deploy to GitHub Pages' Workflows"
echo "3. Warte 1-2 Minuten, bis der Workflow fertig ist"
echo "4. Die Seite sollte dann verfügbar sein unter:"
echo "   https://tanzaboost.github.io/TanzaBoost/"
echo ""
echo "💡 Falls der Workflow fehlschlägt:"
echo "   - Prüfe die Fehlermeldungen in den Actions"
echo "   - Stelle sicher, dass GitHub Pages auf 'GitHub Actions' eingestellt ist"
echo ""

