/**
 * modules/nav.js
 * Navbar scrolled background + mobile menu toggle.
 */

import { getLenis } from '../core/lenis.js';

export function initNav() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  const toggle = document.getElementById('nav-mobile-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    const lenis = getLenis();
    if (lenis) (open ? lenis.stop() : lenis.start());
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const lenis = getLenis();
      if (lenis) lenis.start();
    });
  });
}
