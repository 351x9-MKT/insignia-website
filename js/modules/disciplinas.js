import { prefersReducedMotion } from '../core/motion.js';

export function initDisciplinas() {
  const panels = document.querySelectorAll('.disciplina-panel');
  if (!panels.length) return;

  panels.forEach(panel => {
    const title = panel.querySelector('.disciplina-title');
    const desc = panel.querySelector('.disciplina-desc');
    const rule = panel.querySelector('.disciplina-rule');

    if (prefersReducedMotion || !window.gsap) {
      [title, desc, rule].forEach(el => {
        if (el) el.style.cssText = 'opacity:1;transform:none';
      });
      return;
    }

    const { gsap } = window;
    gsap.timeline({
      scrollTrigger: { trigger: panel, start: 'top 75%', once: true },
    })
      .to(rule,  { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power3.out' })
      .to(title, { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.3')
      .to(desc,  { opacity: 1, y: 0,     duration: 0.8, ease: 'power3.out' }, '-=.5');
  });
}
