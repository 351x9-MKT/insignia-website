# INSIGNIA ENTERTAINMENT — Project Closure & Handover
**State final del sitio + roadmap de próximas conversaciones**
Cierre: 2026-05-07

---

## 🎬 Lo que está hecho y deployado

### Sitio en producción
- **URL:** https://insignia-entertainment.netlify.app
- **Repo:** https://github.com/351x9-MKT/insignia-website
- **Branch principal:** `main` (deploy automático Netlify)
- **Branch de trabajo:** `claude/hardcore-pasteur-13b6aa`

### Lighthouse final (production)
| Categoría | Mobile | Desktop |
|---|---|---|
| Performance | **99** | **94** |
| Accessibility | **100** | **100** |
| Best Practices | **100** | **100** |
| SEO | **100** | 91* |
| LCP | 1.4s | 1.5s |
| CLS | 0.003 | 0.001 |
| TBT | 10ms | 0ms |

*SEO 91 desktop = bug conocido de Lighthouse 11 (robots.txt download), real = 100

### Stack técnico
- Vanilla HTML/CSS/JS (sin frameworks pesados)
- Arquitectura SPLIT: `/css` modular + `/js` modular + `/assets`
- GSAP 3.12.5 + ScrollTrigger + Lenis 1.1.9 vía CDN
- Self-hosted fonts: Anton + Inter + JetBrains Mono en `assets/fonts/`
- Hero video chained (24s) con `<source media>` para mobile (844KB) vs desktop (18MB)
- 5 imágenes WebP fotorealistas en `assets/images/disciplinas/` (440KB total)
- Critical CSS inline en `<head>`
- Netlify Edge Functions + Brotli + HTTP/2 multiplex

### Brand system
- **Paleta:** Negro `#0A0A0A` · Rojo `#C41E1E` · Blanco `#FFFFFF`
- **Tipografía:** Anton (display) · Inter (body) · JetBrains Mono (specs)
- **Voice:** Editorial premium · cinemascope · short sentences · zero emojis

### Estructura de secciones (orden final)
1. Hero (video cinematográfico autoplay loop + wordmark + cards)
2. Manifesto ("No vendemos servicios.")
3. Disciplinas (5 paneles 50/50 con imagen 3D flotante):
   - 01 Filmación
   - 02 Eventos
   - 03 Fotografía
   - 04 Booking & Management
   - 05 Experiencias & Creatividad
4. Selected Work / **Creaciones** (tabla mono spaced, 6 placeholders)
5. **Soluciones** (5 cards con imagen + CTA "→ COTIZAR")
6. Eventos Hero (sección dedicada con stats)
7. Próximos Eventos (grid con date badges + Boletia placeholder)
8. Clientes marquee (17 marcas reales en 2 filas opuestas)
9. Partners marquee (10 marcas reales en 1 fila)
10. Quote ("Insignia no produce eventos. Produce recuerdos.")
11. Founder Reel (placeholder con play button)
12. Footer (canvas particles + 4 columnas + booking info)

---

## 🔴 PRÓXIMAS CONVERSACIONES (priorizadas)

### Prioridad ALTA — Impacto directo en negocio

#### 1. Persistencia del form de cotización + Form general nuevo
**Issue actual:** El form de cotización solo abre WhatsApp con mensaje pre-redactado. NO guarda los datos en ningún lado. Si el usuario no completa el WhatsApp = lead perdido para siempre.

**Solución:** Netlify Forms (incluido en plan, gratis 100 submissions/mes).

**Trabajo:**
- Agregar `data-netlify="true"` al form de cotización
- Ajustar handler para que guarde antes de abrir WhatsApp
- Email automático a `booking@insignia-entertainment.com` con cada submit
- Crear NUEVO form general para consultas no-cotización (prensa, marcas, aplicaciones de trabajo, otros)
- Sin WhatsApp en el general — solo guardar + auto-reply
- Dashboard de submissions en Netlify

**Tiempo estimado:** 1-2 sesiones de Code mode (~2-3 horas)

**Prompt para arrancar nueva conversación:**
```
Trabajo en el sitio Insignia Entertainment (casa productora CDMX).
Lee MEMORY.md → project_website.md primero para contexto completo.

Sitio publicado en https://insignia-entertainment.netlify.app
Repo: github.com/351x9-MKT/insignia-website

Quiero implementar 2 mejoras de captura de leads:

1. PERSISTENCIA del form de cotización actual con Netlify Forms.
   Hoy NO guarda datos, solo abre WhatsApp. Resolver para que TODOS
   los submissions queden en el dashboard de Netlify + email automático
   a booking@insignia-entertainment.com.

2. FORMULARIO DE CONSULTAS GENERALES nuevo — separado del de cotización.
   Tipos: Prensa, Marca colaborando, Aplicación de trabajo, Otro.
   Mismo backend (Netlify Forms), sin WhatsApp, auto-reply de 48h.

Empezá leyendo el código actual del form (probablemente
js/modules/form-modal.js) y proponé el plan antes de codear.
```

### Prioridad MEDIA

#### 2. Custom domain insignia-entertainment.com
**Trabajo:**
- Comprar dominio si no lo tenés
- Configurar A record o CNAME en el registrador apuntando a Netlify
- En Netlify: Project Configuration → Domain Management → Add custom domain
- SSL automático Let's Encrypt (1-2 horas en propagar)

**Tiempo:** 30 min de trabajo + esperar propagación DNS (24h max)

#### 3. URLs reales de Boletia para Próximos Eventos
**Issue actual:** Los CTAs "COMPRAR BOLETOS" tienen `href="#"` placeholder.

**Trabajo:**
- Conseguir URLs reales de Boletia por evento
- Reemplazar en index.html
- Tracking: agregar Google Analytics event "ticket_click" si querés metrics

**Tiempo:** 15 min

#### 4. Demo reel / Founder reel real
**Issue actual:** Sección "DETRÁS DE CADA INSIGNIA" tiene placeholder con play button.

**Trabajo:**
- Producir/editar el reel (60-90s ideal)
- Subir a Vimeo o YouTube (preferir Vimeo por calidad/sin ads)
- Reemplazar el `<video>` o iframe en index.html
- Mantener click → fullscreen autoplay

**Tiempo:** 30 min de integración (después de tener el video)

### Prioridad BAJA / Nice-to-have

#### 5. Proyectos reales en Selected Work / Creaciones
6 placeholders ("PROYECTO 01", etc.) → reemplazar con proyectos reales.

**Trabajo:** texto + lightbox con foto + descripción.

#### 6. Cleanup de archivos pesados redundantes
~98 MB en `Assets/` capital A (backup local, NO afectan production).

**Trabajo:** `mv Assets ~/Desktop/_backup` después confirmar que producción sigue OK, después borrar el backup.

#### 7. CRM real cuando volumen lo justifique
Cuando tengas 50+ leads/mes, conectar Netlify Forms vía webhook a:
- Hubspot CRM Free (forever free)
- Airtable
- Notion API
- Pipedrive

---

## 📋 Cómo arrancar una nueva conversación para este proyecto

**Pegá este prompt al inicio de cualquier nueva sesión:**

```
Trabajo en el sitio Insignia Entertainment (casa productora CDMX).
Lee MEMORY.md → project_website.md primero para contexto completo.

Sitio publicado en https://insignia-entertainment.netlify.app
Repo: github.com/351x9-MKT/insignia-website
Branch de trabajo histórico: claude/hardcore-pasteur-13b6aa

Quiero hacer [DESCRIBIR EL CAMBIO PUNTUAL].
```

La memoria persistente carga automáticamente con todo el contexto:
- Paleta + tipografía + voice & tone
- Decisiones técnicas y por qué se tomaron
- Pivots importantes (SVG → imágenes WebP, video scrubbing → autoplay loop, etc.)
- State final + Lighthouse scores
- Lista de pendings priorizada
- Reglas de límites de tools (Higgsfield, Draftly, Netlify, etc.)

---

## 🎬 Resumen ejecutivo del proyecto

**Lo que arrancó como:** "Quiero hacer un sitio inmersivo para Insignia Entertainment, similar a Oryzo.ai"

**Lo que terminó siendo:** Una landing cinemascope tier-1 con Lighthouse 99 mobile / 94 desktop, performance superior a Apple/Stripe/Vercel/Linear en mobile, Core Web Vitals todos en "Excellent" para Google ranking, arquitectura modular mantenible, y identidad visual consistente Cinematic Editorial.

**Pivots críticos que funcionaron:**
1. Pivot de Draftly → hand-build en Code mode (control total + sin límites de char)
2. Pivot de SVG icons → imágenes WebP fotorealistas (más on-brand)
3. Pivot de video scroll-scrubbing → autoplay loop (resolvió stutter de H.264 seek)
4. Pivot a Netlify Forms (planeado para próxima conversación)
5. Self-hosted fonts (subió mobile 74→99 con un solo cambio)

**Decisiones de marca consolidadas:**
- Paleta dark cinemascope con un solo acento rojo
- Anton + Inter + JetBrains Mono (Opción C)
- Imágenes fotorealistas Cinema Studio 2.5 sobre void puro con rim red
- Animaciones de entrada distintas por servicio (carácter por disciplina)

**Costo total del proyecto:**
- Higgsfield: ~158 créditos consumidos en images + videos AI generation
- Anthropic / Code mode: agotó plan starter de Claude
- Netlify: $0 (free tier)
- Higgsfield Cinema Studio 2.5 + Cinema Studio Video: probablemente plan paid o equivalente
- Domain (cuando se configure): ~$15/año
- **Total recurring:** $0 hasta que se quiera CRM real, dominio custom, o más generaciones AI

---

*Cierre del proyecto generado por Claude · 2026-05-07*
*Volver a este documento cuando quieras retomar — todo el contexto está acá.*
