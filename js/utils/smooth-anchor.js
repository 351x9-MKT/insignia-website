/**
 * utils/smooth-anchor.js
 * Intercepts in-page #anchor links and routes them through Lenis when present.
 * Falls back to native scrollTo with smooth behavior.
 *
 * Hero anchors special case:
 *   #manifesto and #disciplinas are now absolute overlays INSIDE the pinned
 *   #hero section. Their natural getBoundingClientRect() lands at top:0 of
 *   the hero (where they live in the DOM), but the corresponding overlay
 *   is only visible at a specific scroll percentage of the 600vh pin range.
 *   We map each anchor to its sweet-spot scroll offset:
 *     #manifesto    → 18% × 600vh = 108vh from hero top
 *     #disciplinas  → 35% × 600vh = 210vh from hero top
 *   On mobile/reduced-motion the hero isn't pinned and the overlays stack as
 *   normal sections; in that case getBoundingClientRect() gives the right
 *   offset directly, and we skip the special case.
 */

import { getLenis } from '../core/lenis.js';

const NAV_OFFSET = -64;

const HERO_ANCHOR_OFFSETS_VH = {
  manifesto:    108, // 18% of 600vh pin
  disciplinas:  210, // 35% of 600vh pin
};

function isPinnedDesktop() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (window.matchMedia('(max-width: 768px)').matches) return false;
  return true;
}

function resolveTargetY(target, anchorId) {
  // If this anchor lives inside the pinned #hero on desktop, use the
  // calibrated offset instead of the element's own bounding rect.
  const hero = document.getElementById('hero');
  const inHero = hero && hero.contains(target);
  if (inHero && isPinnedDesktop()) {
    const offsetVh = HERO_ANCHOR_OFFSETS_VH[anchorId];
    if (typeof offsetVh === 'number') {
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      return heroTop + (offsetVh * window.innerHeight) / 100 + NAV_OFFSET;
    }
  }
  return target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
}

export function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const anchorId = href.slice(1);
      const top = resolveTargetY(target, anchorId);
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(top, { duration: 1.4 });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
