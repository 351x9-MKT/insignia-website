import { prefersReducedMotion, forceShow } from '../core/motion.js';
import { openContactModal } from './form-modal.js';

export function initServicios() {
  const trigger = '#servicios';

  if (prefersReducedMotion || !window.gsap) {
    forceShow('.servicios-header');
    document.querySelectorAll('.service-card').forEach(c => {
      c.style.cssText = 'opacity:1;transform:none';
    });
  } else {
    const { gsap } = window;
    gsap.to('.servicios-header', {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger, start: 'top 70%' },
    });
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.servicios-grid', start: 'top 75%' },
      });
    });
  }

  // CTA → contact modal with ?service= prefill
  document.querySelectorAll('.service-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service || '';
      openContactModal(service);
    });
  });

  // URL param prefill (deep link from /index.html?service=Eventos)
  const params = new URLSearchParams(window.location.search);
  const preselect = params.get('service');
  if (preselect) {
    // Open modal on next frame so the rest of the page settles first
    requestAnimationFrame(() => openContactModal(preselect));
  }
}
