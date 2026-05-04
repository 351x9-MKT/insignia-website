/**
 * modules/hero-entrance.js
 * Initial fade-in of hero UI elements (text, cards, scroll indicator).
 * The logo itself has its own entrance handled by hero-logo.js.
 */

import { prefersReducedMotion, forceShow } from '../core/motion.js';

const SELECTORS = [
  '.hero-pre',
  '.hero-subtext',
  '.hero-card',
  '.hero-video-card',
  '.hero-scroll-indicator',
];

export function initHeroEntrance() {
  if (prefersReducedMotion || !window.gsap) {
    SELECTORS.forEach(s => forceShow(s));
    return;
  }

  const { gsap } = window;
  gsap.to('.hero-pre',              { opacity: 1, duration: 1.2, delay: 0.4, ease: 'power3.out' });
  gsap.to('.hero-subtext',          { opacity: 1, duration: 1.2, delay: 1.1, ease: 'power3.out' });
  gsap.to('.hero-card',             { opacity: 1, duration: 1.0, delay: 1.3, ease: 'power3.out' });
  gsap.to('.hero-video-card',       { opacity: 1, duration: 1.0, delay: 1.5, ease: 'power3.out' });
  gsap.to('.hero-scroll-indicator', { opacity: 1, duration: 1.0, delay: 1.9, ease: 'power3.out' });
}
