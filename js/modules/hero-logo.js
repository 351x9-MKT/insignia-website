/**
 * modules/hero-logo.js
 * Hero SVG logo entrance — Option C:
 *   1) Clip-path sweep reveal left→right (2.4s) over the inline SVG
 *   2) Red scanner line travels with the clip edge (sits on top of the wrap)
 *   3) Glow settles as drop-shadow once revealed
 *
 * Trigger fires ~700ms after the rest of the hero entrance.
 * On (max-width:640px) or prefers-reduced-motion, CSS swaps to a simple fade.
 *
 * Requires markup:
 *   <div class="hero-logo-wrap" id="hero-logo-wrap">
 *     <svg class="hero-logo-svg">...</svg>
 *     <span class="hero-logo-scanner" aria-hidden="true"></span>
 *   </div>
 */

import { prefersReducedMotion, isMobile } from '../core/motion.js';

const REVEAL_DURATION_MS = 2400;
const ENTRANCE_DELAY_MS = 700;

export function initHeroLogo() {
  const wrap = document.getElementById('hero-logo-wrap');
  if (!wrap) return;

  const svg = wrap.querySelector('.hero-logo-svg');
  const scanner = wrap.querySelector('.hero-logo-scanner');

  // Make the scanner travel exactly to the SVG width
  const setLogoWidth = () => {
    if (!svg) return;
    const w = svg.getBoundingClientRect().width;
    wrap.style.setProperty('--logo-width', `${w}px`);
  };
  setLogoWidth();
  window.addEventListener('resize', setLogoWidth, { passive: true });

  const reveal = () => {
    if (prefersReducedMotion || isMobile()) {
      wrap.classList.add('revealed', 'glow-settled');
      return;
    }

    // Mark wrap as currently sweeping; CSS animates clip-path + scanner
    wrap.classList.add('revealing');

    // Fire scanner translate by also adding "revealed" class which the CSS
    // uses to set the clip-path to inset(0 0 0 0). We split timings so the
    // scanner translates over the same ~2.4s window.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => wrap.classList.add('revealed'));
    });

    setTimeout(() => {
      wrap.classList.remove('revealing');
      wrap.classList.add('glow-settled');
    }, REVEAL_DURATION_MS);
  };

  // Avoid flashing the SVG before reveal: pre-class hides via clip-path
  wrap.classList.add('pending');

  setTimeout(reveal, ENTRANCE_DELAY_MS);
}
