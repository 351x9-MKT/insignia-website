/**
 * modules/disciplinas.js
 *
 * Cinematic disciplinas section. Each panel has a static WebP image that
 * floats as a 3D object in the void:
 *   1. Scroll-triggered entrance with a DISTINCT motion per service
 *      (drop-in for #1, slide-in for #2, etc.) so each subject reveals in
 *      character. Plays once.
 *   2. Mouse-parallax 3D tilt on the placeholder wrapper (desktop only) —
 *      the image follows the cursor by ±8° rotateX/Y. Idle CSS keyframes
 *      on the image itself keep working because tilt lives on the parent.
 *   3. Per-service idle CSS animations kick in (via .is-revealed class)
 *      after the entrance completes. Defined in disciplinas.css.
 *   4. Optional canvas overlays — desktop only — for #2 (chalk dust) and
 *      #4 (sparkle drift). Preserved from the prior implementation.
 *
 * Reduced motion: simple opacity fade via IntersectionObserver. No GSAP,
 * no idle animations, no tilt, no canvases.
 */

import { prefersReducedMotion, isCoarsePointer } from '../core/motion.js';

/* ──────────────────────────────────────────────────
   Per-discipline entrance recipes
   Each entrance ends at the natural rest state. After GSAP completes,
   `.is-revealed` is added so the CSS idle animation takes over.
   ────────────────────────────────────────────────── */
const ENTRANCE = {
  // 0 EVENTOS — mic ambient bloom: zoom-out from 115% with a small tilt.
  0: {
    from: { opacity: 0, scale: 1.15, rotation: -3 },
    to:   { opacity: 1, scale: 1,    rotation:  0 },
    duration: 1.2,
    ease: 'power3.out',
  },
  // 1 BOOKING — VIP gafete drops in from above with elastic settle.
  1: {
    from: { opacity: 0, y: -100, rotation: 12 },
    to:   { opacity: 1, y: 0,    rotation:  0 },
    duration: 1.4,
    ease: 'back.out(1.7)',
  },
  // 2 FILMACIÓN — clapperboard slides in left-to-right with a tilt.
  2: {
    from: { opacity: 0, x: -150, rotation: -8 },
    to:   { opacity: 1, x: 0,    rotation:  0 },
    duration: 1.3,
    ease: 'power3.out',
  },
  // 3 FOTOGRAFÍA — Hasselblad zooms in slightly with a flash burst (brightness).
  3: {
    from: { opacity: 0, scale: 0.85, filter: 'brightness(1.4)' },
    to:   { opacity: 1, scale: 1,    filter: 'brightness(1)' },
    duration: 1.0,
    ease: 'power3.out',
  },
  // 4 EXPERIENCIAS — portal opens from zero with a focus-pull.
  4: {
    from: { opacity: 0, scale: 0,   filter: 'blur(20px)' },
    to:   { opacity: 1, scale: 1,   filter: 'blur(0px)' },
    duration: 1.5,
    ease: 'back.out(1.5)',
  },
};

/* ──────────────────────────────────────────────────
   Public entry
   ────────────────────────────────────────────────── */

export function initDisciplinas() {
  const panels = document.querySelectorAll('.disciplina-panel');
  if (!panels.length) return;
  panels.forEach(panel => initPanel(panel));
}

/* ──────────────────────────────────────────────────
   Per-panel initialization
   ────────────────────────────────────────────────── */

function initPanel(panel) {
  const title = panel.querySelector('.disciplina-title');
  const desc  = panel.querySelector('.disciplina-desc');
  const rule  = panel.querySelector('.disciplina-rule');
  const image = panel.querySelector('.disciplina-image');
  const idx   = +panel.dataset.discipline;

  // Reduced motion: minimal fade-in, no GSAP, no tilt, no canvas.
  if (prefersReducedMotion || !window.gsap) {
    revealOnIntersect([rule, title, desc, image].filter(Boolean));
    return;
  }

  const { gsap } = window;

  // Copy block — original entrance from the prior implementation.
  gsap.timeline({
    scrollTrigger: { trigger: panel, start: 'top 75%', once: true },
  })
    .to(rule,  { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power3.out' })
    .to(title, { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.3')
    .to(desc,  { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.5');

  // Image — per-discipline entrance, plays once.
  if (image) initImageEntrance(image, panel, idx);

  // 3D mouse-parallax tilt — desktop only.
  if (!isCoarsePointer) initTilt(panel);

  // Canvas overlays — desktop only.
  if (!isCoarsePointer) {
    if (idx === 2) initChalkDust(panel);
    if (idx === 4) initSparkleDrift(panel);
  }
}

function revealOnIntersect(els) {
  els.forEach(el => {
    new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (el.classList) el.classList.add('is-revealed');
      obs.unobserve(el);
    }, { threshold: 0.18 }).observe(el);
  });
}

/* ──────────────────────────────────────────────────
   Per-discipline entrance — image falls into rest state then idle starts
   ────────────────────────────────────────────────── */

function initImageEntrance(image, panel, idx) {
  const recipe = ENTRANCE[idx] || ENTRANCE[0];
  const { gsap } = window;

  // Set the initial state immediately so the image doesn't flash at its
  // rest position before the trigger fires.
  gsap.set(image, recipe.from);

  gsap.to(image, {
    ...recipe.to,
    duration: recipe.duration,
    ease: recipe.ease,
    scrollTrigger: { trigger: panel, start: 'top 70%', once: true },
    onComplete() {
      // Clear inline transform/filter so CSS idle keyframes own them again.
      // Opacity stays at 1 (set by .is-revealed).
      gsap.set(image, { clearProps: 'transform,filter,x,y,scale,rotation' });
      image.classList.add('is-revealed');
    },
  });
}

/* ──────────────────────────────────────────────────
   3D mouse-parallax tilt
   Applied to .disciplina-placeholder so it composes WITH the per-discipline
   idle CSS keyframes that animate transform on .disciplina-image.
   ────────────────────────────────────────────────── */

const MAX_TILT_DEG = 8;
const TILT_TRANSITION = 'transform .4s cubic-bezier(0.22, 1, 0.36, 1)';

function initTilt(panel) {
  const visual = panel.querySelector('.disciplina-visual');
  const target = panel.querySelector('.disciplina-placeholder');
  if (!visual || !target) return;

  // Set the smoothing transition once. We avoid a CSS rule because we want
  // to disable it instantly on mousemove (transitions cause cursor lag) and
  // re-enable it on mouseleave for the smooth reset.
  target.style.transition = TILT_TRANSITION;
  target.style.willChange = 'transform';

  let pending = null;
  let raf = 0;

  visual.addEventListener('mousemove', (e) => {
    pending = e;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      if (!pending) return;
      const r = visual.getBoundingClientRect();
      const x = ((pending.clientX - r.left) / r.width)  * 2 - 1; // -1..1
      const y = ((pending.clientY - r.top)  / r.height) * 2 - 1;
      // Disable transition during active tracking (snappier feel).
      target.style.transition = 'none';
      target.style.transform =
        `rotateX(${(-y * MAX_TILT_DEG).toFixed(2)}deg) ` +
        `rotateY(${( x * MAX_TILT_DEG).toFixed(2)}deg)`;
    });
  });

  visual.addEventListener('mouseleave', () => {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    pending = null;
    target.style.transition = TILT_TRANSITION;
    target.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

/* ──────────────────────────────────────────────────
   Canvas overlays (desktop-only) — unchanged from prior commit
   ────────────────────────────────────────────────── */

function initChalkDust(panel) {
  const host = panel.querySelector('.disciplina-placeholder');
  if (!host) return;
  const canvas = createCanvas(host);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT = 12;
  const particles = Array.from({ length: COUNT }, () => spawnDust(canvas));

  let raf = 0;
  let visible = false;
  const obs = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !raf) tick();
  }, { threshold: 0.05 });
  obs.observe(panel);

  function tick() {
    if (!visible) { raf = 0; return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.vy;
      p.x += p.vx;
      p.alpha = Math.max(0, p.alpha - 0.0015);
      if (p.y < -8 || p.alpha <= 0) Object.assign(p, spawnDust(canvas));
      ctx.beginPath();
      ctx.fillStyle = p.tint
        ? `rgba(225, 6, 0, ${p.alpha * 0.7})`
        : `rgba(255, 255, 255, ${p.alpha * 0.55})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(tick);
  }
}

function spawnDust(canvas) {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 40,
    vx: (Math.random() - 0.5) * 0.15,
    vy: 0.18 + Math.random() * 0.35,
    r:  0.6 + Math.random() * 1.4,
    alpha: 0.35 + Math.random() * 0.4,
    tint: Math.random() < 0.18,
  };
}

function initSparkleDrift(panel) {
  const host = panel.querySelector('.disciplina-placeholder');
  if (!host) return;
  const canvas = createCanvas(host);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT = 14;
  const particles = Array.from({ length: COUNT }, () => spawnSparkle(canvas));

  let raf = 0;
  let visible = false;
  const obs = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !raf) tick();
  }, { threshold: 0.05 });
  obs.observe(panel);

  function tick() {
    if (!visible) { raf = 0; return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      const fade = p.life / p.lifeMax;
      const a = p.alpha * Math.sin(fade * Math.PI);
      const out = p.x < -10 || p.x > canvas.width + 10 ||
                  p.y < -10 || p.y > canvas.height + 10;
      if (p.life <= 0 || out) Object.assign(p, spawnSparkle(canvas));
      ctx.beginPath();
      ctx.fillStyle = p.tint
        ? `rgba(225, 6, 0, ${a * 0.6})`
        : `rgba(255, 240, 220, ${a * 0.7})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(tick);
  }
}

function spawnSparkle(canvas) {
  const lifeMax = 240 + (Math.random() * 240) | 0;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.18 - 0.05,
    r:  0.7 + Math.random() * 1.6,
    alpha: 0.55 + Math.random() * 0.35,
    tint: Math.random() < 0.30,
    life: lifeMax,
    lifeMax,
  };
}

/* ──────────────────────────────────────────────────
   Canvas helpers
   ────────────────────────────────────────────────── */

function createCanvas(host) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  resizeCanvas(canvas, host);
  const ro = new ResizeObserver(() => resizeCanvas(canvas, host));
  ro.observe(host);
  return canvas;
}

function resizeCanvas(canvas, host) {
  const r = host.getBoundingClientRect();
  if (!r.width || !r.height) return;
  canvas.width  = Math.round(r.width);
  canvas.height = Math.round(r.height);
}
