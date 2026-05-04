/**
 * modules/lightbox.js
 * Selected-Work case-study lightbox.
 */

import { getLenis } from '../core/lenis.js';

let inited = false;

/**
 * Open the case-study lightbox. If `imageSrc` is provided, the placeholder
 * pattern is replaced by an <img>. If omitted, the placeholder remains.
 */
export function openLightbox(title, discipline, client, year, copy, imageSrc) {
  initLightbox(); // safe re-call
  const $ = id => document.getElementById(id);
  const t = $('lightbox-title');
  const m = $('lightbox-meta');
  const c = $('lightbox-copy');
  const lb = $('lightbox');
  if (!lb) return;
  if (t) t.textContent = title || '';
  if (m) m.textContent = [discipline, client, year].filter(Boolean).join(' · ');
  if (c) c.textContent = copy || '';

  // Image swap (data-image on the row populates this).
  const imgSlot = lb.querySelector('.lightbox-img');
  if (imgSlot) {
    const existing = imgSlot.querySelector('img');
    if (existing) existing.remove();
    if (imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = title || '';
      imgSlot.appendChild(img);
    }
  }

  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  const lenis = getLenis();
  if (lenis) lenis.stop();
}

export function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
  const lenis = getLenis();
  if (lenis) lenis.start();
}

export function initLightbox() {
  if (inited) return;
  inited = true;

  const lb = document.getElementById('lightbox');
  if (!lb) return;

  // Click outside content to close
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  // Bind close button(s)
  lb.querySelectorAll('.lightbox-close').forEach(btn => {
    btn.addEventListener('click', closeLightbox);
  });

  // ESC closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}
