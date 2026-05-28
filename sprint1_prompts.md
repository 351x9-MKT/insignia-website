# INSIGNIA ENTERTAINMENT - Sprint 1 Prompts (Plan C)
**3 escenas de prueba con continuous-shot continuity**
Generado: 2026-04-30 - Plan C aprobado

---

## OBJETIVO DEL SPRINT 1

Generar las 2 escenas nuevas (la 02 Hero Camera ya existe) + actualizar la
04 Concert con drone ascent, para validar si el continuous-shot funciona
ANTES de invertir en las 5 escenas restantes.

```
ESCENA 02 - HERO CAMERA          [existing assets]
              ↓ MATCH: cristal del lente -> luz del set
ESCENA 03 - FILMACION SET        [NEW - prompts abajo]
              ↓ MATCH: monitor del director -> concierto live
ESCENA 04 - LIVE CONCERT         [NEW v2 con drone ascent - prompts abajo]
              ↓ END: aerial shot, queda epico para Sprint 2
```

---

## CONTINUITY RULES PARA SPRINT 1

Tres reglas que aplican a TODAS las imagenes nuevas:

1. **Misma paleta:** void negro #0A0A0A dominante + acento rojo #E10600 +
   blanco #FFFFFF puro. Nada de tonos calidos ni amarillos.
2. **Misma iluminacion:** single hard key from above-front + red rim
   #E10600. Volumetric haze drift horizontal en todas las escenas.
3. **Misma calidad fotografica:** Phase One Trichromatic style, 80mm
   lens, f/4. Sin AI smoothing. Sin caras humanas reconocibles. Sin logos.

---

# ESCENA 03 - FILMACION SET

**Concepto:** emergemos del cristal del lente de la camara hero (escena 02)
y nos encontramos DENTRO de un set de comercial en plena produccion. La
camara hace pull-back desde extreme closeup hasta wide del set, drift
lateral suave, y termina en un closeup del monitor del director donde se
ve el live feed de un concierto (que sera la escena 04).

## Image 1 - Wide del set (ChatGPT Images 2)

```
Hyperreal cinematic photograph, 16:9 aspect ratio. We are inside a professional commercial film set during active production. Wide medium shot composition.

Foreground (camera-right): a director silhouette sitting at a video village setup, three monitors stacked showing different camera angles, faintly illuminated by the screens. The director wears a dark cap, holding a coffee cup. Headphones around neck.

Midground center: an actor or model silhouette mid-pose under hot studio lighting. Cannot see their face clearly - lit from above with hard backlight creating a clear silhouette against a dark gray seamless backdrop. They are mid-gesture, performing.

Around them: 4-6 crew silhouettes barely visible in the surrounding darkness, holding equipment. A boom mic just visible at the top edge of frame. Cables snaking on the floor. A clapperboard resting on a stand mid-left.

Lighting: cinematic working set illumination. The KEY LIGHT comes from a large softbox/HMI camera-left, hard and bright on the talent silhouette. A red rim light #E10600 - this is from the small RECORD TALLY LIGHT of one of the active cameras visible mid-frame, plus a faint red glow from the switcher panel near the director. Volumetric haze drifts horizontally through the scene, picked up by the key light - we can see thick atmosphere even though it's a controlled set.

Background: deep matte black void #0A0A0A behind the seamless backdrop. The set feels like it's floating in infinite darkness - we cannot see studio walls. Just the working set as a pool of light in pure void.

Color grade: deep crushed blacks, neutral cool midtones on the talent and crew, a single red accent #E10600 from the tally lights and switcher. Cool LED-driven illumination, NOT tungsten, NOT warm.

Composition: substantial negative space at the top of the frame for typography overlay. The director monitors at camera-right occupy roughly 25% of the frame width.

Texture: razor-sharp focus on the monitors and the talent's silhouette outline. Real working-set photojournalism feel. Phase One Trichromatic style, 80mm lens, f/4.

No identifiable faces (everyone in silhouette), no readable text on monitors, no logos on equipment, no brand markings.

CONTINUITY NOTE: this scene comes immediately after a closeup of a cinema camera lens. The viewer feels they have just emerged through that lens into this set. The lighting on the working set should feel like the same warm light that was reflected in the lens glass.
```

## Image 2 - Closeup del monitor (ChatGPT Images 2 + Image 1 adjunta)

```
Use the attached image as a hard reference for the film set, lighting, color grade, and overall mood. Generate the SAME exact set captured a moment later, but the camera has dollied forward and to the right - we are now in extreme closeup of one of the director's monitors.

Keep identical: 16:9 ratio, the same set lighting outside the monitor, the same red accent #E10600, the same Phase One Trichromatic style, the same volumetric haze.

What changed (the viewer dollied to the monitor):
- The monitor now fills 75% of the frame, slightly off-center camera-left
- The other 25% shows the director's hand and shoulder silhouette holding the coffee cup, soft focus, on the right edge
- The monitor screen content is the focal point: it shows a LIVE feed of a concert venue. We see a wide shot of a crowd (silhouettes with raised hands) in front of a distant illuminated stage with white architectural lights and red laser beams cutting through smoke. The concert image is sharp and high-contrast - this is what the camera at the venue is capturing in real time
- The monitor's bezel is matte black with a thin red record indicator light glowing #E10600 in the corner
- A timecode burn-in is faintly visible in the corner of the live feed: "01:47:23"
- Subtle scanline texture on the monitor (CRT-feel, not pixelated)
- The set environment around the monitor is now in soft bokeh - we sense its presence but the focus is on the screen

Same color grade. Same crushed blacks. The red record light and the laser beams in the live feed are now the dominant red accents. No warm tones.

This is the same set, one breath later, with the camera now intimate with the monitor. The viewer is being PULLED INTO the live feed.

CONTINUITY NOTE: the live feed image on the monitor must visually anticipate the next scene (an actual concert venue). The concert in the monitor should feel like the SAME concert we will be inside in the next frame. Plan the composition so it reads as a logical bridge.
```

## Video 8s - Pull-in to monitor (Higgsfield/Seedance/Kling/Veo)

```
Animate a smooth 8-second continuous-shot transition from Image 1 to Image 2. 16:9, no audio. This footage will be chained as part of a longer cinematic sequence on a website - it must feel like ONE TAKE, not a transition cut.

Camera motion: slow lateral drift from camera-left to camera-right combined with a steady forward dolly toward the director's video village. Constant velocity, perfectly smooth (this will be scrubbed by user scroll, so linear motion is critical).

Internal motion in the scene:
- The talent silhouette mid-frame holds their pose with subtle micro-movements (slight head turn, hand adjusts)
- Volumetric haze drifts horizontally throughout, picked up by the key light
- The red tally lights pulse very subtly - one breathes between 90% and 100% intensity over 3-second cycle
- The boom mic has a barely perceptible micro-sway from above (operator hand)
- One crew silhouette in the background subtly shifts position around second 4
- The director silhouette raises the coffee cup slightly around second 5

The monitor approach (this is the climax of the shot):
- Seconds 0-4: monitor visible as a small element camera-right, screen content not yet readable
- Seconds 4-6: as we dolly closer, monitor screen content begins to crystallize - the concert footage on screen becomes visible (crowd silhouettes, stage lights)
- Seconds 6-8: monitor fills the frame, ending exactly on Image 2 composition - extreme closeup of the monitor with the live concert feed sharp and dominant

Pacing: meditative push-in. The viewer feels drawn forward into the monitor.

Color grade preserved exactly: crushed blacks, single red accent. No warm tones.

CONTINUITY: this is scene 03 of a 3-scene sequence. The previous scene ended on a cinema camera lens closeup - the FIRST frame of this video should feel like we just emerged through that lens into the set. The LAST frame must visually match Image 2 perfectly because the next scene begins by emerging FROM the monitor screen into the actual concert venue.
```

---

# ESCENA 04 v2 - LIVE CONCERT con DRONE ASCENT

**Concepto actualizado:** emergemos del monitor de la escena 03 directamente
al concierto. Empezamos a altura de la multitud (POV inmersivo). Durante
los 8 segundos, la camara hace un crane-up cinematografico continuo - sube
y se aleja - hasta terminar en un aerial drone shot mirando el evento desde
arriba, como un dron sobrevolando el venue. La gente se mueve mucho,
respira, baila - el crowd esta vivo.

## Image 1 - POV en la multitud (ChatGPT Images 2)

```
Hyperreal cinematic concert photograph, 16:9 aspect ratio. POV from chest-height inside a dense, kinetic festival crowd, looking forward and slightly upward toward an illuminated stage in the middle distance. Modern outdoor festival or large arena - contemporary aesthetic (Coldplay 2025 / Tomorrowland / Coachella main stage), NOT vintage rock concert.

Foreground (lower 50% of frame): a SEA OF MOVING CROWD in deep silhouette. The crowd is alive and kinetic - dozens of raised hands in varied dynamic poses (some arms straight up, some in waves, some holding phones recording, some clenched fists, some open hands). Several heads visible bobbing in different rhythms - we can see the energy, multiple heights and densities. A few bodies visibly mid-jump or mid-dance. The silhouettes overlap creating depth. Despite the density, individual gestures are readable. The crowd feels packed but breathable.

Midground: heavy volumetric atmospheric smoke and haze layers between crowd and stage, illuminated from behind by stage lights. Several distinct laser beams cutting at different angles through the smoke - white, with red #E10600 accents. A single bright camera flash from somewhere in the crowd just popped, briefly silhouetting a few faces around it.

Background (upper 50% of frame): a substantial stage seen at distance. Modern minimal architecture - clean rectangles of white #FFFFFF light, a wall of LED panels showing abstract motion graphics, NO performer face visible (only a small silhouette mid-stage). Above and behind the stage: a circular ring of lights, and laser fans cutting upward into the night sky. Several spotlights cross beams above the crowd.

Atmosphere: heavy volumetric smoke fills the air between crowd and stage. Multiple lasers visible. The air feels THICK with energy - this is peak festival energy.

Color grade: crushed blacks #0A0A0A in the crowd silhouettes, brilliant white #FFFFFF on stage architectural lights, vivid red accents #E10600 in laser beams and rim lights cutting through the smoke. Cool LED-driven festival lighting, NOT warm tungsten.

Texture: real photojournalism, slight motion blur on several raised hands suggesting movement (this is critical - the crowd should feel ALIVE, not frozen), sharp focus on the stage background, atmospheric haze rendered with realistic volumetric scattering. Sony A1 / 35mm / f/2.8 / ISO 1600 grain feel.

Composition: stage centered horizontally, slightly above geometric vertical center. The crowd silhouettes occupy the lower half forming a natural framing element.

No identifiable celebrity faces. No readable brand logos on the stage. No text. Performer silhouette stays generic (could be any artist).

CONTINUITY NOTE: this scene comes immediately after a closeup of a director's monitor showing a live concert feed. The viewer feels they have just emerged through the screen into the actual venue. The visual language - crowd composition, stage architecture, color of lights, smoke density - must match the live feed image we showed in the previous monitor closeup, so the brain reads "this is the same concert that was on the monitor".
```

## Image 2 - Aerial drone shot (ChatGPT Images 2 + Image 1 adjunta)

```
Use the attached image as a hard reference for the concert venue, stage architecture, crowd characteristics, lighting, and color palette. Generate the SAME exact concert event but viewed from a DRAMATICALLY different camera position.

Keep identical: 16:9 ratio, the same stage in the venue, the same crowd of silhouettes, the same modern festival aesthetic, the same color palette (crushed blacks, white stage architectural lights, red #E10600 laser accents), the same volumetric smoke filling the air.

THIS IS A FULL AERIAL DRONE SHOT - bird's-eye view from approximately 50 meters above the crowd, looking straight DOWN at the venue. The drone is suspended high above the audience, slightly toward the back of the crowd, pointing down at a 75-degree angle (mostly straight down, slight tilt to include the stage at the top edge of frame).

What we see now:
- The crowd from above: hundreds of textured silhouettes occupying the lower 70% of the frame, forming a sea of dots and shapes. Some clusters denser, some thinner channels visible (paths between groups). Several bright phone screens visible pointing up, dotting the crowd like stars
- Multiple raised hands visible from above as small bright spots where skin catches the stage lights
- The stage now occupies a small rectangular bright zone at the top of the frame - clearly architecturally minimal, white architectural lights, the LED wall partially visible. The performer silhouette is now tiny, barely a dot
- Laser beams now visible cutting horizontally THROUGH the smoke layer between crowd and stage, seen from above as long bright lines crossing the frame at different angles
- Smoke layers rendered as visible cloud-like masses partially obscuring the crowd in some areas, giving the shot a dynamic atmospheric quality
- Spotlights from the stage rig hit the crowd from various angles, creating bright pools of light scattered across the silhouette mass

Atmosphere: cinematic aerial perspective. The viewer feels like they are floating above the event. The scale is now overwhelming - this is not just a crowd, this is THOUSANDS of people experiencing a moment together.

Color grade: same as Image 1 - crushed blacks dominant in the deep crowd, brilliant whites on stage and laser highlights, vivid red #E10600 accents in the lasers cutting through smoke. The red lasers are the dominant colored element from this perspective.

Texture: cinematographic drone footage feel. Sharp focus throughout (deep depth of field at altitude). Realistic atmospheric haze and smoke layers. No AI smoothing artifacts on the crowd - hands and bodies should read as dark organic masses, not pixelated or distorted.

Composition: aerial framing. Stage at top edge, crowd dominates lower 2/3 of frame. The shot feels like the FINAL FRAME of a massive crane-up movement - this is the climax of an ascending camera move.

No identifiable faces (silhouettes from above). No readable brand logos. No text overlays. No artifacts on hands.

CONTINUITY NOTE: this is the SAME concert from Image 1, simply seen from much higher up. The viewer's camera has CRANED UP from chest-height in the crowd to drone altitude over 8 seconds. Maintain visual coherence: same stage, same crowd density, same lighting setup, same atmospheric mood - just a radically different vantage point.
```

## Video 8s - Crane-up from crowd to drone aerial

```
Animate a smooth 8-second continuous-shot transition from Image 1 to Image 2. 16:9, no audio. This footage will be chained as part of a longer cinematic sequence - it must feel like ONE CONTINUOUS CRANE/DRONE MOVE, not a cut.

Camera motion: a single sustained crane-up combined with a slight backward drift. The camera starts at chest-height inside the crowd (Image 1 position) and over 8 seconds rises smoothly and continuously upward and slightly back, until it reaches full drone altitude looking down at the venue (Image 2 position). The motion is constant velocity (linear, no ease - this will be scrubbed by scroll). Think Tomorrowland aftermovie or a modern festival aerial sweep.

The camera also tilts: starts looking forward/slightly-up at the stage, gradually rotates to looking straight down as it ascends. By second 8, the lens is pointing directly at the ground.

Internal motion in the scene (the crowd is ALIVE):
- The crowd silhouettes move continuously and dynamically throughout the entire 8 seconds. Heads bob at varied off-rhythm tempos. Arms wave, raise, lower. Bodies sway. New hands raise as others lower. NO synchronized motion - each silhouette has its own micro-rhythm. This is critical - the crowd must feel real, not frozen
- Multiple bodies visibly jumping or bouncing during the 8 seconds
- A wave of raised arms rolling through the crowd around second 3, like a literal wave gesture
- Volumetric smoke drifts continuously across the frame, denser bands rolling through, thinner zones following
- 4 distinct laser beams sweep slowly across the venue at independent rates - they intersect, separate, recombine throughout the 8 seconds, never strobing
- Stage architectural lights pulse gently - white backlight breathes between 90% and 100% intensity, red accents pulse at a different cycle for visual depth
- Multiple bright camera flashes pop in the crowd at random times (3-4 flashes during the 8s) - small white bursts lasting 2 frames each
- The performer silhouette on stage shifts pose 2-3 times during the sequence
- Phone screens visible in the crowd, some moving, some stationary, creating starlike points of light

Pacing: epic, ascending, breathtaking. The viewer feels lifted up and out of the crowd, seeing the full scale of the event reveal as we climb. Like a Christopher Nolan crane shot.

Color grade preserved exactly: crushed blacks, white architectural stage lights, red #E10600 laser accents. Cool LED festival lighting throughout.

Critical technical: the motion must feel like a single drone/crane move, NOT a cut and NOT a teleport. Even at second 4 the viewer should be able to point to where the crane is currently positioned in space.

CONTINUITY: this is scene 04 of a 3-scene Sprint 1 test. The PREVIOUS scene ended on a director's monitor closeup showing a live concert feed - the FIRST frame of this video should feel like we just emerged through that monitor into the real venue, at chest-height in the crowd. The LAST frame is the aerial drone shot which serves as a stunning visual climax that demonstrates the continuous-shot concept. No people identifiable, no logos, no text.
```

---

## ASSETS A GENERAR EN SPRINT 1

| # | Asset | Estado | Tiempo estimado |
|---|---|---|---|
| 1 | filmacionset-image1.jpg | NEW | 2 min |
| 2 | filmacionset-image2.jpg | NEW (con image1 adjunta) | 2 min |
| 3 | filmacionset-pulltomonitor.mp4 | NEW | 5 min |
| 4 | concert-crowd-image1.jpg | NEW (reemplaza el liveshow viejo) | 2 min |
| 5 | concert-aerial-image2.jpg | NEW (con image1 adjunta) | 2 min |
| 6 | concert-craneup.mp4 | NEW (reemplaza el liveshow ping-pong) | 5 min |

**Total Sprint 1: ~20 minutos de generacion + costos de creditos**

Los assets viejos del live show (`liveshow-pingpong.mp4`) NO se descartan -
los podes seguir usando como cinemagraph en la card 01 EVENTOS de la
seccion Servicios. Ahi siguen funcionando perfecto. Solo se reemplazan
para el continuous-shot del hero.

---

## CHECKPOINT DE VALIDACION (despues de generar)

Una vez tengas los 6 assets, antes de meterlos a draftly, vale la pena
hacer este check rapido para validar que el continuous-shot funciona:

1. **Lineup test:** abri en orden los 4 frames criticos:
   - camera-image2 (closeup del lente)
   - filmacionset-image1 (set wide)
   - filmacionset-image2 (monitor closeup)
   - concert-crowd-image1 (POV multitud)
   - concert-aerial-image2 (drone aerial)
   Mirando uno tras otro como un slideshow, los matches deben sentirse
   creibles. Si alguna transicion se rompe, regeneras esa imagen con un
   ajuste al prompt.

2. **Color consistency:** los 4 frames deben tener el MISMO grade -
   crushed blacks, neutros frios, rojo #E10600 puntual. Si alguno se ve
   mas calido o mas magenta, ajustar.

3. **Rhythm test:** mira los 3 videos en orden. La camara debe sentirse
   como UNA sola camara movienose continuamente. Si alguno se ve cortado
   o teleportado, hay que ajustar el motion.

Si los 3 checks pasan -> proceder a draftly y subir los 6 assets.
Si alguno falla -> regenerar especificamente ese asset antes.

---

## NEXT STEP DESPUES DE SPRINT 1

Si el Sprint 1 valida bien (los matches funcionan, el color es consistente,
el motion fluye), pasamos al Sprint 2 con los prompts para las 5 escenas
restantes:

- Escena 01 - Void + wordmark intro
- Escena 05 - Booking office (contract signing)
- Escena 06 - Photo studio (strobe firing)
- Escena 07 - Immersive portal (vertical light column)
- Escena 08 - Return to void + wordmark final

Cada uno con la misma estructura: Image 1 + Image 2 + Video 8s + match
points explicitos.

Para que el Sprint 2 cierre el loop, tenemos que pensar en como termina
la 04 v2 (drone aerial) y como empieza la 05. Mi propuesta: el drone hace
un **descent** lento sobre el venue, encuentra una claraboya/skylight en
el techo del backstage, y "cae" a traves de ella hacia el escritorio de
booking. Pero eso lo afinamos cuando llegues al Sprint 2 - por ahora
quedate con el aerial como cierre epico de la prueba.

---

*Sprint 1 prompts - 2026-04-30*
