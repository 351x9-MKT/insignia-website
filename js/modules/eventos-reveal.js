/**
 * modules/eventos-reveal.js
 * IntersectionObserver-based fade-in for `.ev-reveal` elements.
 * Designed for eventos.html sub-page where GSAP is overkill.
 */

import { prefersReducedMotion } from '../core/motion.js';

export function initEventosReveal() {
  const items = document.querySelectorAll('.ev-reveal');
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => obs.observe(el));
}
