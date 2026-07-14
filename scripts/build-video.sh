#!/bin/bash
# EQB Milano — Rigenerazione dei video web da master 4K
# Eseguire dalla root del progetto: bash scripts/build-video.sh
#
# I video in public/assets sono VERSIONATI in git (1080p, ~45MB in totale) e serviti
# dalla CDN di Vercel: in condizioni normali NON serve lanciare questo script.
# Serve solo se cambia un master e va rigenerato il video del sito.
#
# I master sono 4K verticali a 24-68 Mbps (fino a 246MB l'uno): non vanno MAI
# messi in public/assets cosi' come sono, il browser scaricherebbe centinaia di MB.

set -e
ASSETS="$(cd "$(dirname "$0")/.." && pwd)/public/assets"

# encode <master> <nome-output> <crf> <audio: si|no>
encode() {
  local src="$1" out="$2" crf="$3" audio="$4"

  if [ ! -f "$src" ]; then
    echo "  ✗  $out — master non trovato: $src"
    return
  fi

  local audio_args=(-an)
  [ "$audio" = "si" ] && audio_args=(-c:a aac -b:a 128k)

  echo "  →  $out (encoding...)"
  ffmpeg -y -loglevel error -i "$src" \
    -vf "scale=1080:1920:flags=lanczos" \
    -c:v libx264 -profile:v high -crf "$crf" -preset medium -pix_fmt yuv420p \
    "${audio_args[@]}" -movflags +faststart "$ASSETS/$out"
  echo "  ✓  $out ($(du -h "$ASSETS/$out" | cut -f1))"
}

echo ""
echo "EQB Milano — Rigenerazione video web (1080p)"
echo "============================================"

# Benessere — Valutazione Posturale (BenVideoPlayer, play manuale: l'audio serve)
encode "/Users/marcoadinolfi/Desktop/Organizzare/Campagna Fede/Campagna_Fede_1_DEF 2.mov" \
  "Campagna-Fede-1.mp4" 23 si

# Benessere — Feature 01/02/03: video decorativi in autoplay muted loop → senza audio
encode "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/03 - Shooting/01 - Shooting Originali/Reels/Corretti/167BD556-82C8-4852-91C8-70A9FF49B7A8.mov" \
  "Feature-Pilates-v2.mp4" 25 no

encode "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/03 - Shooting/01 - Shooting Originali/Reels/Corretti/C97DD5F8-748B-48CF-9F3C-467D5BD32BF9.mov" \
  "Feature-Posturale-v2.mp4" 25 no

encode "/Users/marcoadinolfi/Desktop/EQB/03 - EQB MARKETING/01 - Social Content/Instagram/EQB - Reels/EQB - Reel 5/EQB - Reel 5 (Nathaly).mp4" \
  "Feature-Relax.mp4" 25 no

# Video-Home.mp4 e' gia' 720p leggero (3.6MB): non va rigenerato.

echo ""
echo "Fatto. Ricorda di committare i video aggiornati."
echo ""
