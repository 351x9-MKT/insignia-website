/**
 * modules/hero-scrub.js
 * Mega-pinned hero (Opción C). Pins #hero for 600vh of scroll and drives a
 * single master GSAP timeline that:
 *   1. Tweens video.currentTime from 0 → duration (the scrub itself)
 *   2. Fades out the entrance pane (wordmark + cards + scroll cue)
 *   3. Cross-fades 4 overlay panes (manifesto, disc-03, disc-01, mini stagger)
 *   4. Deepens the dark tint while overlays are reading, lifts it for the drone
 *
 * Why one timeline instead of separate ScrollTriggers per overlay?
 *   With a single ST + scrub, the timeline progress maps linearly to scroll
 *   position. Per-overlay tweens are placed at known positions in seconds, and
 *   the durations control how long they take. This keeps timing in one place
 *   and avoids drift between independent ScrollTriggers.
 *
 * Timeline layout (total = 6 "seconds" mapped to 600vh of scroll):
 *   0.00–0.90  entrance fade out         (0–15%)
 *   0.90–1.30  manifesto in              (15–22%)
 *   1.30–1.50  manifesto out             (22–25%)
 *   1.55–1.85  disc-03 in                (26–31%)
 *   2.70–3.00  disc-03 out               (45–50%)
 *   3.05–3.35  disc-01 in                (51–56%)
 *   4.20–4.50  disc-01 out               (70–75%)
 *   4.55–5.55  mini stagger 02→04→05     (76–93%)
 *   5.55–5.95  mini fade out             (93–99%, drone aerial alone)
 *
 * Mobile + reduced-motion paths skip the pin entirely; overlays render as
 * stacked sections via the hero-overlays.css media-query fallback.
 */

import { prefersReducedMotion, isMobile } from '../core/motion.js';

const POSTER_PATH = 'assets/images/cinematic/poster_hero.jpg';

let scrubInitialized = false;

export function initHeroScrub() {
  const video = document.getElementById('hero-camera-video');
  if (!video) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  const wrap = document.getElementById('hero-video-wrap');
  if (!wrap) return;

  // Reduced motion: just show a static poster, skip both scrub and playback.
  if (prefersReducedMotion) {
    video.style.cssText = 'opacity:0;pointer-events:none;';
    showStaticPoster(wrap);
    return;
  }

  // Mobile: looped playback, no scrub (saves battery, avoids iOS seek lag).
  // Overlays stack as normal sections via the CSS fallback.
  if (isMobile()) {
    initLooped(video);
    return;
  }

  // Desktop: scrub + master timeline driving overlays.
  initScrub(video);
}

function showStaticPoster(wrap) {
  const poster = document.createElement('div');
  poster.setAttribute('aria-hidden', 'true');
  poster.style.cssText =
    `position:absolute;inset:0;z-index:1;background-image:url("${POSTER_PATH}");` +
    `background-size:cover;background-position:center;`;
  wrap.appendChild(poster);
}

function initLooped(video) {
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.style.cssText = 'pointer-events:none;';
  video.play().catch(() => {});
}

function initScrub(video) {
  const { gsap, ScrollTrigger } = window;

  video.style.cssText = 'pointer-events:none;';
  video.muted = true;
  video.playsInline = true;
  video.pause();

  const onReady = () => {
    if (scrubInitialized) return;
    if (!video.duration || isNaN(video.duration)) return;
    scrubInitialized = true;
    video.currentTime = 0;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=600%',
        scrub: 0.4,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onLeave:     () => document.body.classList.add('letterbox-on'),
        onEnterBack: () => document.body.classList.remove('letterbox-on'),
      },
    });

    // ─── 0.00–6.00 · video scrub (full pin range) ───
    tl.to(video, { currentTime: video.duration, ease: 'none', duration: 6 }, 0);

    // ─── 0.00–0.90 · entrance fade out + logo lift ───
    tl.to('.hero-entrance', { opacity: 0, y: -30, duration: 0.9, ease: 'power2.in' }, 0);
    tl.to('#hero-logo-wrap', { opacity: 0, scale: 0.84, y: -50, duration: 0.9, ease: 'none' }, 0);

    // ─── overlay tint deepens while overlays read, then lifts for drone ───
    tl.to('#hero-overlay', { background: 'rgba(10,10,10,0.78)', ease: 'none', duration: 1.5 }, 0.6)
      .to('#hero-overlay', { background: 'rgba(10,10,10,0.35)', ease: 'none', duration: 1.0 }, 5.0);

    // ─── 0.90–1.50 · MANIFESTO in/out ───
    tl.fromTo('.overlay-manifesto',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.40, ease: 'power2.out' }, 0.90)
      .to    ('.overlay-manifesto',
              { opacity: 0, y: -24, duration: 0.20, ease: 'power2.in'  }, 1.30);

    // ─── 1.55–3.00 · DISC-03 FILMACIÓN in / hold / out ───
    tl.fromTo('.overlay-disc-03',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.30, ease: 'power2.out' }, 1.55)
      .to    ('.overlay-disc-03',
              { opacity: 0, y: -24, duration: 0.30, ease: 'power2.in'  }, 2.70);

    // ─── 3.05–4.50 · DISC-01 EVENTOS in / hold / out ───
    tl.fromTo('.overlay-disc-01',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.30, ease: 'power2.out' }, 3.05)
      .to    ('.overlay-disc-01',
              { opacity: 0, y: -24, duration: 0.30, ease: 'power2.in'  }, 4.20);

    // ─── 4.55–5.55 · MINI STAGGER (eyebrow + 02 / 04 / 05) ───
    tl.fromTo('.overlay-disc-mini',
              { opacity: 0 },
              { opacity: 1, duration: 0.20, ease: 'none' }, 4.55)
      .fromTo('.overlay-disc-mini .mini-item-02',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.30, ease: 'power2.out' }, 4.65)
      .fromTo('.overlay-disc-mini .mini-item-04',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.30, ease: 'power2.out' }, 4.95)
      .fromTo('.overlay-disc-mini .mini-item-05',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.30, ease: 'power2.out' }, 5.25)
      .to    ('.overlay-disc-mini',
              { opacity: 0, duration: 0.40, ease: 'power2.in'  }, 5.55);
  };

  video.preload = 'auto';
  video.load();
  if (video.readyState >= 1 && video.duration > 0) {
    onReady();
  } else {
    video.addEventListener('loadedmetadata', onReady, { once: true });
  }

  // Polling fallback for stubborn metadata loads.
  let attempts = 0;
  const poll = setInterval(() => {
    attempts++;
    if (video.duration > 0) {
      clearInterval(poll);
      onReady();
    }
    if (attempts > 80) clearInterval(poll);
  }, 100);
}
