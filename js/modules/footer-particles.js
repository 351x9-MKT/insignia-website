/**
 * modules/footer-particles.js
 * Connect-the-dots canvas particle field on #footer-canvas.
 * Cursor proximity tints the connecting lines red. Desktop only.
 */

import { prefersReducedMotion, isCoarsePointer } from '../core/motion.js';

const PARTICLE_COUNT = 90;
const LINK_DISTANCE = 130;
const HOVER_RADIUS = 120;

export function initFooterParticles() {
  const canvas = document.getElementById('footer-canvas');
  if (!canvas) return;

  if (isCoarsePointer || prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  const footer = document.getElementById('footer');
  if (!footer || !ctx) {
    canvas.style.display = 'none';
    return;
  }

  let W = 0, H = 0;
  let pts = [];
  let mx = -9999, my = -9999;

  const resize = () => {
    W = canvas.width = footer.offsetWidth;
    H = canvas.height = footer.offsetHeight;
  };

  const seed = () => {
    pts = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 1,
    }));
  };

  resize();
  seed();
  window.addEventListener('resize', () => { resize(); seed(); });

  footer.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  footer.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  const draw = () => {
    ctx.clearRect(0, 0, W, H);

    // Update + draw particles
    pts.forEach(p => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,.28)';
      ctx.fill();
    });

    // Connect neighbors
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d >= LINK_DISTANCE) continue;
        const a = (1 - d / LINK_DISTANCE) * 0.2;
        const cx = (pts[i].x + pts[j].x) / 2;
        const cy = (pts[i].y + pts[j].y) / 2;
        const near = Math.hypot(cx - mx, cy - my) < HOVER_RADIUS;
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = near ? `rgba(225,6,0,${a * 3})` : `rgba(255,255,255,${a})`;
        ctx.lineWidth = near ? 1 : 0.5;
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  };

  draw();
}
