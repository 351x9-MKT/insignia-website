/**
 * modules/disciplinas.js
 *
 * Five-panel disciplinas section. Each panel has a static WebP image with
 * a unique idle CSS animation (defined in disciplinas.css) and a copy block
 * (number, rule, title, desc).
 *
 * This module is responsible for two things:
 *   1. Scroll-driven entrance for image + copy. Images use a soft
 *      fade + scale + translateY; copy uses the original GSAP timeline.
 *   2. Optional canvas overlays — desktop-only — for two disciplinas:
 *        03 FILMACIÓN  → chalk dust drift (10–15 particles)
 *        05 EXPERIENCIAS → ambient sparkle drift (12–18 particles)
 *      Skipped on mobile (CPU/battery) and reduced-motion (vestibular).
 *
 * Idle CSS animations (breathe, pendulum, tilt, etc.) are NOT controlled
 * here — they're declared via `.disciplina-image[data-discipline="N"]`
 * keyframes and start automatically once the image gets `.is-revealed`.
 */

import { prefersReducedMotion, isCoarsePointer } from '../core/motion.js';

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

  // Reduced motion: simple fade-in via IntersectionObserver. No GSAP, no
  // scroll-scrub, no canvas overlays. Idle animations are already disabled
  // by the CSS reduced-motion block.
  if (prefersReducedMotion || !window.gsap) {
    revealOnIntersect([rule, title, desc, image].filter(Boolean));
    return;
  }

  // Copy block — original entrance from the prior implementation.
  const { gsap } = window;
  gsap.timeline({
    scrollTrigger: { trigger: panel, start: 'top 75%', once: true },
  })
    .to(rule,  { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power3.out' })
    .to(title, { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.3')
    .to(desc,  { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.5');

  // Image — scrubbed entrance (fade + scale + translateY). Adds
  // `.is-revealed` once visible so the per-discipline idle animation kicks in.
  if (image) initImageReveal(image, panel);

  // Canvas overlays for 03 + 05 — desktop only, full-touch devices skip.
  if (!isCoarsePointer) {
    const idx = +panel.dataset.discipline;
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

function initImageReveal(image, panel) {
  const { gsap } = window;
  // Use a scrubbed tween over a short range so the entrance feels tied to
  // scroll without dragging out forever. `once: true` so we don't fight the
  // idle CSS animation once revealed.
  gsap.fromTo(image,
    { opacity: 0, y: 30, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: panel,
        start: 'top 80%',
        end:   'top 35%',
        scrub: 0.3,
        onLeave:    () => image.classList.add('is-revealed'),
        onEnterBack: () => image.classList.add('is-revealed'),
      },
    });
}

/* ──────────────────────────────────────────────────
   Canvas overlays (desktop-only)
   ────────────────────────────────────────────────── */

/* 03 FILMACIÓN — chalk dust drift.
   Light-grey/red specks rising slowly, fading at the top edge. */
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

/* 05 EXPERIENCIAS — sparkle drift.
   Slower, brighter motes drifting in many directions, very low density. */
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
      const a = p.alpha * Math.sin(fade * Math.PI); // fade in then out
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
   Canvas helpers — 1:1 logical sizing (decorative, no need for DPR)
   ────────────────────────────────────────────────── */

function createCanvas(host) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  resizeCanvas(canvas, host);
  // Watch for layout changes (responsive viewport, image load).
  const ro = new ResizeObserver(() => resizeCanvas(canvas, host));
  ro.observe(host);
  return canvas;
}

function resizeCanvas(canvas, host) {
  const r = host.getBoundingClientRect();
  if (!r.width || !r.height) return;
  canvas.width  = Math.round(r.width);
  canvas.height = Math.round(r.height);
  // CSS sizing keeps the canvas pinned to its host (already inset:0).
}
