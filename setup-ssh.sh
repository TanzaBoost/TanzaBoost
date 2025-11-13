#!/bin/bash

# TanzaBoost - SSH Key Setup für GitHub
# Dieses Script erstellt einen SSH-Key und zeigt Anweisungen für GitHub

echo "🔐 TanzaBoost - SSH Key Setup für GitHub"
echo "========================================"
echo ""

# Prüfe ob bereits ein SSH-Key für GitHub existiert
if [ -f ~/.ssh/id_ed25519_tanzaboost ] || [ -f ~/.ssh/id_rsa_tanzaboost ]; then
    echo "⚠️  Es existiert bereits ein SSH-Key für TanzaBoost!"
    read -p "Möchtest du einen neuen erstellen? (j/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[JjYy]$ ]]; then
        echo "✅ Verwende bestehenden Key"
        exit 0
    fi
fi

# Erstelle SSH-Key
echo "🔑 Erstelle neuen SSH-Key für TanzaBoost..."
echo ""
read -p "Gib deine GitHub E-Mail-Adresse ein: " GITHUB_EMAIL

if [ -z "$GITHUB_EMAIL" ]; then
    echo "❌ E-Mail-Adresse ist erforderlich!"
    exit 1
fi

# Erstelle ed25519 Key (empfohlen, moderner und sicherer)
SSH_KEY_NAME="id_ed25519_tanzaboost"
SSH_KEY_PATH="$HOME/.ssh/$SSH_KEY_NAME"

echo ""
echo "📝 Erstelle SSH-Key..."
ssh-keygen -t ed25519 -C "$GITHUB_EMAIL" -f "$SSH_KEY_PATH" -N ""

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SSH-Key erfolgreich erstellt!"
    echo ""
    echo "📋 Nächste Schritte:"
    echo ""
    echo "1. Zeige deinen öffentlichen SSH-Key an:"
    echo "   cat $SSH_KEY_PATH.pub"
    echo ""
    echo "2. Kopiere den gesamten Inhalt (beginnt mit 'ssh-ed25519 ...')"
    echo ""
    echo "3. Füge den Key zu GitHub hinzu:"
    echo "   https://github.com/TanzaBoost/TanzaBoost/settings/keys"
    echo "   Oder: https://github.com/settings/ssh/new"
    echo ""
    echo "   - Klicke auf 'New SSH key'"
    echo "   - Title: z.B. 'TanzaBoost Laptop'"
    echo "   - Key: Füge den kopierten Key ein"
    echo "   - Klicke auf 'Add SSH key'"
    echo ""
    echo "4. Teste die Verbindung:"
    echo "   ssh -T git@github.com -i $SSH_KEY_PATH"
    echo ""
    echo "5. Konfiguriere Git für diesen Key:"
    echo "   Erstelle/edit ~/.ssh/config und füge hinzu:"
    echo ""
    echo "   Host github.com-tanzaboost"
    echo "     HostName github.com"
    echo "     User git"
    echo "     IdentityFile $SSH_KEY_PATH"
    echo ""
    echo "6. Dann verwende diese Remote-URL:"
    echo "   git remote set-url origin git@github.com-tanzaboost:TanzaBoost/TanzaBoost.git"
    echo ""
    
    # Zeige den öffentlichen Key
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📋 DEIN ÖFFENTLICHER SSH-KEY (kopiere diesen):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    cat "$SSH_KEY_PATH.pub"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
else
    echo "❌ Fehler beim Erstellen des SSH-Keys!"
    exit 1
fi

