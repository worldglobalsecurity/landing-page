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
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = '✓ Votre demande a été envoyée. Nous vous répondrons sous 24h.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }
  e.target.reset();
}

// ── CONTACT FORM SUBMIT ──
function submitContact(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = '✓ Message envoyé. Nous vous contacterons très bientôt.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }
  e.target.reset();
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
