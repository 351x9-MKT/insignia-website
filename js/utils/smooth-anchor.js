/**
 * utils/smooth-anchor.js
 * Intercepts in-page #anchor links and routes them through Lenis when present.
 * Falls back to native scrollTo with smooth behavior.
 */

import { getLenis } from '../core/lenis.js';

const NAV_OFFSET = -64;

export function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.4 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
