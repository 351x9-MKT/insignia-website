/**
 * core/nav-active.js
 * IntersectionObserver-based active state for navbar links.
 */

const SECTIONS = [
  'manifesto',
  'disciplinas',
  'selected-work',
  'servicios',
  'eventos-hero',
  'proximos-eventos',
  'clientes',
  'partners',
  'founder-reel',
  'footer',
];

export function initNavActive() {
  const links = document.querySelectorAll('.nav-links a[data-section]');
  if (!links.length) return;

  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      links.forEach(l => {
        l.classList.toggle('active', l.dataset.section === id);
      });
    }, { threshold: 0.25 }).observe(el);
  });
}
