/**
 * main.js
 * Entry point. Initializes core utilities first (Lenis + ScrollTrigger sync),
 * then per-section modules. Each module is responsible for guarding against
 * missing DOM (no-op if its anchor isn't on the page).
 */

import { initLenis } from './core/lenis.js';
import { initScrollProgress } from './core/scroll-progress.js';
import { initNavActive } from './core/nav-active.js';

import { initNav } from './modules/nav.js';
import { initCursor, initMagneticCTAs } from './modules/cursor.js';

import { initHeroLogo } from './modules/hero-logo.js';
import { initHeroEntrance } from './modules/hero-entrance.js';
import { initHeroScrub } from './modules/hero-scrub.js';

// NOTE: manifesto + disciplinas modules removed. Their content now lives as
// absolute overlays inside #hero, animated by the master timeline in
// hero-scrub.js. The manifesto.js and disciplinas.js files are kept for
// reference but no longer imported.

import { initSelectedWork } from './modules/selected-work.js';
import { initServicios } from './modules/servicios.js';
import { initEventosHero } from './modules/eventos-hero.js';
import { initProximosEventos } from './modules/proximos-eventos.js';
import { initMarquees } from './modules/marquees.js';
import { initQuote } from './modules/quote.js';
import { initFounderReel } from './modules/founder-reel.js';

import { initLightbox } from './modules/lightbox.js';
import { initFormModal } from './modules/form-modal.js';
import { initFooterParticles } from './modules/footer-particles.js';

import { initSmoothAnchor } from './utils/smooth-anchor.js';

function boot() {
  // GSAP + ScrollTrigger setup (libs are loaded as globals)
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  // Core
  initLenis();
  initScrollProgress();
  initNavActive();

  // Persistent UI
  initNav();
  initCursor();
  initMagneticCTAs();

  // Hero
  initHeroLogo();
  initHeroEntrance();
  initHeroScrub();

  // Sections (in document order). Manifesto + disciplinas are now hero
  // overlays — driven by hero-scrub.js, not their own modules.
  initSelectedWork();
  initServicios();
  initEventosHero();
  initProximosEventos();
  initMarquees();
  initQuote();
  initFounderReel();

  // Modals + footer
  initLightbox();
  initFormModal();
  initFooterParticles();

  // Smooth anchors last so all targets exist
  initSmoothAnchor();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
