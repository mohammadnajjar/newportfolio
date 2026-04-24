/* ============================================================
   Najjar.dev — main.js
   Shared behaviours across all pages.
   ============================================================ */
(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (links.classList.contains('open')) {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* --- FAQ accordion --- */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.setAttribute('aria-expanded', 'false');

    const toggleItem = () => {
      const item = q.parentElement;
      const open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    q.addEventListener('click', toggleItem);
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleItem();
      }
    });
  });

  /* --- Work page filter chips --- */
  const chips = document.querySelectorAll('.filter-chip');
  if (chips.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.dataset.filter;
        document.querySelectorAll('.work-item').forEach(item => {
          if (!filter || filter === 'all') {
            item.style.display = '';
          } else {
            const tags = (item.dataset.tags || '').split(',').map(t => t.trim().toLowerCase());
            item.style.display = tags.includes(filter.toLowerCase()) ? '' : 'none';
          }
        });
      });
    });
  }

  /* --- Smooth-scroll for same-page anchors (nav + sidebar) --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
