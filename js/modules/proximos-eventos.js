import { prefersReducedMotion, forceShow } from '../core/motion.js';
import { openContactModal } from './form-modal.js';

export function initProximosEventos() {
  const trigger = '#proximos-eventos';

  if (prefersReducedMotion || !window.gsap) {
    forceShow('.pe-header');
    document.querySelectorAll('.pe-card').forEach(c => {
      c.style.cssText = 'opacity:1;transform:none';
    });
    forceShow('.pe-all-row');
  } else {
    const { gsap } = window;
    gsap.to('.pe-header', {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger, start: 'top 75%' },
    });
    gsap.utils.toArray('.pe-card').forEach((card, i) => {
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.9, delay: i * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '#pe-grid', start: 'top 80%' },
      });
    });
    gsap.to('.pe-all-row', {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger, start: 'bottom 85%' },
    });
  }

  // "Ver todos / Hablemos" button → contact modal pre-set to Eventos
  document.querySelectorAll('.pe-all-btn').forEach(btn => {
    btn.addEventListener('click', () => openContactModal('Eventos'));
  });
}
