/* ================================================
   AI FUNDAMENTALS — Interactions
   ================================================ */

(function () {
  'use strict';

  /* --- Nav scroll behavior --- */
  const nav = document.getElementById('nav');
  const SCROLL_THRESHOLD = 40;

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* --- Reading progress bar (article pages) --- */
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    const updateProgress = function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = progress + '%';
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

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
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
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

  /* ================================================
     1. TABLE OF CONTENTS (TOC) GENERATOR & OBSERVER
     ================================================ */
  const tocContainer = document.getElementById('toc-list');
  const prose = document.querySelector('.prose');

  if (tocContainer && prose) {
    const headings = prose.querySelectorAll('h2, h3');
    const tocLinks = [];

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = 'section-' + (index + 1);
      }

      const li = document.createElement('li');
      li.className = heading.tagName === 'H3' ? 'toc__item toc__item--h3' : 'toc__item';

      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.className = 'toc__link';
      a.textContent = heading.textContent.replace(/^[\d\.\s]+/, ''); // Clean title text
      
      li.appendChild(a);
      tocContainer.appendChild(li);
      tocLinks.push({ link: a, heading: heading });
    });

    // Heading IntersectionObserver for active highlighting
    if ('IntersectionObserver' in window && tocLinks.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tocLinks.forEach((item) => {
                if (item.heading === entry.target) {
                  item.link.classList.add('is-active');
                } else {
                  item.link.classList.remove('is-active');
                }
              });
            }
          });
        },
        { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
      );

      headings.forEach((h) => observer.observe(h));
    }
  }

  /* ================================================
     2. CODE BLOCK COPY BUTTON
     ================================================ */
  document.querySelectorAll('.prose pre').forEach((pre) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code snippet');

    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;

      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('is-copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('is-copied');
        }, 2000);
      }).catch(() => {
        btn.textContent = 'Failed';
      });
    });

    pre.appendChild(btn);
  });

  /* ================================================
     3. IMAGE LIGHTBOX MODAL
     ================================================ */
  const clickableImages = document.querySelectorAll('.prose figure img, .prose > img, .article-hero img');
  if (clickableImages.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image preview">&times;</button>
      <img class="lightbox-img" src="" alt="Expanded view">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    clickableImages.forEach((img) => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
        closeLightbox();
      }
    });
  }

  /* ================================================
     4. ARCHIVE SEARCH & TAG FILTERING (index.html)
     ================================================ */
  const searchInput = document.getElementById('archive-search');
  const tagPills = document.querySelectorAll('.tag-pill');
  const issueCards = document.querySelectorAll('.issue-card');
  const emptyState = document.getElementById('archive-empty');

  if (issueCards.length > 0 && (searchInput || tagPills.length > 0)) {
    let activeTag = 'all';
    let searchQuery = '';

    function filterCards() {
      let visibleCount = 0;

      issueCards.forEach((card) => {
        const title = (card.querySelector('.issue-card__title')?.textContent || '').toLowerCase();
        const excerpt = (card.querySelector('.issue-card__excerpt')?.textContent || '').toLowerCase();
        const tags = (card.getAttribute('data-tags') || '').toLowerCase();

        const matchesSearch = !searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery);
        const matchesTag = activeTag === 'all' || tags.includes(activeTag.toLowerCase());

        if (matchesSearch && matchesTag) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterCards();
      });
    }

    tagPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        tagPills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        activeTag = pill.getAttribute('data-tag') || 'all';
        filterCards();
      });
    });
  }

  /* ================================================
     5. READING STATUS & LOCALSTORAGE TRACKER
     ================================================ */
  const currentPath = window.location.pathname;

  // Mark article read when scrolling near bottom
  if (currentPath.includes('issue-')) {
    const issueMatch = currentPath.match(/issue-\d+/);
    if (issueMatch) {
      const issueKey = 'read_' + issueMatch[0];
      
      const markAsRead = function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0 && (scrollTop / docHeight) > 0.85) {
          localStorage.setItem(issueKey, 'true');
          window.removeEventListener('scroll', markAsRead);
        }
      };

      window.addEventListener('scroll', markAsRead, { passive: true });
    }
  }

  // Display "READ" badge on read articles on index.html
  if (issueCards.length > 0) {
    issueCards.forEach((card) => {
      const href = card.getAttribute('href') || '';
      const match = href.match(/issue-\d+/);
      if (match) {
        const issueKey = 'read_' + match[0];
        if (localStorage.getItem(issueKey) === 'true') {
          const metaContainer = card.querySelector('.issue-card__meta');
          if (metaContainer && !card.querySelector('.issue-card__read-badge')) {
            const badge = document.createElement('span');
            badge.className = 'issue-card__read-badge';
            badge.innerHTML = '&#10003; Read';
            metaContainer.appendChild(badge);
          }
        }
      }
    });
  }

})();

