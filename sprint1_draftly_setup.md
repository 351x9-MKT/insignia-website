# Sprint 1 - Setup en Draftly (nuevo proyecto)
**Concatenar 3 videos + crear proyecto + subir + prompt orquestador**
Generado: 2026-04-30

---

## PASO 1 - Concatenar los 3 videos con FFmpeg

Esto une los 3 MP4 (cámara hero, filmación set, concert con drone) en un
solo archivo de 24 segundos que Draftly va a tratar como el cinematic
principal del sitio.

### Si no tienes FFmpeg instalado

En Mac con Homebrew:
```bash
brew install ffmpeg
```

### Comando para concatenar (recomendado: re-encode para evitar problemas)

Los videos vienen de herramientas distintas (Higgsfield, Seedance, Kling),
con códecs probablemente diferentes. Para evitar errores de concatenación,
re-encodás todo a un perfil consistente:

```bash
cd ~/Downloads  # o donde tengas los videos

# Crear lista de archivos en orden
cat > concat.txt << EOF
file 'escena02_camera.mp4'
file 'escena03_filmacionset.mp4'
file 'escena04_concert_drone.mp4'
EOF

# Concatenar y re-encodar a perfil estándar
ffmpeg -f concat -safe 0 -i concat.txt \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -an \
  sprint1_chained.mp4
```

### Cambios al comando si lo necesitás

Reemplazá los nombres de archivo (`escena02_camera.mp4`, etc.) con los
nombres reales que tengas. El orden importa: cámara hero PRIMERO,
filmación set SEGUNDO, concert tercero.

`-an` quita el audio (si tus videos vinieron con audio AI generado, lo
descarta - los cinematics scroll-driven no usan audio).

`-crf 18` es alta calidad. Si el archivo final pesa demasiado, subí a
`-crf 23` para reducir tamaño (~50% menos pero algo de calidad).

### Verificación rápida

Una vez generado `sprint1_chained.mp4`, abrilo y reproducilo. Verificá:

- [ ] Dura exactamente 24 segundos
- [ ] Las 3 escenas se ven en orden
- [ ] No hay cortes negros entre escenas (si los hay, los videos individuales tienen frames negros al inicio/fin que hay que recortar)
- [ ] El color grade se siente consistente entre las 3
- [ ] La transición de la escena 02 a la 03 cruza el cristal del lente
- [ ] La transición de la 03 a la 04 cruza el monitor del director

Si las transiciones no calzan visualmente, antes de subir a Draftly podés
ajustar con un crossfade sutil:

```bash
# Crossfade de 0.3s entre cada escena
ffmpeg -i escena02_camera.mp4 -i escena03_filmacionset.mp4 -i escena04_concert_drone.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.3:offset=7.7[v01];[v01][2:v]xfade=transition=fade:duration=0.3:offset=15.4[vout]" \
  -map "[vout]" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  sprint1_chained_xfade.mp4
```

(Solo usar el crossfade si las transiciones se sienten brusquedad. Si los
match cuts ya funcionan limpio, el corte directo es mejor.)

---

## PASO 2 - Crear nuevo proyecto en Draftly

1. En la dashboard de Draftly, click en **"+ New Project"** (o equivalente)
2. Nombre del proyecto: **"Insignia Entertainment - v2 storytelling"**
3. Aspect ratio: **16:9**
4. Plan: PRO (ya activo)

---

## PASO 3 - Pegar el prompt orquestador (paso 01 Prompt Input)

Este prompt está calibrado en ASCII pure, ~5500 caracteres - cabe holgado
en el límite de 20K del plan PRO.

```
INSIGNIA ENTERTAINMENT - film and event production house in Mexico City. Cinematic continuous-shot website. Dark cinemascope, surgical minimalism, modern digital cinema. Refs: Apple keynote, A24, ARRI, Lusion oryzo.ai, Christopher Nolan crane shots, Children of Men.

THIS WEBSITE IS A 24-SECOND ONE-TAKE CINEMATIC. The user scrolls and the camera moves continuously through 3 connected scenes representing the production house universe. Multi-video chaining via single attached MP4 (sprint1_chained.mp4 attached as primary asset). DO NOT regenerate the video - extract frames from the attached file and use them as the scroll-driven 3D parallax base.

PALETTE: --bg #0A0A0A absolute black dominant. --accent #E10600 cinematic red ONLY puntual (CTAs, active states, rim lighting, NEVER bg of large blocks). --fg #FFFFFF.

FONTS via Google Fonts: Anton display, Inter 400/500/600 body, JetBrains Mono specs.

VOICE (Spanish): editorial premium, short sentences, zero emojis, zero exclamations.

THE 24-SECOND CINEMATIC (3 chained scenes):

SCENE 1 (0-8s) HERO CAMERA - cinema camera head-on, lens facing viewer, red rim, push-in to lens front element. Last frame: lens reflection shows bright set light.

SCENE 2 (8-16s) FILMACION SET - emerge from lens into commercial set. Director silhouette at video village. Talent silhouette posing. Crew. Pro lighting. Tally lights red. Camera dollies right and forward, ends in closeup of director monitor showing live concert feed.

SCENE 3 (16-24s) LIVE CONCERT with DRONE ASCENT - emerge from monitor into actual concert venue. POV chest-height in kinetic crowd. Crane-up + backward drift + tilt down over 8 seconds. Ends as full aerial drone shot looking straight down at the venue.

SCROLL MAPPING (text overlays appear at these scene-times):

0-3s: Pre-headline "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CAMARA." appears top center, fades in. Wordmark "INSIGNIA" massive Anton emerges centered.

3-8s: Wordmark stays visible. Right subtext appears: "Producimos eventos como se filman peliculas. Cinco disciplinas, una sola direccion creativa. Insignia hace que cada momento se quede en la memoria, y en el corte final." Bottom-left blur card "STUDIO INSIGNIA - CASA PRODUCTORA INDEPENDIENTE / Eventos - Booking - Filmacion - Fotografia - Creatividad". Bottom-right video card with red frame "PLAY REEL". CTA "COTIZAR PROYECTO" red pill.

8-12s: Manifesto headline appears: "No vendemos servicios." Anton large white. Below: "Producimos momentos que merecen ser filmados, fotografiados y recordados. Cada proyecto pasa por una sola direccion creativa, la nuestra." Red line 2px width 80px below.

12-16s: Disciplina 03 FILMACION reveals. Numeral 03 in red Anton 240px. Headline FILMACION white Anton 64px. Subtext "Cine, comercial y video corporativo. De la idea a la entrega final."

16-20s: Disciplina 01 EVENTOS reveals. Numeral 01 red. Headline EVENTOS. Subtext "Conciertos, corporativos, festivales, activaciones de marca. De la idea al backstage."

20-24s: As the camera ascends to aerial, the rest of the disciplinas reveal in succession - 02 BOOKING, 04 FOTOGRAFIA, 05 EXPERIENCIAS - each as side overlays brief.

POST-CINEMATIC SECTIONS (appear after the 24s video ends, scroll continues normally):

[A] EVENTOS DESTACADOS horizontal drag-scroll showcase. Sticky header: "ESPECIALIDAD ANCLA - 2024 a 2026" + Anton 64px "EVENTOS QUE QUEDARON EN LA HISTORIA" + 1px progress bar fill red. 4 cards 85vw each, drag/swipe snap. Each card: cinemagraph 16:9 + bottom gradient + "01/04" mono + Anton 56px title + mono stats "VENUE - CAPACIDAD - ANO" + Inter italic brief 2-3 lines + red CTA "VER CASE STUDY". Hover plays cinemagraph + zoom 102%.

[B] PROXIMOS EVENTOS - red eyebrow "EN VENTA - BOLETOS DISPONIBLES" + Anton 64px "PROXIMAS FECHAS" + filter chips TODOS - CONCIERTOS - FESTIVALES - TEATRO - CORPORATE. Grid 3 cols, 6 cards. Each: cover 16:9 + status badge (EN VENTA red / QUEDAN POCOS yellow / AGOTADO black opacity 0.6) + date block (Anton 72px day, mono year) + Anton 28px title + venue + time + "DESDE $XXX MXN" + red pill "COMPRAR BOLETOS" (new tab Boletia URL) + "+ INFO" link.

[C] SERVICIOS no pricing menu. Anton 64px "ELIGE TU ESPECIALIDAD" + Inter "Cada proyecto se cotiza a la medida. Selecciona el servicio que mas te interesa y empezamos la conversacion." Grid 3+2 desktop, 5 cards equal hierarchy. Each: subtle bg, padding 32px, mono red numeral, embedded cinemagraph 16:9, Anton 28px title uppercase, 3-line subtext, red pill "COTIZAR" (scrolls to Contacto with ?service=name).

[D] CLIENTES horizontal logo marquee. Header "MARCAS QUE NOS HAN ELEGIDO" + "+ 80 PROYECTOS - + 12 INDUSTRIAS - DESDE 2018". Two rows opposite, R1 left-right 60s, R2 right-left 75s. Side mask fade. Logos max-h 60px white opacity 0.5, gap 80px. Hover individual: pause row, opacity 1, scale 1.1, red drop-shadow. 16 placeholders.

[E] PARTNERS single-row marquee, distinguished. Header opacity 0.4 "PARTNERS Y COLABORADORES" + "TECNOLOGIA - TALENTO - INFRAESTRUCTURA". 1 row left-right 90s. Border-top+bottom 1px white opacity 0.08 frames strip. Logos max-h 80px opacity 0.4, gap 100px. 8 placeholders.

[F] QUOTE 100vh. Red quotation mark Anton 320px opacity 0.3 behind. Anton 56px white italic "Insignia no produce eventos. Produce recuerdos." Inter 14px attribution.

[G] FOUNDER REEL 100vh. Anton 32px header "DETRAS DE CADA INSIGNIA". Full-bleed video player + red 60px play button.

[H] CONTACTO interactive 4-step form 100vh, two cols (40%L static / 60%R form). Left: red eyebrow "EMPECEMOS" + Anton 96px "Hablemos del proximo." + Inter 18px subtext + direct contact (WhatsApp +52 55 1695 2852, booking@insignia-entertainment.com, @insigniaentertainment). Right 4 steps red progress dots: S1 5 service pills single-select pre-fill from URL ?service. S2 floating-label inputs name/email/WhatsApp+52. S3 type pills + dark date picker + budget slider 5 ranges $50K-200K to $3M+ MXN + textarea max 500. S4 review chips + checkbox + big red CTA "ENVIAR Y ABRIR WHATSAPP" - on submit: POST /api/contact + window.open wa.me/525516952852?text= with form data. Success: section fade + radial red pulse + "RECIBIDO. RESPONDEMOS EN 48 HORAS." Inputs have name attributes.

[I] FOOTER 80vh. Interactive particle canvas (white drift, lines turn red on cursor hover). Centered XL "INSIGNIA" + payoff "HECHO PARA EL ESCENARIO. CONSTRUIDO PARA LA CAMARA." 4 cols PROYECTO/STUDIO/CONNECT/LEGAL. Booking line. Final "Insignia Entertainment - Ciudad de Mexico - Hecho con cuidado."

TECHNICAL: scroll FPS 30. Mobile-first responsive, deactivate parallax + particles on mobile. clamp() typography. Smooth scroll inertia. prefers-reduced-motion respected. SEO meta + schema.org LocalBusiness. Lighthouse 95+. Vanilla HTML/CSS/JS, GSAP via CDN. Form name attributes for backend.

DELIVERABLE: clean exportable HTML/CSS/JS, ready to publish. Single-pass generation.
```

---

## PASO 4 - Subir el video chained como asset

Cuando Draftly te pida en el paso 02 (Visual Draft) o 03 (Motion Pass)
los assets visuales:

1. **Subí `sprint1_chained.mp4`** como video principal del cinematic
2. **Subí los 5 frame screenshots** de los match points como referencias
   visuales (extraidos del video con FFmpeg si querés mostrarle a Draftly
   los puntos clave):

```bash
# Extraer 5 frames clave del video chained para usar como refs
ffmpeg -ss 00:00:00 -i sprint1_chained.mp4 -vframes 1 ref_01_camera_start.jpg
ffmpeg -ss 00:00:08 -i sprint1_chained.mp4 -vframes 1 ref_02_set_emerge.jpg
ffmpeg -ss 00:00:14 -i sprint1_chained.mp4 -vframes 1 ref_03_monitor.jpg
ffmpeg -ss 00:00:16 -i sprint1_chained.mp4 -vframes 1 ref_04_crowd_pov.jpg
ffmpeg -ss 00:00:24 -i sprint1_chained.mp4 -vframes 1 ref_05_drone_aerial.jpg
```

Esos 5 jpg son los match points exactos del cinematic. Subirlos como
refs ayuda a Draftly a entender qué momento de scroll corresponde a qué
texto overlay.

---

## PASO 5 - Iteración por chat

Después de la primera generación, mandá estos mensajes en orden por el chat de Draftly:

**Mensaje 1 - Verificar el chained:**
```
El video del hero (sprint1_chained.mp4) tiene 24 segundos y contiene 3 escenas: HERO CAMERA (0-8s), FILMACION SET (8-16s), LIVE CONCERT con drone ascent (16-24s). El scroll del usuario debe avanzar el currentTime del video linealmente - 1 segundo de video por X pixels de scroll. Confirmá que esto está implementado.
```

**Mensaje 2 - Mapeo de overlays:**
```
Los textos overlay deben aparecer y desaparecer según el scroll position dentro del video. No usar autoplay - el video se controla por scroll. Verificá que: hero pre-headline + wordmark aparecen en 0-3s del video; manifesto en 8-12s; disciplina FILMACION en 12-16s; disciplina EVENTOS en 16-20s.
```

**Mensaje 3 - Mobile fallback:**
```
En mobile (≤768px), reemplazá el video scroll-scrubbing por un cinemagraph autoplay loop simple - el scroll-scrubbing de video en mobile es lento. Usá el primer frame del video como poster y reproducilo en loop con autoplay muted.
```

**Mensaje 4 - Performance:**
```
Asegurate de que el video se cargue con preload="auto" pero el primer paint NO espere a que termine de bajar. Usar el primer frame como background-image inline en CSS mientras el MP4 carga, después transicionar al video element.
```

---

## CHECKLIST POST-GENERACION

Una vez generado, antes de avanzar al Sprint 2, verificá:

- [ ] El video de 24s reproduce sincronizado al scroll (scrubbing visible)
- [ ] Las transiciones entre las 3 escenas se sienten continuas
- [ ] Los overlays aparecen en el momento correcto
- [ ] El aerial drone shot del final se ve épico
- [ ] El sitio sigue funcionando bien después del cinematic (secciones de servicios, eventos, etc.)
- [ ] Mobile carga en menos de 5 segundos
- [ ] Lighthouse Performance ≥80 (si baja de 80 con el video, hay que comprimir mas)

---

## SI DRAFTLY NO ACEPTA EL VIDEO PRE-RENDERIZADO

Algunos planes de Draftly requieren generar el cinematic vía sus AI models
internos (Gemini, Flux, Luma) en lugar de aceptar uploads. Si pasa esto:

**Opción A:** En el chat decile específicamente: *"En lugar de generar un cinematic, usá el MP4 que adjunté como source. Extraé los frames de ese video y reproducilos al scrollear, sin pasarlo por tus modelos AI."*

**Opción B:** Si insiste en generar uno propio, dejá que lo haga y después en el código exportado reemplazás el `<video src="">` por tu MP4 chained. Es 30 segundos de edit.

**Opción C:** Si Draftly tiene la feature explícita de "video upload" (no la mencionan claro en su docs), buscala en la sidebar del proyecto - suele estar bajo "Assets" o "Media Library".

---

*Sprint 1 setup en Draftly - 2026-04-30*
