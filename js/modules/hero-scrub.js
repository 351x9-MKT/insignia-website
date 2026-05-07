/**
 * modules/hero-scrub.js
 * Simple autoplay-loop for the hero cinematic on all devices.
 *
 * Why simple loop instead of scrub?
 *   The scroll-scrubbed cinematic + mega-pinned hero made the page heavy and
 *   hard to maintain. The pivot decision: hero plays as a normal cinematic
 *   loop, the storytelling moves to the standalone Manifesto + Disciplinas
 *   sections below (with static WebP images and per-discipline CSS animations).
 *   Reduced-motion still gets a static poster instead of the looping video.
 */

import { prefersReducedMotion } from '../core/motion.js';

const POSTER_PATH = 'assets/images/cinematic/poster_hero.jpg';

export function initHeroScrub() {
  const video = document.getElementById('hero-camera-video');
  if (!video) return;

  const wrap = document.getElementById('hero-video-wrap');
  if (!wrap) return;

  // Reduced motion: replace the video with the static poster.
  if (prefersReducedMotion) {
    video.style.cssText = 'opacity:0;pointer-events:none;';
    showStaticPoster(wrap);
    return;
  }

  // Everyone else: autoplay loop muted. The browser's preload="auto" plus
  // muted+playsinline lets this autoplay on iOS too.
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
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.style.cssText = 'pointer-events:none;';
  // play() returns a promise that may reject under autoplay policies.
  // We swallow the error — the video will play on first user interaction.
  video.play().catch(() => {});
}
