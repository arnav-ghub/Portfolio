const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const displayToggle = document.querySelector('.accessibility-toggle');
const displayOptions = document.querySelector('.accessibility-options');
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  themeToggle?.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  if (themeToggle) themeToggle.querySelector('span').textContent = theme === 'dark' ? '☀' : '◐';
}

applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.textContent = isOpen ? 'Menu' : 'Close';
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
}));

displayToggle?.addEventListener('click', () => {
  const isOpen = displayToggle.getAttribute('aria-expanded') === 'true';
  displayToggle.setAttribute('aria-expanded', String(!isOpen));
  displayOptions.hidden = isOpen;
});

/* ---------- Font size ---------- */
let fontStep = 0;
document.querySelector('[data-font="increase"]')?.addEventListener('click', () => {
  fontStep = Math.min(fontStep + 1, 3);
  document.documentElement.style.fontSize = `${100 + fontStep * 12.5}%`;
});
document.querySelector('[data-font="decrease"]')?.addEventListener('click', () => {
  fontStep = Math.max(fontStep - 1, -2);
  document.documentElement.style.fontSize = `${100 + fontStep * 12.5}%`;
});
document.querySelector('[data-font="reset"]')?.addEventListener('click', () => {
  fontStep = 0;
  document.documentElement.style.fontSize = '';
});

/* ---------- Contrast (mutually exclusive) ---------- */
document.querySelectorAll('[data-contrast]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-contrast]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    document.body.classList.toggle('high-contrast', btn.dataset.contrast === 'high');
  });
});

/* ---------- Simple toggles ---------- */
const toggleMap = {
  invert: 'a11y-invert',
  saturate: 'a11y-saturate',
  highlight: 'a11y-highlight',
  spacing: 'a11y-spacing',
  lineheight: 'a11y-lineheight',
  images: 'a11y-hide-images',
};
Object.entries(toggleMap).forEach(([key, className]) => {
  const btn = document.querySelector(`[data-${key}="toggle"]`);
  btn?.addEventListener('click', () => {
    document.body.classList.toggle(className);
    btn.classList.toggle('active');
  });
});

/* ---------- Screen reader (basic read-aloud) ---------- */
document.querySelector('[data-reader="toggle"]')?.addEventListener('click', function () {
  if ('speechSynthesis' in window) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      this.classList.remove('active');
    } else {
      const text = document.querySelector('main').innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      this.classList.add('active');
    }
  } else {
    alert('Screen reader not supported in this browser.');
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section:not(.hero)').forEach((section) => observer.observe(section));
} else {
  document.querySelectorAll('.section:not(.hero)').forEach((section) => section.classList.add('is-visible'));
}

/* ---------- 3D Hero Tilt Effect ---------- */
const heroWrap = document.querySelector('.hero-3d-wrap');
const heroContent = document.querySelector('.hero-3d-content');
const shapes = document.querySelectorAll('.shape');

if (heroWrap && !reducedMotion) {
  heroWrap.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5;   // -0.5 to 0.5
    const y = (e.clientY / innerHeight) - 0.5;

    heroContent.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;

    shapes.forEach((shape, i) => {
      const depth = (i + 1) * 18;
      shape.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });

  heroWrap.addEventListener('mouseleave', () => {
    heroContent.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    shapes.forEach((shape) => { shape.style.transform = 'translate(0,0)'; });
  });
}
