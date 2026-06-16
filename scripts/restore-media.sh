#!/bin/bash
# EQB Milano — Ripristino file media grandi
# Eseguire dalla root del progetto: bash scripts/restore-media.sh
#
# Questi file non sono nel git perché troppo grandi (>100MB).
# Questo script li copia dai percorsi originali sul Mac di Marco.

ASSETS="$(cd "$(dirname "$0")/.." && pwd)/public/assets"
ERRORS=0

copy_asset() {
  local name="$1"
  local src="$2"
  local dest="$ASSETS/$name"

  if [ -f "$dest" ]; then
    echo "  ✓  $name (già presente)"
  elif [ -f "$src" ]; then
    cp "$src" "$dest"
    echo "  ✓  $name (copiato)"
  else
    echo "  ✗  $name — FILE NON TROVATO"
    echo "     Percorso atteso: $src"
    ERRORS=$((ERRORS + 1))
  fi
}

echo ""
echo "EQB Milano — Ripristino media assets"
echo "======================================"

# Video Home page
copy_asset "Video-Home.mp4" \
  "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/03 - Shooting/00 - EQB Studio/Video/Spazi/EQB Homepage_ripristinato.mp4"

# Video Benessere — Campagna Federico
copy_asset "Campagna-Fede-1.mov" \
  "/Users/marcoadinolfi/Desktop/Organizzare/Campagna Fede/Campagna_Fede_1_DEF 2.mov"

# Video Benessere — Feature 01: Percorso Posturale
copy_asset "Feature-Pilates-v2.mov" \
  "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/03 - Shooting/01 - Shooting Originali/Reels/Corretti/167BD556-82C8-4852-91C8-70A9FF49B7A8.mov"

# Video Benessere — Feature 02: Pilates Reformer
copy_asset "Feature-Posturale-v2.mov" \
  "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/03 - Shooting/01 - Shooting Originali/Reels/Corretti/C97DD5F8-748B-48CF-9F3C-467D5BD32BF9.mov"

# Video Benessere — Feature 03: Relax & Recovery
copy_asset "Feature-Relax.mp4" \
  "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/01 - Social Content/Instagram/EQB - Reels/EQB - Reel 5/EQB - Reel 5 (Nathaly).mp4"

echo ""
if [ "$ERRORS" -eq 0 ]; then
  echo "Tutti i media sono pronti. Puoi avviare il dev server."
else
  echo "$ERRORS file mancanti — vedi i percorsi sopra e aggiorna lo script con i nuovi percorsi."
fi
echo ""
