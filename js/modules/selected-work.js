import { prefersReducedMotion, forceShow } from '../core/motion.js';
import { openLightbox } from './lightbox.js';

export function initSelectedWork() {
  const trigger = '#selected-work';
  const rows = document.querySelectorAll('#work-rows tr');

  if (prefersReducedMotion || !window.gsap) {
    forceShow('.work-header');
    rows.forEach(r => (r.style.cssText = 'opacity:1;transform:none'));
  } else {
    const { gsap } = window;
    gsap.to('.work-header', {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger, start: 'top 75%' },
    });
    gsap.utils.toArray('#work-rows tr').forEach((row, i) => {
      gsap.to(row, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger, start: 'top 65%' },
      });
    });
  }

  // Click + keyboard activation
  rows.forEach(row => {
    const click = () => {
      const data = row.dataset;
      openLightbox(
        data.title || row.cells[0]?.textContent || '',
        data.discipline || row.cells[1]?.textContent || '',
        data.client || row.cells[2]?.textContent || '',
        data.year || row.cells[3]?.textContent || '',
        data.copy || '',
        data.image || '' // data-image="path/to.jpg" populates lightbox image
      );
    };
    row.addEventListener('click', click);
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        click();
      }
    });
  });
}
