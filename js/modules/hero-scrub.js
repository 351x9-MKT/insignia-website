/**
 * modules/hero-scrub.js
 * Hero cinematic — autoplay loop on all devices.
 *
 * Source selection nuance:
 *   The HTML has TWO <source> tags inside the <video>: a mobile-grade MP4
 *   (~840 KB) gated by `media="(max-width: 768px)"` and a full-quality
 *   desktop MP4 (~18 MB) as fallback. Chrome's behavior with <source media>
 *   inside <video> is unreliable — under preload="metadata" it sometimes
 *   probes BOTH sources, which on mobile undoes the bandwidth savings.
 *
 *   To guarantee only one source loads, this module removes the
 *   non-matching <source> from the DOM before any load is triggered. The
 *   HTML keeps autoplay OFF and preload="none" so nothing fires before the
 *   prune; we then set preload, call load(), and play() programmatically.
 *
 *   Reduced motion: replace the video with the static poster, no playback.
 */

import { prefersReducedMotion } from '../core/motion.js';

const POSTER_PATH = 'assets/images/cinematic/poster_hero.webp';

export function initHeroScrub() {
  const video = document.getElementById('hero-camera-video');
  if (!video) return;

  const wrap = document.getElementById('hero-video-wrap');
  if (!wrap) return;

  if (prefersReducedMotion) {
    video.style.cssText = 'opacity:0;pointer-events:none;';
    showStaticPoster(wrap);
    return;
  }

  initLooped(video);
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
  // Pick exactly ONE source URL from data-* attributes. We avoid putting
  // <source> tags in the HTML because Chrome speculatively prefetches
  // alternate sources even with preload="none", which negates the
  // mobile-bitrate optimization.
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const src = isMobile
    ? video.dataset.srcMobile
    : video.dataset.srcDesktop;
  if (!src) return;

  video.muted = true;
  video.playsInline = true;
  video.style.cssText = 'pointer-events:none;';

  // Defer the actual <source> append + load() past first paint so the
  // hero's poster image is the LCP element (small, paints immediately)
  // instead of the video element (which on slow 4G can take 4–6 s to show
  // its first frame and would otherwise dominate LCP).
  const start = () => {
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.preload = 'metadata';
    video.load();
    video.autoplay = true;
    video.play().catch(() => {});
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(start, { timeout: 1500 });
  } else {
    setTimeout(start, 800);
  }
}
