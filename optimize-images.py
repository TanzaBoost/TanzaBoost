#!/usr/bin/env python3
"""
Bildoptimierung für TanzaBoost Demo-Seiten
Resized und komprimiert Bilder für bessere Performance
"""

import os
from PIL import Image
import sys

# Zielgrößen basierend auf CSS
SIZES = {
    'hero': (800, 600),      # Hero-Photo: max 800px breit
    'gallery': (600, 400),   # Gallery: max 600px breit, height 190px im CSS
    'food': (500, 500),      # Food/Menu Bilder: quadratisch
    'location': (360, 450),   # Location: max-width 360px, aspect 4/5
    'card': (400, 300),      # Card Bilder
}

def optimize_image(input_path, output_path, max_size, quality=85):
    """Resized und komprimiert ein Bild"""
    try:
        img = Image.open(input_path)
        
        # Original-Größe
        original_size = os.path.getsize(input_path)
        
        # Resize wenn nötig
        img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Speichere als optimiertes Bild
        if input_path.lower().endswith('.png'):
            # PNG: Konvertiere zu JPG für kleinere Dateien (außer wenn Transparenz benötigt wird)
            if img.mode in ('RGBA', 'LA'):
                # Behalte PNG wenn Transparenz vorhanden
                img.save(output_path, 'PNG', optimize=True, compress_level=9)
            else:
                # Konvertiere zu JPG
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                output_path = output_path.replace('.png', '.jpg')
                img.save(output_path, 'JPEG', quality=quality, optimize=True)
        else:
            # JPG
            if img.mode != 'RGB':
                img = img.convert('RGB')
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        new_size = os.path.getsize(output_path)
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"✓ {os.path.basename(input_path)}: {original_size/1024/1024:.1f}MB → {new_size/1024/1024:.1f}MB ({reduction:.1f}% kleiner)")
        return True
        
    except Exception as e:
        print(f"✗ Fehler bei {input_path}: {e}")
        return False

def determine_size_type(filename):
    """Bestimmt die Bildkategorie basierend auf Dateinamen"""
    filename_lower = filename.lower()
    
    if 'gallery' in filename_lower or 'hall' in filename_lower or 'dinning' in filename_lower:
        return 'gallery'
    elif 'food' in filename_lower or 'card' in filename_lower:
        return 'food'
    elif 'location' in filename_lower:
        return 'location'
    elif 'bar.png' in filename_lower or 'lodge.png' in filename_lower or 'room.png' in filename_lower or 'rezeption.png' in filename_lower:
        return 'hero'
    else:
        return 'card'

def process_directory(directory):
    """Verarbeitet alle Bilder in einem Verzeichnis"""
    print(f"\n📁 Verarbeite: {directory}")
    print("=" * 60)
    
    image_extensions = ('.jpg', '.jpeg', '.png')
    processed = 0
    
    for filename in os.listdir(directory):
        if not filename.lower().endswith(image_extensions):
            continue
        
        # Überspringe bereits optimierte Dateien
        if filename.endswith('_optimized.jpg') or filename.endswith('_optimized.png'):
            continue
        
        input_path = os.path.join(directory, filename)
        size_type = determine_size_type(filename)
        max_size = SIZES.get(size_type, SIZES['card'])
        
        # Erstelle Backup-Ordner
        backup_dir = os.path.join(directory, 'original_backup')
        os.makedirs(backup_dir, exist_ok=True)
        
        # Backup Original
        backup_path = os.path.join(backup_dir, filename)
        if not os.path.exists(backup_path):
            import shutil
            shutil.copy2(input_path, backup_path)
        
        # Optimiere
        if optimize_image(input_path, input_path, max_size):
            processed += 1
    
    print(f"\n✅ {processed} Bilder optimiert")
    return processed

def main():
    print("🖼️  TanzaBoost - Bildoptimierung")
    print("=" * 60)
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    demo_dirs = [
        os.path.join(base_dir, 'demo_sites', 'bar_site'),
        os.path.join(base_dir, 'demo_sites', 'lodge_site'),
    ]
    
    total = 0
    for demo_dir in demo_dirs:
        if os.path.exists(demo_dir):
            total += process_directory(demo_dir)
        else:
            print(f"⚠️  Verzeichnis nicht gefunden: {demo_dir}")
    
    print("\n" + "=" * 60)
    print(f"🎉 Fertig! {total} Bilder insgesamt optimiert")
    print("\n💡 Originale wurden in 'original_backup' Ordnern gesichert")
    print("   Falls etwas schief geht, kannst du sie von dort wiederherstellen.")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Abgebrochen durch Benutzer")
        sys.exit(1)
    except ImportError:
        print("\n❌ Fehler: PIL/Pillow ist nicht installiert!")
        print("\n📦 Installation:")
        print("   pip3 install Pillow")
        print("\n   Oder:")
        print("   sudo apt-get install python3-pil")
        sys.exit(1)

