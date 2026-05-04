/**
 * core/lenis.js
 * Initializes Lenis smooth-scroll and syncs it with GSAP ScrollTrigger.
 * Skipped entirely under prefers-reduced-motion.
 *
 * GSAP, ScrollTrigger, and Lenis are loaded as globals via <script> tags.
 */

import { prefersReducedMotion } from './motion.js';

let lenisInstance = null;

export function initLenis() {
  if (prefersReducedMotion) return null;
  if (!window.Lenis || !window.gsap || !window.ScrollTrigger) return null;

  const Lenis = window.Lenis;
  const { gsap, ScrollTrigger } = window;

  lenisInstance = new Lenis({
    duration: 1.5,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenisInstance.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
