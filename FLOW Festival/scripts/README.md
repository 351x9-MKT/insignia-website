# FLOW THE FESTIVAL '26 — Scripts de Producción del Promo

## Flujo completo en 3 pasos

### PASO 0 — Instalar dependencias (una sola vez)
```bash
brew install yt-dlp
```

### PASO 1 — Descargar los clips de YouTube
```bash
cd "/Users/carlguti/Documents/Claude/Projects/INSIGNIA ENTERTAINMENT/FLOW Festival/scripts"
chmod +x 1_descargar_clips.sh
./1_descargar_clips.sh
```
Los clips se guardan en `../clips/`. Toma ~5-10 minutos dependiendo de tu internet.

---

### PASO 2 — Construir el timeline en DaVinci Resolve

**Opción A — Desde el terminal (recomendada):**
1. Abre DaVinci Resolve
2. Ve a: **Preferences → System → Scripting → Enable external scripting**
3. En terminal:
```bash
python3 "/Users/carlguti/Documents/Claude/Projects/INSIGNIA ENTERTAINMENT/FLOW Festival/scripts/2_build_timeline.py"
```

**Opción B — Desde la consola de DaVinci:**
1. Abre DaVinci Resolve
2. `Workspace → Scripts → Console`
3. Escribe:
```python
exec(open('/Users/carlguti/Documents/Claude/Projects/INSIGNIA ENTERTAINMENT/FLOW Festival/scripts/2_build_timeline.py').read())
```

---

### PASO 3 — Ajustes finales manuales en DaVinci

1. **Text overlays**: Ve a Effects Library → Titles → Text+ y arrastra sobre cada clip
2. **Audio**: Agrega la pista de audio con los segmentos de cada canción
3. **Color grade**: Aplica un look que combine con la paleta rojo/verde del flyer
4. **Export**: File → Quick Export → H.264 1080×1920 para Reels/TikTok

---

## Estructura de archivos

```
FLOW Festival/
├── scripts/
│   ├── README.md                  ← Este archivo
│   ├── 1_descargar_clips.sh       ← Descarga los 7 clips de YouTube
│   └── 2_build_timeline.py        ← Construye el timeline en DaVinci
└── clips/
    ├── anuncio_oficial_mexico_2026.mp4
    ├── flow_festival_2024_highlights.mp4
    ├── flow_go_naruto_mv.mp4
    ├── flow_colors_code_geass_mv.mp4
    ├── code_geass_colors_opening.mp4
    ├── eureka_seven_days_opening.mp4
    ├── gintama_donten_does_opening.mp4
    └── flow_festival_flyer.png    ← Copiar manualmente
```

## Timeline — Storyboard 25 segundos

| Escena | Tiempo | Clip fuente | Texto overlay |
|--------|--------|-------------|---------------|
| 01 HOOK | 0–3s | Anuncio oficial México | (ninguno) |
| 02 NARUTO | 3–7s | GO!!! MV oficial | "NARUTO" / "GO!!!" |
| 03A CODE GEASS | 7–9s | Code Geass opening COLORS | "CODE GEASS" / "COLORS" |
| 03B GINTAMA | 9–11s | Gintama OP5 Donten | "GINTAMA" / "DONTEN" |
| 03C EUREKA SEVEN | 11–13s | Eureka Seven OP1 DAYS | "EUREKA SEVEN" / "DAYS" |
| 04 LIVE ENERGY | 13–18s | FLOW Festival 2024 Japan | "PRIMERA VEZ EN MÉXICO" |
| 05 INFO EVENTO | 18–22s | Anuncio oficial | "22 JULIO · FORO POLANCO" |
| 06 CTA | 22–25s | Anuncio oficial | "BOLETOS EN BOLETIA" |
