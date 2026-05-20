// ── MOBILE NAV ──
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ── LOGIN MODAL ──
function openLogin() {
  document.getElementById('loginModal').classList.add('open');
}
function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLogin();
});

// ── BACK TO TOP ──
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
  btt && btt.classList.toggle('show', window.scrollY > 300);
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── DEVIS FORM SUBMIT ──
function submitDevis(e) {
  e.preventDefault();
  const form = e.target;
  const fields = form.querySelectorAll('select, input, textarea');
  const labels = ['Service demandé', 'Nom complet', 'Adresse email', 'Téléphone', 'Description du besoin'];
  const data = { _subject: 'Nouvelle demande de devis — World Global Security' };
  fields.forEach((el, i) => { if (el.value) data[labels[i] || ('Champ ' + (i + 1))] = el.value; });
  fetch('https://formsubmit.co/ajax/worldglobalsecurity@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  }).catch(() => {});
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = '✓ Votre demande a été envoyée. Nous vous répondrons sous 24h.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }
  form.reset();
}

// ── CONTACT FORM SUBMIT ──
function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const fields = form.querySelectorAll('input, textarea');
  const labels = ['Nom complet', 'Adresse email', 'Téléphone', 'Sujet', 'Message'];
  const data = { _subject: 'Nouveau message de contact — World Global Security' };
  fields.forEach((el, i) => { if (el.value) data[labels[i] || ('Champ ' + (i + 1))] = el.value; });
  fetch('https://formsubmit.co/ajax/worldglobalsecurity@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  }).catch(() => {});
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = '✓ Message envoyé. Nous vous contacterons très bientôt.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }
  form.reset();
}

// ── MARK ACTIVE NAV ──
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/home';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (path.endsWith(href) || (path === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
});
