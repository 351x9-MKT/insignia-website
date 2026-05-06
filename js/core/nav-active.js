/**
 * core/nav-active.js
 * Active-state for navbar links.
 *
 * Two strategies in one module:
 *   1. Hero overlays (manifesto, disciplinas) — these are absolute panes
 *      inside the pinned #hero. IntersectionObserver can't disambiguate them
 *      because they all share the hero's viewport during the 600vh pin range.
 *      We use ScrollTrigger zones tied to the same scroll percentages the
 *      master timeline uses (15–25% for manifesto, 25–75% for disciplinas).
 *   2. Regular sections (selected-work, servicios, …) — IntersectionObserver
 *      with threshold 0.25 works fine.
 *
 * On mobile/reduced-motion the hero is no longer pinned; manifesto and
 * disciplinas become normal stacked sections, so we fall back to the IO
 * path for them too.
 */

const REGULAR_SECTIONS = [
  'selected-work',
  'servicios',
  'eventos-hero',
  'proximos-eventos',
  'clientes',
  'partners',
  'founder-reel',
  'footer',
];

function setActive(links, id) {
  links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
}

function isPinnedDesktop() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (window.matchMedia('(max-width: 768px)').matches) return false;
  return true;
}

export function initNavActive() {
  const links = document.querySelectorAll('.nav-links a[data-section]');
  if (!links.length) return;

  // ── 1. Hero overlay zones (desktop only) ──
  if (isPinnedDesktop() && window.gsap && window.ScrollTrigger) {
    const { ScrollTrigger } = window;
    // manifesto zone: 15–25% of 600vh = 90vh–150vh after hero top
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top-=90%',
      end:   'top top-=150%',
      onEnter:     () => setActive(links, 'manifesto'),
      onEnterBack: () => setActive(links, 'manifesto'),
    });
    // disciplinas zone: 25–75% (covers disc-03 + disc-01)
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top-=150%',
      end:   'top top-=450%',
      onEnter:     () => setActive(links, 'disciplinas'),
      onEnterBack: () => setActive(links, 'disciplinas'),
    });
  } else {
    // Mobile / reduced-motion: manifesto + disciplinas are normal sections.
    ['manifesto', 'disciplinas'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(links, id);
      }, { threshold: 0.25 }).observe(el);
    });
  }

  // ── 2. Regular sections (always IntersectionObserver) ──
  REGULAR_SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(links, id);
    }, { threshold: 0.25 }).observe(el);
  });
}
