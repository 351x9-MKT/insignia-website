import { prefersReducedMotion, forceShow } from '../core/motion.js';

export function initQuote() {
  if (prefersReducedMotion || !window.gsap) {
    forceShow('.quote-text');
    forceShow('.quote-attr');
    return;
  }
  const { gsap } = window;
  gsap.to('.quote-text', {
    opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger: '#quote-section', start: 'top 70%' },
  });
  gsap.to('.quote-attr', {
    opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out',
    scrollTrigger: { trigger: '#quote-section', start: 'top 65%' },
  });
}
