#!/bin/bash
# ============================================================
# FLOW THE FESTIVAL '26 — Mexico City
# PASO 1: Descargar clips de YouTube
# ============================================================
# Requiere yt-dlp instalado. Si no lo tienes:
#   brew install yt-dlp
# ============================================================

CLIPS_DIR="$(dirname "$0")/../clips"
mkdir -p "$CLIPS_DIR"
cd "$CLIPS_DIR"

echo "🎬 Descargando clips para el promo FLOW Festival '26..."
echo "📁 Destino: $CLIPS_DIR"
echo ""

# Verificar que yt-dlp esté instalado
if ! command -v yt-dlp &> /dev/null; then
    echo "❌ yt-dlp no está instalado."
    echo "   Ejecuta: brew install yt-dlp"
    echo "   Luego vuelve a correr este script."
    exit 1
fi

# ──────────────────────────────────────────────
# TIER 1 — CLIPS DEL EVENTO (máxima prioridad)
# ──────────────────────────────────────────────

echo "📌 [1/7] Anuncio oficial FLOW THE FESTIVAL Mexico City 2026..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "anuncio_oficial_mexico_2026.mp4" \
  "https://www.youtube.com/watch?v=JkfZJu7qarg"
echo "✅ Descargado: anuncio_oficial_mexico_2026.mp4"
echo ""

echo "📌 [2/7] FLOW THE FESTIVAL 2024 Japan — Highlights..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "flow_festival_2024_highlights.mp4" \
  "https://www.youtube.com/watch?v=mikn69nP5Pk"
echo "✅ Descargado: flow_festival_2024_highlights.mp4"
echo ""

# ──────────────────────────────────────────────
# TIER 2 — MVs OFICIALES DE LAS BANDAS
# ──────────────────────────────────────────────

echo "📌 [3/7] FLOW — GO!!! MV Oficial (Naruto OP4)..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "flow_go_naruto_mv.mp4" \
  "https://www.youtube.com/watch?v=zejYD43HyQo"
echo "✅ Descargado: flow_go_naruto_mv.mp4"
echo ""

echo "📌 [4/7] FLOW — COLORS MV Oficial (Code Geass OP)..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "flow_colors_code_geass_mv.mp4" \
  "https://www.youtube.com/watch?v=FUH9S44D1BM"
echo "✅ Descargado: flow_colors_code_geass_mv.mp4"
echo ""

echo "📌 [5/7] Eureka Seven — DAYS Opening Oficial..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "eureka_seven_days_opening.mp4" \
  "https://www.youtube.com/watch?v=YUtiHImLq3Q"
echo "✅ Descargado: eureka_seven_days_opening.mp4"
echo ""

echo "📌 [6/7] Gintama — DONTEN Opening 5 (DOES)..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "gintama_donten_does_opening.mp4" \
  "https://www.youtube.com/watch?v=DnWCcJ7OTtA"
echo "✅ Descargado: gintama_donten_does_opening.mp4"
echo ""

echo "📌 [7/7] Code Geass — COLORS Opening Oficial..."
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]" \
  --merge-output-format mp4 \
  -o "code_geass_colors_opening.mp4" \
  "https://www.youtube.com/watch?v=G8CFuZ9MseQ"
echo "✅ Descargado: code_geass_colors_opening.mp4"
echo ""

# ──────────────────────────────────────────────
# VERIFICAR DESCARGAS
# ──────────────────────────────────────────────
echo "============================================================"
echo "📦 Archivos descargados en: $CLIPS_DIR"
echo "============================================================"
ls -lh "$CLIPS_DIR"
echo ""
echo "✅ LISTO. Ahora ejecuta: python3 scripts/2_build_timeline.py"
echo "   (Con DaVinci Resolve abierto)"
