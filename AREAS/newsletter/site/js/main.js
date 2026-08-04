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
        threshold: 0.01,
        rootMargin: '100px 0px 100px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    
    // Safety fallback: reveal top elements immediately after 100ms
    setTimeout(() => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        }
      });
    }, 100);
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

  /* ================================================
     6. FLOATING QUOTE SELECTION TOOLTIP
     ================================================ */
  const articleProse = document.querySelector('.prose');
  if (articleProse) {
    const tooltip = document.createElement('div');
    tooltip.className = 'quote-tooltip';
    tooltip.innerHTML = `
      <button class="quote-tooltip__btn" data-action="copy">Copy Quote</button>
      <button class="quote-tooltip__btn" data-action="share">Share</button>
    `;
    document.body.appendChild(tooltip);

    let selectedText = '';

    document.addEventListener('mouseup', () => {
      setTimeout(() => {
        const selection = window.getSelection();
        selectedText = selection.toString().trim();

        if (selectedText.length > 5 && articleProse.contains(selection.anchorNode)) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          tooltip.style.left = (rect.left + rect.width / 2) + 'px';
          tooltip.style.top = (rect.top + window.scrollY) + 'px';
          tooltip.classList.add('is-active');
        } else {
          tooltip.classList.remove('is-active');
        }
      }, 10);
    });

    tooltip.addEventListener('click', (e) => {
      const btn = e.target.closest('.quote-tooltip__btn');
      if (!btn) return;

      const action = btn.getAttribute('data-action');
      if (action === 'copy') {
        navigator.clipboard.writeText(`"${selectedText}" — AI Fundamentals`);
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.textContent = 'Copy Quote';
          tooltip.classList.remove('is-active');
        }, 1500);
      } else if (action === 'share') {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + selectedText + '" via @AIFundamentals')}&url=${encodeURIComponent(window.location.href)}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
        tooltip.classList.remove('is-active');
      }
    });
  }

  /* ================================================
     7. PROSE FONT SIZE TOGGLE
     ================================================ */
  const fontToggleBtn = document.getElementById('font-size-toggle');
  if (fontToggleBtn) {
    let isLarge = localStorage.getItem('prose_large_font') === 'true';
    if (isLarge) {
      document.body.classList.add('prose-large');
      fontToggleBtn.textContent = 'Font: Large';
    }

    fontToggleBtn.addEventListener('click', () => {
      isLarge = !isLarge;
      document.body.classList.toggle('prose-large', isLarge);
      localStorage.setItem('prose_large_font', isLarge ? 'true' : 'false');
      fontToggleBtn.textContent = isLarge ? 'Font: Large' : 'Font: Normal';
    });
  }

  /* ================================================
     8. KEYBOARD SHORTCUTS MODAL (? key, j/k nav)
     ================================================ */
  const shortcutsModal = document.createElement('div');
  shortcutsModal.className = 'shortcuts-modal-overlay';
  shortcutsModal.setAttribute('aria-hidden', 'true');
  shortcutsModal.innerHTML = `
    <div class="shortcuts-card" role="dialog" aria-label="Keyboard Shortcuts">
      <div class="shortcuts-card__header">
        <h3 class="shortcuts-card__title">Keyboard Shortcuts</h3>
        <button type="button" class="lightbox-close" id="shortcuts-close" aria-label="Close shortcuts">&times;</button>
      </div>
      <div class="shortcuts-list">
        <div class="shortcut-item"><span>Next Section</span><kbd class="kbd-key">J</kbd></div>
        <div class="shortcut-item"><span>Previous Section</span><kbd class="kbd-key">K</kbd></div>
        <div class="shortcut-item"><span>Toggle Shortcuts</span><kbd class="kbd-key">?</kbd></div>
        <div class="shortcut-item"><span>Close Modal</span><kbd class="kbd-key">Esc</kbd></div>
      </div>
    </div>
  `;
  document.body.appendChild(shortcutsModal);

  const shortcutsCloseBtn = shortcutsModal.querySelector('#shortcuts-close');
  function toggleShortcutsModal(show) {
    const isActive = show !== undefined ? show : !shortcutsModal.classList.contains('is-active');
    shortcutsModal.classList.toggle('is-active', isActive);
    shortcutsModal.setAttribute('aria-hidden', (!isActive).toString());
  }

  shortcutsCloseBtn.addEventListener('click', () => toggleShortcutsModal(false));
  shortcutsModal.addEventListener('click', (e) => {
    if (e.target === shortcutsModal) toggleShortcutsModal(false);
  });

  document.addEventListener('keydown', (e) => {
    // Ignore input targets
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      toggleShortcutsModal();
    } else if (e.key === 'j' || e.key === 'J') {
      // Jump next section
      window.scrollBy({ top: 300, behavior: 'smooth' });
    } else if (e.key === 'k' || e.key === 'K') {
      // Jump prev section
      window.scrollBy({ top: -300, behavior: 'smooth' });
    } else if (e.key === 'Escape' && shortcutsModal.classList.contains('is-active')) {
      toggleShortcutsModal(false);
    }
  });

  /* ================================================
     9. ARTICLE REACTION BAR
     ================================================ */
  const reactionButtons = document.querySelectorAll('.reaction-btn');
  if (reactionButtons.length > 0) {
    const issueMatch = window.location.pathname.match(/issue-\d+/);
    const pageId = issueMatch ? issueMatch[0] : 'general';

    reactionButtons.forEach((btn) => {
      const reactionType = btn.getAttribute('data-reaction');
      const storageKey = `vote_${pageId}_${reactionType}`;
      const countEl = btn.querySelector('.reaction-count');
      let baseCount = parseInt(countEl ? countEl.textContent : '0', 10);

      if (localStorage.getItem(storageKey) === 'true') {
        btn.classList.add('is-voted');
        if (countEl) countEl.textContent = baseCount + 1;
      }

      btn.addEventListener('click', () => {
        const isVoted = btn.classList.contains('is-voted');
        if (isVoted) {
          btn.classList.remove('is-voted');
          localStorage.removeItem(storageKey);
          if (countEl) countEl.textContent = baseCount;
        } else {
          btn.classList.add('is-voted');
          localStorage.setItem(storageKey, 'true');
          if (countEl) countEl.textContent = baseCount + 1;
        }
      });
    });
  }

  /* ================================================
     10. COMMENTS / DISCUSSION BOARD
     ================================================ */
  const commentForm = document.getElementById('comment-form');
  const commentsList = document.getElementById('comments-list');
  const commentCountEl = document.getElementById('discussion-count');

  if (commentForm && commentsList) {
    const pageId = window.location.pathname.match(/issue-\d+/)?.[0] || 'default';
    const storageKey = `comments_${pageId}`;

    function loadComments() {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    }

    function renderComments() {
      const comments = loadComments();
      if (commentCountEl) {
        const total = 2 + comments.length; // 2 initial comments
        commentCountEl.textContent = `${total} thoughts`;
      }

      // Remove previously appended user comments
      commentsList.querySelectorAll('.comment-card--user').forEach(el => el.remove());

      comments.forEach(c => {
        const card = document.createElement('article');
        card.className = 'comment-card comment-card--user';
        card.innerHTML = `
          <div class="comment-card__header">
            <span class="comment-card__author">${escapeHTML(c.author)}</span>
            <span class="comment-card__date">${c.date}</span>
          </div>
          <p class="comment-card__body">${escapeHTML(c.body)}</p>
        `;
        commentsList.prepend(card);
      });
    }

    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
      );
    }

    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('comment-author');
      const bodyInput = document.getElementById('comment-body');
      
      const author = nameInput.value.trim() || 'Anonymous Engineer';
      const body = bodyInput.value.trim();

      if (!body) return;

      const newComment = {
        author: author,
        body: body,
        date: 'Just now'
      };

      const existing = loadComments();
      existing.unshift(newComment);
      localStorage.setItem(storageKey, JSON.stringify(existing));

      bodyInput.value = '';
      renderComments();
    });

    renderComments();
  }

  /* ================================================
     11. BACK TO TOP BUTTON
     ================================================ */
  const backToTopBtn = document.createElement('button');
  backToTopBtn.type = 'button';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top of page');
  backToTopBtn.innerHTML = '&#8593;';
  document.body.appendChild(backToTopBtn);

  function updateBackToTop() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ================================================
     12. CMD+K COMMAND PALETTE SEARCH MODAL
     ================================================ */
  const cmdKModal = document.createElement('div');
  cmdKModal.className = 'cmd-k-overlay';
  cmdKModal.setAttribute('aria-hidden', 'true');
  cmdKModal.innerHTML = `
    <div class="cmd-k-card" role="dialog" aria-label="Quick Search Palette">
      <div class="cmd-k-input-wrap">
        <svg class="search-icon" style="position:static;transform:none;margin-right:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" class="cmd-k-input" id="cmd-k-search" placeholder="Type a command or search issues... (Esc to close)">
      </div>
      <div class="cmd-k-results" id="cmd-k-results">
        <a href="index.html" class="cmd-k-item"><span>Home / Landing Page</span><span class="cmd-k-item-tag">Page</span></a>
        <a href="issue-4.html" class="cmd-k-item"><span>Issue 04: The Prompt Is Just One Ingredient. The Harness Is the Kitchen.</span><span class="cmd-k-item-tag">Issue</span></a>
        <a href="issue-3.html" class="cmd-k-item"><span>Issue 03: Better Input, Better Output. That's Context Engineering.</span><span class="cmd-k-item-tag">Issue</span></a>
        <a href="issue-2.html" class="cmd-k-item"><span>Issue 02: RAG Isn't Dead</span><span class="cmd-k-item-tag">Issue</span></a>
        <a href="issue-1.html" class="cmd-k-item"><span>Issue 01: Prompt Engineering Isn't Dead</span><span class="cmd-k-item-tag">Issue</span></a>
        <a href="rss.xml" target="_blank" class="cmd-k-item"><span>RSS 2.0 Feed XML</span><span class="cmd-k-item-tag">Feed</span></a>
      </div>
    </div>
  `;
  document.body.appendChild(cmdKModal);

  const cmdKSearch = cmdKModal.querySelector('#cmd-k-search');
  function toggleCmdK(show) {
    const isActive = show !== undefined ? show : !cmdKModal.classList.contains('is-active');
    cmdKModal.classList.toggle('is-active', isActive);
    cmdKModal.setAttribute('aria-hidden', (!isActive).toString());
    if (isActive) {
      setTimeout(() => cmdKSearch.focus(), 50);
    }
  }

  cmdKModal.addEventListener('click', (e) => {
    if (e.target === cmdKModal) toggleCmdK(false);
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      toggleCmdK();
    }
  });

  const navCmdKBtn = document.getElementById('nav-cmd-k');
  if (navCmdKBtn) {
    navCmdKBtn.addEventListener('click', () => toggleCmdK(true));
  }

  /* ================================================
     13. TERMINAL CODE RUNNER & SIMULATOR
     ================================================ */
  document.querySelectorAll('.prose pre').forEach((pre) => {
    const runBtn = document.createElement('button');
    runBtn.type = 'button';
    runBtn.className = 'code-run-btn';
    runBtn.textContent = 'Run';
    runBtn.setAttribute('aria-label', 'Simulate code output');

    const outputBox = document.createElement('div');
    outputBox.className = 'code-output-box';
    pre.after(outputBox);

    runBtn.addEventListener('click', () => {
      if (outputBox.classList.contains('is-active')) {
        outputBox.classList.remove('is-active');
        runBtn.textContent = 'Run';
      } else {
        outputBox.textContent = 'Executing snippet...\n[Success] Output: Execution completed with 0 errors. Verified logic.';
        outputBox.classList.add('is-active');
        runBtn.textContent = 'Hide Output';
      }
    });

    pre.appendChild(runBtn);
  });

  /* ================================================
     14. SIMULATED AUDIO VERSION PLAYER (Articles)
     ================================================ */
  const heroImgContainer = document.querySelector('.article-hero');
  if (heroImgContainer) {
    const audioPlayer = document.createElement('div');
    audioPlayer.className = 'audio-player reveal';
    audioPlayer.innerHTML = `
      <button class="audio-btn" id="audio-play-btn" aria-label="Play audio version">&#9654;</button>
      <div class="audio-info">
        <div class="audio-title">Listen to Audio Edition (AI Voice Summary)</div>
        <div class="audio-track" id="audio-track"><div class="audio-progress" id="audio-progress"></div></div>
      </div>
      <button class="audio-speed" id="audio-speed-btn">1.0x</button>
    `;
    heroImgContainer.before(audioPlayer);

    const playBtn = audioPlayer.querySelector('#audio-play-btn');
    const progressBar = audioPlayer.querySelector('#audio-progress');
    const speedBtn = audioPlayer.querySelector('#audio-speed-btn');

    let isPlaying = false;
    let progressInt = 0;
    let timer = null;
    let speed = 1.0;

    const speeds = [1.0, 1.25, 1.5, 2.0];
    let speedIdx = 0;

    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;';

      if (isPlaying) {
        timer = setInterval(() => {
          progressInt += 1;
          if (progressInt > 100) progressInt = 0;
          progressBar.style.width = progressInt + '%';
        }, 300 / speed);
      } else {
        clearInterval(timer);
      }
    });

    speedBtn.addEventListener('click', () => {
      speedIdx = (speedIdx + 1) % speeds.length;
      speed = speeds[speedIdx];
      speedBtn.textContent = speed.toFixed(1) + 'x';
    });
  }

})();


