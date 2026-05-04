import { prefersReducedMotion, forceShow } from '../core/motion.js';

export function initManifesto() {
  const headline = document.querySelector('.manifesto-headline');
  if (!headline) return;

  if (prefersReducedMotion || !window.gsap) {
    forceShow('.manifesto-headline');
    forceShow('.manifesto-rule');
    forceShow('.manifesto-body');
    return;
  }

  const { gsap } = window;
  const trigger = '#manifesto';
  gsap.to('.manifesto-headline', {
    opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 70%' },
  });
  gsap.to('.manifesto-rule', {
    opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 65%' },
  });
  gsap.to('.manifesto-body', {
    opacity: 0.7, y: 0, duration: 1.2, delay: 0.4, ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 65%' },
  });
}
