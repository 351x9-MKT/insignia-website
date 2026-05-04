/**
 * modules/eventos-hero.js
 * Background ping-pong video + GSAP entrance for Eventos Hero section.
 * Counter animation rolls up the stat numbers when in view.
 */

import { prefersReducedMotion, forceShow } from '../core/motion.js';

function pingPongVideo(video) {
  if (!video) return;

  let started = false;
  let rafId = null;

  const start = () => {
    if (started) return;
    started = true;
    video.playbackRate = 1;
    video.play().catch(() => {});
  };

  const reverseTick = () => {
    video.currentTime = Math.max(0, video.currentTime - 1 / 30);
    if (video.currentTime <= 0.04) {
      video.playbackRate = 1;
      video.play().catch(() => {});
      cancelAnimationFrame(rafId);
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(reverseTick);
  };

  video.addEventListener('ended', () => {
    video.pause();
    rafId = requestAnimationFrame(reverseTick);
  });

  if (prefersReducedMotion) {
    video.load();
    return;
  }

  // Lazy-start when visible
  const section = document.getElementById('eventos-hero');
  const target = section || video;
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      start();
      obs.disconnect();
    }
  }, { threshold: 0.2 });
  obs.observe(target);

  if (section) section.addEventListener('mouseenter', start, { once: true });
}

function animateEntrance() {
  if (prefersReducedMotion || !window.gsap) {
    ['.eventos-label', '.eventos-headline', '.eventos-body', '.eventos-stats', '.eventos-cta-row']
      .forEach(s => forceShow(s));
    return;
  }
  const { gsap } = window;

  gsap.to('#eventos-bg-video', {
    yPercent: 20, ease: 'none',
    scrollTrigger: { trigger: '#eventos-hero', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
  });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: '#eventos-hero', start: 'top 75%', once: true },
  });
  tl.to('.eventos-label',    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .to('.eventos-headline', { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=.4')
    .to('.eventos-body',     { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=.6')
    .to('.eventos-stats',    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=.4')
    .to('.eventos-cta-row',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=.4');

  // Roll-up counters
  gsap.utils.toArray('.eventos-stat-num').forEach(el => {
    const raw = el.textContent.trim();
    const num = parseInt(raw.replace(/\D/g, ''), 10) || 0;
    const suffix = raw.replace(/[0-9]/g, '');
    const obj = { v: 0 };
    gsap.to(obj, {
      v: num, duration: 1.8, ease: 'power2.out', snap: { v: 1 },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
      scrollTrigger: { trigger: '#eventos-hero', start: 'top 60%', once: true },
    });
  });
}

export function initEventosHero() {
  const video = document.getElementById('eventos-bg-video');
  pingPongVideo(video);
  animateEntrance();
}
