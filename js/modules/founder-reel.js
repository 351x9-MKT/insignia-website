import { prefersReducedMotion, forceShow } from '../core/motion.js';

const VIMEO_PLACEHOLDER = 'https://player.vimeo.com/video/placeholder?autoplay=1';

export function initFounderReel() {
  if (prefersReducedMotion || !window.gsap) {
    forceShow('.reel-label');
  } else {
    window.gsap.to('.reel-label', {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '#founder-reel', start: 'top 75%' },
    });
  }

  const player = document.querySelector('.reel-player');
  if (!player) return;

  const play = () => {
    const wrap = document.getElementById('reel-iframe');
    if (!wrap || wrap.classList.contains('active')) return;
    wrap.classList.add('active');
    const iframe = wrap.querySelector('iframe');
    if (iframe) iframe.src = player.dataset.vimeo || VIMEO_PLACEHOLDER;
    const btn = player.querySelector('.reel-play-btn');
    const bg = player.querySelector('.reel-bg');
    if (btn) btn.style.display = 'none';
    if (bg) bg.style.display = 'none';
  };

  player.addEventListener('click', play);
  player.addEventListener('keydown', e => {
    if (e.key === 'Enter') play();
  });
}
