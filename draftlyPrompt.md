# INSIGNIA ENTERTAINMENT — Prompt para Draftly.space
**Casa productora · sitio inmersivo scroll-driven 3D**
Generado: 2026-04-30

---

## CÓMO USAR ESTE ARCHIVO

Draftly trabaja diferente a Claude Design. Su flujo es:
1. Le das un prompt cinematográfico → genera un video 8s
2. Extrae cientos de frames → los reproduce al scrollear (efecto parallax 3D)
3. Después iterás vía chat para refinar copy, colores, secciones
4. Exportás HTML/CSS/JS

Por eso este prompt está calibrado **atmósfera-first**: lo importante para
arrancar es la imagen-película del sitio. Lo estructural lo agregás después
en el chat iterativo.

---

# 🎬 PROMPT PRINCIPAL — Pegar en draftly.space

```
A cinematic, scroll-driven, immersive website for INSIGNIA ENTERTAINMENT — a film and event production house. Dark cinemascope aesthetic, surgical minimalism, contemporary digital cinema (NOT vintage, NOT craft, NOT warm). Reference vibes: Apple keynote teasers, Arc Browser, A24 title cards, ARRI product photography, Burberry tech ads 2025, Coldplay 2025 tour stage design.

THE 8-SECOND CINEMATIC SEQUENCE (this drives the entire scroll):

Second 0–2: Pure void of pitch black #0A0A0A. From the depth of the void, a single beam of cool white light cuts diagonally across the frame. Volumetric haze drifts. The wordmark "INSIGNIA" emerges in massive Anton-style typography, bright white #FFFFFF, slowly resolving into focus. Above it, in small uppercase tracking-out: "MADE FOR THE STAGE. BUILT FOR THE LENS."

Second 2–4: The camera dollies forward through the wordmark. The letters dissolve into atmospheric particles. As we push through, a professional cinema camera (modern body, ARRI Alexa Mini LF / RED Komodo silhouette, no logos visible) materializes ahead — head-on, lens pointing directly at the viewer. A red rim light #E10600 paints the right edge of the camera body. Single key light from above-front. Inside the lens glass, a tiny red recording LED blinks once.

Second 4–6: We continue dollying toward the lens. The camera body fills the frame, then the lens fills the frame, then the front element of the lens dominates — multi-coated glass reflections visible, internal iris diaphragm faintly readable. Volumetric haze thickens. The world is being photographed by this single eye.

Second 6–8: The lens reflection deepens — inside the glass, we see a reflected scene fade in: a vast crowd at a live show, raised hands in silhouette, lasers cutting through smoke, a distant stage with red architectural light #E10600 burning at its edges. The lens has captured the show. The scene holds, breathing, as the final frame crystallizes — a perfect mirror of the show inside the camera glass.

VISUAL SYSTEM (apply throughout the entire scroll):

— Color palette (use exact HEX values everywhere):
  • Primary background: #0A0A0A (absolute black, dominant)
  • Accent (only puntual, never as background): #E10600 (cinematic red — for CTAs, active nav brackets, video card frames, progress lines, hover states, rim lighting)
  • Foreground text: #FFFFFF (pure white — wordmarks, body, dividers)
  • Off-white alt: #F2F2F2 (alternate cards, light section breaks)
  • Subtle red halo gradient: linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%) for depth transitions

— Typography:
  • Display / wordmarks / headlines: Anton (sans-serif condensed geometric, heavy presence). Fallback: Inter Tight 900.
  • Body / UI: Inter (400/500/600). Letter-spacing 0.08em on uppercase labels.
  • Mono / specs: JetBrains Mono (for the "Selected Work" table).
  • Load via Google Fonts.

— Lighting language (this is the soul of the look):
  • Single hard key light from above-front, sculpting subjects with crisp specular highlights
  • Single red rim light #E10600 from behind-right on every featured subject
  • Volumetric haze drifting horizontally throughout — picked up by lights, never fog
  • Pure void backgrounds — no walls, no horizon, just infinite black
  • Modern LED-driven illumination, NOT tungsten. Quirurgical, not cozy.

— Voice & tone (Spanish):
  • Editorial premium · cinemascope · serious without solemn
  • Short sentences with weight. Zero emojis. Zero exclamation marks. Zero hype.
  • Technical precision applied to creative work.
  • Examples: "Producimos el momento. Y la imagen que queda." / "No vendemos servicios. Producimos momentos que merecen ser filmados."

SECTION STRUCTURE (9 vertical sections, each scroll-anchored to a moment in the cinematic):

[1] HERO — wordmark INSIGNIA over the void. Pre-headline above: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." Subtext on the right: "Producimos eventos como se filman películas. Cinco disciplinas, una sola dirección creativa. Insignia hace que cada momento se quede en la memoria — y en el corte final." CTA pill button: "→ COTIZAR PROYECTO" in red #E10600 fill, black text. Bottom-left card with backdrop blur: "STUDIO INSIGNIA · CASA PRODUCTORA INDEPENDIENTE · Eventos · Booking · Filmación · Fotografía · Creatividad." Bottom-right video card with red #E10600 frame: "▶ VER REEL".

[2] MANIFESTO — display headline centered: "No vendemos servicios." in Anton, 120px, white. Subtext below: "Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola dirección creativa — la nuestra." Thin red line 2px #E10600, 80px wide, beneath the headline.

[3-7] DISCIPLINAS — five pinned sections, one per discipline. Layout 50/50 desktop: massive numeral on the left in red #E10600 (Anton 240px, opacity 0.85), discipline content on the right. For each: numeral + thin red 1px line + uppercase headline (Anton 64px) + subtext (Inter 18px).
  01 — EVENTOS — "Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage."
  02 — BOOKING & MANAGEMENT — "Representación de talento, tours, agenda y riders. La trastienda que hace que la función ocurra."
  03 — FILMACIÓN — "Cine, comercial y video corporativo. De la idea a la entrega final."
  04 — FOTOGRAFÍA — "Editorial, producto, BTS, retrato y campaña."
  05 — EXPERIENCIAS & CREATIVIDAD — "Branded entertainment, inmersivos, dirección creativa 360."

[8] SELECTED WORK — header in JetBrains Mono uppercase 14px opacity 0.6: "SELECTED WORK · 2024–2026". Mono-spaced 4-column table: PROYECTO · DISCIPLINA · CLIENTE · AÑO. Six placeholder rows with thin dividers. Hover reveals red tint on the project name.

[9] SERVICIOS (selectable specialty menu, NO pricing) — header Anton 64px white: "ELIGE TU ESPECIALIDAD". Subtext Inter 18px opacity 0.7: "Cada proyecto se cotiza a la medida. Selecciona el servicio que más te interesa y empezamos la conversación." Grid 3+2 (desktop) of five service cards with identical visual hierarchy — none premium-tier. Each card: numeral (JetBrains Mono 14px red), embedded cinemagraph 16:9, uppercase title (Anton 28px white), 3-line subtext (Inter 16px opacity 0.8), CTA pill "→ COTIZAR" red #E10600 fill black text. Cards have subtle background rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.08), border-radius 6px, hover lift 8px and red border on hover.

[10] QUOTE — display quote centered: "Insignia no produce eventos. Produce recuerdos." Anton 56px white italic. Decorative oversized red quotation mark behind, opacity 0.3. Attribution below in Inter 14px uppercase tracking 0.16em opacity 0.5: "— CLIENTE PLACEHOLDER".

[11] FOUNDER REEL — full-bleed video player with dark thumbnail. Centered red play button #E10600 60px circle with white triangle. Header above: "DETRÁS DE CADA INSIGNIA" in Anton 32px.

[12] FOOTER — interactive particle canvas in background (white particles drift, connect to neighbors with thin lines that turn red #E10600 60% when cursor hovers). Wordmark INSIGNIA centered XL Anton. Payoff line: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." Four columns of links uppercase Anton 14px tracking 0.12em: PROYECTO (Intro · Disciplinas · Trabajos · Contacto) · STUDIO (Acerca · Process · Talento · Press) · CONNECT (WhatsApp · Instagram · Email · Boletia) · LEGAL (Privacidad · Cookies · Aviso · ©2026). Booking line: "booking@insignia-entertainment.com · +52 55 1695 2852". Final line: "© Insignia Entertainment · Ciudad de México · Hecho con cuidado."

TECHNICAL CALIBRATION:

— Scroll FPS: 30 (smooth without burning bandwidth)
— Aspect: 16:9 hero, full-bleed
— Mobile-first responsive: stack columns, deactivate pinned sections on mobile, footer particles only on desktop
— Hero wordmark: clamp(80px, 22vw, 360px)
— Section headlines: clamp(40px, 7vw, 120px)
— Body copy: clamp(15px, 1.6vw, 18px)
— Smooth scroll with inertia
— prefers-reduced-motion: respect it (disable parallax, use static images instead)
— Preload the cinematic video frames aggressively for smooth scrub
— SEO: meta tags, og:image, schema.org LocalBusiness markup
— Lighthouse target: 95+

DELIVERABLE: clean exportable HTML/CSS/JS, single-file or zip. Ready to publish.
```

---

# 📦 ASSETS PARA SUBIR A DRAFTLY

Subí estos archivos como **product image injection** y **multi-video chaining**:

| # | Archivo | Uso en draftly | Ya generado |
|---|---|---|---|
| 1 | `camera-image1.jpg` | Frame inicial del hero (wide shot cámara) | ✅ |
| 2 | `camera-image2.jpg` | Frame final del hero (close-up del lente) | ✅ |
| 3 | `camera-dolly.mp4` | Video chain hero (scroll-driven dolly-in) | ✅ |
| 4 | `liveshow-image1.jpg` | Card 01 EVENTOS — frame inicial | ✅ |
| 5 | `liveshow-image2.jpg` | Card 01 EVENTOS — frame final | ✅ |
| 6 | `liveshow-pingpong.mp4` | Card 01 EVENTOS — cinemagraph | ✅ |
| 7 | Logo INSIGNIA (SVG/PNG transparente) | Wordmark navbar, footer | ⚠️ generar |
| 8 | Founder reel (MP4, 60–90s) | Sección [11] | ⚠️ pendiente |
| 9 | 4 cinemagraphs faltantes (booking, filmación, foto, experiencias) | Cards 02–05 | ⚠️ pendiente |
| 10 | 6–8 fotos para Selected Work | Sección [8] | ⚠️ pendiente |

**Mínimo viable para arrancar:** los primeros 6 assets (los que ya generaste).
Los demás se completan después en iteración. Draftly te deja reemplazar
placeholders en cualquier momento.

---

# 💬 CHAT ITERATIVO POST-PRIMER GENERACIÓN

Después del primer render, draftly te deja refinar por chat. Estos son los
follow-ups que probablemente vas a necesitar en este orden:

**Refinamiento 1 — pacing del scroll:**
> "El scroll se siente muy rápido en el hero. Bajá la sensibilidad: que el dolly-in del lente tarde el doble de scroll en completarse. Quiero que el usuario sienta el avance, no que pase de golpe."

**Refinamiento 2 — copy específico:**
> "En la sección Manifesto, el headline 'No vendemos servicios.' está en sentence case. Cambialo a `No vendemos servicios.` en lowercase con punto final, font Anton, mantené el tamaño. Y agregá 200ms de delay antes de que aparezca el subtexto."

**Refinamiento 3 — interacción de las cards de servicios:**
> "Las 5 cards de servicios necesitan: (1) hover desktop reproduce el cinemagraph embebido; (2) click en el CTA '→ COTIZAR' abre un formulario modal con un select pre-poblado con el nombre del servicio; (3) las cards no-hovered se desaturan a opacity 0.7."

**Refinamiento 4 — dot navigation:**
> "Agregá una nav lateral derecha vertical con 5 dots — uno por sección principal (Hero · Manifesto · Disciplinas · Trabajos · Servicios). Dot activo en rojo #E10600 con bracket. Click en un dot scrollea a la sección."

**Refinamiento 5 — formulario de cotización:**
> "El modal de cotización debe tener: nombre, email, WhatsApp, servicio (select pre-poblado), descripción del proyecto, fecha estimada, presupuesto aproximado (rangos). El submit envía a booking@insignia-entertainment.com y abre WhatsApp con un mensaje pre-redactado a +52 55 1695 2852 con los datos del form."

**Refinamiento 6 — Boletia integration:**
> "En la sección Selected Work, las filas de proyectos que sean eventos con boletaje activo deben tener un pequeño badge 'TICKETS' a la derecha que linkea a la página de Boletia del evento. El badge es naranja sutil opacity 0.6 para no competir con el rojo de marca."

---

# 🎯 TIPS PARA EXPRIMIR DRAFTLY AL MÁXIMO

1. **FPS — empezá en 30, ajustá según se sienta.**
   Draftly permite 10–40. A 30 fps el scroll se siente cinematográfico sin
   matar el ancho de banda. Si el hero se siente choppy, subí a 40. Si carga
   lento en mobile, bajá a 20.

2. **Multi-video chaining — encadená el hero con el live show.**
   En el chat: "Encadená el video del hero con el video del live show: cuando
   termina el dolly-in del lente (segundo 8), funde con un crossfade de 1
   segundo al video del live show, que arranca como el reflejo dentro del
   lente." Eso crea una transición narrativa entre el hero y la sección de
   eventos sin cortes.

3. **Product image injection — usalo para el video card del hero.**
   Subí una thumbnail del founder reel y pediles que la inyecten en el video
   card de la esquina inferior derecha del hero, con frame rojo y label
   "▶ VER REEL".

4. **Scroll-driven 3D parallax es su superpoder — explotalo.**
   Como draftly extrae cientos de frames del video y los reproduce al scrollear,
   cualquier movimiento que pidas en el video se vuelve scroll-controllable.
   Si querés que un elemento se mueva al scrollear, animalo en el video — no
   intentes hacerlo después con CSS.

5. **Pediles preview de mobile antes de exportar.**
   Las cards pinned y el parallax 3D pueden romperse en mobile si no se
   revisan. En el chat: "mostrame la versión mobile del hero y la sección de
   servicios — específicamente cómo se comporta el scroll-driven en pantalla
   de 375px."

---

# 🚀 QUÉ MÁS AGREGAR (sugerencias estratégicas)

Cosas que no estaban en el prompt original pero que vale la pena considerar
antes de exportar:

1. **Open Graph cards personalizados.**
   Cuando alguien comparte el sitio en WhatsApp/IG/LinkedIn, querés que se
   vea cinematográfico. Pediles a draftly: "generá una imagen og:image
   1200×630 con el wordmark INSIGNIA sobre fondo negro con rim rojo, y
   metelo en los meta tags."

2. **Loading state premium.**
   Mientras carga el hero (los frames del video extraído pesan), agregá
   una pantalla de loading con el wordmark INSIGNIA pulsando en blanco
   sobre negro absoluto. "Loading state: black screen #0A0A0A, wordmark
   INSIGNIA centered pulsing white opacity 0.6 to 1.0 every 1.2s, until
   first frame is ready. NO progress bar, NO spinner — just the wordmark."

3. **Easter egg para clientes recurrentes.**
   Pequeño detalle de marca: "si el usuario presiona la tecla 'i' tres veces
   seguidas, el cursor cambia a un ícono de claqueta y aparece un secret
   message en el footer: 'Buenas noches, equipo.'" — son cosas que cuestan
   nada y elevan el reel.

4. **Integración Boletia robusta.**
   Para eventos con boletaje activo, no basta un link — pediles que generen
   un componente "Próximos eventos" en la sección Selected Work, con botón
   "COMPRAR BOLETOS" que redirige a la URL específica de Boletia. Si Boletia
   tiene API pública, draftly puede consumirla y mostrar disponibilidad en
   tiempo real.

5. **WhatsApp floating CTA persistente.**
   Botón flotante abajo-derecha en todas las secciones (excepto hero), con
   ícono de WhatsApp en blanco, fondo rojo #E10600, que abre wa.me con
   mensaje pre-redactado: "Hola Insignia, vi su sitio y quiero saber más
   sobre [servicio que estaba viendo]." Pasale al draftly el contexto del
   servicio dinámicamente según la sección visible.

6. **Página individual por servicio.**
   El sitio actual es one-page. Pero cada servicio (eventos, filmación, etc.)
   merece su propia URL para SEO local. Pediles a draftly: "generá 5 sub-páginas
   /servicios/eventos, /servicios/filmacion, etc., cada una con galería,
   case studies y CTA específico." Esto multiplica tu superficie de búsqueda
   en Google sin romper la estética del home.

7. **Analytics + heatmap desde el día uno.**
   Antes de publicar: integrá Plausible o Umami (privacy-friendly, sin cookies
   que necesiten consent banner) y Hotjar para heatmap del scroll. Te va a
   decir exactamente qué disciplina es la que más conversion atrae.

---

# 📋 CHECKLIST FINAL PRE-PUBLICACIÓN

Antes de apretar "deploy" en draftly, verificá:

- [ ] Hero wordmark se ve correctamente en mobile 375px
- [ ] Scroll-driven dolly funciona en Safari iOS (es el más quisquilloso)
- [ ] CTAs "→ COTIZAR" abren formulario o WhatsApp pre-rellenado
- [ ] Las 5 cards de servicios cargan sus cinemagraphs sin lag
- [ ] Footer particles no consumen >10% CPU sostenido en mobile
- [ ] Meta tags Open Graph generan preview decente al pegar la URL en WhatsApp
- [ ] Email `booking@insignia-entertainment.com` configurado y recibe pruebas
- [ ] Número WhatsApp `+52 55 1695 2852` está activo y responde
- [ ] Lighthouse Performance ≥85 en mobile, ≥95 en desktop
- [ ] Lighthouse Accessibility ≥95
- [ ] Sitemap.xml + robots.txt generados
- [ ] Favicon con el wordmark INSIGNIA en negro/rojo
- [ ] Dominio `insignia-entertainment.com` apuntando bien (DNS A o CNAME según deploy)

---

*Generado por Claude · Optimizado para draftly.space · 2026-04-30*
