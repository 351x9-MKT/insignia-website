/**
 * modules/marquees.js
 * Infinite logo marquees:
 *   #clientes  → 2 rows (left 60s + right 75s)
 *   #partners  → 1 row  (left 90s, larger spacing)
 *
 * The CSS animation translates the track from 0% → -50%; for that to look
 * seamless, the markup must contain the items twice. This module clones
 * the items on init so authors only need to write the list once.
 *
 * Hover pauses the animation (CSS handles it). Reduced-motion stacks the
 * items statically (CSS handles it too).
 */

export function initMarquees() {
  document.querySelectorAll('.marquee-track').forEach(track => {
    if (track.dataset.cloned === 'true') return;
    const original = Array.from(track.children);
    if (!original.length) return;
    original.forEach(child => {
      const clone = child.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
    track.dataset.cloned = 'true';
  });
}
