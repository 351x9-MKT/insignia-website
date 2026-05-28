#!/usr/bin/env python3
"""
============================================================
FLOW THE FESTIVAL '26 — Mexico City
PASO 2: Construir timeline en DaVinci Resolve
============================================================
INSTRUCCIONES:
  1. Abre DaVinci Resolve
  2. Ve a Workspace > Scripts > Console (o presiona Cmd+J)
  3. En la consola, escribe:
     exec(open('/ruta/a/este/archivo/2_build_timeline.py').read())

  O desde el terminal (con DaVinci Resolve abierto):
     python3 2_build_timeline.py
============================================================
"""

import sys
import os

# ============================================================
# CONFIGURACIÓN — AJUSTA SI CAMBIASTE EL NOMBRE DE ALGÚN CLIP
# ============================================================

BASE_DIR = os.path.join(
    os.path.expanduser("~"),
    "Documents/Claude/Projects/INSIGNIA ENTERTAINMENT/FLOW Festival"
)
CLIPS_DIR = os.path.join(BASE_DIR, "clips")
FLYER_PATH = os.path.join(BASE_DIR, "clips", "flow_festival_flyer.png")

# Nombres de los clips descargados (deben coincidir con lo descargado en paso 1)
CLIPS = {
    "anuncio":      "anuncio_oficial_mexico_2026.mp4",
    "festival2024": "flow_festival_2024_highlights.mp4",
    "go_naruto":    "flow_go_naruto_mv.mp4",
    "colors":       "flow_colors_code_geass_mv.mp4",
    "code_geass":   "code_geass_colors_opening.mp4",
    "eureka":       "eureka_seven_days_opening.mp4",
    "donten":       "gintama_donten_does_opening.mp4",
}

# Segundos de inicio en cada clip fuente (ajusta según lo que veas en cada video)
IN_POINTS_SEC = {
    "anuncio":      0.0,   # El logo explota desde el inicio — perfecto
    "festival2024": 45.0,  # ~0:45 → crowd enardecido + banda en escena
    "go_naruto":    3.0,   # Los 3 acordes iniciales del riff de guitarra
    "colors":       0.0,   # Intro explosiva de COLORS
    "code_geass":   5.0,   # Momento donde aparece Lelouch
    "eureka":       8.0,   # Renton en la tabla de surf — icónico
    "donten":       0.0,   # El gancho inicial de Donten
}

FPS = 30  # Frames por segundo del proyecto

# ============================================================
# STORYBOARD — Definición de escenas
# ============================================================
# Formato: (clip_key, duracion_seg, in_point_override)
# in_point_override = None → usa el valor de IN_POINTS_SEC

ESCENAS = [
    # Escena 1: HOOK — 3 seg
    {
        "nombre":    "01_HOOK",
        "clip":      "anuncio",
        "duracion":  3.0,
        "in_sec":    None,
        "texto":     [],  # Sin texto — solo el logo explotando
    },
    # Escena 2: RECONOCIMIENTO NARUTO — 4 seg
    {
        "nombre":    "02_NARUTO",
        "clip":      "go_naruto",
        "duracion":  4.0,
        "in_sec":    None,
        "texto": [
            {"contenido": "NARUTO",  "posicion": "center",       "tamano": "large"},
            {"contenido": "GO!!!",   "posicion": "center_below",  "tamano": "medium"},
        ],
    },
    # Escena 3A: CODE GEASS — 2 seg
    {
        "nombre":    "03A_CODE_GEASS",
        "clip":      "code_geass",
        "duracion":  2.0,
        "in_sec":    None,
        "texto": [
            {"contenido": "CODE GEASS",  "posicion": "top",    "tamano": "large"},
            {"contenido": "\"COLORS\"",  "posicion": "bottom", "tamano": "medium"},
        ],
    },
    # Escena 3B: GINTAMA — 2 seg
    {
        "nombre":    "03B_GINTAMA",
        "clip":      "donten",
        "duracion":  2.0,
        "in_sec":    None,
        "texto": [
            {"contenido": "GINTAMA",   "posicion": "top",    "tamano": "large"},
            {"contenido": "\"DONTEN\"", "posicion": "bottom", "tamano": "medium"},
        ],
    },
    # Escena 3C: EUREKA SEVEN — 2 seg
    {
        "nombre":    "03C_EUREKA_SEVEN",
        "clip":      "eureka",
        "duracion":  2.0,
        "in_sec":    None,
        "texto": [
            {"contenido": "EUREKA SEVEN", "posicion": "top",    "tamano": "large"},
            {"contenido": "\"DAYS\"",     "posicion": "bottom", "tamano": "medium"},
        ],
    },
    # Escena 4: ENERGÍA EN VIVO — 5 seg
    {
        "nombre":    "04_LIVE_ENERGY",
        "clip":      "festival2024",
        "duracion":  5.0,
        "in_sec":    None,
        "texto": [
            {"contenido": "FLOW THE FESTIVAL",       "posicion": "top",    "tamano": "small"},
            {"contenido": "🇲🇽 PRIMERA VEZ EN MÉXICO", "posicion": "bottom", "tamano": "large"},
        ],
    },
    # Escena 5: DATOS DEL EVENTO — 4 seg (usa flyer)
    {
        "nombre":    "05_EVENTO_INFO",
        "clip":      "anuncio",   # Si tienes el flyer como imagen, cámbialo aquí
        "duracion":  4.0,
        "in_sec":    2.0,         # Pausa en un momento del anuncio con el flyer visible
        "texto": [
            {"contenido": "FLOW · DOES · DJ TAKE",   "posicion": "top",          "tamano": "medium"},
            {"contenido": "📅 22 DE JULIO, 2026",    "posicion": "center_above",  "tamano": "large"},
            {"contenido": "📍 FORO POLANCO · CDMX",  "posicion": "center_below",  "tamano": "large"},
        ],
    },
    # Escena 6: CTA — 3 seg
    {
        "nombre":    "06_CTA",
        "clip":      "anuncio",
        "duracion":  3.0,
        "in_sec":    1.0,
        "texto": [
            {"contenido": "BOLETOS DISPONIBLES",  "posicion": "center",       "tamano": "large"},
            {"contenido": "boletia.com",           "posicion": "center_below",  "tamano": "medium"},
        ],
    },
]


# ============================================================
# HELPER FUNCTIONS
# ============================================================

def sec_to_frames(seconds: float) -> int:
    return int(seconds * FPS)


def get_clip_path(clip_key: str) -> str:
    filename = CLIPS[clip_key]
    return os.path.join(CLIPS_DIR, filename)


def verify_clips() -> bool:
    """Verifica que todos los clips existan antes de empezar."""
    missing = []
    for key, filename in CLIPS.items():
        path = get_clip_path(key)
        if not os.path.exists(path):
            missing.append(f"  ❌ {key}: {path}")
    if missing:
        print("⚠️  CLIPS FALTANTES — Ejecuta primero 1_descargar_clips.sh:")
        for m in missing:
            print(m)
        return False
    return True


def find_media_pool_item(root_folder, filename: str):
    """Busca un clip en el Media Pool por nombre de archivo."""
    all_clips = root_folder.GetClipList()
    if not all_clips:
        return None
    for clip in all_clips:
        clip_name = clip.GetName()
        if filename in clip_name or clip_name in filename:
            return clip
    return None


def import_all_clips(media_pool, root_folder) -> dict:
    """Importa todos los clips al Media Pool y devuelve un dict clip_key → MediaPoolItem."""
    paths_to_import = []
    for key in CLIPS:
        path = get_clip_path(key)
        if os.path.exists(path):
            paths_to_import.append(path)

    if paths_to_import:
        media_pool.ImportMedia(paths_to_import)
        print(f"  📥 {len(paths_to_import)} clips importados al Media Pool")

    # Mapear nombres a items
    clip_items = {}
    for key, filename in CLIPS.items():
        item = find_media_pool_item(root_folder, filename)
        if item:
            clip_items[key] = item
        else:
            print(f"  ⚠️  No se encontró en Media Pool: {filename}")

    return clip_items


def append_clip(media_pool, timeline, clip_item, in_sec: float, duracion_sec: float):
    """Agrega un clip al final del timeline con in/out points específicos."""
    in_frame  = sec_to_frames(in_sec)
    out_frame = sec_to_frames(in_sec + duracion_sec)

    clip_info = {
        "mediaPoolItem": clip_item,
        "startFrame":    in_frame,
        "endFrame":      out_frame,
    }
    result = media_pool.AppendToTimeline([clip_info])
    return result


def add_text_overlay(timeline, text_data: dict, start_sec: float, duracion_sec: float):
    """
    Agrega un Text+ title al track de video 2 encima del clip.
    DaVinci Resolve Text+ no tiene API directa para position/size vía script,
    por lo que se agrega el título y se imprime la guía para ajustarlo manualmente.
    """
    # La API de Resolve no permite añadir Fusion titles directamente con texto
    # vía AppendToTimeline de forma programática en todas las versiones.
    # En su lugar, generamos instrucciones detalladas para el editor.
    pass  # Ver print_manual_text_guide() al final


# ============================================================
# FUNCIÓN PRINCIPAL
# ============================================================

def main():
    print("=" * 60)
    print("  FLOW THE FESTIVAL '26 — Build Timeline en DaVinci Resolve")
    print("=" * 60)

    # 1. Verificar clips
    print("\n[1/5] Verificando clips...")
    if not verify_clips():
        print("\n💡 Tip: Copia el flyer como PNG en la carpeta clips/")
        print(f"       {CLIPS_DIR}/flow_festival_flyer.png")
        # Continuar de todas formas con lo que haya disponible

    # 2. Conectar a DaVinci Resolve
    print("\n[2/5] Conectando a DaVinci Resolve...")
    try:
        import DaVinciResolveScript as dvr_script
        resolve = dvr_script.scriptapp("Resolve")
    except ImportError:
        # Intentar ruta alternativa en macOS
        sys.path.insert(0, "/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting/Modules")
        sys.path.insert(0, os.path.join(os.path.expanduser("~"), "Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting/Modules"))
        try:
            import DaVinciResolveScript as dvr_script
            resolve = dvr_script.scriptapp("Resolve")
        except Exception as e:
            print(f"  ❌ No se pudo importar DaVinciResolveScript: {e}")
            print("     Asegúrate de ejecutar este script DESDE DaVinci Resolve:")
            print("     Workspace → Scripts → Console y pega el contenido")
            return

    if not resolve:
        print("  ❌ DaVinci Resolve no está corriendo. Ábrelo e intenta de nuevo.")
        return
    print("  ✅ Conectado a DaVinci Resolve")

    # 3. Crear proyecto
    print("\n[3/5] Configurando proyecto...")
    pm = resolve.GetProjectManager()
    project = pm.CreateProject("FLOW Festival Promo 25seg")
    if not project:
        print("  ℹ️  Proyecto ya existe, usando el actual...")
        project = pm.GetCurrentProject()

    # Configuración: 1080×1920 vertical, 30fps
    project.SetSetting("timelineResolutionWidth",  "1080")
    project.SetSetting("timelineResolutionHeight", "1920")
    project.SetSetting("timelineFrameRate",        "30.0")
    project.SetSetting("colorScienceMode",         "davinciYCBCRColorManaged")
    print("  ✅ Resolución: 1080×1920 (9:16 vertical) @ 30fps")

    # 4. Importar media
    print("\n[4/5] Importando clips al Media Pool...")
    media_pool   = project.GetMediaPool()
    root_folder  = media_pool.GetRootFolder()

    # Crear subcarpeta organizada
    flow_folder = media_pool.AddSubFolder(root_folder, "FLOW Festival Promo")

    clip_items = import_all_clips(media_pool, root_folder)

    if not clip_items:
        print("  ❌ No se importó ningún clip. Verifica las rutas.")
        return

    # 5. Construir timeline
    print("\n[5/5] Construyendo timeline...")
    timeline = media_pool.CreateEmptyTimeline("FLOW_Promo_25seg_v1")
    if not timeline:
        print("  ⚠️  No se pudo crear timeline nuevo — usando el actual")
        timeline = project.GetCurrentTimeline()

    project.SetCurrentTimeline(timeline)

    total_duration = 0.0
    escenas_ok     = []

    for i, escena in enumerate(ESCENAS):
        clip_key  = escena["clip"]
        duracion  = escena["duracion"]
        in_point  = escena.get("in_sec") or IN_POINTS_SEC.get(clip_key, 0.0)

        if clip_key not in clip_items:
            print(f"  ⚠️  [{escena['nombre']}] Clip '{clip_key}' no disponible — saltando")
            continue

        result = append_clip(media_pool, timeline, clip_items[clip_key], in_point, duracion)

        if result:
            print(f"  ✅ [{escena['nombre']}] {duracion}s  ({in_point}s–{in_point+duracion}s del clip fuente)")
            escenas_ok.append(escena)
            total_duration += duracion
        else:
            print(f"  ❌ [{escena['nombre']}] Error al agregar clip")

    print(f"\n  🎬 Timeline total: {total_duration:.1f} segundos ({sec_to_frames(total_duration)} frames)")

    # 6. Guía de text overlays
    print_manual_text_guide(escenas_ok)

    print("\n" + "=" * 60)
    print("  ✅ ¡TIMELINE CONSTRUIDO!")
    print("  Ve a la pestaña CUT o EDIT en DaVinci para verlo.")
    print("=" * 60)


def print_manual_text_guide(escenas_ok):
    """Imprime guía detallada para agregar text overlays manualmente."""
    print("\n" + "=" * 60)
    print("  📝 GUÍA DE TEXT OVERLAYS — Agregar manualmente")
    print("  Effects Library → Titles → Text+ (arrastra sobre el clip)")
    print("=" * 60)

    timeline_pos = 0.0
    for escena in ESCENAS:
        duracion = escena["duracion"]
        textos   = escena.get("texto", [])

        time_range = f"{timeline_pos:.1f}s – {timeline_pos+duracion:.1f}s"
        print(f"\n  [{escena['nombre']}]  |  {time_range}")

        if not textos:
            print("    (Sin texto — solo el clip de video)")
        else:
            for t in textos:
                posicion_desc = {
                    "top":          "arriba, centrado",
                    "center":       "centro exacto",
                    "center_above": "centro-arriba",
                    "center_below": "centro-abajo",
                    "bottom":       "abajo, centrado",
                }.get(t["posicion"], t["posicion"])

                tamano_desc = {
                    "large":  "Grande  (ej. 120–140pt, Bold)",
                    "medium": "Mediano (ej. 80–100pt, SemiBold)",
                    "small":  "Pequeño (ej. 50–60pt, Regular)",
                }.get(t["tamano"], t["tamano"])

                print(f"    ▸ \"{t['contenido']}\"")
                print(f"      Posición : {posicion_desc}")
                print(f"      Tamaño   : {tamano_desc}")
                print(f"      Color    : Blanco / sombra negra o naranja según la escena")

        timeline_pos += duracion

    print("\n  FUENTES RECOMENDADAS:")
    print("    • Naruto/Gintama/Eureka: Impact, Bebas Neue o Montserrat ExtraBold")
    print("    • Datos del evento: Futura Bold o la fuente del flyer oficial")
    print("    • CTA: Bebas Neue o DIN Condensed")
    print("")
    print("  COLORES:")
    print("    • Texto principal : #FFFFFF (blanco)")
    print("    • Sombra / stroke : #FF4500 (naranja Naruto) o #000000")
    print("    • Fondo semi-transp: rgba(0,0,0,0.5) para legibilidad")


# ============================================================
# ENTRY POINT
# ============================================================
if __name__ == "__main__":
    main()
