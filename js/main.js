// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll reveal
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', reveal);
reveal();

// Revenue Calculator
function updateCalculator() {
  const calls = parseFloat(document.getElementById('calc-calls').value) || 0;
  const value = parseFloat(document.getElementById('calc-value').value) || 0;
  const rate = parseFloat(document.getElementById('calc-rate').value) || 0;
  const monthly = calls * 4.33 * (rate / 100) * value;
  const annual = monthly * 12;
  document.getElementById('calc-monthly').textContent = '\u00a3' + Math.round(monthly).toLocaleString();
  document.getElementById('calc-annual').textContent = '\u00a3' + Math.round(annual).toLocaleString();
}
document.getElementById('calc-calls').addEventListener('input', updateCalculator);
document.getElementById('calc-value').addEventListener('input', updateCalculator);
document.getElementById('calc-rate').addEventListener('input', updateCalculator);

// FAQ Accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(el) {
    el.classList.remove('open');
  });
  if (!wasOpen) {
    item.classList.add('open');
  }
}

// Cookie Consent
(function() {
  if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookieBanner').style.display = 'flex';
  }
  document.getElementById('cookieAccept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').style.display = 'none';
  });
})();
