# INSIGNIA ENTERTAINMENT — Prompt Maestro Draftly
**Versión consolidada · 17 secciones · 1 solo pegue**
Generado: 2026-04-30 · Reemplaza a draftlyPrompt.md + draftlyPrompt_extensions.md

---

## CÓMO USAR

1. Copiá el bloque grande de abajo (entre las líneas `===PROMPT===`) y pegalo
   completo en el campo de prompt de draftly.space.
2. Subí los assets que ya tenés generados (mínimo: cámara hero + live show).
   Los demás se reemplazan después por chat iterativo.
3. Esperá la primera generación. Si algo no se ve como esperás, en el chat
   iterativo de draftly mandás follow-ups específicos (ejemplos al final).
4. Exportá HTML/CSS/JS cuando estés conforme.

---

## ===PROMPT MAESTRO===

```
A cinematic, scroll-driven, immersive website for INSIGNIA ENTERTAINMENT — a film and event production house based in Mexico City. Dark cinemascope aesthetic, surgical minimalism, contemporary digital cinema (NOT vintage, NOT craft, NOT warm). Reference vibes: Apple keynote teasers, Arc Browser, A24 title cards, ARRI product photography, Burberry tech ads 2025, Coldplay 2025 tour stage design, Lusion oryzo.ai pacing.

═══════════════════════════════════════════════════════════════
THE 8-SECOND CINEMATIC SEQUENCE (drives the entire scroll-driven hero)
═══════════════════════════════════════════════════════════════

Second 0–2: Pure void of pitch black #0A0A0A. From the depth of the void, a single beam of cool white light cuts diagonally across the frame. Volumetric haze drifts. The wordmark "INSIGNIA" emerges in massive Anton-style condensed sans-serif typography, bright white #FFFFFF, slowly resolving into focus. Above it, in small uppercase tracking-out: "MADE FOR THE STAGE. BUILT FOR THE LENS."

Second 2–4: The viewer dollies forward through the wordmark. The letters dissolve into atmospheric particles. Ahead, a professional cinema camera materializes (modern body, ARRI Alexa Mini LF / RED Komodo silhouette, no logos) — head-on, lens pointing directly at the viewer. A red rim light #E10600 paints the right edge of the camera body. Single key light from above-front. Inside the lens glass, a tiny red recording LED blinks once.

Second 4–6: The dolly continues toward the lens. Camera body fills the frame, then the lens fills the frame, then the front element of the lens dominates — multi-coated glass reflections visible, internal iris diaphragm faintly readable. Volumetric haze thickens.

Second 6–8: Inside the lens reflection, a vast scene fades in: a crowd at a live show, raised hands in silhouette, lasers cutting through smoke, a distant stage with red architectural light #E10600 burning at its edges. The lens has captured the show. Final frame holds, breathing — a perfect mirror of the show inside the camera glass.

═══════════════════════════════════════════════════════════════
VISUAL SYSTEM (apply throughout the entire scroll)
═══════════════════════════════════════════════════════════════

PALETTE (use exact HEX values everywhere):
  --bg:        #0A0A0A   (absolute black, dominant)
  --accent:    #E10600   (cinematic red — only puntual, NEVER as background of large blocks. Used for: CTAs, active nav brackets, video card frames, progress lines, hover states, rim lighting)
  --fg:        #FFFFFF   (pure white — wordmarks, body, dividers)
  --fg-muted:  #F2F2F2   (off-white — alternate cards)
  --overlay:   rgba(10,10,10,0.65)   (overlay on imagery for legibility)
  --halo:      linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%)   (subtle red halo for depth transitions)

TYPOGRAPHY (load via Google Fonts):
  - Display / wordmarks / headlines: Anton (sans-serif condensed geometric, heavy presence). Fallback: Inter Tight 900.
  - Body / UI: Inter (400/500/600). Letter-spacing 0.08em on uppercase labels.
  - Mono / specs / dates: JetBrains Mono.

LIGHTING LANGUAGE:
  - Single hard key light from above-front, sculpting subjects with crisp specular highlights
  - Single red rim light #E10600 from behind-right on every featured subject
  - Volumetric haze drifting horizontally throughout — picked up by lights, never fog
  - Pure void backgrounds — no walls, no horizon, just infinite black
  - Modern LED-driven illumination, NOT tungsten. Quirurgical, not cozy.

VOICE & TONE (Spanish):
  - Editorial premium · cinemascope · serious without solemn
  - Short sentences with weight. Zero emojis. Zero exclamation marks. Zero hype.
  - Technical precision applied to creative work.

═══════════════════════════════════════════════════════════════
SECTION STRUCTURE — 17 vertical sections in order
═══════════════════════════════════════════════════════════════

[01] NAVBAR — fixed top, transparent with backdrop-blur(12px) on scroll. Label "INSIGNIA" left in Anton 18px. Links right uppercase tracking 0.12em: INTRO · DISCIPLINAS · EVENTOS · TRABAJOS · SERVICIOS · CONTACTO. Dot circular before each link. Active state: bracket [ ] around link in red #E10600. Right vertical sidebar small with label "INSIGNIA · 2026" rotated -90°.

[02] HERO — full bleed 100vh, scroll-driven 3D parallax based on the 8-second cinematic above.
  - Pre-headline top center: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." (Anton 14px, white, tracking 0.16em uppercase)
  - Wordmark XXL center: "INSIGNIA" (Anton, clamp(80px, 22vw, 360px), white with subtle red text-shadow)
  - Subtext on the right (max-width 420px): "Producimos eventos como se filman películas. Cinco disciplinas, una sola dirección creativa. Insignia hace que cada momento se quede en la memoria — y en el corte final."
  - Bottom-left card with backdrop-filter blur(12px), border 1px rgba(255,255,255,0.18), padding 32px, dotted divider center: "STUDIO INSIGNIA · CASA PRODUCTORA INDEPENDIENTE" / "Eventos · Booking · Filmación · Fotografía · Creatividad"
  - Bottom-right video card 280×160 with red #E10600 frame 2px, founder reel thumbnail, label "▶ VER REEL"
  - Bottom center indicator: ⌄ chevron icon in circle + "SCROLL TO CONTINUE" uppercase white

[03] MANIFESTO — 100vh, --bg.
  - Display headline center Anton clamp(48px, 7vw, 120px) white: "No vendemos servicios."
  - Subtext below Inter 20px opacity 0.7 max-width 720px: "Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola dirección creativa — la nuestra."
  - Thin red horizontal line 2px #E10600 width 80px below headline.

[04–08] DISCIPLINAS — 5 pinned sections via scroll-trigger. Each ~80vh. Layout 50/50 desktop (image/cinemagraph left, content right), stack mobile.
  Numeral XXL 01–05 (Anton, red #E10600, opacity 0.85, 240px).
  Headline UPPERCASE white Anton 64px.
  Subtext Inter 18px white opacity 0.8 max-width 480px.
  Thin red line 1px width 60px between numeral and headline.
  Content:
  01 — EVENTOS — "Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage."
  02 — BOOKING & MANAGEMENT — "Representación de talento, tours, agenda y riders. La trastienda que hace que la función ocurra."
  03 — FILMACIÓN — "Cine, comercial y video corporativo. De la idea a la entrega final."
  04 — FOTOGRAFÍA — "Editorial, producto, BTS, retrato y campaña."
  05 — EXPERIENCIAS & CREATIVIDAD — "Branded entertainment, inmersivos, dirección creativa 360."

[09] EVENTOS DESTACADOS — special section because events is the anchor specialty. Horizontal drag-scroll cinematic showcase.
  Sticky header at top during horizontal scroll:
  - Eyebrow JetBrains Mono 12px opacity 0.5: "ESPECIALIDAD ANCLA · 2024–2026"
  - Headline Anton 64px white: "EVENTOS QUE QUEDARON EN LA HISTORIA"
  - Subtext Inter 18px opacity 0.7 max-width 560px: "Cuatro producciones que definieron lo que hacemos. Conciertos, festivales, lanzamientos, activaciones. Ningún detalle queda fuera del corte."
  - Progress bar 1px below header: track white opacity 0.2, fill red #E10600 growing with horizontal scroll
  Layout:
  - 4 cards horizontal, drag scroll with cursor grab/grabbing
  - Each card 85vw desktop, 92vw mobile, gap 24px, snap on release
  - Container padding 5vw each side
  - Keyboard arrows + mobile swipe support, dot indicators on mobile
  Each card structure:
  - Cover image full-bleed 16:9 inside the card with cinemagraph
  - Bottom gradient overlay: linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.92) 100%)
  - Bottom-half text:
    • Numeral "01 / 04" JetBrains Mono 14px white opacity 0.5
    • Title Anton 56px white
    • Stats line JetBrains Mono 12px opacity 0.7: "VENUE · CAPACIDAD · AÑO"
    • Brief Inter italic 16px white max-width 480px (2-3 lines)
    • CTA "→ VER CASE STUDY" Anton 14px uppercase tracking 0.12em red #E10600
  Hover: cinemagraph plays, image zoom 102%
  Click on CTA: opens lightbox with gallery + info
  Placeholder data for 4 events (Carl will replace):
  01 — FESTIVAL CIRCUITO MX 2026 — ARENA CDMX · 18,000 · 2026 — "Tres días, cuatro escenarios, un solo equipo. Producción integral end-to-end."
  02 — LANZAMIENTO MARCA ALPHA — FORO INDÚSTRIA · 1,200 · 2025 — "Activación inmersiva con 360 grados de proyección y experiencia AR."
  03 — TOUR ARTISTA RESIDENTE — 8 CIUDADES · 24,000 · 2025 — "Logística y producción en simultáneo a lo largo de México."
  04 — GALA ANIVERSARIO CORPORATE — TEATRO METROPÓLITAN · 3,500 · 2024 — "Cine en vivo, talento, pantallas LED y operación silenciosa."

[10] PRÓXIMOS EVENTOS — commercial section, ticket sales via Boletia.
  Header:
  - Eyebrow JetBrains Mono 12px red #E10600: "EN VENTA · BOLETOS DISPONIBLES"
  - Headline Anton 64px white: "PRÓXIMAS FECHAS"
  - Subtext Inter 18px opacity 0.7: "Boletos vía Boletia. Agotamos rápido — reservá con tiempo."
  - Filter chips row: TODOS · CONCIERTOS · FESTIVALES · TEATRO · CORPORATE (Anton 14px uppercase, padding 8px 16px, border 1px white opacity 0.2, hover/active fill red #E10600 with black text)
  Layout:
  - Grid 3 cols desktop, 2 tablet, 1 mobile, gap 24px, 6 placeholder cards
  Each event card:
  - Cover image 16:9 top
  - Status badge top-left:
    • "EN VENTA" — fill red #E10600, white text
    • "QUEDAN POCOS" — fill #F2A900, black text
    • "AGOTADO" — fill black, white text opacity 0.5, full card opacity 0.6
  - Date block prominent: day Anton 72px white (ej "27") + month Anton 18px (ej "JUL") + year JetBrains Mono 12px opacity 0.6
  - Title Anton 28px white
  - Venue + city Inter 14px opacity 0.7
  - Time JetBrains Mono 12px (ej "21:00 HRS")
  - "DESDE $890 MXN" Inter 14px opacity 0.8
  - Primary CTA "COMPRAR BOLETOS →" pill fill red #E10600 black text Anton 14px uppercase, full width
  - Secondary CTA "+ INFO" link white opacity 0.6 below
  Hover: card lift 8px + border 1px red #E10600 + cover image zoom 105%
  Click "COMPRAR BOLETOS": new tab to https://boletia.com/insignia/[event-slug] (placeholder URL)
  Click "+ INFO": modal with full event details
  6 placeholder events:
  01 — 27 JUL 2026 — TOUR ALPHA · Auditorio Nacional CDMX · 21:00 — desde $890 — EN VENTA
  02 — 03 AGO 2026 — FESTIVAL CIRCUITO · Foro Sol CDMX · 18:00 — desde $1,290 — QUEDAN POCOS
  03 — 14 AGO 2026 — TEATRO RESIDENTE · Metropólitan CDMX · 20:00 — desde $650 — EN VENTA
  04 — 21 AGO 2026 — GALA CORPORATE · Centro Banamex · 19:30 — desde $1,800 — EN VENTA
  05 — 11 SEP 2026 — CONCIERTO BETA · Pepsi Center MX · 21:00 — desde $1,100 — AGOTADO
  06 — 25 SEP 2026 — LANZAMIENTO MARCA · Foro Indústria · 20:00 — RSVP — EN VENTA

[11] SELECTED WORK — fondo --bg.
  - Header JetBrains Mono uppercase 14px opacity 0.6: "SELECTED WORK · 2024–2026"
  - Mono-spaced 4-column table: PROYECTO · DISCIPLINA · CLIENTE · AÑO
  - 6 placeholder rows with thin dividers 1px rgba(255,255,255,0.12)
  - Hover row: background rgba(225,6,0,0.04), project name turns red
  - Click row: lightbox with image + copy

[12] SERVICIOS — selectable specialty menu, NO pricing.
  - Header Anton 64px white: "ELIGE TU ESPECIALIDAD"
  - Subtext Inter 18px opacity 0.7: "Cada proyecto se cotiza a la medida. Selecciona el servicio que más te interesa y empezamos la conversación."
  - Grid 3+2 desktop (5 cards same visual hierarchy, none premium-tier), stack mobile
  Each card:
  - Background rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.08), border-radius 6px, padding 32px
  - Numeral 01–05 JetBrains Mono 14px red
  - Embedded cinemagraph 16:9 placeholder
  - Title Anton 28px white uppercase
  - 3-line subtext Inter 16px opacity 0.8
  - CTA "→ COTIZAR" pill fill red #E10600 black text Anton 14px uppercase
  - Hover: lift 8px + border red #E10600 on hover, cinemagraph plays
  - Click CTA: scrolls to Contacto section with this service pre-selected (URL param ?service=[name])

[13] CLIENTES — horizontal infinite logo marquee.
  Header centered:
  - Eyebrow Anton 14px tracking 0.16em uppercase white: "MARCAS QUE NOS HAN ELEGIDO"
  - Subheadline Inter 14px opacity 0.6: "+ 80 PROYECTOS · + 12 INDUSTRIAS · DESDE 2018"
  - Vertical padding 80px top, 60px before rows
  Layout:
  - Two rows scrolling opposite directions
  - Row 1 left → right, 60s per loop
  - Row 2 right → left, 75s per loop (asynchronous)
  - Gap between rows 32px, vertical padding per row 24px
  - Side mask-image fade: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)
  Logos:
  - SVG/PNG transparent, max-height 60px desktop / 40px mobile
  - Default: white #FFFFFF opacity 0.5 (filter: brightness(0) invert(1) opacity(0.5))
  - Spacing between logos 80px
  Hover individual logo: pause its row marquee, opacity 1.0, scale 1.1, drop-shadow(0 0 12px rgba(225,6,0,0.4)), reveal original color (remove brightness/invert filter)
  Generate placeholders: 16 rectangles labeled MARCA-A through MARCA-P (8 per row) until Carl uploads real SVGs.

[14] PARTNERS — horizontal logo marquee, single row, distinguished from Clientes.
  Header:
  - Eyebrow Anton 14px tracking 0.16em uppercase white opacity 0.4: "PARTNERS Y COLABORADORES"
  - Subheadline Inter 13px opacity 0.4: "TECNOLOGÍA · TALENTO · INFRAESTRUCTURA"
  - Vertical padding 60px top
  Layout:
  - Single row only (vs two rows in Clientes)
  - Scroll left → right, 90s per loop (slower than Clientes)
  - Background --bg with border-top 1px white opacity 0.08 + border-bottom 1px white opacity 0.08 (frames the strip as differentiated element)
  - Vertical padding 32px, side mask fade same as Clientes
  Logos:
  - max-height 80px desktop / 56px mobile (slightly larger than Clientes)
  - Default white #FFFFFF opacity 0.4 (more subtle than Clientes)
  - Spacing 100px
  Hover: same behavior as Clientes
  Placeholder: 8 rectangles labeled PARTNER-A through PARTNER-H.

[15] QUOTE — 100vh, --bg.
  - Decorative oversized red quotation mark "“" Anton 320px opacity 0.3 behind text
  - Quote Anton 56px white italic: "Insignia no produce eventos. Produce recuerdos."
  - Attribution Inter 14px uppercase tracking 0.16em opacity 0.5: "— CLIENTE PLACEHOLDER"

[16] FOUNDER REEL — 100vh.
  - Header above Anton 32px: "DETRÁS DE CADA INSIGNIA"
  - Full-bleed video player with dark thumbnail
  - Centered red play button #E10600 60px circle with white triangle
  - Click plays reel (Vimeo embed placeholder)

[17] CONTACTO — interactive multi-step form, full-bleed 100vh, --bg.
  Layout: two columns desktop (40% left static / 60% right form), stack vertical mobile.
  Padding 5vw lateral, 80px vertical.

  LEFT COLUMN (static):
  - Eyebrow Anton 14px tracking 0.16em red #E10600: "EMPECEMOS"
  - Headline Anton 96px white (line-height 0.9): "Hablemos del próximo."
  - Subtext Inter 18px opacity 0.7 max-width 420px: "Un proyecto sin un equipo detrás es solo una idea. Contanos qué tenés en mente y armamos una propuesta a la medida en 48 horas."
  - 60px space + thin line 1px white opacity 0.15 width 60px
  - Direct contact block:
    • Eyebrow Anton 12px uppercase red: "PREFERÍS DIRECTO →"
    • WhatsApp link with icon: "+52 55 1695 2852" (Inter 16px white, hover red, opens wa.me/525516952852)
    • Email link with icon: "booking@insignia-entertainment.com" (Inter 16px white, hover red, mailto)
    • Instagram link with icon: "@insigniaentertainment" (Inter 16px white opacity 0.7)

  RIGHT COLUMN (4-step form):
  Progress bar top: 4 dots connected by line, fill red #E10600 progressively as steps complete.

  STEP 1 — Service:
  - Question Anton 32px white: "¿De qué disciplina necesitás producción?"
  - 5 horizontal pill buttons: EVENTOS · BOOKING & MANAGEMENT · FILMACIÓN · FOTOGRAFÍA · EXPERIENCIAS
  - Each pill: border 1px white opacity 0.3, padding 16px 28px, Anton 16px white, border-radius 999px
  - Hover: border red #E10600
  - Selected: fill red #E10600, text #0A0A0A, no border
  - Pre-select if URL has ?service=[name]
  - "SIGUIENTE →" button bottom right, pill red fill, disabled until selection

  STEP 2 — Basic data:
  - Question Anton 32px white: "¿Cómo te encontramos?"
  - 3 floating-label underlined inputs:
    • Nombre completo
    • Email
    • WhatsApp (with fixed prefix "+52 ")
  - Style: line-bottom 1px white opacity 0.3, focus 2px red #E10600. Label translates up on focus/content. Input text Inter 18px white. Padding vertical 12px, no horizontal padding.
  - Inline validation: bad email → red line + 12px red message "email no válido"
  - Buttons: "← VOLVER" link white opacity 0.6 + "SIGUIENTE →" pill red

  STEP 3 — Project details:
  - Question Anton 32px white: "Contanos del proyecto."
  - Sub 1 "Tipo de proyecto" Inter 14px opacity 0.6 + 4 single-select pills: COMERCIAL · CORPORATIVO · PERSONAL · OTRO
  - Sub 2 "Fecha estimada" + custom dark date picker (today in red, selected red fill, month header Anton 18px)
  - Sub 3 "Rango de presupuesto" + horizontal slider with red fill, 5 marks: $50K–$200K · $200K–$500K · $500K–$1M · $1M–$3M · $3M+ MXN. Selected value displayed Anton 24px white above slider.
  - Sub 4 "Contanos lo que tengas en mente." textarea max 500 chars: border 1px white opacity 0.2, focus red, --bg background, Inter 16px white, padding 16px, height 120px, resize none, char counter 12px bottom-right
  - Buttons: ← VOLVER + SIGUIENTE →

  STEP 4 — Confirm and send:
  - Question Anton 32px white: "Repasalo antes de enviar."
  - Visual summary: 6 chips with label + value (Servicio, Nombre, Email, WhatsApp, Tipo, Fecha, Presupuesto). Click chip opens corresponding step inline edit.
  - Custom checkbox: "Acepto que me contacten por email/WhatsApp para dar seguimiento." Inter 14px opacity 0.7. Visual: 20px square border 1px white, checked = red fill + white check.
  - Primary button "ENVIAR Y ABRIR WHATSAPP →": large pill red fill, padding 18px 40px, Anton 16px uppercase tracking 0.12em, full width
  - On click executes in parallel:
    1. fetch POST to /api/contact (placeholder for Formspree/Resend later)
    2. window.open with WhatsApp pre-redacted URL: wa.me/525516952852?text=[URL-encoded message]
    Pre-redacted message: "Hola Insignia, soy [nombre]. Quiero cotizar un proyecto de [servicio] para [fecha estimada], rango [presupuesto]. Detalles: [descripción]. Mi email: [email]"

  SUBMIT STATE:
  - Loading: button replaced by red pulsing skeleton, label "ENVIANDO..."
  - Success: section fades to opacity 0.3 and centered confirmation appears:
    • Radial red pulse expanding from center (CSS animation)
    • Headline Anton 48px white: "RECIBIDO. RESPONDEMOS EN 48 HORAS."
    • Subtext Inter 16px opacity 0.7: "Mientras tanto, abrimos WhatsApp para que sigamos la conversación."
    • Subtle button "Volver al inicio →" link white

  TECHNICAL NOTE: every form input must have proper name="..." attributes and data-attributes so post-export connection to Formspree/Resend takes 5 minutes.

[18] FOOTER — --bg, ~80vh, interactive particle canvas background (white particles drift, connect to neighbors with thin lines, lines turn red #E10600 at 60% opacity when cursor hovers).
  - Centered XL wordmark "INSIGNIA" Anton at footer top
  - Payoff line: "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CÁMARA." uppercase Anton 18px tracking 0.16em
  - Horizontal line 1px white opacity 0.2
  - 4 columns of links uppercase Anton 14px tracking 0.12em + body Inter 14px:
    PROYECTO: Intro · Disciplinas · Eventos · Trabajos · Contacto
    STUDIO: Acerca · Process · Talento · Press
    CONNECT: WhatsApp · Instagram · Email · Boletia
    LEGAL: Privacidad · Cookies · Aviso · ©2026
  - Booking line: "booking@insignia-entertainment.com · +52 55 1695 2852"
  - Final line: "© Insignia Entertainment · Ciudad de México · Hecho con cuidado."

═══════════════════════════════════════════════════════════════
TECHNICAL CALIBRATION
═══════════════════════════════════════════════════════════════

— Scroll FPS: 30 (smooth without burning bandwidth)
— Aspect: 16:9 hero, full-bleed
— Mobile-first responsive: stack columns, deactivate pinned sections on mobile, footer particles only on desktop, horizontal scroll in EVENTOS DESTACADOS uses native swipe on mobile
— Hero wordmark: clamp(80px, 22vw, 360px)
— Section headlines: clamp(40px, 7vw, 120px)
— Body copy: clamp(15px, 1.6vw, 18px)
— Smooth scroll with inertia
— prefers-reduced-motion: respect (disable parallax, use static images, disable marquees)
— Preload cinematic hero video frames aggressively for smooth scrub
— SEO: meta tags, og:image (camera shot), schema.org LocalBusiness markup with full address, phone, social links
— Lighthouse target: 95+ Performance / Accessibility / Best Practices / SEO

═══════════════════════════════════════════════════════════════
DELIVERABLE
═══════════════════════════════════════════════════════════════

Clean exportable HTML/CSS/JS, ready to publish. No heavy frameworks (no React, no Vue) — vanilla HTML/CSS/JS. GSAP and any other libs via CDN. Form has proper name attributes ready for backend integration. Single-pass generation: trust your judgment for unspecified details.
```

## ===FIN DEL PROMPT MAESTRO===

---

## 📦 ASSETS PARA SUBIR (mínimo viable)

| # | Archivo | Estado |
|---|---|---|
| 1 | `camera-image1.jpg` + `image2.jpg` + `dolly.mp4` | ✅ Hero |
| 2 | `liveshow-image1.jpg` + `image2.jpg` + `pingpong.mp4` | ✅ Card 01 |
| 3 | `pass.mp4` (booking) | 🔜 v3 disciplinas |
| 4 | `slate.mp4` (filmación) | 🔜 v3 disciplinas |
| 5 | `strobe.mp4` (fotografía) | 🔜 v3 disciplinas |
| 6 | `portal.mp4` (experiencias) | 🔜 v3 disciplinas |
| 7 | 4 covers de eventos destacados | 🔜 generar |
| 8 | 6 fotos de eventos próximos | 🔜 conseguir |
| 9 | 16 logos clientes (SVG transparente) | 🔜 conseguir |
| 10 | 8 logos partners (SVG transparente) | 🔜 conseguir |
| 11 | Logo INSIGNIA SVG | 🔜 generar |
| 12 | Founder reel 60-90s | 🔜 producir |

**Lo mínimo para arrancar:** los 6 cinemagraphs (cámara + live show + 4 disciplinas).
Los demás son placeholders que reemplazás después.

---

## 💬 FOLLOW-UPS RAPID FIRE

Después de la primera generación, si querés refinar, mandá uno por mensaje:

1. *"El scroll del hero se siente rápido. Bajá la sensibilidad: que el dolly del lente tarde el doble en completarse."*
2. *"Las cards de servicios — hover desktop debe reproducir el cinemagraph y desaturar las otras a opacity 0.7."*
3. *"Agregá nav lateral derecha con dots por sección principal — Hero, Manifesto, Disciplinas, Eventos, Trabajos, Servicios, Contacto. Dot activo rojo con bracket."*
4. *"En Próximos Eventos, los 'AGOTADO' deben mostrar 'LISTA DE ESPERA →' en vez de 'COMPRAR BOLETOS', y abrir un mini-form de email."*
5. *"WhatsApp floating CTA bottom-right en todas las secciones excepto hero — fill rojo, ícono blanco, mensaje pre-redactado según sección visible."*
6. *"Loading state: black screen #0A0A0A con wordmark INSIGNIA pulsando white opacity 0.6 a 1.0 cada 1.2s, hasta que el primer frame esté listo. Sin spinner, sin progress bar."*
7. *"Mostrame la versión mobile del hero, eventos destacados (scroll horizontal) y form de contacto en pantalla 375px."*

---

## 🚀 CHECKLIST PRE-EXPORT

Antes de exportar:
- [ ] Todas las 17 secciones visibles y en orden
- [ ] Hero scroll-driven funciona suave (probar trackpad y mouse wheel)
- [ ] Cards de servicios pre-popula contacto al click
- [ ] Form pasa por los 4 pasos sin error
- [ ] WhatsApp y email links funcionan
- [ ] Próximos eventos abre URLs de Boletia (placeholder ok)
- [ ] Logos clientes y partners hacen marquee suave (no jump)
- [ ] Mobile preview: nada se rompe en 375px
- [ ] Footer particles solo en desktop
- [ ] Lighthouse mobile ≥85, desktop ≥95

---

*Generado por Claude · Prompt Maestro consolidado · 2026-04-30*
