# INSIGNIA ENTERTAINMENT — Extensiones Draftly v2
**5 secciones nuevas: Eventos Destacados · Próximos Eventos · Clientes · Partners · Contacto**
Generado: 2026-04-30

---

## CÓMO USAR ESTE ARCHIVO

Estas extensiones se agregan **después** de la primera generación con
`draftlyPrompt.md`. Draftly permite iterar por chat — vas a copiar los
mensajes de cada extensión uno por uno, en orden, y el canvas se va
actualizando.

**Flujo recomendado:**
1. Primera generación con el prompt principal de `draftlyPrompt.md`
2. Verificás que el hero, manifesto y disciplinas se vean como esperabas
3. Aplicás las 5 extensiones en orden vía chat iterativo
4. Refinás detalles puntuales
5. Exportás

---

# 📐 ESTRUCTURA FINAL ACTUALIZADA

Con las extensiones, el sitio queda en 17 secciones:

| # | Sección | Origen |
|---|---|---|
| 01 | Hero (cámara dolly-in) | base |
| 02 | Manifesto | base |
| 03–07 | 5 Disciplinas pinned | base |
| **08** | **EVENTOS DESTACADOS (deep dive)** | **NUEVO** |
| **09** | **PRÓXIMOS EVENTOS (Boletia)** | **NUEVO** |
| 10 | Selected Work | base |
| 11 | Servicios (cards) | base |
| **12** | **CLIENTES (logo slider)** | **NUEVO** |
| **13** | **PARTNERS (logo slider)** | **NUEVO** |
| 14 | Quote | base |
| 15 | Founder Reel | base |
| **16** | **CONTACTO (form interactivo)** | **NUEVO** |
| 17 | Footer | base |

---

# 🎤 EXTENSIÓN 1 — EVENTOS DESTACADOS

**Concepto:** Eventos es la especialidad ancla de Insignia, así que merece
una sección dedicada después de las 5 disciplinas. NO es un grid de cards
simples — es un showcase cinematográfico con 4 eventos hero, presentados
como capítulos de una película.

**Posición en el flujo:** justo después de la disciplina 05 (experiencias)
y antes de Selected Work.

**Layout:** scroll horizontal (drag o trackpad swipe en desktop, swipe
nativo en mobile). Cada evento ocupa ~85% del viewport. Snap por evento.

**Header de la sección (sticky arriba durante el scroll horizontal):**
- Eyebrow: "ESPECIALIDAD ANCLA · 2024–2026" (JetBrains Mono 12px opacity 0.5)
- Headline: "EVENTOS QUE QUEDARON EN LA HISTORIA" (Anton 64px white)
- Subtexto: "Cuatro producciones que definieron lo que hacemos. Conciertos, festivales, lanzamientos, activaciones. Ningún detalle queda fuera del corte." (Inter 18px opacity 0.7, max-width 560px)
- Indicador horizontal: barra de progreso 1px white opacity 0.2, fill rojo #E10600 según avance del scroll horizontal

**Estructura por evento:**
- Cover image full-bleed (cinemagraph 16:9 o 4:5 portrait)
- Overlay gradient bottom: `linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.92) 100%)`
- Numeración: "01 / 04" en JetBrains Mono 14px white opacity 0.5
- Título del evento: Anton 56px white
- Stats line: "VENUE · CAPACIDAD · AÑO" en JetBrains Mono 12px opacity 0.7
- Quote / brief description: Inter italic 16px white max-width 480px (2-3 líneas)
- CTA discreto abajo: "→ VER CASE STUDY" (link a página dedicada o lightbox)
- Hover/active: el cinemagraph empieza a reproducir, sutil zoom-in de 102% sobre la imagen

**Interacción:**
- Drag horizontal (cursor cambia a "grab")
- Trackpad swipe horizontal funciona nativamente
- Flechas de teclado izq/der navegan
- Keyboard accessible (tab + enter)
- En mobile: swipe + dot indicators abajo

**Mensaje para pegar en chat de draftly:**

```
Agregá una sección NUEVA después de la disciplina 05 EXPERIENCIAS y antes de Selected Work, llamada "EVENTOS DESTACADOS". Es un scroll horizontal cinematográfico con 4 cards de eventos premium.

HEADER STICKY (queda fijo arriba mientras el usuario scrollea horizontal):
- Eyebrow JetBrains Mono 12px opacity 0.5 white: "ESPECIALIDAD ANCLA · 2024–2026"
- Headline Anton 64px white: "EVENTOS QUE QUEDARON EN LA HISTORIA"
- Subtexto Inter 18px opacity 0.7 max-width 560px: "Cuatro producciones que definieron lo que hacemos. Conciertos, festivales, lanzamientos, activaciones. Ningún detalle queda fuera del corte."
- Barra de progreso 1px abajo del header: track white opacity 0.2, fill rojo #E10600 que crece según avance del scroll horizontal

LAYOUT:
- Scroll horizontal con drag (cursor grab/grabbing en desktop)
- Cada card de evento ocupa 85vw en desktop, 92vw en mobile
- Snap por card al soltar el drag
- Cards separadas por gap de 24px
- Padding del contenedor: 5vw a cada lado

ESTRUCTURA DE CADA CARD:
- Cover image full-bleed dentro de la card (16:9)
- Overlay gradient bottom: linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.92) 100%)
- Texto en la mitad inferior:
  • Numeración "01 / 04" JetBrains Mono 14px white opacity 0.5
  • Título Anton 56px white (ej: "FESTIVAL CIRCUITO MX 2026")
  • Stats line JetBrains Mono 12px opacity 0.7: "VENUE · CAPACIDAD · AÑO" (ej: "ARENA CDMX · 18,000 PERSONAS · 2026")
  • Brief Inter italic 16px white max-width 480px (2-3 líneas, ej: "Tres días, cuatro escenarios, un solo equipo. Producción integral end-to-end.")
  • CTA "→ VER CASE STUDY" Anton 14px uppercase tracking 0.12em rojo #E10600

PLACEHOLDERS DE 4 EVENTOS (Carl reemplaza con reales):
01 — FESTIVAL CIRCUITO MX 2026 — ARENA CDMX · 18,000 · 2026 — "Tres días, cuatro escenarios, un solo equipo. Producción integral end-to-end."
02 — LANZAMIENTO MARCA ALPHA — FORO INDÚSTRIA · 1,200 · 2025 — "Activación inmersiva con 360 grados de proyección y experiencia AR."
03 — TOUR ARTISTA RESIDENTE — 8 CIUDADES · 24,000 · 2025 — "Logística y producción en simultáneo a lo largo de México."
04 — GALA ANIVERSARIO CORPORATE — TEATRO METROPÓLITAN · 3,500 · 2024 — "Cine en vivo, talento, pantallas LED y operación silenciosa."

INTERACCIÓN:
- Hover sobre card: cinemagraph empieza a reproducir, zoom-in sutil al 102%
- Click en CTA: abre lightbox con galería + más info (mock por ahora)
- Drag horizontal con mouse o swipe
- Flechas de teclado izq/der navegan entre cards
- En mobile: swipe nativo + dots abajo del slider

PALETA: misma del sitio (negro #0A0A0A · rojo #E10600 · blanco #FFFFFF). Las cover images mantienen la grade dark cinemascope con rim red, igual que las cinemagraphs ya generadas.
```

**Assets que necesitás:**
- 4 covers de eventos (cinemagraphs 16:9, ~5s loop) — generar con el mismo
  pipeline F.R.A.M.E. en una v4 si querés
- Stats reales por evento (venue, capacidad, año)
- 4 quotes/briefs cortos por evento

---

# 🎟️ EXTENSIÓN 2 — PRÓXIMOS EVENTOS (Boletia)

**Concepto:** la sección comercial — eventos a la venta con redirect a Boletia.
Distinta de "Eventos Destacados" en propósito: aquí el objetivo es venta de
boletos, no portfolio. Estética premium pero con CTAs claros y date-forward.

**Posición:** justo después de Eventos Destacados.

**Layout:** grid 3 columnas en desktop, 2 en tablet, 1 en mobile. Sin scroll
horizontal — son cards comerciales que el usuario ya quiere ver claras.

**Header:**
- Eyebrow: "EN VENTA · BOLETOS DISPONIBLES" (JetBrains Mono 12px rojo #E10600)
- Headline: "PRÓXIMAS FECHAS" (Anton 64px white)
- Subtexto: "Boletos vía Boletia. Agotamos rápido — reservá con tiempo." (Inter 18px opacity 0.7)
- Filtro chips horizontales: TODOS · CONCIERTOS · FESTIVALES · TEATRO · CORPORATE (Anton 14px uppercase, hover rojo)

**Estructura de cada event card:**
- Cover image 16:9 con overlay sutil
- Badge superior izquierda según status:
  - "EN VENTA" (chip rojo #E10600 fill, texto white)
  - "QUEDAN POCOS" (chip amarillo cálido #F2A900 fill, texto black)
  - "ÚLTIMAS FECHAS" (chip white outline 1px, texto white)
  - "AGOTADO" (chip black fill, texto white opacity 0.5, card overall opacity 0.6)
- Date block prominent: día gigante (Anton 72px white) + mes (Anton 18px) + año (JetBrains Mono 12px opacity 0.6)
- Título del evento Anton 28px white
- Venue + ciudad: Inter 14px opacity 0.7
- Hora: JetBrains Mono 12px (ej: "20:00 HRS")
- Precio desde: Inter 14px ("desde $890 MXN") — opcional, según política de Insignia
- CTA principal: "COMPRAR BOLETOS →" pill rojo #E10600 fill, padding 14px 28px, Anton 14px uppercase. Click abre nueva pestaña con la URL específica de Boletia para ese evento
- CTA secundario: "+ INFO" link white opacity 0.6 (abre detalles en lightbox)

**Estados especiales:**
- Sold out: card grayscale, badge "AGOTADO", CTA cambiado a "LISTA DE ESPERA →" (link a form)
- Próximo a abrir: card con countdown timer "VENTA ABRE EN: 02D 14H 32M 18S"

**Interacción:**
- Hover: card lift 8px + border 1px rojo #E10600 + cover image zoom 105%
- Click en CTA: Google Analytics event "ticket_click" + window.open Boletia URL
- Click en card body: abre lightbox con detalles completos del evento
- Filter chips: filtro live por categoría con animación stagger

**Mensaje para pegar en chat de draftly:**

```
Agregá una sección NUEVA después de "Eventos Destacados", llamada "PRÓXIMOS EVENTOS". Es la sección comercial — venta de boletos vía Boletia.

HEADER:
- Eyebrow JetBrains Mono 12px rojo #E10600: "EN VENTA · BOLETOS DISPONIBLES"
- Headline Anton 64px white: "PRÓXIMAS FECHAS"
- Subtexto Inter 18px opacity 0.7: "Boletos vía Boletia. Agotamos rápido — reservá con tiempo."
- Fila de filter chips horizontales abajo del subtexto: TODOS · CONCIERTOS · FESTIVALES · TEATRO · CORPORATE — Anton 14px uppercase, padding 8px 16px, border 1px white opacity 0.2, hover y activo cambian a fill rojo #E10600 con texto black

LAYOUT:
- Grid 3 columnas en desktop (≥1024px), 2 en tablet (640-1023px), 1 en mobile
- Gap 24px entre cards
- 6 cards placeholder

ESTRUCTURA DE CADA EVENT CARD:
- Cover image 16:9 arriba
- Badge en esquina superior izquierda según status (variar entre las 6 cards):
  • "EN VENTA" — fill rojo #E10600, texto white
  • "QUEDAN POCOS" — fill #F2A900, texto black
  • "AGOTADO" — fill black, texto white opacity 0.5, toda la card con opacity 0.6
- Bloque de fecha prominente abajo de la imagen:
  • Día Anton 72px white (ej: "27")
  • Mes Anton 18px abajo (ej: "JUL")
  • Año JetBrains Mono 12px opacity 0.6 (ej: "2026")
  • Layout vertical compacto, alineado izquierda
- Título del evento Anton 28px white
- Venue + ciudad Inter 14px opacity 0.7 (ej: "Auditorio Nacional · CDMX")
- Hora JetBrains Mono 12px (ej: "21:00 HRS")
- "DESDE $890 MXN" Inter 14px opacity 0.8
- CTA principal "COMPRAR BOLETOS →" pill fill rojo #E10600, texto black, padding 14px 28px, Anton 14px uppercase, full width de la card
- CTA secundario "+ INFO" link white opacity 0.6 abajo del principal

INTERACCIÓN:
- Hover sobre card: lift 8px + border 1px rojo #E10600 + cover image zoom 105%
- Click en "COMPRAR BOLETOS": abre nueva pestaña con URL de Boletia (placeholder: https://boletia.com/insignia/[event-slug])
- Click en "+ INFO": abre modal con descripción larga del evento, line-up, mapa de venue, política de boletos
- Filter chips: filtran las cards live con animación stagger fade
- Cards "AGOTADO" muestran CTA cambiado a "LISTA DE ESPERA →" que abre form

PLACEHOLDERS DE 6 EVENTOS:
01 — 27 JUL 2026 — TOUR ALPHA · Auditorio Nacional CDMX · 21:00 — desde $890 — EN VENTA
02 — 03 AGO 2026 — FESTIVAL CIRCUITO · Foro Sol CDMX · 18:00 — desde $1,290 — QUEDAN POCOS
03 — 14 AGO 2026 — TEATRO RESIDENTE · Metropólitan CDMX · 20:00 — desde $650 — EN VENTA
04 — 21 AGO 2026 — GALA CORPORATE · Centro Banamex · 19:30 — desde $1,800 — EN VENTA
05 — 11 SEP 2026 — CONCIERTO BETA · Pepsi Center MX · 21:00 — desde $1,100 — AGOTADO
06 — 25 SEP 2026 — LANZAMIENTO MARCA · Foro Indústria · 20:00 — desde $0 (RSVP) — EN VENTA

PALETA: misma del sitio. Los badges son los únicos elementos que rompen ligeramente el dark con #F2A900 (amarillo cálido para "QUEDAN POCOS") — está bien, suma urgencia.
```

**Assets necesarios:**
- 6 covers de eventos próximos (foto, no necesariamente cinemagraph)
- URLs de Boletia por evento
- Datos reales: fecha, venue, hora, precio desde, status
- (Opcional) Logo de Boletia para footer "powered by"

---

# 🏢 EXTENSIÓN 3 — CLIENTES (Logo Slider)

**Concepto:** banda horizontal de logos de marcas/clientes que han trabajado
con Insignia. Marquee continuo, infinito, sin botones de navegación. Logos
en blanco/grayscale, hover muestra color original. Construye trust por
reconocimiento.

**Posición:** después de Servicios y antes de Partners. Funciona como
"social proof" después de presentar las disciplinas.

**Layout:** dos filas de logos scrolleando en direcciones opuestas para
ritmo visual. Velocidad lenta-meditativa.

**Header:**
- Eyebrow: "MARCAS QUE NOS HAN ELEGIDO" (Anton 14px tracking 0.16em uppercase white)
- Subheadline: "+ 80 PROYECTOS · + 12 INDUSTRIAS · DESDE 2018" (Inter 14px opacity 0.6)

**Comportamiento del marquee:**
- Fila 1: scroll left → right, velocidad 60s por loop completo
- Fila 2: scroll right → left, velocidad 75s por loop completo (ligeramente más lenta para asincronía)
- Logos: max-height 60px, en blanco semi-transparente (opacity 0.5)
- Hover sobre logo individual: pausa el marquee de su fila, opacity 1.0, color original del logo, scale 1.1, drop-shadow rojo sutil
- Mouse-leave: reanuda el marquee
- Edges con fade-out lateral (mask-image gradient) para que se sienta infinito

**Mensaje para pegar en chat de draftly:**

```
Agregá una sección NUEVA después de "Servicios", llamada "CLIENTES". Es un marquee horizontal infinito de logos de marcas.

HEADER (centrado):
- Eyebrow Anton 14px tracking 0.16em uppercase white: "MARCAS QUE NOS HAN ELEGIDO"
- Subheadline Inter 14px opacity 0.6: "+ 80 PROYECTOS · + 12 INDUSTRIAS · DESDE 2018"
- Padding vertical generoso: 80px arriba y 60px antes de las filas

LAYOUT:
- Dos filas de logos scrolleando en direcciones opuestas
- Fila 1 (arriba): scroll left → right, 60 segundos por loop completo
- Fila 2 (abajo): scroll right → left, 75 segundos por loop completo (asíncrono intencional)
- Gap entre filas: 32px
- Padding vertical de cada fila: 24px
- Background: mismo #0A0A0A del sitio
- Edges laterales con mask-image gradient fade-out para sensación de infinito:
  mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)

LOGOS:
- Cada logo en SVG/PNG transparente
- max-height: 60px desktop, 40px mobile
- Color: white #FFFFFF con opacity 0.5 por defecto (filter: brightness(0) invert(1) opacity(0.5))
- Spacing horizontal entre logos: 80px

INTERACCIÓN:
- Hover sobre logo individual: pausar el marquee de su fila (animation-play-state: paused), opacity 1.0, scale 1.1, transition 0.4s, drop-shadow sutil rojo: drop-shadow(0 0 12px rgba(225,6,0,0.4))
- Mouse-leave del logo: reanudar el marquee
- Hover muestra el color original del logo (quitar el filter: brightness(0) invert(1))

ANIMACIÓN CSS RECOMENDADA:
@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.marquee-track { display: flex; gap: 80px; width: max-content; }
Duplicar la lista de logos x2 dentro del track para loop continuo sin saltos.

PLACEHOLDER de 16 logos (Carl reemplaza con SVGs reales):
Fila 1 (8 logos): MARCA-A, MARCA-B, MARCA-C, MARCA-D, MARCA-E, MARCA-F, MARCA-G, MARCA-H
Fila 2 (8 logos): MARCA-I, MARCA-J, MARCA-K, MARCA-L, MARCA-M, MARCA-N, MARCA-O, MARCA-P
Por ahora generá rectángulos placeholder con el nombre dentro en Anton white.

PALETA: misma del sitio. Los logos en blanco semi-transparente respetan la estética dark.
```

**Assets necesarios:**
- ~16 logos de clientes en SVG con fondo transparente (preferido) o PNG
- Si Carl no tiene los SVGs, podemos generar placeholders y reemplazarlos después

---

# 🤝 EXTENSIÓN 4 — PARTNERS (Logo Slider)

**Concepto:** misma mecánica de slider que Clientes pero diferenciada
visualmente — UNA sola fila (en lugar de dos), velocidad distinta, header
distinto. Comunica que estos son colaboradores estructurales (proveedores
de tecnología, casas hermanas, sponsors), no clientes.

**Posición:** inmediatamente después de Clientes. Las dos secciones se leen
como un par narrativo: "estas marcas confiaron en nosotros · estos socios
hacen posible nuestro trabajo".

**Diferenciación visual respecto a Clientes:**
- 1 fila (vs 2)
- Velocidad: 90 segundos por loop (más lenta, más solemne)
- Logos un poco más grandes: max-height 80px
- Background sutilmente distinto: mismo #0A0A0A pero con un thin top-border y bottom-border 1px white opacity 0.08 — los enmarca como una "tira" diferenciada
- Header opacity más bajo (0.4) — protagonismo a los logos

**Mensaje para pegar en chat de draftly:**

```
Agregá una sección NUEVA después de "Clientes", llamada "PARTNERS". Es un marquee horizontal de UNA sola fila, mecánica similar a Clientes pero diferenciada visualmente.

HEADER:
- Eyebrow Anton 14px tracking 0.16em uppercase white opacity 0.4: "PARTNERS Y COLABORADORES"
- Subheadline Inter 13px opacity 0.4: "TECNOLOGÍA · TALENTO · INFRAESTRUCTURA"
- Padding vertical: 60px arriba

LAYOUT:
- UNA sola fila (no dos como en Clientes)
- Scroll left → right, 90 segundos por loop completo (más lento que Clientes para diferenciación)
- Background: mismo #0A0A0A pero con un thin border-top 1px white opacity 0.08 y border-bottom 1px white opacity 0.08 — enmarca la tira como elemento diferenciado
- Padding vertical de la fila: 32px
- Edges laterales con mask-image gradient fade-out (igual que Clientes)

LOGOS:
- max-height: 80px desktop, 56px mobile (un poco más grandes que en Clientes)
- Color: white #FFFFFF con opacity 0.4 por defecto (más sutil que clientes)
- Spacing horizontal entre logos: 100px

INTERACCIÓN:
- Hover: mismo comportamiento que Clientes (pausa, opacity 1, scale 1.1, drop-shadow rojo)

PLACEHOLDER de 8 partners:
PARTNER-A, PARTNER-B, PARTNER-C, PARTNER-D, PARTNER-E, PARTNER-F, PARTNER-G, PARTNER-H

NARRATIVA: las dos secciones se leen como un par — Clientes ("marcas que nos eligieron") y Partners ("socios estructurales que hacen posible nuestro trabajo"). Por eso van juntas y por eso Partners tiene jerarquía visual ligeramente menor (opacity más baja, no compite con Clientes).
```

**Assets necesarios:**
- ~8 logos de partners en SVG/PNG transparente
- Lista clara de quiénes son partners vs clientes (a veces se confunden)

---

# 📬 EXTENSIÓN 5 — CONTACTO (Form Interactivo)

**Concepto:** el cierre dramático del sitio. Form full-bleed cinematográfico
en lugar de un form de Google clásico. Multi-step para no abrumar.
Inteligente: pre-popula el servicio según de dónde viene el usuario, abre
WhatsApp con mensaje listo además de enviar email.

**Posición:** entre Founder Reel y Footer. Es el destino narrativo del sitio.

**Layout:** full-bleed 100vh, dividido en dos columnas:
- Columna izquierda (40%): copy editorial + datos de contacto directos
- Columna derecha (60%): form multi-step interactivo

**Columna izquierda (estática):**
- Eyebrow: "EMPECEMOS" (Anton 14px tracking 0.16em rojo #E10600)
- Headline gigante: "Hablemos del próximo." (Anton 96px white, dos líneas posibles)
- Subtexto: "Un proyecto sin un equipo detrás es solo una idea. Contanos qué tenés en mente y armamos una propuesta a la medida en 48 horas." (Inter 18px opacity 0.7 max-width 420px)
- Bloque de contacto directo abajo:
  - "PREFERÍS DIRECTO →" (Anton 12px uppercase rojo)
  - WhatsApp button con ícono: "+52 55 1695 2852" (Inter 16px white, hover red, click abre wa.me)
  - Email button con ícono: "booking@insignia-entertainment.com" (Inter 16px white, hover red)
  - Instagram button: "@insigniaentertainment" (Inter 16px white opacity 0.7)

**Columna derecha (form multi-step):**
- 4 pasos con barra de progreso roja arriba (4 dots, fill cuando completados)
- Cada paso es un fade-in con la pregunta protagonista

**Paso 1 — Servicio:**
- Pregunta: "¿De qué disciplina necesitás producción?" (Anton 32px white)
- Opciones como botones grandes (no select feo):
  - EVENTOS · BOOKING & MANAGEMENT · FILMACIÓN · FOTOGRAFÍA · EXPERIENCIAS
  - Cada uno: pill con border 1px white opacity 0.3, padding 16px 28px, Anton 16px
  - Selected: fill rojo #E10600, texto black
  - Pre-seleccionado si el usuario llegó desde una card de servicio específica (URL params o session storage)
- Botón "SIGUIENTE →" abajo: pill rojo, disabled hasta seleccionar

**Paso 2 — Datos básicos:**
- Pregunta: "¿Cómo te encontramos?" (Anton 32px white)
- Tres inputs underlined (no boxes — solo línea inferior 1px white opacity 0.3, focus 2px rojo):
  - Nombre completo
  - Email
  - WhatsApp (con prefix +52 fijo)
- Inputs con label flotante que sube al focus (Floating Labels pattern)
- Validación inline: email mal formateado → línea roja + mensaje "email no válido"
- Botones: "← VOLVER" link white opacity 0.6 + "SIGUIENTE →" pill rojo

**Paso 3 — Detalles del proyecto:**
- Pregunta: "Contanos del proyecto." (Anton 32px white)
- Inputs:
  - Tipo de proyecto: select pill (Comercial · Corporativo · Personal · Otro)
  - Fecha estimada: date picker custom (calendario que matchea la estética dark+rojo)
  - Presupuesto: slider visual de rangos en lugar de input numérico
    - 5 rangos: $50K-$200K · $200K-$500K · $500K-$1M · $1M-$3M · $3M+ (en MXN)
    - Slider con fill rojo, marca cada rango, valor seleccionado en Anton 24px
  - Descripción libre: textarea con label "Contanos lo que tengas en mente. Lo que sea." (max 500 caracteres, contador discreto)
- Botones: ← VOLVER + SIGUIENTE →

**Paso 4 — Confirmar y enviar:**
- Pregunta: "Repasalo antes de enviar." (Anton 32px white)
- Resumen visual de los datos ingresados (chip por dato, edit inline)
- Checkbox: "Acepto que me contacten por email/WhatsApp para dar seguimiento."
- Botón principal: "ENVIAR Y ABRIR WHATSAPP →" pill grande rojo
- Click hace dos cosas en paralelo:
  1. POST a backend (mailto a booking@insignia-entertainment.com con todos los datos formateados, o integración con Formspree/Resend)
  2. window.open WhatsApp con mensaje pre-redactado:
     `"Hola Insignia, soy [nombre]. Quiero cotizar un proyecto de [servicio] para [fecha estimada], rango [presupuesto]. Detalles: [descripción]. Mi email: [email]"`
- Estado de envío: skeleton loader rojo, después confirmation cinematográfica:
  - Headline: "RECIBIDO. RESPONDEMOS EN 48 HORAS." (Anton 48px)
  - Animación: pulse rojo expandiéndose desde el centro

**Mensaje para pegar en chat de draftly:**

```
Agregá una sección NUEVA después de "Founder Reel" y antes del "Footer", llamada "CONTACTO". Es un form interactivo cinematográfico, full-bleed 100vh.

LAYOUT:
- Sección de 100vh, fondo #0A0A0A
- Dos columnas: 40% izquierda (estática) + 60% derecha (form multi-step)
- En mobile: stack vertical, izquierda arriba, derecha abajo
- Padding lateral 5vw, padding vertical 80px

COLUMNA IZQUIERDA (estática):
- Eyebrow Anton 14px tracking 0.16em rojo #E10600: "EMPECEMOS"
- Headline Anton 96px white (dos líneas, line-height 0.9): "Hablemos del próximo."
- Subtexto Inter 18px opacity 0.7 max-width 420px: "Un proyecto sin un equipo detrás es solo una idea. Contanos qué tenés en mente y armamos una propuesta a la medida en 48 horas."
- Separador: 60px de espacio + thin line 1px white opacity 0.15 width 60px
- Bloque de contacto directo:
  • Eyebrow Anton 12px uppercase rojo: "PREFERÍS DIRECTO →"
  • WhatsApp link con ícono inline: "+52 55 1695 2852" (Inter 16px white, hover rojo, click abre wa.me/525516952852)
  • Email link con ícono: "booking@insignia-entertainment.com" (Inter 16px white, hover rojo, click mailto)
  • Instagram link con ícono: "@insigniaentertainment" (Inter 16px white opacity 0.7)

COLUMNA DERECHA (form multi-step de 4 pasos):
Barra de progreso arriba: 4 dots conectados por línea, fill rojo #E10600 progresivo según paso completado.

PASO 1 — Servicio:
- Pregunta Anton 32px white: "¿De qué disciplina necesitás producción?"
- 5 botones pill horizontal: EVENTOS · BOOKING & MANAGEMENT · FILMACIÓN · FOTOGRAFÍA · EXPERIENCIAS
- Cada pill: border 1px white opacity 0.3, padding 16px 28px, Anton 16px white, border-radius 999px
- Hover: border rojo #E10600
- Selected: fill rojo #E10600, texto #0A0A0A black, sin border
- Si el usuario llegó desde una card de servicio (?service=eventos en URL), pre-selecciona
- Botón "SIGUIENTE →" abajo derecha: pill rojo fill, padding 14px 32px, Anton 14px uppercase, disabled (gray) hasta que haya selección

PASO 2 — Datos básicos:
- Pregunta Anton 32px white: "¿Cómo te encontramos?"
- 3 inputs estilo "floating label underline":
  • Nombre completo
  • Email
  • WhatsApp (con prefix fijo "+52 " visible siempre, no editable)
- Estilo: line-bottom 1px white opacity 0.3, on focus line 2px rojo #E10600. Label flotante que sube al focus o al tener contenido (translate y change to 12px). Texto del input Inter 18px white. Padding vertical 12px, no padding horizontal.
- Validación inline: email mal formateado muestra línea roja + mensaje 12px rojo "email no válido"
- Botón "← VOLVER" link white opacity 0.6 + "SIGUIENTE →" pill rojo

PASO 3 — Detalles del proyecto:
- Pregunta Anton 32px white: "Contanos del proyecto."
- Sub-pregunta 1: "Tipo de proyecto" Inter 14px opacity 0.6
  • 4 pills: COMERCIAL · CORPORATIVO · PERSONAL · OTRO (estilo igual que paso 1, single select)
- Sub-pregunta 2: "Fecha estimada" Inter 14px opacity 0.6
  • Date picker custom: calendario dark con dates en white, hoy en rojo, selected en fill rojo, header del mes en Anton 18px
- Sub-pregunta 3: "Rango de presupuesto" Inter 14px opacity 0.6
  • Slider visual horizontal: track 4px white opacity 0.2, fill rojo, thumb circle 20px white. Marcas en 5 puntos:
    - $50K–$200K MXN
    - $200K–$500K MXN
    - $500K–$1M MXN
    - $1M–$3M MXN
    - $3M+ MXN
  • Valor seleccionado se muestra grande arriba en Anton 24px white
- Sub-pregunta 4: "Contanos lo que tengas en mente." textarea max 500 chars
  • Estilo: border 1px white opacity 0.2, focus rojo, fondo #0A0A0A, texto Inter 16px white, padding 16px, height 120px, resize none
  • Contador 12px abajo derecha "0 / 500"
- Botones: ← VOLVER + SIGUIENTE →

PASO 4 — Confirmar y enviar:
- Pregunta Anton 32px white: "Repasalo antes de enviar."
- Resumen visual: 6 chips con label + valor (Servicio, Nombre, Email, WhatsApp, Tipo, Fecha, Presupuesto). Cada chip clickeable abre el paso correspondiente para editar inline.
- Checkbox custom: "Acepto que me contacten por email/WhatsApp para dar seguimiento." Inter 14px opacity 0.7. Checkbox visual: cuadrado 20px border 1px white, checked = fill rojo + check white.
- Botón principal "ENVIAR Y ABRIR WHATSAPP →": pill grande rojo fill, padding 18px 40px, Anton 16px uppercase tracking 0.12em, full width
- Click ejecuta:
  1. fetch POST a /api/contact (placeholder por ahora, conectaremos a Formspree/Resend después)
  2. window.open con URL de WhatsApp pre-redactada: wa.me/525516952852?text=[mensaje URL-encoded]
  Mensaje pre-redactado:
  "Hola Insignia, soy [nombre]. Quiero cotizar un proyecto de [servicio] para [fecha estimada], rango [presupuesto]. Detalles: [descripción]. Mi email: [email]"

ESTADO DE ENVÍO:
- Loading: el botón se reemplaza por un skeleton pulsando rojo, label cambia a "ENVIANDO..."
- Success: la sección entera fade-out al 0.3 y aparece confirmation cinematográfica centrada:
  • Pulse rojo radial expandiéndose desde el centro (animación CSS)
  • Headline Anton 48px white: "RECIBIDO. RESPONDEMOS EN 48 HORAS."
  • Subtexto Inter 16px opacity 0.7: "Mientras tanto, abrimos WhatsApp para que sigamos la conversación."
  • Botón sutil "Volver al inicio →" link white

PALETA: misma del sitio. El form es la pieza más interactiva, así que el rojo #E10600 toma protagonismo en focus states, selecciones, CTAs.

NOTA TÉCNICA: si draftly no soporta backend functionality (form submit a API), generá el form con los IDs y data-attributes correctos para que después en el HTML exportado conectemos Formspree o Resend en 5 minutos. Todos los inputs deben tener name="..." propio para FormData.entries() funcione en el código exportado.
```

**Assets necesarios:**
- Ningún asset visual nuevo (todo es UI)
- Antes de publicar:
  - Cuenta de Formspree o Resend para recibir submissions (gratis hasta 50/mes)
  - Verificar que el número WhatsApp +52 55 1695 2852 sea el correcto y esté activo
  - Definir copy del email automático que recibe el cliente al enviar el form

---

# 🔄 ORDEN DE APLICACIÓN EN DRAFTLY

Aplicá las extensiones en este orden — cada una en un mensaje separado en
el chat de draftly, esperando a que renderice antes de pasar a la siguiente:

| # | Extensión | Riesgo de cambios al sitio existente | Tiempo estimado |
|---|---|---|---|
| 1 | Eventos Destacados (scroll horizontal) | Bajo | 3-5 min |
| 2 | Próximos Eventos (Boletia) | Bajo | 3-5 min |
| 3 | Clientes (logo slider) | Bajo | 2-3 min |
| 4 | Partners (logo slider) | Bajo | 2-3 min |
| 5 | Contacto (form multi-step) | Medio (puede afectar layout vecino) | 5-8 min |

**Tip:** después de cada aplicación, scrolleá el sitio entero para verificar
que no se rompió ninguna sección preexistente. Draftly a veces reorganiza
secciones cuando agrega nuevas — si pasa, en el chat le decís: "no muevas
las secciones existentes, solo agregá la nueva en la posición indicada".

---

# 📦 RESUMEN — ASSETS TOTALES PARA SITIO COMPLETO

Con las extensiones, la lista total de assets queda:

| Asset | Sección | Estado |
|---|---|---|
| 6 cinemagraphs (cámara + live show + 4 disciplinas) | Hero + cards servicios | ✅/🔜 |
| 4 covers eventos destacados (4 cinemagraphs 16:9) | Eventos Destacados | 🔜 generar |
| 6 covers eventos próximos (fotos) | Próximos Eventos | 🔜 conseguir |
| Logo INSIGNIA SVG | Navbar + footer + form | 🔜 generar |
| ~16 logos de clientes (SVG) | Clientes slider | 🔜 conseguir |
| ~8 logos de partners (SVG) | Partners slider | 🔜 conseguir |
| Founder reel video 60-90s | Founder Reel | 🔜 producir |
| Selected Work portfolio (6-8 fotos) | Selected Work | 🔜 conseguir |

**Mínimo viable para primera versión publicable:**
- 6 cinemagraphs (los que ya generaste + los 4 de las disciplinas)
- 4 covers de eventos destacados
- 6 fotos de eventos próximos + URLs Boletia
- 16 logos de clientes
- 8 logos de partners
- Logo INSIGNIA
- (El founder reel y Selected Work podés agregar después en una v2 del sitio)

---

# 🚀 SIGUIENTE PASO

1. Generá los 4 cinemagraphs faltantes con `assetPrompts_v3_disciplines.md`
2. Generá la primera versión del sitio en draftly con `draftlyPrompt.md`
3. Aplicá las 5 extensiones de este archivo en orden
4. Conseguí los logos de clientes/partners (en paralelo a 1-3)
5. Refiná detalles puntuales por chat
6. Exportá HTML/CSS/JS
7. Conectá el form a Formspree/Resend en el código exportado
8. Verificá las URLs de Boletia
9. Publicá

---

*Generado por Claude · Extensiones draftly v2 · 2026-04-30*
