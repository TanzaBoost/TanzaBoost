# 🔧 Cache-Problem beheben

## Problem

Die Seite zeigt online eine andere Version als lokal:
- **Lokal:** Kiswahili (korrekt) - Image 2
- **Online:** Englisch - Image 1

## Mögliche Ursachen

1. **Browser-Cache:** Der Browser zeigt eine alte Version
2. **localStorage:** Die Sprache wurde online auf Englisch umgeschaltet und gespeichert
3. **GitHub Pages Cache:** Die Seite wurde noch nicht vollständig aktualisiert

## Lösungen

### Lösung 1: Browser-Cache leeren (Empfohlen)

**Chrome/Edge:**
1. Drücke `Ctrl + Shift + Delete` (oder `Cmd + Shift + Delete` auf Mac)
2. Wähle "Cached images and files"
3. Zeitraum: "All time"
4. Klicke auf "Clear data"

**Oder Hard Refresh:**
- Windows/Linux: `Ctrl + F5` oder `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Lösung 2: localStorage löschen

1. Öffne die Browser-Entwicklertools (`F12`)
2. Gehe zum Tab "Application" (Chrome) oder "Storage" (Firefox)
3. Klicke auf "Local Storage"
4. Wähle `https://tanzaboost.github.io`
5. Lösche den Eintrag `site.lang`
6. Lade die Seite neu

**Oder per Konsole:**
```javascript
localStorage.removeItem('site.lang');
location.reload();
```

### Lösung 3: GitHub Pages Deployment prüfen

1. Gehe zu: https://github.com/TanzaBoost/TanzaBoost/actions
2. Prüfe, ob der letzte Workflow erfolgreich war
3. Falls nicht, warte 2-3 Minuten und prüfe erneut

### Lösung 4: Incognito/Private Mode testen

Öffne die Seite im Inkognito-Modus:
- Chrome: `Ctrl + Shift + N`
- Firefox: `Ctrl + Shift + P`

Dort sollte die Standard-Sprache (Kiswahili) angezeigt werden.

## Standard-Sprache

Die Standard-Sprache ist **Kiswahili (sw)**. Wenn keine Sprache im localStorage gespeichert ist, wird automatisch Kiswahili angezeigt.

## Verifikation

Nach dem Cache-Löschen sollte die Seite zeigen:
- **Kiswahili** als Standard-Sprache
- Highlight-Box mit: "Malipo ya mara moja • Maisha yote • Hakuna malipo mengine"
- Überschrift: "Tovuti yako ndani ya saa 24h!"

