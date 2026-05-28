# INSIGNIA ENTERTAINMENT — Framework F.R.A.M.E. Output
**Director creativo · One-shot completo para producir la landing**
Generado a partir de `websiteInfo.txt` + skill Landing Builder F.R.A.M.E.
Fecha: 2026-04-30

---

## ORDEN DE EJECUCIÓN RECOMENDADO

1. **Image 1** → ChatGPT Images 2 (frame inicial del hero)
2. **Image 2** → ChatGPT Images 2 adjuntando Image 1 como referencia (frame final)
3. **Video transición** → Higgsfield con Seedance Pro adjuntando Image 1 + Image 2
4. **Claude Design** → pegar el prompt one-shot abajo + adjuntar los 3 assets (MP4 + Image 1 + Image 2)
5. **Claude Code** → exportar el HTML/CSS/JS final desde Claude Design

---

# 1 · BRAND IDENTITY

## Nombre
**INSIGNIA ENTERTAINMENT** — Casa productora.

## Positioning (1 línea)
Donde la historia se filma. Eventos, talento, cámara y dirección creativa bajo un mismo techo cinematográfico.

## Voice & Tone
Editorial premium · cinemascope · serio sin ser solemne · técnico sin alardear · el orgullo se nota en la precisión, no en los adjetivos. Frases cortas, cadenciadas, con peso. Cero emojis, cero exclamaciones, cero hype literal. Inglés británico aplicado al español neutro: "Producimos el momento. Y la imagen que queda."

## Paleta (HEX exactos)

| Rol | HEX | Uso |
|---|---|---|
| Primario | `#0A0A0A` | Negro absoluto · fondos, navbar, footer, hero base |
| Acento | `#E10600` | Rojo cinematográfico · CTAs, frames de video, brackets de nav activo, líneas de progreso, hover states |
| Neutro claro | `#FFFFFF` | Blanco puro · wordmark, copy primario, divisores |
| Neutro medio | `#F2F2F2` | Off-white · cards alternos, fondos de sección clara |
| Sombra overlay | `rgba(10,10,10,0.65)` | Capa sobre cinemagraph para legibilidad |
| Halo profundidad | `linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%)` | Insinuación de rojo en transiciones |

**Regla:** rojo `#E10600` nunca se usa en bloques grandes de fondo — siempre como acento puntual (frames, líneas, CTAs).

## Tipografía
- **Display / wordmark:** `Anton` o `Druk Wide` (sans serif geométrica condensada, fuerte presencia editorial). Fallback: `Inter Tight 900`.
- **Body / UI:** `Inter` (400 / 500 / 600). Tracking ligeramente abierto en uppercase labels (`letter-spacing: 0.08em`).
- **Mono / specs:** `JetBrains Mono` (para WoodenBench-equivalente: "Selected Work / Specs").

## Estética general
Dark cinemascope. After-hours en un set de cine. Luz dura cálida cruzando la escena, polvo flotando en el haz, props reales (cámara, claqueta, mesa de mezclas, cables enrollados). Cero stock photography. Cero AI slop. Referencias visuales: Apple product reveal · Linear 2024 · Arc Browser · Lusion oryzo.ai · A24 títulos de crédito · Rauno Freiberg pacing.

---

# 2 · COPY DE LA LANDING (en español)

## Pre-headline (sobre wordmark)
**HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA.**

## Hero headline
**INSIGNIA**

## Hero subtext (derecha)
Producimos eventos como se filman películas. Cinco disciplinas, una sola dirección creativa. Insignia hace que cada momento se quede en la memoria — y en el corte final.

## CTA principal
**→ COTIZAR PROYECTO**

## Designer/Studio card (abajo izquierda hero)
**STUDIO INSIGNIA · CASA PRODUCTORA INDEPENDIENTE**
*Eventos · Booking · Filmación · Fotografía · Creatividad*

## Sección Manifesto (acto 2)
**No vendemos servicios.**
Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola dirección creativa — la nuestra.

## Sección Disciplinas (5 features, acto 3)
1. **EVENTOS** — Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage.
2. **BOOKING & MANAGEMENT** — Representación de talento, tours, agenda y riders. La trastienda que hace que la función ocurra.
3. **FILMACIÓN** — Cine, comercial y video corporativo. De la idea a la entrega final.
4. **FOTOGRAFÍA** — Editorial, producto, BTS, retrato y campaña.
5. **EXPERIENCIAS & CREATIVIDAD** — Branded entertainment, inmersivos, dirección creativa 360.

## Sección Selected Work (acto 4 — equivalente al WoodenBench de oryzo)
Encabezado: **SELECTED WORK · 2024–2026**
Tabla mono spaced: PROYECTO · DISCIPLINA · CLIENTE · AÑO. (Placeholder — Carl rellena con los 6–8 proyectos hero.)

## Sección Servicios (acto 5 — menú de especialidades, NO pricing)
Encabezado: **ELIGE TU ESPECIALIDAD**
Subtexto: Cada proyecto se cotiza a la medida. Selecciona el servicio que más te interesa y empezamos la conversación.
Cards con CTA `→ Cotizar` que pre-selecciona el servicio.

## Quote / Testimonial (acto 6)
> *"Insignia no produce eventos. Produce recuerdos."*
> — Cliente real (placeholder)

## Founder Reel (acto 7)
Encabezado: **DETRÁS DE CADA INSIGNIA**
CTA: **▶ VER REEL 2026**

## Footer
Wordmark grande **INSIGNIA** + payoff **HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA.**
Columnas:
- **PROYECTO**: Intro · Disciplinas · Trabajos · Contacto
- **STUDIO**: Acerca · Process · Talento · Press
- **CONNECT**: WhatsApp · Instagram · Email · Boletia
- **LEGAL**: Privacidad · Cookies · Aviso · ©2026
Booking: `booking@insignia-entertainment.com` · `+52 55 1695 2852`

---

# 3 · PROMPT IMAGE 1 — Frame inicial del hero (ChatGPT Images 2)

```
Cinematic hero photograph for a film production house website, 16:9 aspect ratio. A matte black wooden floor of a film set seen at a dramatic angle. Centered slightly off to the right: a 35mm cinema camera (ARRI-style body, no logos visible) sitting on its rig, lens cap off, glass catching a single warm tungsten light from above. Around the camera, scattered with intent: a black leather-bound clapperboard, a coiled XLR cable, an open notebook with handwritten timecodes, a red gel film square, and a half-empty espresso glass. A volumetric haze drifts through the scene from camera-right, lit by a single hard tungsten beam that enters the frame at 45 degrees, painting the dust orange. The deep background falls into pure matte black #0A0A0A — no studio walls visible, just darkness. Color grading: rich shadows, warm midtones, a single accent of cinematic red (#E10600) reflected in the camera glass and on the gel square. The composition leaves the upper-left third of the frame intentionally negative — a clean dark area where overlay typography (the wordmark INSIGNIA) will sit later. Mood: editorial, A24-tier, after-hours on a serious film set. Texture: real grain, real props, no CGI, no AI slop, no stock photography aesthetic. Reference inspirations to channel: Apple product photography x A24 title card x Lusion oryzo.ai craft-bench composition. No people in the frame. No text. No logos. Photographed as if shot on a Phase One with a 65mm lens at f/2.8.
```

---

# 4 · PROMPT IMAGE 2 — Frame final del hero (ChatGPT Images 2, adjuntar Image 1 como referencia)

```
Use the attached image as a hard reference for composition, lighting, color, props placement and mood. Generate the SAME exact scene captured a few seconds later, NOT a different scene. Keep identical: 16:9 ratio, matte black floor, the 35mm cinema camera in the same position, the clapperboard, XLR cable, notebook, red gel square, espresso glass, the negative space in the upper-left third for typography overlay, the deep black #0A0A0A background, the single warm tungsten beam from camera-right.

Subtle changes only — the world has breathed:
- The volumetric haze has drifted: dust particles now form a slightly different swirl pattern, denser near the camera lens, sparser near the floor
- The tungsten beam has rotated maybe 2 degrees — its hard edge now grazes the clapperboard's top instead of the camera body
- The red accent (#E10600) is now slightly more present — a faint red rim light kisses the camera barrel from the opposite side, suggesting a second practical light just turned on
- The notebook page has flipped one page — different timecodes barely visible
- The espresso surface shows a single ripple as if the table just settled

Same color grade. Same texture. Same camera angle. Same mood. This is the same photograph one breath later — gentle continuity, not a cut. No people, no text, no logos. Photographed identically — Phase One, 65mm, f/2.8.
```

---

# 5 · PROMPT TRANSICIÓN — Higgsfield / Seedance Pro

```
Animate a 7-second seamless transition from Image 1 to Image 2. 16:9, no audio.

Camera: locked off, completely static — zero camera movement, no pan, no zoom, no dolly. The viewer stays fixed.

Internal motion only, gentle and continuous:
- Volumetric dust drifts slowly from camera-right to camera-left, particles backlit by the warm tungsten beam, never breaking the silhouette of the cinema camera
- The tungsten beam pulses ever so slightly (2-3% intensity breathing) as if a soft cloud passed in front of the source — never strobing, never flickering
- A red practical light (#E10600) gently fades up from 0% to 25% intensity over the 7 seconds, kissing the camera barrel with a rim
- The notebook page lifts and turns once around the 4-second mark — slow, weighted, paper physics
- The espresso surface shows one slow concentric ripple at the 5-second mark
- Everything else stays still

Pacing: meditative. A slow exhale. No sudden movements. No cuts. Pure gentle continuity. The transition will be played in a ping-pong loop on the website (Image 1 → Image 2 → Image 1 → Image 2…), so the final frame must visually match Image 2 exactly to allow seamless reverse playback.

Mood: editorial cinema, after-hours, A24 title card. Color grade: deep blacks, warm tungsten midtones, single red accent. No AI artifacts. No people. No text overlays.
```

---

# 6 · PROMPT ONE-SHOT PARA CLAUDE DESIGN ⭐ (pieza principal)

> Pegar este prompt completo en Claude Design + adjuntar los 3 assets (transition.mp4 · image1.jpg · image2.jpg). Si todavía no generaste los assets, igual podés pegarlo: Claude Design construye con placeholders y los reemplazamos después.

```
Hazme la landing page completa, premium, cinematográfica, scroll-driven, mobile-first, en un solo pass — no me preguntes 20 cosas, decide vos los detalles que falten siguiendo este brief al pie de la letra.

═══════════════════════════════════════════════════════════════
ASSETS ADJUNTOS
═══════════════════════════════════════════════════════════════
1. transition.mp4 — video de 7 segundos, 16:9, sin audio. Es el cinemagraph del hero. IMPLEMENTACIÓN OBLIGATORIA: ping-pong loop (reproduce normal 7s → reverse 7s → normal 7s → loop infinito). Implementarlo con un onended listener que invierta playbackRate (-1 en reverse, 1 en forward), o con una segunda copia del video reproducida al revés vía MediaSource API, o precomputando el tail en Canvas. NO usar simple loop — el corte se nota. Sin controles visibles, sin botón de play, autoplay muted con <video muted autoplay playsinline preload="auto">.
2. image1.jpg — frame inicial del hero, fallback poster del video.
3. image2.jpg — frame final del hero, segunda referencia visual.

═══════════════════════════════════════════════════════════════
MARCA — INSIGNIA ENTERTAINMENT
═══════════════════════════════════════════════════════════════
Casa productora · México. 5 disciplinas: Eventos · Booking & Management · Filmación · Fotografía · Experiencias & Creatividad.

PALETA (usar variables CSS):
  --bg:        #0A0A0A   /* negro absoluto, dominante */
  --accent:    #E10600   /* rojo cinematográfico, solo acentos puntuales */
  --fg:        #FFFFFF   /* blanco puro */
  --fg-muted:  #F2F2F2
  --overlay:   rgba(10,10,10,0.65)
  --halo:      linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%)

Regla dura: el rojo #E10600 NUNCA se usa como fondo de bloque grande. Solo en: brackets de nav activo, frames de video card, líneas de progreso de scroll, CTAs primarios (fill rojo + texto negro), hover de links, rim light en imagery, número 01–05 de cada disciplina.

TIPOGRAFÍA:
- Display: 'Anton', sans-serif (wordmark hero, headlines de sección). Fallback Inter Tight 900.
- Body: 'Inter', sans-serif (400/500/600). Letter-spacing 0.08em en uppercase labels.
- Mono: 'JetBrains Mono' (sección Selected Work, specs).
Importar via Google Fonts.

VOZ: editorial premium, cinemascope, serio sin solemne. Cero emojis, cero exclamaciones. Frases cortas con peso. Inglés británico aplicado al español neutro.

═══════════════════════════════════════════════════════════════
ESTRUCTURA — 9 SECCIONES VERTICALES (scroll-driven)
═══════════════════════════════════════════════════════════════

[01] NAVBAR — fixed top, fondo transparente con backdrop-blur(12px) cuando scrollea, label "INSIGNIA" izquierda en Anton 18px, links derecha uppercase tracking 0.12em: INTRO · DISCIPLINAS · TRABAJOS · SERVICIOS · CONTACTO. Dot circular antes de cada link. Estado activo: bracket [ ] alrededor del link en rojo #E10600. Sidebar derecho vertical pequeño con label "INSIGNIA · 2026" rotado -90°.

[02] HERO — full bleed 100vh. Background: el video transition.mp4 con ping-pong loop, fallback image1.jpg como poster. Overlay rgba(10,10,10,0.45) para legibilidad.
  - Pre-headline arriba centrado: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." (uppercase, blanco, tracking 0.16em, Anton 14px)
  - Wordmark XXL centrado: "INSIGNIA" (Anton, fontSize clamp(120px, 22vw, 360px), color blanco con leve text-shadow rojo)
  - Subtexto a la derecha (max-width 420px): "Producimos eventos como se filman películas. Cinco disciplinas, una sola dirección creativa. Insignia hace que cada momento se quede en la memoria — y en el corte final."
  - Card abajo izquierda con backdrop-filter blur(12px), border 1px rgba(255,255,255,0.18), padding 32px, dotted divider central:
      línea 1: "STUDIO INSIGNIA · CASA PRODUCTORA INDEPENDIENTE"
      línea 2: "Eventos · Booking · Filmación · Fotografía · Creatividad"
  - Card abajo derecha: video card 280×160 con frame rojo 2px #E10600, thumbnail del founder reel, label "▶ VER REEL" overlay
  - Indicador inferior centrado: ⌄ icono chevron en círculo + "SCROLL TO CONTINUE" uppercase blanco

[03] MANIFESTO — 100vh, fondo --bg, copy editorial gigante centrado:
  Texto display Anton, color blanco, fontSize clamp(48px, 7vw, 120px):
  "No vendemos servicios."
  Subtexto Inter 20px, opacity 0.7, max-width 720px:
  "Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola dirección creativa — la nuestra."
  Línea horizontal roja delgada 2px #E10600 width 80px abajo del headline.

[04] DISCIPLINAS — 5 sub-secciones pinned con GSAP ScrollTrigger. Cada una ocupa ~80vh y se queda fija mientras scrolleas, con la imagen 3D/foto a la izquierda animándose y el copy a la derecha cambiando con fade.
  Layout 50/50 desktop, stack en mobile.
  Numeración XXL 01–05 (Anton, color rojo #E10600, opacity 0.85, fontSize 240px).
  Headline UPPERCASE blanco Anton 64px.
  Subtexto Inter 18px blanco opacity 0.8, max-width 480px.
  Línea horizontal roja 1px width 60px entre número y headline.
  Contenido:
  01 — EVENTOS — "Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage."
  02 — BOOKING & MANAGEMENT — "Representación de talento, tours, agenda y riders. La trastienda que hace que la función ocurra."
  03 — FILMACIÓN — "Cine, comercial y video corporativo. De la idea a la entrega final."
  04 — FOTOGRAFÍA — "Editorial, producto, BTS, retrato y campaña."
  05 — EXPERIENCIAS & CREATIVIDAD — "Branded entertainment, inmersivos, dirección creativa 360."
  Imagen lateral: por ahora placeholder oscuro con leve gradiente y el número grande, Carl reemplaza luego.

[05] SELECTED WORK — fondo --bg, encabezado "SELECTED WORK · 2024–2026" en JetBrains Mono uppercase 14px, opacity 0.6.
  Tabla mono spaced 4 columnas: PROYECTO · DISCIPLINA · CLIENTE · AÑO.
  Filas con divider 1px rgba(255,255,255,0.12) entre cada una.
  Hover en fila: background rgba(225,6,0,0.04), texto del proyecto cambia a rojo.
  Generar 6 filas placeholder ("PROYECTO 01", "PROYECTO 02"…) que Carl rellena.
  Click en fila abre lightbox con imagen + copy (placeholder).

[06] SERVICIOS — encabezado: "ELIGE TU ESPECIALIDAD" Anton 64px blanco, subtexto Inter 18px opacity 0.7: "Cada proyecto se cotiza a la medida. Selecciona el servicio que más te interesa y empezamos la conversación."
  Grid de 5 cards: 3 arriba + 2 abajo en desktop, stack en mobile.
  Cada card: background rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.08), border-radius 6px, padding 32px, hover lift 8px + border rojo #E10600.
  Estructura:
    - Numeración 01–05 en JetBrains Mono 14px rojo
    - Cinemagraph placeholder 16:9 (Carl reemplaza)
    - Título Anton 28px blanco uppercase
    - Copy Inter 16px opacity 0.8 (3 líneas)
    - CTA "→ COTIZAR" abajo: pill-shape, fill rojo #E10600, texto negro, padding 12px 24px, font Anton 14px uppercase
  Click en CTA abre formulario modal con el servicio pre-seleccionado en un <select>.
  Las 5 cards tienen jerarquía visual idéntica — ninguna se destaca como "premium".

[07] QUOTE — 100vh, fondo --bg, quote editorial centrado:
  Comilla XXL roja decorativa "“" Anton 320px opacity 0.3 detrás del texto.
  Quote Anton 56px blanco italic: "Insignia no produce eventos. Produce recuerdos."
  Atribución Inter 14px uppercase tracking 0.16em opacity 0.5: "— CLIENTE PLACEHOLDER"

[08] FOUNDER REEL — 100vh, video player full-bleed con thumbnail oscuro + botón play centrado (círculo rojo #E10600 60px, ícono triángulo blanco). Encabezado arriba "DETRÁS DE CADA INSIGNIA" Anton 32px. Click reproduce el reel (placeholder vimeo embed).

[09] FOOTER — fondo --bg, ~80vh, canvas de partículas interactivas reactivas al cursor (implementar con Three.js o Canvas 2D — partículas drift cálido, color blanco con 30% opacity, conectadas por líneas a los vecinos cercanos cuando el cursor pasa, color rojo #E10600 al 60%).
  Wordmark "INSIGNIA" XL Anton centrado al inicio del footer.
  Eslogan: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." uppercase Anton 18px tracking 0.16em.
  Línea horizontal blanca 1px opacity 0.2.
  4 columnas de links uppercase Anton 14px tracking 0.12em, links Inter 14px:
    PROYECTO: Intro · Disciplinas · Trabajos · Contacto
    STUDIO: Acerca · Process · Talento · Press
    CONNECT: WhatsApp · Instagram · Email · Boletia
    LEGAL: Privacidad · Cookies · Aviso · ©2026
  Booking line abajo: "booking@insignia-entertainment.com · +52 55 1695 2852"
  Línea final: "© Insignia Entertainment · Ciudad de México · Hecho con cuidado."

═══════════════════════════════════════════════════════════════
COMPORTAMIENTO / ANIMACIÓN
═══════════════════════════════════════════════════════════════
- Smooth scroll con Lenis (importar via CDN)
- GSAP ScrollTrigger para animaciones por scroll (importar via CDN)
- Fade-in + translateY(40px) → 0 en cada heading al entrar al viewport (stagger 0.1s)
- Pin sections en DISCIPLINAS (cada una se queda fija mientras scrolleas)
- Magnetic hover en CTAs (el botón ataca el cursor 4-6px)
- Cursor custom: dot blanco 8px que se expande a 32px sobre links/CTAs y cambia a rojo
- Transiciones globales: cubic-bezier(0.22, 1, 0.36, 1) duración 1.2s
- Video hero: ping-pong loop OBLIGATORIO (instrucciones técnicas arriba)

═══════════════════════════════════════════════════════════════
RESPONSIVE / MOBILE-FIRST
═══════════════════════════════════════════════════════════════
- Breakpoints: 640px, 1024px, 1440px
- Wordmark hero: clamp(80px, 22vw, 360px)
- Headlines de sección: clamp(40px, 7vw, 120px)
- Body copy: clamp(15px, 1.6vw, 18px)
- Pin sections en mobile se desactivan (scroll natural)
- Grid de servicios: 1 columna en mobile, 2 en tablet, 3+2 en desktop
- Cursor custom solo desktop
- Footer particles solo desktop (versión estática en mobile para performance)

═══════════════════════════════════════════════════════════════
PERFORMANCE / SEO / A11Y
═══════════════════════════════════════════════════════════════
- Lazy load de imágenes secundarias (loading="lazy")
- Video hero con preload="auto" pero comprimido a <2MB
- Meta tags completos: title, description, og:image (image1.jpg), og:title, og:description, twitter:card
- Schema.org LocalBusiness markup
- alt text en todas las imágenes
- aria-labels en todos los botones interactivos
- Contraste mínimo AAA (blanco sobre negro = AAA confirmado)
- prefers-reduced-motion: respetar — desactivar parallax, pin y ping-pong loop si está activo
- Lighthouse target: 95+ en Performance, Accessibility, Best Practices, SEO

═══════════════════════════════════════════════════════════════
ENTREGABLE
═══════════════════════════════════════════════════════════════
Un solo archivo HTML con CSS y JS embebidos (single-file landing). Listo para copiar a Claude Code y publicar. NO uses frameworks pesados (no React, no Vue) — vanilla HTML/CSS/JS + GSAP + Lenis vía CDN. Que se vea cinematográfico, premium, scroll-driven, sin sentirse plantillero. Hazlo en UN SOLO PASS — confiá en tu criterio para los detalles que no especifiqué.
```

---

# 7 · SKETCH / WIREFRAME EN TEXTO

```
┌──────────────────────────────────────────────────────────────────────┐
│ NAV  INSIGNIA ───────────────────  INTRO·DISCIPLINAS·TRABAJOS·SERVI… │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│         HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA.          │
│                                                                      │
│              I N S I G N I A                                         │
│              (wordmark XXL · cinemagraph ping-pong detrás)           │
│                                                                      │
│                                          Producimos eventos como     │
│                                          se filman películas.        │
│                                          Cinco disciplinas, una      │
│                                          sola dirección creativa.    │
│                                                                      │
│  ┌──card────────┐                                  ┌──video──┐       │
│  │ STUDIO INSIG…│                                  │ ▶ REEL  │       │
│  │ ............ │                                  └─────────┘       │
│  │ Eventos·Book…│                                                    │
│  └──────────────┘                ⌄ SCROLL TO CONTINUE                 │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│                  No vendemos servicios.                              │
│                  ──                                                  │
│                  Producimos momentos que merecen…                    │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│  01  EVENTOS                          [imagen pinada izquierda]      │
│      ──                               (50/50 layout, scroll-pinned)  │
│      Conciertos, corporativos…                                       │
│                                                                      │
│  02  BOOKING & MANAGEMENT             [imagen pinada izquierda]      │
│  03  FILMACIÓN                        [imagen pinada izquierda]      │
│  04  FOTOGRAFÍA                       [imagen pinada izquierda]      │
│  05  EXPERIENCIAS & CREATIVIDAD       [imagen pinada izquierda]      │
│                                                                      │
├──────────────────────── 100vh c/u ───────────────────────────────────┤
│                                                                      │
│  SELECTED WORK · 2024–2026                                           │
│  ───────────────────────────────────────────                         │
│  PROYECTO 01    │ FILMACIÓN  │ CLIENTE A  │ 2026                     │
│  PROYECTO 02    │ EVENTO     │ CLIENTE B  │ 2026                     │
│  PROYECTO 03    │ FOTO       │ CLIENTE C  │ 2025                     │
│  …                                                                   │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│           ELIGE TU ESPECIALIDAD                                      │
│           Cada proyecto se cotiza a la medida…                       │
│                                                                      │
│  ┌────┐  ┌────┐  ┌────┐                                              │
│  │ 01 │  │ 02 │  │ 03 │   (cards de servicio · cinemagraph + CTA)    │
│  └────┘  └────┘  └────┘                                              │
│  ┌────┐  ┌────┐                                                      │
│  │ 04 │  │ 05 │                                                      │
│  └────┘  └────┘                                                      │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│              "                                                       │
│         "Insignia no produce eventos. Produce recuerdos."            │
│              "                                                       │
│              — CLIENTE PLACEHOLDER                                   │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│  DETRÁS DE CADA INSIGNIA                                             │
│         [ ▶ ]                                                        │
│         Founder reel · video player full bleed                       │
│                                                                      │
├──────────────────────── 100vh ───────────────────────────────────────┤
│                                                                      │
│              I N S I G N I A                                         │
│         HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA.          │
│         ──────────────────────────────────────                       │
│  PROYECTO     STUDIO       CONNECT        LEGAL                      │
│  Intro        Acerca       WhatsApp       Privacidad                 │
│  Disciplinas  Process      Instagram      Cookies                    │
│  Trabajos     Talento      Email          Aviso                      │
│  Contacto     Press        Boletia        ©2026                      │
│                                                                      │
│  [partículas interactivas drift en background]                       │
│                                                                      │
│  booking@insignia-entertainment.com · +52 55 1695 2852               │
│  © Insignia Entertainment · Ciudad de México · Hecho con cuidado.    │
└──────────────────────────────────────────────────────────────────────┘
```

---

# NOTAS DE EJECUCIÓN

1. **Orden estricto:** Image 1 → Image 2 (con Image 1 adjunta) → Video transición (con ambas imágenes adjuntas) → Claude Design (con los 3 assets). Saltarse el orden produce inconsistencia visual.

2. **Tip Image 2:** si ChatGPT Images 2 te genera una escena distinta en vez de "la misma un instante después", regenera con un prompt más firme. Frase clave que ayuda: "This is the SAME photograph, one breath later — gentle continuity, not a cut."

3. **Tip video Higgsfield:** si la cámara se mueve (pan/zoom no deseado), agregá explícitamente "locked-off camera, no movement at all, zero camera motion" al prompt. Seedance a veces interpreta "subtle motion" como "subtle camera motion".

4. **Ping-pong loop:** la implementación más limpia es renderizar el video y su reverse en el mismo MP4 (concatenar A → A_reverse en post-production con FFmpeg: `ffmpeg -i in.mp4 -filter_complex "[0]reverse[r];[0][r]concat=n=2" out.mp4`). Así el `<video loop>` simple ya hace el ping-pong sin código JS. Si no lo hacés en post, usar el listener `onended` con `playbackRate` invertido.

5. **Claude Design one-shot:** está pensado para producir todo en una sola pasada. Si el resultado no convence al 100%, refiná con tweaks del canvas (mover, recolorear, cambiar copy puntual) en vez de re-promptear desde cero — así ahorrás sesión semanal.

6. **Después de Claude Design:** Carl exporta el HTML/CSS/JS y lo pasa a Claude Code para optimizar performance, agregar el formulario funcional con WhatsApp pre-fill, integrar Boletia para eventos con boletaje, y publicar.

7. **Assets pendientes que Carl necesita conseguir** antes de la entrega final:
   - 5 cinemagraphs cortos (uno por disciplina) — pueden generarse con el mismo pipeline F.R.A.M.E. en una segunda iteración
   - 6–8 proyectos reales para Selected Work (foto + título + año)
   - 1 testimonial real (con permiso del cliente)
   - 1 founder reel real (de 60–90s)

---

*Generado por Claude · Framework F.R.A.M.E. (Ben Corde / Imperio Digital v1.0) · 2026-04-30*
