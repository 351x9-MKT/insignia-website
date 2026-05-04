/**
 * core/motion.js
 * Prefers-reduced-motion helper + small motion utilities.
 */

export const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isCoarsePointer =
  window.matchMedia('(pointer: coarse)').matches;

/** Return true on small viewports (mobile breakpoint). */
export const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

/** Force-show an element when motion is disabled. */
export function forceShow(selector) {
  const el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector;
  if (el) el.style.cssText += ';opacity:1;transform:none';
}
