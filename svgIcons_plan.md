# INSIGNIA ENTERTAINMENT - Plan SVG Iconography
**Reemplazar video scroll-scrubbed por elementos animados por servicio**
Generado: 2026-05-04

---

## CONCEPTO

5 elementos iconográficos line-art (uno por disciplina) en SVG. Cada uno
vive en el 50/50 layout actual de las disciplinas, pero ahora ANIMADO con
scroll-driven motion en lugar del placeholder gris actual.

El video del hero se mantiene PERO sin scroll-scrubbing — pasa a autoplay
loop simple. Eso elimina el stutter sin perder el "wow" cinematográfico
inicial.

---

# PARTE A - 5 PROMPTS PARA CHATGPT 4o

Pegale cada prompt en una conversación nueva de ChatGPT (modelo 4o, NO
"image generation" sino "code" — pedile que te entregue el SVG como
texto/código, NO como imagen renderizada).

---

## 01 - EVENTOS (Micrófono dinámico)

```
Genera un SVG ilustrativo de un micrófono dinámico de mano profesional 
(estilo Shure SM58), visto en perspectiva 3/4 (15 grados hacia camera-right). 
El micrófono está vertical con la grilla apuntando hacia arriba.

ESPECIFICACIONES TÉCNICAS:
- viewBox="0 0 600 600"
- Líneas en stroke blanco #FFFFFF, stroke-width 1.5
- Sin fills (todo es line-art editorial)
- Fondo transparente
- Estilo: line-art premium tipo Linear.app o Stripe.com — limpio, geométrico, sin sombras
- Cada parte mecánica del micrófono debe estar en su propio <path> con id descriptivo (id="mic-grill", id="mic-body", id="mic-handle", id="mic-base", etc.)
- Detallado pero no sobrecargado: grilla con malla visible, cuerpo cilíndrico, cuello con la transición, mango con líneas longitudinales sutiles, base
- Incluí un cable XLR enroscándose hacia abajo desde la base, en su propio <path id="mic-cable"> (curva orgánica)
- En el centro de la grilla, un pequeño círculo de stroke #C41E1E (id="mic-glow") que represente el indicador de "live" (será animado a pulsar)

Devuelve SOLO el código SVG completo, listo para pegar en HTML. Sin explicaciones.
```

---

## 02 - BOOKING & MGMT (VIP Pass / Lanyard)

```
Genera un SVG ilustrativo de una credencial VIP de backstage pass colgando 
de un lanyard (cordón). La credencial es un rectángulo laminado vertical, 
visto head-on con leve inclinación de 8 grados (hanging naturalmente del cordón).

ESPECIFICACIONES TÉCNICAS:
- viewBox="0 0 600 600"
- Líneas en stroke blanco #FFFFFF, stroke-width 1.5
- Sin fills (line-art editorial)
- Fondo transparente
- Estilo: premium minimalista tipo Apple keynote graphics

ELEMENTOS (cada uno en su propio <path> o <g> con id descriptivo):
- id="lanyard-strap": cordón tejido extendiéndose hacia arriba fuera del frame, líneas paralelas sugiriendo trenzado
- id="lanyard-clip": el clip metálico que une el cordón con la credencial (forma trapezoidal pequeña)
- id="pass-body": el rectángulo principal del pass (proporción 90×130mm aprox)
- id="pass-corners": esquinas con un leve bevel (no puntiagudas)
- id="pass-strip": franja horizontal en la parte superior del pass (sugiere holograma de seguridad)
- id="pass-photo-area": cuadrado en la parte superior izquierda interior (sugiere área de foto)
- id="pass-text-lines": 3-4 líneas horizontales abstractas (sugieren texto sin ser legible)
- id="pass-barcode": pequeño barcode rectangular en la parte inferior
- id="pass-accent": un acento en stroke #C41E1E formando la palabra abstracta "VIP" o un icono de corona/estrella en alguna esquina (será animado a glow)

Devuelve SOLO el código SVG completo, listo para pegar en HTML. Sin explicaciones.
```

---

## 03 - FILMACIÓN (Claqueta de cine)

```
Genera un SVG ilustrativo de una claqueta de cine profesional (film slate / 
clapperboard) en perspectiva 3/4, con los sticks superiores levantados a 30 
grados sobre la horizontal (preparados para cerrarse en el clap).

ESPECIFICACIONES TÉCNICAS:
- viewBox="0 0 600 600"
- Líneas en stroke blanco #FFFFFF, stroke-width 1.5
- Sin fills generales (line-art editorial)
- Fondo transparente
- Estilo: premium editorial tipo A24 title cards

ELEMENTOS (cada uno en su propio <path> o <g> con id descriptivo):
- id="slate-body": el cuerpo principal de la claqueta (rectángulo amplio horizontal)
- id="slate-sticks-top": los dos sticks superiores articulados, levantados 30 grados, con franjas diagonales blanco/negro (alternar 6 franjas, las negras como rectángulos rellenos #FFFFFF en stroke pero con id que permita rellenar después)
- id="slate-hinge": el punto de articulación entre body y sticks (un círculo pequeño)
- id="slate-stripes-body": franjas diagonales en el body inferior (estética claqueta clásica)
- id="slate-text-area": área de chalk writing — sugerí 4 líneas sutiles representando "PRODUCTION", "SCENE", "TAKE", "DIRECTOR" con líneas abstractas (no texto real legible)
- id="slate-chalk-marks": pequeños smudges/manchas sutiles sugiriendo polvo de tiza (3-4 puntos)
- id="slate-accent": un pequeño detalle en stroke #C41E1E — puede ser una luz LED de "REC" en la esquina superior derecha del body (será animado a parpadear)

Devuelve SOLO el código SVG completo, listo para pegar en HTML. Sin explicaciones.
```

---

## 04 - FOTOGRAFÍA (Lente con apertura)

```
Genera un SVG ilustrativo de un lente de cámara profesional visto de frente 
(head-on, viewer mirando directamente al cristal). El lente debe mostrar 
visiblemente las hojas de la apertura (aperture blades) en estado MEDIO ABIERTO 
(unas 8 hojas formando un octágono interior).

ESPECIFICACIONES TÉCNICAS:
- viewBox="0 0 600 600"
- Líneas en stroke blanco #FFFFFF, stroke-width 1.5
- Sin fills generales (line-art editorial)
- Fondo transparente
- Estilo: precisión técnica, ARRI/Zeiss product photography

ELEMENTOS (cada uno en su propio <path> con id descriptivo):
- id="lens-outer-ring": el aro exterior del barrel del lente (círculo grande)
- id="lens-mid-ring": un anillo intermedio con líneas indicando la zona de focal length
- id="lens-front-element": el cristal frontal del lente (círculo medio, ligeramente más pequeño)
- id="lens-coatings": 2-3 círculos concéntricos sutiles dentro del front element sugiriendo coatings multicapa
- id="aperture-octagon": el octágono interior formado por las 8 hojas de apertura — IMPORTANTE: cada hoja debe ser un <path> separado con id="aperture-blade-1" hasta "aperture-blade-8" para poder animarlas individualmente abriendo/cerrando
- id="lens-engravings": 4-6 líneas finas radiales en el aro exterior sugiriendo grabados de focal length (24, 35, 50, 85, 135, etc.)
- id="lens-center-point": un pequeño punto reflejo en el centro del front element (highlight de la luz)
- id="lens-accent": una pequeña marca de stroke #C41E1E en el aro exterior (puede ser un dot rojo "REC" o un punto de marca de marca como tienen las cámaras Leica)

Devuelve SOLO el código SVG completo, listo para pegar en HTML. Sin explicaciones.
```

---

## 05 - EXPERIENCIAS & CREATIVIDAD (Portal de luz)

```
Genera un SVG ilustrativo abstracto de un portal vertical de luz volumétrica, 
suspendido en el espacio. El portal es una columna rectangular vertical con 
"luz" escapando de su interior. Estética: abstracta, conceptual, premium 
tipo James Turrell × Apple Vision Pro launch graphics.

ESPECIFICACIONES TÉCNICAS:
- viewBox="0 0 600 600"
- Líneas en stroke blanco #FFFFFF, stroke-width 1.5
- Sin fills generales
- Fondo transparente
- Estilo: minimalismo geométrico abstracto

ELEMENTOS (cada uno en su propio <path> o <g> con id descriptivo):
- id="portal-frame": el contorno del rectángulo vertical principal (proporción ~1:2.5, alto y delgado)
- id="portal-interior-lines": 4-6 líneas verticales paralelas DENTRO del rectángulo, con stroke-opacity progresivo (más opacas hacia el centro, más transparentes hacia los bordes) — sugieren la luz volumétrica saliendo del portal
- id="portal-floor-line": una línea horizontal en la base del portal sugiriendo el "suelo" donde se proyecta la luz
- id="portal-floor-glow": pequeñas líneas radiales saliendo de la base hacia afuera sugiriendo el spill de luz en el piso
- id="portal-particles": 8-12 puntos pequeños esparcidos alrededor del portal (no dentro), sugiriendo partículas drift en la atmósfera
- id="portal-top-cap": una pequeña forma triangular o de fade en la parte superior del portal sugiriendo que se "desvanece" hacia arriba
- id="portal-accent": en uno de los bordes verticales, una línea con stroke #C41E1E sugiriendo un rim light rojo (será animada a glow/pulse)

Devuelve SOLO el código SVG completo, listo para pegar en HTML. Sin explicaciones.
```

---

# PARTE B - PLAN DE ANIMACIÓN POR ELEMENTO

Cada elemento tiene una animación scroll-driven específica que se dispara
cuando la disciplina entra al viewport. Implementación: GSAP + ScrollTrigger
con `scrub: 0.3` para suavidad.

## 01 - EVENTOS (Micrófono)

```
Estado inicial:    opacity 0, scale 0.85, rotate -8deg, mic-glow opacity 0
Scroll 0-30%:      opacity 0 -> 1, scale 0.85 -> 1, rotate -8deg -> 0deg
Scroll 30-60%:     #mic-grill scale subtle pulse (1.0 -> 1.04 -> 1.0)
Scroll 30-100%:    #mic-glow opacity 0 -> 0.9, drop-shadow red breathing
Scroll 60-90%:     #mic-cable path draw-on (stroke-dasharray + dashoffset)
                   sugiriendo el cable enroscándose en tiempo real
Salida (>100%):    micrófono permanece visible, glow continúa pulsando
```

**Wow moment:** el cable XLR se "dibuja" como en tiempo real mientras el 
glow rojo del grill late — sugiere que el micrófono está "live, conectado, 
listo para el show".

---

## 02 - BOOKING & MGMT (VIP Pass)

```
Estado inicial:    opacity 0, rotate -25deg (hanging muy inclinado), scale 0.9
Scroll 0-25%:      opacity 0 -> 1, rotate -25deg -> 8deg (settling natural)
Scroll 25-60%:     swing pendular sutil (8deg -> -3deg -> 5deg -> -1deg)
                   simulando el pass moviéndose después del settling
Scroll 60-100%:    #pass-strip stroke shimmer (gradient white -> silver
                   moviéndose horizontalmente, sugiriendo holograma)
Scroll 70-100%:    #pass-accent stroke-dashoffset draw-on + pulse rojo
Salida:            pass mantiene swing leve y shimmer continuo
```

**Wow moment:** el pass entra cayendo desde inclinado y se "estabiliza" con 
swing pendular natural, después el holograma de seguridad shimmerea — 
suggiere "credencial real, oficial, te llevo a la zona VIP".

---

## 03 - FILMACIÓN (Claqueta)

```
Estado inicial:    opacity 0, scale 0.92, sticks-top rotated 30deg
Scroll 0-25%:      opacity 0 -> 1, scale 0.92 -> 1
Scroll 25-65%:     #slate-sticks-top rotate 30deg -> 5deg (lento descenso)
Scroll 65-72%:     #slate-sticks-top rotate 5deg -> 0deg (CLAP rápido,
                   con motion blur en el último frame via filter blur)
                   #slate-chalk-marks scale 0 -> 1 + opacity 1 -> 0
                   (burst de polvo de tiza)
                   #slate-accent (LED rojo) flash from opacity 0 to 1
                   por 2 frames (sugiere que recién empezó la grabación)
Scroll 72-100%:    sticks permanecen cerrados, accent rojo sigue parpadeando
                   sutil (modo "grabando")
Salida:            claqueta cerrada, REC light parpadeando lento
```

**Wow moment:** el clap visual real cuando los sticks se cierran. Es la 
acción más icónica de la filmación — el momento en que la cámara empieza 
a grabar. El polvo de tiza saliendo en burst lo hace memorable.

---

## 04 - FOTOGRAFÍA (Lente con apertura)

```
Estado inicial:    opacity 0, scale 0.9, todas las aperture-blades en 
                   posición CERRADA (octágono interior pequeño)
Scroll 0-25%:      opacity 0 -> 1, scale 0.9 -> 1, lens-coatings fade-in
Scroll 25-70%:     LAS 8 aperture-blades rotan progresivamente desde 
                   posición cerrada a posición abierta (como una flor)
                   transform: rotate(0) -> rotate(45deg) per-blade
                   stagger entre blades de 30ms para efecto orgánico
Scroll 50-100%:    lens-engravings stroke-dashoffset draw-on (los marks 
                   numéricos del barrel se "graban" mientras la apertura 
                   se abre)
Scroll 70-100%:    todo el lens hace rotación lenta sobre su eje (rotate 
                   0 -> 8deg) sugiriendo que el fotógrafo está enfocando
                   #lens-center-point pulsa sutil (highlight breathing)
                   #lens-accent (REC dot) opacity 0 -> 1
Salida:            lens completamente "abierto", accent rojo visible
```

**Wow moment:** las aperture blades abriéndose como una flor — es una 
acción mecánicamente bella y específica de la fotografía profesional. 
Nada más comunica "fotografía" tan directamente.

---

## 05 - EXPERIENCIAS (Portal de luz)

```
Estado inicial:    todo el portal con opacity 0, todos los paths con 
                   stroke-dashoffset = pathLength (invisibles)
Scroll 0-15%:      #portal-frame draw-on (los 4 lados se dibujan 
                   secuencialmente: top, right, bottom, left, total 1s)
Scroll 15-40%:     #portal-interior-lines fade-in con stagger 80ms
                   entre cada una (las 4-6 líneas verticales aparecen 
                   sucesivamente como si la luz creciera desde el centro)
Scroll 40-60%:     #portal-floor-line draw-on horizontal
                   #portal-floor-glow rays draw-on en stagger
                   sugiriendo que la luz "toca" el suelo
Scroll 60-90%:     #portal-particles aparecen uno por uno con stagger
                   (12 partículas en 0.6s de scroll) cada una con leve 
                   floating motion (translateY ±3px)
Scroll 80-100%:    #portal-accent (rim light rojo) fade-in con drop-shadow 
                   pulsing red — el portal "se enciende" en su climax
Salida:            portal completamente formado, particles drifting, 
                   rim light rojo pulsing
```

**Wow moment:** la construcción progresiva del portal — es como ver una 
instalación inmersiva siendo "armada" en tiempo real. Comunica el concepto 
abstracto de "experiencia" sin necesidad de palabras.

---

# PARTE C - PROMPT PARA CODE MODE

Pegale **este** mensaje en Code mode:

```
Cambio de approach para las disciplinas. El video scroll-scrubbed produce 
stutter por la naturaleza de los seeks de H.264 — vamos a quitar el 
scrubbing y reemplazar los placeholders visuales de cada disciplina por 
SVG icons animados con scroll.

CAMBIOS REQUERIDOS:

1. js/modules/hero-scrub.js — DESACTIVAR scroll scrubbing en desktop:
   - El video del hero pasa a ser autoplay loop muted (igual que mobile actualmente)
   - Borrá la lógica de gsap.to(video, { currentTime ... }) con scroll trigger
   - Borrá el pin del hero (end: '+=240%' o '+=600%') — el hero pasa a ser sección normal de 100vh
   - Las overlays de Manifesto y Disciplinas que metiste DENTRO del hero pinned 
     ahora vuelven a ser secciones standalone normales después del hero
     (revertí los cambios de Opción C — esa estrategia era para video scrubbing)

2. index.html — restaurar arquitectura standalone:
   - Hero: vuelve a ser una sección de 100vh con video autoplay loop + 
     wordmark/logo/cards (lo mismo que tenía v4 inicial)
   - Manifesto: vuelve a ser <section id="manifesto"> standalone después del hero
   - Disciplinas: vuelve a ser <section id="disciplinas"> con los 5 paneles 
     50/50 layout (lo que ya tenías en v4)
   - PERO: en cada panel de disciplina, en vez del placeholder gris a la 
     izquierda, embebé un SVG INLINE específico (te paso 5 SVGs).

3. assets/images/icons/ — crear directorio y guardar los 5 SVGs:
   - 01-eventos-mic.svg
   - 02-booking-pass.svg
   - 03-filmacion-slate.svg
   - 04-fotografia-lens.svg
   - 05-experiencias-portal.svg
   (Yo te paso los SVGs después de generarlos en ChatGPT 4o)

4. js/modules/disciplinas.js — implementar animaciones por scroll:
   Cada elemento tiene su animación específica scroll-driven con GSAP + 
   ScrollTrigger con scrub:0.3. Te paso el plan detallado por elemento:

   01 EVENTOS (mic):
   - opacity 0->1, scale 0.85->1, rotate -8 -> 0 (scroll 0-30%)
   - mic-grill subtle pulse + mic-glow opacity 0->0.9 con drop-shadow rojo 
     pulsing (scroll 30-100%)
   - mic-cable stroke-dasharray draw-on (scroll 60-90%)

   02 BOOKING (pass):
   - opacity 0->1, rotate -25 -> 8deg settling (scroll 0-25%)
   - swing pendular: 8 -> -3 -> 5 -> -1 deg (scroll 25-60%)
   - pass-strip horizontal shimmer gradient (scroll 60-100%)
   - pass-accent draw-on + red pulse (scroll 70-100%)

   03 FILMACIÓN (slate):
   - opacity 0->1, scale 0.92->1 (scroll 0-25%)
   - slate-sticks-top rotate 30 -> 5 deg LENTO (scroll 25-65%)
   - sticks rotate 5 -> 0 deg RÁPIDO + chalk burst + REC flash (scroll 65-72%)
   - REC accent pulsing slow (scroll 72-100%)

   04 FOTOGRAFÍA (lens):
   - opacity 0->1, scale 0.9->1, lens-coatings fade-in (scroll 0-25%)
   - 8 aperture-blades rotate per-blade 0 -> 45deg con stagger 30ms 
     (scroll 25-70%)
   - lens-engravings stroke-dashoffset draw-on (scroll 50-100%)
   - lens body rotate 0->8deg + center-point pulse + accent fade-in 
     (scroll 70-100%)

   05 EXPERIENCIAS (portal):
   - portal-frame 4-side sequential draw-on (scroll 0-15%)
   - portal-interior-lines fade-in con stagger 80ms (scroll 15-40%)
   - portal-floor draw-on (scroll 40-60%)
   - portal-particles aparecen con stagger 50ms cada una con float motion 
     (scroll 60-90%)
   - portal-accent rim red fade-in con pulsing drop-shadow (scroll 80-100%)

5. css/sections/disciplinas.css:
   - Asegurate que los SVGs ocupen el 50% layout left correctamente
   - max-width del SVG: 60% del container, centered
   - aspect-ratio: 1/1 (los SVGs son 600x600)
   - En mobile (<640px): SVG arriba (full width), texto abajo, animaciones 
     funcionan igual

6. PRESERVAR el resto del sitio:
   - Hero (con video autoplay loop)
   - Manifesto (sección standalone normal)
   - Selected Work, Servicios, Eventos Hero, Próximos Eventos, Quote, 
     Founder Reel, Footer (sin cambios)
   - eventos.html sin cambios

PROBAR:
- Abrir localhost:8888
- El hero debe reproducir el video sin lag (autoplay loop simple)
- Scrollear a las disciplinas — cada una debe tener su SVG animándose 
  fluidamente al scroll
- En mobile: las animaciones deben funcionar pero adaptarse al layout vertical
- prefers-reduced-motion: SVGs estáticos sin animación
- Lighthouse Performance debería mejorar significativamente (sin video 
  scrubbing pesado)

Confirmá la estrategia ANTES de tocar archivos. Los 5 SVGs los estoy 
generando aparte y te los paso a continuación.
```

---

# WORKFLOW DE EJECUCIÓN

1. **Vos abrís ChatGPT 4o** y generás los 5 SVGs uno por uno con los prompts 
   de la Parte A (10-15 minutos)
2. **Guardás cada SVG** en `Assets/images/icons/` con el nombre que 
   corresponda (01-eventos-mic.svg, etc.)
3. **Pegale el prompt de la Parte C** a Code mode
4. **Cuando Code mode te pida los SVGs**, copiás el contenido de cada 
   archivo y le pegás el código SVG completo (Code mode los va a inlinear 
   en el HTML directamente para poder animarlos via CSS/JS)
5. **Probá en localhost:8888** con el refactor aplicado
6. **Si todo funciona**, mergeás a main y deployás a Netlify

Tiempo total estimado: 1-2 horas (incluyendo generación de SVGs y testing).

---

*Plan SVG iconography v1 - 2026-05-04*
