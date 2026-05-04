/**
 * core/scroll-progress.js
 * Drives the fixed top progress bar (#scroll-progress).
 */

export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar || !window.ScrollTrigger) return;

  window.ScrollTrigger.create({
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: s => {
      bar.style.width = (s.progress * 100) + '%';
    },
  });
}
