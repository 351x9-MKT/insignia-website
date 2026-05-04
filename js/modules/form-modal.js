/**
 * modules/form-modal.js
 * 4-step contact wizard inside #contact-modal.
 *
 * Steps:
 *   1) Servicio (5 pills, single-select)
 *   2) Datos (nombre, email, whatsapp con prefijo +52)
 *   3) Proyecto (tipo, fecha, presupuesto, brief)
 *   4) Confirmar + ENVIAR
 *
 * Submit:
 *   - POST a /api/contact (placeholder, falla silencioso si no hay backend)
 *   - Abre wa.me/525516952852?text=... con resumen pre-redactado
 *   - Muestra estado success in-modal
 */

import { getLenis } from '../core/lenis.js';

const WHATSAPP_NUMBER = '525516952852';

const state = {
  step: 1,
  servicio: '',
  nombre: '',
  email: '',
  whatsapp: '',
  tipo: '',
  fecha: '',
  presupuesto: '',
  brief: '',
  consent: false,
};

let inited = false;

/** Public: open the modal, optionally preselecting a service. */
export function openContactModal(service) {
  initFormModal();
  if (service) selectService(service);
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const lenis = getLenis();
  if (lenis) lenis.stop();
}

export function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  const lenis = getLenis();
  if (lenis) lenis.start();
}

export function initFormModal() {
  if (inited) return;
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  inited = true;

  // Close handlers
  modal.querySelectorAll('.modal-close').forEach(btn =>
    btn.addEventListener('click', closeContactModal)
  );
  modal.addEventListener('click', e => {
    if (e.target === modal) closeContactModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeContactModal();
  });

  // Step 1: service pills
  modal.querySelectorAll('[data-step="1"] .modal-pill').forEach(pill => {
    pill.addEventListener('click', () => selectService(pill.dataset.value));
  });

  // Step 3: tipo pills
  modal.querySelectorAll('[data-step="3"] .modal-pills[data-field="tipo"] .modal-pill').forEach(pill => {
    pill.addEventListener('click', () => selectPill('tipo', pill));
  });

  // Step 3: presupuesto slider
  const slider = modal.querySelector('#modal-presupuesto');
  const sliderLabel = modal.querySelector('#modal-presupuesto-label');
  const RANGES = [
    '$50K - $200K MXN',
    '$200K - $500K MXN',
    '$500K - $1M MXN',
    '$1M - $3M MXN',
    '$3M+ MXN',
  ];
  if (slider && sliderLabel) {
    const sync = () => {
      const idx = Math.max(0, Math.min(RANGES.length - 1, parseInt(slider.value, 10)));
      state.presupuesto = RANGES[idx];
      sliderLabel.textContent = RANGES[idx];
    };
    slider.addEventListener('input', sync);
    sync();
  }

  // Inputs binding
  modal.querySelectorAll('[data-bind]').forEach(input => {
    input.addEventListener('input', () => {
      state[input.dataset.bind] = input.value;
      input.classList.remove('error');
      const errEl = input.parentElement?.querySelector('.modal-error-msg');
      if (errEl) errEl.remove();
      updateStepNavState();
    });
  });

  // Consent
  const consent = modal.querySelector('#modal-consent');
  if (consent) {
    consent.addEventListener('change', () => {
      state.consent = consent.checked;
      updateStepNavState();
    });
  }

  // Nav buttons
  modal.querySelectorAll('.modal-back').forEach(btn =>
    btn.addEventListener('click', () => goToStep(state.step - 1))
  );
  modal.querySelectorAll('.modal-next').forEach(btn =>
    btn.addEventListener('click', () => {
      if (validateStep(state.step)) goToStep(state.step + 1);
    })
  );

  // Submit
  modal.querySelector('.modal-submit')?.addEventListener('click', e => {
    e.preventDefault();
    if (!validateStep(4)) return;
    handleSubmit();
  });

  goToStep(1);
}

function selectService(value) {
  state.servicio = value;
  document.querySelectorAll('[data-step="1"] .modal-pill').forEach(p => {
    p.classList.toggle('selected', p.dataset.value === value);
  });
  updateStepNavState();
}

function selectPill(field, pill) {
  state[field] = pill.dataset.value;
  pill.parentElement.querySelectorAll('.modal-pill').forEach(p => {
    p.classList.toggle('selected', p === pill);
  });
  updateStepNavState();
}

function goToStep(n) {
  if (n < 1 || n > 4) return;
  state.step = n;

  document.querySelectorAll('.modal-step').forEach(step => {
    step.classList.toggle('active', parseInt(step.dataset.step, 10) === n);
  });

  // Stepper visuals
  document.querySelectorAll('.modal-step-dot').forEach(dot => {
    const idx = parseInt(dot.dataset.step, 10);
    dot.classList.toggle('done', idx < n);
    dot.classList.toggle('current', idx === n);
  });
  document.querySelectorAll('.modal-step-line').forEach(line => {
    line.classList.toggle('filled', parseInt(line.dataset.before, 10) < n);
  });

  if (n === 4) renderSummary();
  updateStepNavState();
}

function updateStepNavState() {
  // STEP 1 next: requires service
  const next1 = document.querySelector('[data-step="1"] .modal-next');
  if (next1) next1.disabled = !state.servicio;

  // STEP 2 next: requires nombre + email valid + whatsapp 10 digits
  const next2 = document.querySelector('[data-step="2"] .modal-next');
  if (next2) {
    next2.disabled = !(
      state.nombre.trim().length >= 2 &&
      isEmail(state.email) &&
      onlyDigits(state.whatsapp).length === 10
    );
  }

  // STEP 3 next: requires tipo + fecha
  const next3 = document.querySelector('[data-step="3"] .modal-next');
  if (next3) next3.disabled = !(state.tipo && state.fecha);

  // STEP 4 submit: requires consent
  const submit = document.querySelector('.modal-submit');
  if (submit) submit.disabled = !state.consent;
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}
function onlyDigits(v) {
  return (v || '').replace(/\D/g, '');
}

function validateStep(n) {
  let ok = true;
  if (n === 1 && !state.servicio) ok = false;
  if (n === 2) {
    if (state.nombre.trim().length < 2) ok = setFieldError('nombre', 'Tu nombre, por favor.') && false;
    if (!isEmail(state.email)) ok = setFieldError('email', 'Email no válido.') && false;
    if (onlyDigits(state.whatsapp).length !== 10) ok = setFieldError('whatsapp', 'WhatsApp: 10 dígitos.') && false;
  }
  if (n === 3 && (!state.tipo || !state.fecha)) ok = false;
  if (n === 4 && !state.consent) ok = false;
  return ok;
}

function setFieldError(field, message) {
  const input = document.querySelector(`[data-bind="${field}"]`);
  if (!input) return false;
  input.classList.add('error');
  if (!input.parentElement.querySelector('.modal-error-msg')) {
    const err = document.createElement('p');
    err.className = 'modal-error-msg';
    err.textContent = message;
    input.parentElement.appendChild(err);
  }
  return true;
}

function renderSummary() {
  const wrap = document.getElementById('modal-summary');
  if (!wrap) return;
  const rows = [
    ['Servicio', state.servicio],
    ['Nombre', state.nombre],
    ['Email', state.email],
    ['WhatsApp', '+52 ' + onlyDigits(state.whatsapp)],
    ['Tipo', state.tipo],
    ['Fecha', state.fecha],
    ['Presupuesto', state.presupuesto],
  ];
  wrap.innerHTML = rows.map(([dt, dd]) =>
    `<div class="modal-summary-row"><dt>${dt}</dt><dd>${escapeHtml(dd || '—')}</dd></div>`
  ).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

function buildWhatsAppMessage() {
  const lines = [
    'Hola Insignia, tengo un proyecto:',
    `· Servicio: ${state.servicio}`,
    `· Nombre: ${state.nombre}`,
    `· Email: ${state.email}`,
    `· WhatsApp: +52 ${onlyDigits(state.whatsapp)}`,
    `· Tipo: ${state.tipo}`,
    `· Fecha: ${state.fecha}`,
    `· Presupuesto: ${state.presupuesto}`,
  ];
  if (state.brief.trim()) {
    lines.push('', state.brief.trim());
  }
  return lines.join('\n');
}

function handleSubmit() {
  const submit = document.querySelector('.modal-submit');
  if (submit) {
    submit.textContent = 'ENVIANDO…';
    submit.disabled = true;
  }

  // Best-effort POST (placeholder, fails silently when no backend)
  try {
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    }).catch(() => {});
  } catch (_) { /* ignore */ }

  // Open WhatsApp with pre-redacted summary
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  window.open(url, '_blank', 'noopener');

  // Show success state
  const stepEls = document.querySelectorAll('.modal-step');
  stepEls.forEach(el => el.classList.remove('active'));
  document.querySelector('.modal-success')?.classList.add('active');
  document.querySelector('.modal-stepper')?.style.setProperty('display', 'none');
}
