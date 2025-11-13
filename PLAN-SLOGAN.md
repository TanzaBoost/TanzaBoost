# 📋 Plan: Auffälliger Slogan für Index-Seite

## 🎯 Ziel

Einen auffälligen, fangenden Slogan einbauen, der sofort ins Auge fällt und betont:
- **Webseite für 50.000 TSh**
- **Nur einmaliger Preis**
- **Lifetime (lebenslang)**
- **Ohne weitere Kosten**

## 📍 Positionierung

### Option 1: Direkt nach dem H1 (Empfohlen)
**Position:** Zwischen `<h1>` und dem ersten `<p>` in der Hero-Section
**Vorteil:** Sofort sichtbar, hohe Aufmerksamkeit

### Option 2: Als Banner oberhalb des Headers
**Position:** Ganz oben auf der Seite, vor dem Header
**Vorteil:** Sehr auffällig, aber könnte störend sein

### Option 3: Als Highlight-Box im Hero-Bereich
**Position:** Zwischen Hero-Text und CTA-Buttons
**Vorteil:** Gut sichtbar, ohne den Flow zu stören

## 🎨 Design-Vorschläge

### Design 1: Prominente Badge/Box (Empfohlen)
```
┌─────────────────────────────────────────┐
│  🎉 WEBSITE FÜR 50.000 TSh               │
│  ✅ Nur einmalig • Lifetime • Keine      │
│     weiteren Kosten                       │
└─────────────────────────────────────────┘
```

**Styling:**
- Große, fette Schrift
- Auffällige Hintergrundfarbe (z.B. Gradient mit Brand-Farbe)
- Border/Shadow für Tiefe
- Animation: Leichtes Pulsieren oder Glow-Effekt

### Design 2: Inline-Highlight im H1
```
Tovuti yako ndani ya saa 24h!
[50.000 TSh • Einmalig • Lifetime]
```

**Styling:**
- Als Teil des H1, aber hervorgehoben
- Andere Farbe (z.B. Gold/Gelb für "50.000")
- Größere Schrift für Preis

### Design 3: Floating Badge
**Position:** Rechts oben im Hero-Bereich
**Styling:**
- Abgerundete Box
- Schwebend (floating)
- Animation: Sanftes Schwingen

## 📝 Text-Vorschläge

### Deutsch/English:
```
🎉 Website für nur 50.000 TSh
✅ Einmalig • Lifetime • Keine weiteren Kosten
```

Oder kürzer:
```
50.000 TSh • Einmalig • Lifetime
Keine weiteren Kosten!
```

### Kiswahili:
```
🎉 Tovuti kwa 50,000 TSh tu
✅ Malipo ya mara moja • Maisha yote • Hakuna malipo mengine
```

Oder kürzer:
```
50,000 TSh • Mara moja tu • Maisha yote
Hakuna malipo mengine!
```

## 🎨 CSS-Implementierung

### Neue CSS-Klassen:

```css
/* Prominenter Preis-Slogan */
.price-banner {
  display: inline-block;
  background: linear-gradient(135deg, var(--brand), var(--brand-600));
  color: white;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 800;
  margin: 16px 0;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
  animation: pulse-glow 2s ease-in-out infinite;
  text-align: center;
}

.price-banner .price-amount {
  font-size: 1.3em;
  color: #ffd700; /* Gold für Preis */
}

.price-banner .price-features {
  font-size: 0.85em;
  opacity: 0.95;
  margin-top: 4px;
  display: block;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.6);
  }
}

/* Alternative: Subtileres Design */
.price-highlight {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.15);
  border: 2px solid var(--brand);
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 700;
  margin: 12px 0;
}
```

## 📍 HTML-Struktur

### Option A: Als separater Block nach H1
```html
<div class="hero-copy" data-lang-block="sw">
  <h1>Tovuti yako ndani ya saa 24h!</h1>
  
  <div class="price-banner">
    <span class="price-amount">50,000 TSh</span>
    <span class="price-features">Mara moja tu • Maisha yote • Hakuna malipo mengine</span>
  </div>
  
  <p>Domain, Hosting na Logo viko pamoja...</p>
  <!-- Rest des Inhalts -->
</div>
```

### Option B: Als Teil des H1
```html
<h1>
  Tovuti yako ndani ya saa 24h!
  <span class="price-highlight">50,000 TSh • Mara moja tu • Maisha yote</span>
</h1>
```

## ✅ Empfehlung

**Beste Lösung:** Option 1 (Design 1) - Prominente Badge nach dem H1

**Gründe:**
- Sofort sichtbar
- Nicht zu aufdringlich
- Klare Botschaft
- Funktioniert auf allen Geräten
- Kann leicht animiert werden

## 🔄 Responsive Design

- Mobile: Volle Breite, etwas kleinerer Text
- Tablet: Zentriert, mittlere Größe
- Desktop: Inline oder leicht rechts versetzt

## 🎯 Nächste Schritte

1. ✅ Plan erstellt
2. ⏳ Design auswählen
3. ⏳ HTML-Struktur implementieren
4. ⏳ CSS-Styling hinzufügen
5. ⏳ Animationen testen
6. ⏳ Responsive Verhalten prüfen
7. ⏳ Mehrsprachigkeit sicherstellen (EN/SW)

