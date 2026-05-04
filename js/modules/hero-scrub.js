/**
 * modules/hero-scrub.js
 * Direct video.currentTime scrubbing via GSAP + ScrollTrigger.
 *
 * Why not pre-extracted frames?
 *   The frame-extraction technique (seek → drawImage to canvas → cache) is
 *   fragile on Chrome: the 'seeked' event fires before the new frame is
 *   composited, so drawImage often captures the previous frame, leaving the
 *   pre-cached frames identical. requestVideoFrameCallback helps but is also
 *   inconsistent under rapid sequential seeks.
 *
 *   Tweening video.currentTime directly is the simplest reliable approach on
 *   desktop. Scrub:0.3 smooths the per-tick currentTime updates so the video
 *   element handles seeks at its own cadence. Mobile gets a normal looped
 *   playback fallback in initLooped(). Reduced-motion gets a static poster.
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

  // Reduced motion: just show a static poster, skip both scrub and playback
  if (prefersReducedMotion) {
    video.style.cssText = 'opacity:0;pointer-events:none;';
    showStaticPoster(wrap);
    return;
  }

  // Mobile: looped playback, no scrub (saves battery, avoids iOS seek lag)
  if (isMobile()) {
    initLooped(video);
    return;
  }

  // Desktop: scrub via tweening currentTime
  initScrub(video, wrap);
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

function initScrub(video, wrap) {
  const { gsap, ScrollTrigger } = window;

  // Make the video fully visible — it IS the visual. No canvas overlay needed.
  video.style.cssText = 'pointer-events:none;';
  video.muted = true;
  video.playsInline = true;
  video.pause();

  const onReady = () => {
    if (scrubInitialized) return;
    if (!video.duration || isNaN(video.duration)) return;
    scrubInitialized = true;
    video.currentTime = 0;

    // Scrub: tween currentTime as scroll progresses through the pin range.
    gsap.to(video, {
      currentTime: video.duration,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=240%',
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
        onLeave:     () => document.body.classList.add('letterbox-on'),
        onEnterBack: () => document.body.classList.remove('letterbox-on'),
      },
    });

    // Logo fades + scales as the cinematic plays
    gsap.to('#hero-logo-wrap', {
      scale: 0.84,
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=140%',
        scrub: 0.3,
      },
    });

    // Overlay deepens
    gsap.to('#hero-overlay', {
      background: 'rgba(10,10,10,0.82)',
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=240%',
        scrub: 0.3,
      },
    });
  };

  video.preload = 'auto';
  video.load();
  if (video.readyState >= 1 && video.duration > 0) {
    onReady();
  } else {
    video.addEventListener('loadedmetadata', onReady, { once: true });
  }

  // Polling fallback for stubborn metadata loads
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
