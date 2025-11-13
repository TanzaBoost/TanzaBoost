# 🔐 SSH Key Setup für GitHub - Schritt für Schritt

## Warum SSH?

- ✅ **Sicherer** - Keine Passwörter nötig
- ✅ **Bequemer** - Keine Credentials bei jedem Push eingeben
- ✅ **Empfohlen** - GitHub empfiehlt SSH für alle Entwickler

## Schnellstart

### 1. SSH-Key erstellen

Führe das Setup-Script aus:

```bash
cd /home/ralf/Dokumente/marketing/Websites/TanzaBoost
./setup-ssh.sh
```

Das Script wird:
- Einen neuen SSH-Key erstellen (`id_ed25519_tanzaboost`)
- Deinen öffentlichen Key anzeigen
- Anweisungen für GitHub geben

### 2. SSH-Key zu GitHub hinzufügen

1. **Kopiere deinen öffentlichen SSH-Key:**
   - Das Script zeigt ihn dir an
   - Oder manuell: `cat ~/.ssh/id_ed25519_tanzaboost.pub`

2. **Gehe zu GitHub:**
   - https://github.com/TanzaBoost/TanzaBoost/settings/keys
   - Oder: https://github.com/settings/ssh/new

3. **Füge den Key hinzu:**
   - Klicke auf "New SSH key"
   - **Title:** z.B. "TanzaBoost Laptop" oder "TanzaBoost Desktop"
   - **Key:** Füge den kopierten Key ein (beginnt mit `ssh-ed25519 ...`)
   - Klicke auf "Add SSH key"

### 3. SSH-Config einrichten (optional, aber empfohlen)

Erstelle oder bearbeite `~/.ssh/config`:

```bash
nano ~/.ssh/config
```

Füge hinzu:

```
Host github.com-tanzaboost
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_tanzaboost
```

### 4. Verbindung testen

```bash
ssh -T git@github.com -i ~/.ssh/id_ed25519_tanzaboost
```

Oder wenn du die Config eingerichtet hast:

```bash
ssh -T git@github.com-tanzaboost
```

Du solltest sehen: `Hi TanzaBoost! You've successfully authenticated...`

### 5. Git Remote auf SSH umstellen

```bash
cd /home/ralf/Dokumente/marketing/Websites/TanzaBoost

# Wenn du die SSH-Config eingerichtet hast:
git remote set-url origin git@github.com-tanzaboost:TanzaBoost/TanzaBoost.git

# Oder direkt:
git remote set-url origin git@github.com:TanzaBoost/TanzaBoost.git
```

### 6. Code pushen

```bash
./deploy.sh
```

Oder manuell:

```bash
git add .
git commit -m "Initial commit: TanzaBoost Website"
git push -u origin main
```

## Manuelle Alternative

Falls du das Script nicht verwenden möchtest:

```bash
# SSH-Key erstellen
ssh-keygen -t ed25519 -C "deine-email@example.com" -f ~/.ssh/id_ed25519_tanzaboost

# Öffentlichen Key anzeigen
cat ~/.ssh/id_ed25519_tanzaboost.pub

# Dann zu GitHub hinzufügen (siehe Schritt 2 oben)
```

## Troubleshooting

**Problem:** "Permission denied (publickey)"
- Lösung: Stelle sicher, dass der Key zu GitHub hinzugefügt wurde
- Teste: `ssh -T git@github.com -i ~/.ssh/id_ed25519_tanzaboost`

**Problem:** "Host key verification failed"
- Lösung: `ssh-keyscan github.com >> ~/.ssh/known_hosts`

**Problem:** Key wird nicht erkannt
- Lösung: Prüfe die SSH-Config: `cat ~/.ssh/config`
- Stelle sicher, dass der Pfad zum Key korrekt ist

## Vorteile von SSH

✅ Keine Passwörter mehr eingeben  
✅ Sicherer als HTTPS  
✅ Funktioniert auch mit 2FA ohne Token  
✅ Einmal einrichten, immer nutzen  

