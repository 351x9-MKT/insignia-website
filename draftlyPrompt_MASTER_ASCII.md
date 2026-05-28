# INSIGNIA ENTERTAINMENT - Master Prompt ASCII Pure
ASCII-only version. Every character = 1 byte. Spanish accents stripped.
Generado: 2026-04-30

---

## INSTRUCCIONES

Copia SOLO el bloque que esta entre las marcas ===PROMPT_START=== y
===PROMPT_END===. Pegalo en el campo de prompt de draftly.

Si los textos de la web te salen sin acentos cuando exportes, los reagregas
manualmente en el HTML antes de publicar. Es 5 minutos de find-and-replace
y vale la pena para que el prompt entre dentro del limite de bytes.

---

===PROMPT_START===

INSIGNIA ENTERTAINMENT - film and event production house, Mexico City. Cinematic scroll-driven 3D website. Dark cinemascope aesthetic, surgical minimalism, modern digital cinema. NOT vintage, NOT craft, NOT warm. Visual references: Apple keynote teasers, Arc Browser, A24 title cards, ARRI product photography, Burberry tech ads 2025, Coldplay 2025 tour stage design, Lusion oryzo.ai pacing.

=== HERO 8-SECOND CINEMATIC SEQUENCE (drives the scroll) ===

Second 0-2: Pure void of pitch black #0A0A0A. From the depth of the void, a single beam of cool white light cuts diagonally across the frame. Volumetric haze drifts. The wordmark INSIGNIA emerges in massive Anton-style condensed sans-serif typography, bright white #FFFFFF, slowly resolving into focus. Above it small uppercase: "MADE FOR THE STAGE. BUILT FOR THE LENS."

Second 2-4: The viewer dollies forward through the wordmark. The letters dissolve into atmospheric particles. Ahead, a professional cinema camera materializes (modern body, ARRI Alexa Mini LF or RED Komodo silhouette, no logos visible) -- head-on, lens pointing directly at the viewer. A red rim light #E10600 paints the right edge of the camera body. Single key light from above-front. Inside the lens glass, a tiny red recording LED blinks once.

Second 4-6: The dolly continues toward the lens. Camera body fills the frame, then the lens fills the frame, then the front element of the lens dominates -- multi-coated glass reflections visible, internal iris diaphragm faintly readable. Volumetric haze thickens.

Second 6-8: Inside the lens reflection, a vast scene fades in: a crowd at a live show, raised hands in silhouette, lasers cutting through smoke, a distant stage with red architectural light #E10600 burning at its edges. The lens has captured the show. Final frame holds, breathing.

=== VISUAL SYSTEM ===

PALETTE (use these exact HEX values everywhere):
--bg #0A0A0A (absolute black, dominant)
--accent #E10600 (cinematic red, ONLY puntual: CTAs, active nav brackets, video frames, progress lines, hover states, rim lighting. NEVER as background of large blocks)
--fg #FFFFFF (pure white: wordmarks, body, dividers)
--fg-muted #F2F2F2 (off-white: alternate cards)
--overlay rgba(10,10,10,0.65) (overlay on imagery for legibility)
--halo linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%)

TYPOGRAPHY (load via Google Fonts):
- Display, wordmarks, headlines: Anton (sans-serif condensed geometric, heavy presence). Fallback: Inter Tight 900.
- Body and UI: Inter (400/500/600). Letter-spacing 0.08em on uppercase labels.
- Mono, specs, dates: JetBrains Mono.

LIGHTING LANGUAGE:
- Single hard key light from above-front, sculpting subjects with crisp specular highlights
- Single red rim light #E10600 from behind-right on every featured subject
- Volumetric haze drifting horizontally throughout, picked up by lights
- Pure void backgrounds: no walls, no horizon, just infinite black
- Modern LED-driven illumination, NOT tungsten. Surgical, not cozy.

VOICE AND TONE (Spanish):
- Editorial premium, cinemascope, serious without solemn
- Short sentences with weight. Zero emojis. Zero exclamation marks. Zero hype.
- Technical precision applied to creative work.

=== 18 SECTIONS IN ORDER ===

[01] NAVBAR - fixed top, transparent with backdrop-blur(12px) on scroll. Left: "INSIGNIA" Anton 18px. Right uppercase tracking 0.12em: INTRO | DISCIPLINAS | EVENTOS | TRABAJOS | SERVICIOS | CONTACTO. Dot circular before each link. Active state: red bracket [ ] around link. Right vertical sidebar small with label "INSIGNIA - 2026" rotated -90 degrees.

[02] HERO - full bleed 100vh, scroll-driven 3D parallax based on the 8-second cinematic.
- Pre-headline top center: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CAMARA." (Anton 14px white tracking 0.16em uppercase)
- Wordmark XXL center: "INSIGNIA" (Anton, clamp(80px, 22vw, 360px), white with subtle red text-shadow)
- Right subtext (max-width 420px): "Producimos eventos como se filman peliculas. Cinco disciplinas, una sola direccion creativa. Insignia hace que cada momento se quede en la memoria, y en el corte final."
- Bottom-left card with backdrop-filter blur(12px), border 1px rgba(255,255,255,0.18), padding 32px, dotted divider center: "STUDIO INSIGNIA - CASA PRODUCTORA INDEPENDIENTE" / "Eventos - Booking - Filmacion - Fotografia - Creatividad"
- Bottom-right video card 280x160 with red #E10600 frame 2px, founder reel thumbnail, label "PLAY REEL"
- Bottom center indicator: chevron icon in circle with label "SCROLL TO CONTINUE" uppercase white

[03] MANIFESTO - 100vh, --bg.
- Display headline center Anton clamp(48px, 7vw, 120px) white: "No vendemos servicios."
- Subtext below Inter 20px opacity 0.7 max-width 720px: "Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola direccion creativa, la nuestra."
- Thin red horizontal line 2px #E10600 width 80px below headline.

[04-08] DISCIPLINAS - 5 pinned sections via scroll-trigger. Each ~80vh. Layout 50/50 desktop (image/cinemagraph left, content right), stack mobile.
Numeral XXL 01-05 (Anton, red #E10600, opacity 0.85, 240px).
Headline UPPERCASE white Anton 64px.
Subtext Inter 18px white opacity 0.8 max-width 480px.
Thin red line 1px width 60px between numeral and headline.

01 - EVENTOS - "Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage."
02 - BOOKING AND MANAGEMENT - "Representacion de talento, tours, agenda y riders. La trastienda que hace que la funcion ocurra."
03 - FILMACION - "Cine, comercial y video corporativo. De la idea a la entrega final."
04 - FOTOGRAFIA - "Editorial, producto, BTS, retrato y campana."
05 - EXPERIENCIAS AND CREATIVIDAD - "Branded entertainment, inmersivos, direccion creativa 360."

[09] EVENTOS DESTACADOS - special section, eventos is the anchor specialty. Horizontal drag-scroll cinematic showcase.
Sticky header at top during horizontal scroll:
- Eyebrow JetBrains Mono 12px opacity 0.5: "ESPECIALIDAD ANCLA - 2024 a 2026"
- Headline Anton 64px white: "EVENTOS QUE QUEDARON EN LA HISTORIA"
- Subtext Inter 18px opacity 0.7 max-width 560px: "Cuatro producciones que definieron lo que hacemos. Conciertos, festivales, lanzamientos, activaciones. Ningun detalle queda fuera del corte."
- Progress bar 1px below header: track white opacity 0.2, fill red #E10600 growing with horizontal scroll

Layout:
- 4 cards horizontal, drag scroll with cursor grab/grabbing
- Each card 85vw desktop, 92vw mobile, gap 24px, snap on release
- Container padding 5vw each side
- Keyboard arrows + mobile swipe support, dot indicators on mobile

Each card structure:
- Cover image full-bleed 16:9 inside the card with cinemagraph
- Bottom gradient overlay: linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.92) 100%)
- Bottom-half text: numeral "01 / 04" JetBrains Mono 14px white opacity 0.5, title Anton 56px white, stats line JetBrains Mono 12px opacity 0.7 "VENUE - CAPACIDAD - ANO", brief Inter italic 16px white max-width 480px (2-3 lines), CTA "VER CASE STUDY" Anton 14px uppercase tracking 0.12em red #E10600
Hover: cinemagraph plays, image zoom 102%
Click on CTA: opens lightbox with gallery and info

Placeholder data for 4 events (Carl will replace):
01 - FESTIVAL CIRCUITO MX 2026 - ARENA CDMX - 18,000 - 2026 - "Tres dias, cuatro escenarios, un solo equipo. Produccion integral end-to-end."
02 - LANZAMIENTO MARCA ALPHA - FORO INDUSTRIA - 1,200 - 2025 - "Activacion inmersiva con 360 grados de proyeccion y experiencia AR."
03 - TOUR ARTISTA RESIDENTE - 8 CIUDADES - 24,000 - 2025 - "Logistica y produccion en simultaneo a lo largo de Mexico."
04 - GALA ANIVERSARIO CORPORATE - TEATRO METROPOLITAN - 3,500 - 2024 - "Cine en vivo, talento, pantallas LED y operacion silenciosa."

[10] PROXIMOS EVENTOS - commercial section, ticket sales via Boletia.
Header:
- Eyebrow JetBrains Mono 12px red #E10600: "EN VENTA - BOLETOS DISPONIBLES"
- Headline Anton 64px white: "PROXIMAS FECHAS"
- Subtext Inter 18px opacity 0.7: "Boletos via Boletia. Agotamos rapido, reserva con tiempo."
- Filter chips row: TODOS | CONCIERTOS | FESTIVALES | TEATRO | CORPORATE (Anton 14px uppercase, padding 8px 16px, border 1px white opacity 0.2, hover and active fill red #E10600 with black text)

Layout: grid 3 cols desktop, 2 tablet, 1 mobile, gap 24px, 6 placeholder cards.

Each event card:
- Cover image 16:9 top
- Status badge top-left: "EN VENTA" (fill red, white text) | "QUEDAN POCOS" (fill #F2A900, black text) | "AGOTADO" (fill black, white text opacity 0.5, full card opacity 0.6)
- Date block prominent: day Anton 72px white, month Anton 18px, year JetBrains Mono 12px opacity 0.6
- Title Anton 28px white
- Venue and city Inter 14px opacity 0.7
- Time JetBrains Mono 12px (e.g. "21:00 HRS")
- "DESDE $890 MXN" Inter 14px opacity 0.8
- Primary CTA "COMPRAR BOLETOS" pill fill red #E10600 black text Anton 14px uppercase, full width
- Secondary CTA "+ INFO" link white opacity 0.6

Hover: card lift 8px + border 1px red #E10600 + cover image zoom 105%
Click "COMPRAR BOLETOS": new tab to Boletia URL placeholder
Click "+ INFO": modal with full event details

6 placeholder events:
01 - 27 JUL 2026 - TOUR ALPHA - Auditorio Nacional CDMX - 21:00 - desde $890 - EN VENTA
02 - 03 AGO 2026 - FESTIVAL CIRCUITO - Foro Sol CDMX - 18:00 - desde $1,290 - QUEDAN POCOS
03 - 14 AGO 2026 - TEATRO RESIDENTE - Metropolitan CDMX - 20:00 - desde $650 - EN VENTA
04 - 21 AGO 2026 - GALA CORPORATE - Centro Banamex - 19:30 - desde $1,800 - EN VENTA
05 - 11 SEP 2026 - CONCIERTO BETA - Pepsi Center MX - 21:00 - desde $1,100 - AGOTADO
06 - 25 SEP 2026 - LANZAMIENTO MARCA - Foro Industria - 20:00 - RSVP - EN VENTA

[11] SELECTED WORK - --bg.
- Header JetBrains Mono uppercase 14px opacity 0.6: "SELECTED WORK - 2024 a 2026"
- Mono-spaced 4-column table: PROYECTO | DISCIPLINA | CLIENTE | ANO
- 6 placeholder rows with thin dividers 1px rgba(255,255,255,0.12)
- Hover row: background rgba(225,6,0,0.04), project name turns red
- Click row: lightbox with image + copy

[12] SERVICIOS - selectable specialty menu, NO pricing.
- Header Anton 64px white: "ELIGE TU ESPECIALIDAD"
- Subtext Inter 18px opacity 0.7: "Cada proyecto se cotiza a la medida. Selecciona el servicio que mas te interesa y empezamos la conversacion."
- Grid 3+2 desktop (5 cards same visual hierarchy, none premium-tier), stack mobile

Each card:
- Background rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.08), border-radius 6px, padding 32px
- Numeral 01-05 JetBrains Mono 14px red
- Embedded cinemagraph 16:9 placeholder
- Title Anton 28px white uppercase
- 3-line subtext Inter 16px opacity 0.8
- CTA "COTIZAR" pill fill red #E10600 black text Anton 14px uppercase
- Hover: lift 8px + border red on hover, cinemagraph plays, others desaturate to opacity 0.7
- Click CTA: scrolls to Contacto with this service pre-selected (URL param ?service=[name])

[13] CLIENTES - horizontal infinite logo marquee.
Header centered:
- Eyebrow Anton 14px tracking 0.16em uppercase white: "MARCAS QUE NOS HAN ELEGIDO"
- Subheadline Inter 14px opacity 0.6: "+ 80 PROYECTOS - + 12 INDUSTRIAS - DESDE 2018"
- Vertical padding 80px top, 60px before rows

Layout:
- Two rows scrolling opposite directions
- Row 1 left to right, 60s per loop
- Row 2 right to left, 75s per loop (asynchronous)
- Gap between rows 32px, vertical padding per row 24px
- Side mask-image fade: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)

Logos:
- SVG/PNG transparent, max-height 60px desktop / 40px mobile
- Default: white #FFFFFF opacity 0.5 (filter: brightness(0) invert(1) opacity(0.5))
- Spacing between logos 80px

Hover individual logo: pause its row marquee, opacity 1.0, scale 1.1, drop-shadow(0 0 12px rgba(225,6,0,0.4)), reveal original color.
16 placeholder rectangles labeled MARCA-A through MARCA-P.

[14] PARTNERS - horizontal logo marquee, single row, distinguished from Clientes.
Header:
- Eyebrow Anton 14px tracking 0.16em uppercase white opacity 0.4: "PARTNERS Y COLABORADORES"
- Subheadline Inter 13px opacity 0.4: "TECNOLOGIA - TALENTO - INFRAESTRUCTURA"
- Vertical padding 60px top

Layout:
- Single row only (vs two rows in Clientes)
- Scroll left to right, 90s per loop (slower than Clientes)
- Background --bg with border-top 1px white opacity 0.08 + border-bottom 1px white opacity 0.08
- Vertical padding 32px, side mask fade same as Clientes

Logos:
- max-height 80px desktop / 56px mobile (slightly larger than Clientes)
- Default white #FFFFFF opacity 0.4 (more subtle)
- Spacing 100px

Hover: same behavior as Clientes
8 placeholders labeled PARTNER-A through PARTNER-H.

[15] QUOTE - 100vh, --bg.
- Decorative oversized red quotation mark Anton 320px opacity 0.3 behind text
- Quote Anton 56px white italic: "Insignia no produce eventos. Produce recuerdos."
- Attribution Inter 14px uppercase tracking 0.16em opacity 0.5: "- CLIENTE PLACEHOLDER"

[16] FOUNDER REEL - 100vh.
- Header above Anton 32px: "DETRAS DE CADA INSIGNIA"
- Full-bleed video player with dark thumbnail
- Centered red play button #E10600 60px circle with white triangle
- Click plays reel (Vimeo embed placeholder)

[17] CONTACTO - interactive multi-step form, full-bleed 100vh, --bg.
Layout: two columns desktop (40% left static / 60% right form), stack vertical mobile.
Padding 5vw lateral, 80px vertical.

LEFT COLUMN (static):
- Eyebrow Anton 14px tracking 0.16em red #E10600: "EMPECEMOS"
- Headline Anton 96px white (line-height 0.9): "Hablemos del proximo."
- Subtext Inter 18px opacity 0.7 max-width 420px: "Un proyecto sin un equipo detras es solo una idea. Cuentanos que tienes en mente y armamos una propuesta a la medida en 48 horas."
- 60px space + thin line 1px white opacity 0.15 width 60px
- Direct contact block: eyebrow Anton 12px uppercase red "PREFERIS DIRECTO"
  - WhatsApp link: "+52 55 1695 2852" (Inter 16px white, hover red, opens wa.me/525516952852)
  - Email link: "booking@insignia-entertainment.com" (Inter 16px white, hover red, mailto)
  - Instagram link: "@insigniaentertainment" (Inter 16px white opacity 0.7)

RIGHT COLUMN (4-step form):
Progress bar top: 4 dots connected by line, fill red #E10600 progressively as steps complete.

STEP 1 - Service:
- Question Anton 32px white: "De que disciplina necesitas produccion?"
- 5 horizontal pill buttons: EVENTOS | BOOKING | FILMACION | FOTOGRAFIA | EXPERIENCIAS
- Each pill: border 1px white opacity 0.3, padding 16px 28px, Anton 16px white, border-radius 999px
- Hover: border red. Selected: fill red, text black, no border
- Pre-select if URL has ?service=[name]
- "SIGUIENTE" button bottom right, pill red fill, disabled until selection

STEP 2 - Basic data:
- Question Anton 32px white: "Como te encontramos?"
- 3 floating-label underlined inputs: nombre, email, WhatsApp (with fixed prefix "+52 ")
- Style: line-bottom 1px white opacity 0.3, focus 2px red. Label translates up on focus/content
- Inline validation: bad email -> red line + 12px red message "email no valido"
- Buttons: VOLVER link white opacity 0.6 + SIGUIENTE pill red

STEP 3 - Project details:
- Question Anton 32px white: "Cuentanos del proyecto."
- Sub 1 "Tipo de proyecto" + 4 single-select pills: COMERCIAL | CORPORATIVO | PERSONAL | OTRO
- Sub 2 "Fecha estimada" + custom dark date picker (today red, selected red fill)
- Sub 3 "Rango de presupuesto" + horizontal slider with red fill, 5 marks: $50K-$200K | $200K-$500K | $500K-$1M | $1M-$3M | $3M+ MXN. Selected value displayed Anton 24px white above slider.
- Sub 4 "Cuentanos lo que tengas en mente" textarea max 500 chars
- Buttons: VOLVER + SIGUIENTE

STEP 4 - Confirm and send:
- Question Anton 32px white: "Repasalo antes de enviar."
- Visual summary: 6 chips with label + value (Servicio, Nombre, Email, WhatsApp, Tipo, Fecha, Presupuesto). Click chip opens corresponding step inline edit.
- Custom checkbox: "Acepto que me contacten por email/WhatsApp para dar seguimiento."
- Primary button "ENVIAR Y ABRIR WHATSAPP": large pill red fill, padding 18px 40px, full width
- On click executes in parallel:
  1. fetch POST to /api/contact (placeholder for Formspree/Resend later)
  2. window.open WhatsApp pre-redacted URL: wa.me/525516952852?text= with the form data

Submit state:
- Loading: button replaced by red pulsing skeleton, label "ENVIANDO"
- Success: section fade to opacity 0.3, centered confirmation appears: radial red pulse expanding from center (CSS animation), headline Anton 48px white "RECIBIDO. RESPONDEMOS EN 48 HORAS.", subtext Inter 16px opacity 0.7 "Mientras tanto, abrimos WhatsApp para que sigamos la conversacion.", subtle button "Volver al inicio" link white

Technical: every form input must have proper name="..." attributes for backend integration.

[18] FOOTER - --bg, ~80vh, interactive particle canvas background (white particles drift, connect to neighbors with thin lines, lines turn red #E10600 60% opacity when cursor hovers).
- Centered XL wordmark "INSIGNIA" Anton at footer top
- Payoff line: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CAMARA." uppercase Anton 18px tracking 0.16em
- Horizontal line 1px white opacity 0.2
- 4 columns of links uppercase Anton 14px tracking 0.12em + body Inter 14px:
  PROYECTO: Intro - Disciplinas - Eventos - Trabajos - Contacto
  STUDIO: Acerca - Process - Talento - Press
  CONNECT: WhatsApp - Instagram - Email - Boletia
  LEGAL: Privacidad - Cookies - Aviso - 2026
- Booking line: "booking@insignia-entertainment.com - +52 55 1695 2852"
- Final line: "Insignia Entertainment - Ciudad de Mexico - Hecho con cuidado."

=== TECHNICAL CALIBRATION ===

- Scroll FPS: 30
- Aspect: 16:9 hero, full-bleed
- Mobile-first responsive: stack columns, deactivate pinned sections on mobile, footer particles only on desktop, horizontal scroll in EVENTOS DESTACADOS uses native swipe on mobile
- Hero wordmark: clamp(80px, 22vw, 360px)
- Section headlines: clamp(40px, 7vw, 120px)
- Body copy: clamp(15px, 1.6vw, 18px)
- Smooth scroll with inertia
- prefers-reduced-motion: respect (disable parallax, use static images, disable marquees)
- Preload cinematic hero video frames aggressively for smooth scrub
- SEO: meta tags, og:image (camera shot), schema.org LocalBusiness markup with full address, phone, social links
- Lighthouse target: 95+ Performance / Accessibility / Best Practices / SEO

DELIVERABLE: Clean exportable HTML/CSS/JS, ready to publish. No heavy frameworks (no React, no Vue) -- vanilla HTML/CSS/JS. GSAP and any other libs via CDN. Form has proper name attributes ready for backend integration. Single-pass generation: trust your judgment for unspecified details.

===PROMPT_END===

---

## NOTA POST-EXPORT

Cuando draftly te exporte el HTML, los textos van a salir sin acentos
porque el prompt los pidio asi. Antes de publicar, hace un find-and-replace
en el archivo HTML para reagregar los acentos en las palabras espanolas
clave. Te dejo la lista de reemplazos:

| Sin acento | Con acento |
|---|---|
| produccion | produccion |
| direccion | direccion |
| filmacion | filmacion |
| fotografia | fotografia |
| peliculas | peliculas |
| representacion | representacion |
| funcion | funcion |
| logistica | logistica |
| Mexico | Mexico |
| Camara | Camara |
| proxima/proximo/proximos | proxima/proximo/proximos |
| despues | despues |
| anos | anos |
| numeral | (sin cambio) |
| campana | campana |
| Industria | Industria |
| pelicula | pelicula |
| Telon | Telon |

Tip: en VS Code o cualquier editor, Ctrl+H y reemplazas uno por uno.
5 minutos en total para todo el sitio.

---

*ASCII pure version - 2026-04-30*
