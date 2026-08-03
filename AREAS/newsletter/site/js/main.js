/* ================================================
   AI FUNDAMENTALS — Interactions
   ================================================ */

(function () {
  'use strict';

  /* --- Nav scroll behavior --- */
  const nav = document.getElementById('nav');
  const SCROLL_THRESHOLD = 40;

  function updateNav() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* --- Scroll-reveal (IntersectionObserver) --- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    /* Fallback: show everything */
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Form submission feedback --- */
  document.querySelectorAll('form[data-subscribe]').forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button[type="submit"]');
      
      if (!input || !input.value || !input.validity.valid) {
        input.focus();
        return;
      }

      const originalText = btn.textContent;
      btn.textContent = 'Subscribed';
      btn.disabled = true;
      input.disabled = true;
      input.value = '';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        input.disabled = false;
      }, 2400);
    });
  });
})();
