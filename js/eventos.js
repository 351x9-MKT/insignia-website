/**
 * eventos.js — entry point for eventos.html
 *
 * Smaller bundle than main.js: this sub-page doesn't need hero scrub,
 * marquees, lightbox, or the 4-step form modal. Just nav + smooth scroll
 * + IntersectionObserver reveals.
 */

import { initLenis } from './core/lenis.js';
import { initNav } from './modules/nav.js';
import { initCursor, initMagneticCTAs } from './modules/cursor.js';
import { initEventosReveal } from './modules/eventos-reveal.js';
import { initSmoothAnchor } from './utils/smooth-anchor.js';

function boot() {
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  initLenis();
  initNav();
  initCursor();
  initMagneticCTAs();
  initEventosReveal();
  initSmoothAnchor();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
