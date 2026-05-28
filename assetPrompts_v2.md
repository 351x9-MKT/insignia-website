# INSIGNIA ENTERTAINMENT — Assets v2 (versión moderna)
**Iteración visual: cámara hero + live show eventos**
Fecha: 2026-04-30 · Modernización del lenguaje visual

---

## CAMBIO DE DIRECCIÓN VISUAL

La iteración v1 (mesa de taller, cutting mat, props de papelería) se sentía
vintage-editorial. La v2 va al opuesto — minimalismo iconográfico, producto
de cámara aislado en negro absoluto, motion design contemporáneo. Inspiración:
ARRI product photography · Apple keynote teasers · Christopher Doyle lighting ·
Burberry tech ads 2025. Menos props, más sujeto. Menos cálido, más quirúrgico.

Paleta sin cambios (negro `#0A0A0A` · rojo `#E10600` · blanco `#FFFFFF`).

---

# ASSET 1 — HERO CAMERA (lens-to-viewer)

Sujeto: cámara de cine profesional vista de frente, lente apuntando directamente
al espectador. Foco infinito en el cristal del lente, todo lo demás respira en
bokeh. Animación scroll-driven: zoom-in al scrollear hacia abajo, zoom-out al
scrollear hacia arriba (efecto dolly cinematográfico).

## Image 1 — Wide shot inicial (ChatGPT Images 2)

```
Hyperreal cinematic product photograph, 16:9 aspect ratio. A professional cinema camera (modern body — ARRI Alexa Mini LF or RED Komodo silhouette, no visible logos) sitting head-on, dead center, lens pointing directly at the viewer. Camera body floating slightly above an unseen surface in pure void — pitch black background #0A0A0A extending infinitely with zero gradient, no walls, no horizon. The camera is medium-distance from the viewer, occupying roughly 45% of the frame width.

Lighting: single hard key light from above-front, sculpting the camera body with crisp specular highlights along the metal edges. A second rim light from behind-right kisses the body in deep cinematic red (#E10600), painting a thin red contour on the right edge of the camera and inside the lens hood. The lens glass catches a single bright pinpoint reflection of the key light, dead center on the front element — making the lens feel "alive", staring back.

Atmosphere: extremely subtle volumetric haze drifts horizontally across the frame, picked up only by the rim light — a few particles of red-lit dust suspended in midair. Otherwise the void is clean.

Composition: the camera is not perfectly centered — sits 2% above geometric center for visual weight. Substantial negative space around it on all sides. Top-third of the frame stays clean for typography overlay. Bottom-third stays clean for caption.

Color grade: deep blacks crushed to true #0A0A0A, midtones cool-neutral, single red accent #E10600 confined to rim light + lens reflection. No warm tones anywhere. No tungsten. This is digital cinema, not film.

Texture: razor-sharp focus on the front lens element (every glass coating reflection visible), shallow depth of field rolling off softly toward the camera body. The body itself stays mostly in focus but the rear edges fade into bokeh. Real product-photography clarity, no AI smoothing artifacts, no plastic skin look. Phase One Trichromatic style, 80mm lens, f/4.

No people. No text. No logos. No props. Just the camera, the void, and the red rim. Modern, iconic, quirurgical.
```

## Image 2 — Extreme close-up del lente (ChatGPT Images 2 + Image 1 adjunta)

```
Use the attached image as a hard reference for camera body design, lighting setup, color palette, and overall mood. Generate the SAME exact camera, but the viewer has dollied forward dramatically — we are now extremely close to the lens, the front element fills 75% of the frame.

Keep identical: 16:9 ratio, pure void background #0A0A0A, the same camera body design (only the front portion now visible — lens hood + front element), the single key light from above-front, the red rim light #E10600, the thin volumetric haze drifting horizontally.

What changed (the viewer dollied in 3 meters):
- The lens front element now dominates — the multi-coated glass shows multiple internal reflections, the iris diaphragm faintly visible deep inside, the etched focal length numbers along the barrel are readable
- Bokeh of the camera body's rear is now extreme — the rest of the camera dissolves into soft black blur
- The pinpoint key reflection on the glass has become a sharper, more crystalline starburst (8-point flare suggesting an aperture)
- The red rim is now visible curving around the lens barrel from the right, more pronounced
- Volumetric dust particles closer to camera now feel larger, drifting across the lens surface like cinema haze
- A subtle reflection of a tiny red LED visible inside the glass — like the camera is recording

Same color grade. Same digital cinema aesthetic. Same razor-sharp clarity on the lens front. No camera body details outside the lens area. No people, no text, no logos. Phase One style, but now an 80mm at f/2.0 — shallower DOF, dreamier roll-off.

This is the same shot 3 seconds into a slow dolly-in. Gentle continuity, not a cut.
```

## Video — Dolly-in scroll-driven (Higgsfield / Seedance Pro / Kling / Veo 3)

```
Animate a smooth, perfectly linear dolly-in from Image 1 to Image 2 over 8 seconds. 16:9, no audio.

Camera motion: a single forward dolly along the optical axis — viewer moves toward the camera lens at constant velocity. No pan, no tilt, no roll. Pure straight push-in. The motion must be perfectly even because this video will be scrubbed by user scroll position (scroll-down advances time, scroll-up reverses). Linear interpolation, NO ease-in or ease-out.

What animates inside the scene:
- Volumetric haze drifts horizontally across the frame at slow constant speed (camera-right to camera-left)
- The red rim light (#E10600) gently breathes — pulses subtly between 80% and 100% intensity over 4-second cycles
- The pinpoint reflection on the front lens element rotates almost imperceptibly as the dolly approaches, becoming a slightly larger starburst by the end
- A tiny red LED inside the lens glass blinks once around the 5-second mark (like a recording indicator)
- Otherwise the scene is locked — no other movement

Pacing: meditative, technical, precise. This is not emotional cinema, this is a controlled product reveal. No drama, no swell. Pure forward motion.

The animation must feel reversible — playing it backwards (zoom-out on scroll-up) must look just as clean as forward. Plan the motion to be perfectly symmetric in time.

Mood: digital cinema, void, surgical precision. Color grade: deep blacks #0A0A0A, neutral midtones, single red accent #E10600. No warm tones. No people. No text. No logos.
```

## Implementación scroll-driven en Claude Design / Code

```javascript
// El video se reproduce sincronizado al scroll, no en autoplay.
// Cuando el usuario scrollea hacia abajo en la sección hero,
// avanza el currentTime del video. Hacia arriba, retrocede.

const heroVideo = document.querySelector('#hero-camera-video');
const heroSection = document.querySelector('#hero');

heroVideo.pause();
heroVideo.currentTime = 0;

window.addEventListener('scroll', () => {
  const rect = heroSection.getBoundingClientRect();
  const scrollProgress = Math.max(0, Math.min(1,
    -rect.top / (rect.height - window.innerHeight)
  ));
  heroVideo.currentTime = scrollProgress * heroVideo.duration;
}, { passive: true });
```

Alternativa más limpia con GSAP ScrollTrigger:

```javascript
gsap.to(heroVideo, {
  currentTime: heroVideo.duration,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,  // suaviza el seek (0.5s lerp) — clave para que no se sienta robótico
    pin: true
  }
});
```

`scrub: 0.5` es el sweet spot — más bajo se siente nervioso, más alto se siente
laggy. Probá entre 0.3 y 0.8.

---

# ASSET 2 — LIVE SHOW (sección Eventos · Disciplina 01)

Sujeto: concierto/festival visto desde el centro de la multitud, escenario al
fondo iluminado, manos arriba en primer plano. Animación inmersiva: la
multitud respira, las luces del escenario barren, el humo se mueve. No es un
zoom — es un cinemagraph que loopea naturalmente.

## Image 1 — Establishing shot del show (ChatGPT Images 2)

```
Hyperreal concert photograph, 16:9 aspect ratio. POV from waist-height inside a dense festival crowd, looking forward and slightly upward toward a distant illuminated stage. Modern outdoor or large-arena live show — contemporary aesthetic, NOT a 1980s rock concert.

Foreground (lower 40% of frame): a sea of silhouetted heads and raised hands of varied poses — some arms straight up, some holding phones recording, some making the universal gesture of being lost in the music. The silhouettes are nearly black, rim-lit by the stage lights from beyond. We can see hair textures, hat outlines, individual fingers. The crowd density feels real — packed but breathable.

Midground: a faint layer of light-haze and atmospheric smoke drifting over the crowd, illuminated from behind by stage lights, giving the scene depth.

Background (upper 60% of frame): a massive stage seen at distance — silhouette of a single performer or band setup, just a small figure on the stage. Above and behind the stage, a wall of warm-white architectural lights and a few accents of cinematic red (#E10600) — laser fans cutting through the smoke, a circular ring of LED lights around the stage backdrop. The architecture of the stage is contemporary minimal — clean rectangles of light, no fireworks, no excessive video walls. A few bright LED panels visible.

Atmosphere: heavy volumetric smoke fills the air between crowd and stage, picked up by red and white beam lights cutting through it from above. Several distinct laser/spotlight beams visible, sweeping at slight angles. The air feels thick with energy.

Composition: the stage is centered horizontally but offset to the upper-third vertically. The bright stage center serves as the visual anchor. Mid-frame stays slightly cleaner so a typography overlay or card can sit there if needed.

Color grade: crushed blacks #0A0A0A in foreground silhouettes, neutral whites #FFFFFF on the stage architectural lights, vivid red accents #E10600 in laser beams and rim lights on the smoke. Some cool blue ambient in the deep background sky/architecture for depth contrast. NO warm tungsten. This is modern festival lighting — LED-driven, sharp, contemporary.

Texture: real photojournalism feel, slight motion blur on a few raised hands suggesting movement, sharp focus on the stage background, atmospheric haze rendered with realistic volumetric scattering. Shot on a Sony A1 with a 35mm lens at f/2.8, ISO 1600 — slight grain visible but clean.

No identifiable celebrity faces. No readable brand logos on the stage. No text. The performer silhouette stays generic (could be any artist).
```

## Image 2 — Mismo show un segundo después (ChatGPT Images 2 + Image 1 adjunta)

```
Use the attached image as a hard reference for crowd composition, stage layout, lighting setup, color palette, and overall mood. Generate the SAME exact concert scene captured one second later, NOT a different show.

Keep identical: 16:9 ratio, POV from inside the crowd, the same stage architecture in the background, the same crowd density, the same laser beam directions overall, the same color grade (crushed blacks, white stage lights, red accents #E10600).

What evolved in one second of real time:
- The lasers have swept — beams that were pointing camera-right now point camera-left, crossing the frame at different angles
- A few more raised hands are visible in the crowd — the wave is rolling forward, more arms up than before
- The volumetric smoke has drifted: denser now in the right side of the frame, lighter on the left
- A bright camera flash from somewhere in the crowd has just popped — a small white burst visible in the mid-foreground, briefly illuminating a few faces around it
- The performer silhouette on stage has shifted pose subtly — arms in a slightly different position
- A new spotlight has activated on the stage — another rim of red #E10600 outlining the performer from behind
- Otherwise the scene is the same — same heads, same architecture, same atmosphere

Same color grade. Same Sony A1 / 35mm / f/2.8 / ISO 1600 aesthetic. Same crowd POV. Same modern festival mood. No identifiable faces. No logos. No text.

This is the same photograph one heartbeat later — gentle continuity, not a cut.
```

## Video — Cinemagraph inmersivo (Higgsfield / Seedance Pro / Kling / Veo 3)

```
Animate a 7-second seamless cinemagraph from Image 1 to Image 2. 16:9, no audio. The video will play in a ping-pong loop on a website (forward → reverse → forward), so the final frame must match Image 2 exactly to allow seamless reverse playback.

Camera: locked-off completely. ZERO camera movement — no pan, no zoom, no tilt, no shake. The viewer stays planted in the crowd.

Internal motion (continuous, organic, layered):
- The crowd silhouettes move subtly — heads bob at slight off-rhythm tempos, individual arms in the foreground sway and wave gently, a few new hands raise during the 7 seconds, others lower. The movement is organic and varied, not synchronized — feels like a real crowd
- Volumetric smoke drifts continuously across the frame from camera-left to camera-right at slow constant speed — denser bands of smoke roll through, thinner zones follow
- Laser beams from the stage sweep slowly — three distinct beams visible, each rotating at a different rate, intersecting and separating throughout the 7 seconds
- Stage lights pulse gently — the white architectural backlight breathes between 90% and 100% intensity over a 3-second cycle, the red accents (#E10600) pulse at a different 4-second cycle for visual depth
- One bright camera flash pops in the crowd around the 4-second mark — a small white burst lasting one frame
- The performer silhouette on stage shifts pose once around the 5-second mark — gentle weighted movement
- Optional: a thin sheet of confetti or small particles drift slowly across the upper-third of the frame

Pacing: alive but meditative. The crowd feels real but the motion never gets chaotic. Premium concert capture, not raw phone footage.

Color grade preserved exactly: crushed blacks #0A0A0A, neutral whites on stage lights, red accents #E10600 in beams and rim lights, cool blue ambient in deep background. Sony A1 / 35mm / f/2.8 / ISO 1600 grain feel.

No identifiable faces. No logos. No text. No AI artifacts on hands or fingers (this is critical — generate hands cleanly or hide them in silhouette).
```

## Implementación en la card de Eventos

El video va dentro de la card #01 EVENTOS de la sección de servicios. Cuando
el usuario hace hover (desktop) o cuando la card entra al viewport (mobile),
el video empieza a reproducir en loop ping-pong. Al salir, pausa.

```javascript
const eventsCard = document.querySelector('#card-eventos');
const eventsVideo = eventsCard.querySelector('video');

// Desktop: hover trigger
eventsCard.addEventListener('mouseenter', () => eventsVideo.play());
eventsCard.addEventListener('mouseleave', () => {
  eventsVideo.pause();
  eventsVideo.currentTime = 0;
});

// Mobile: viewport trigger via IntersectionObserver
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) eventsVideo.play();
    else eventsVideo.pause();
  });
}, { threshold: 0.6 });
obs.observe(eventsCard);

// Ping-pong loop (mismo patrón que el hero)
eventsVideo.addEventListener('ended', () => {
  eventsVideo.playbackRate = -eventsVideo.playbackRate;
  eventsVideo.play();
});
```

Recomendación: igual que con el hero, lo más limpio es exportar el MP4 ya
con el ping-pong incluido (concatenar A + reverse(A)) usando FFmpeg en post.
Así el `<video loop>` simple ya hace el efecto sin código JS:

```bash
ffmpeg -i show.mp4 -filter_complex "[0]reverse[r];[0][r]concat=n=2" show_pingpong.mp4
```

---

# CHECKLIST DE EJECUCIÓN

| Paso | Herramienta | Tiempo estimado |
|---|---|---|
| 1. Generar Image 1 cámara | ChatGPT Images 2 | 2 min |
| 2. Generar Image 2 cámara (con Image 1 adjunta) | ChatGPT Images 2 | 2 min |
| 3. Generar video dolly-in cámara | Higgsfield/Seedance/Kling | 5 min |
| 4. Generar Image 1 live show | ChatGPT Images 2 | 2 min |
| 5. Generar Image 2 live show (con Image 1 adjunta) | ChatGPT Images 2 | 2 min |
| 6. Generar video cinemagraph live show | Higgsfield/Seedance/Kling | 5 min |
| 7. Post-procesar ping-pong en FFmpeg | Terminal local | 1 min |
| 8. Subir los 4 assets a Claude Design | Drag & drop al canvas | 1 min |

---

# TIPS DE GENERACIÓN

**Para la cámara:**
- Si ChatGPT Images 2 te da una cámara con logo visible (Sony, Canon, RED), agregá al prompt: "completely unbranded, no manufacturer logos, no model numbers".
- Si el lente sale "muerto" (sin reflejo de vida), forzá "single bright pinpoint reflection on the front lens element, sharp 8-point starburst flare, lens looking alive and aware".
- Si el rojo se ve naranja o magenta, especificá el HEX exacto: "rim light is pure cinematic red, hex code #E10600, NOT orange, NOT magenta, NOT pink".

**Para el live show:**
- ChatGPT Images 2 a veces genera caras deformes en multitudes — el prompt ya pide silhouettes oscuras para minimizar esto. Si igual salen caras feas, regeneralo con énfasis: "all crowd members in deep silhouette with no facial features visible, only hair and clothing outlines".
- Si las manos salen con dedos extra (artefacto AI clásico), pedí: "hands in clean silhouette only, no detailed fingers, hands as dark shapes against backlight".
- Si el escenario sale tipo años 80 (luces RGB de pared a pared), agregá: "minimal contemporary stage design, clean architectural light bars, NOT a vintage rock concert, think Coldplay 2025 tour or modern festival main stage".

**Para los videos:**
- Mencioná SIEMPRE "locked-off camera" si no querés movimiento de cámara.
- Si el video sale con artefactos en hands/faces, regenerá pidiendo "extra clean rendering on faces and hands, no morphing artifacts".
- Para el ping-pong, el último frame DEBE coincidir visualmente con Image 2. Si no coincide, el reverse playback se nota.

---

*Generado por Claude · Iteración v2 · 2026-04-30*
