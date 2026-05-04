/**
 * modules/cursor.js
 * Custom cursor-dot follow + magnetic CTA pull.
 * Disabled on coarse pointers (touch).
 */

import { isCoarsePointer } from '../core/motion.js';

export function initCursor() {
  if (isCoarsePointer) return;

  const dot = document.getElementById('cursor-dot');
  if (!dot) return;

  let mx = innerWidth / 2,
      my = innerHeight / 2,
      dx = mx,
      dy = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function tick() {
    dx += (mx - dx) * 0.18;
    dy += (my - dy) * 0.18;
    dot.style.left = dx + 'px';
    dot.style.top = dy + 'px';
    requestAnimationFrame(tick);
  })();

  const HOVER_TARGETS =
    'a, button, .service-cta, .hero-video-card, .reel-player, ' +
    '.work-table tbody tr, .pe-card, .modal-pill';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_TARGETS)) dot.classList.add('expanded');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER_TARGETS)) dot.classList.remove('expanded');
  });
}

export function initMagneticCTAs() {
  if (isCoarsePointer) return;

  const SELECTOR =
    '.service-cta, .modal-submit, .modal-next, .eventos-cta-primary, ' +
    '.pe-card-cta, .pe-all-btn';

  document.querySelectorAll(SELECTOR).forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) * 0.38;
      const py = (e.clientY - (r.top + r.height / 2)) * 0.38;
      btn.style.transform = `translate(${px}px, ${py}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
