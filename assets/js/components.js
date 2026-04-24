/**
 * Site Components
 * ─────────────────────────────────────────────────────────────────────────────
 * Native Custom Elements for shared UI blocks: <site-ticker>, <site-nav>,
 * <site-footer>. Zero dependencies, zero build step.
 *
 * Usage
 * ─────
 * Root pages (index.html, work.html …):
 *   <site-ticker items="ITEM A | ITEM B | ITEM C | ITEM D"></site-ticker>
 *   <site-nav    active="work"></site-nav>
 *   …page content…
 *   <site-footer></site-footer>
 *
 * Sub-directory pages (projects/*.html, blog/*.html):
 *   Same markup — the component auto-detects path depth.
 *
 * active values: work · services · process · blog · faq · contact
 */

'use strict';

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Returns the relative path prefix needed to reach the site root.
 * Handles pages at root level ('')  and one level deep ('../').
 */
function getBase() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  // If the last segment is a .html file and there's a parent folder we care about
  const subDirs = ['projects', 'blog'];
  const inSub   = parts.length >= 2 && subDirs.includes(parts[parts.length - 2]);
  return inSub ? '../' : '';
}

// ─── <site-ticker> ──────────────────────────────────────────────────────────

class SiteTicker extends HTMLElement {
  connectedCallback() {
    const raw   = this.getAttribute('items') || '';
    const items = raw.split('|').map(s => s.trim()).filter(Boolean);

    // Duplicate so CSS infinite-scroll never shows a gap
    const spans = [...items, ...items]
      .map(t => `<span>${t}</span>`)
      .join('');

    this.outerHTML = `
<div class="ticker" aria-hidden="true">
  <div class="ticker-track">${spans}</div>
</div>`;
  }
}

// ─── <site-nav> ─────────────────────────────────────────────────────────────

class SiteNav extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    const base   = getBase();

    const navItems = [
      { slug: 'work',     label: 'Work' },
      { slug: 'services', label: 'Services' },
      { slug: 'process',  label: 'Process' },
      { slug: 'blog',     label: 'Blog' },
      { slug: 'faq',      label: 'FAQ' },
    ];

    const links = navItems
      .map(({ slug, label }) => {
        const cls = active === slug ? ' class="active"' : '';
        return `<a href="${base}${slug}.html"${cls}>${label}</a>`;
      })
      .join('\n          ');

    this.outerHTML = `
<div class="container">
  <nav class="site-nav">
    <a href="${base}index.html" class="logo">Najjar.dev</a>
    <div class="nav-links">
      ${links}
    </div>
    <a href="${base}contact.html" class="nav-cta">Hire Me →</a>
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
</div>`;
  }
}

// ─── <site-footer> ──────────────────────────────────────────────────────────

/**
 * headline attribute presets:
 *   (none)    → "Got a project in mind?"   — project detail pages
 *   "talk"    → "Let's talk. I respond in hours."   — section pages
 *   "contact" → "Message me. I'll reply."   — contact page
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const base = getBase();

    const headlines = {
      talk:    `Let's <span class="serif">talk</span>.<br>I respond in hours.`,
      contact: `Message me.<br>I'll <span class="serif">reply.</span>`,
    };
    const headlineKey = this.getAttribute('headline') || '';
    const headline = headlines[headlineKey]
      ?? `Got a project<br>in <span class="serif">mind?</span>`;

    this.outerHTML = `
<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-huge">${headline}</div>

      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:mohammadnajjamgl@gmail.com">Email</a>
        <a href="https://wa.me/971501026045" target="_blank" rel="noopener">WhatsApp</a>
        <a href="https://www.linkedin.com/in/mglnaj" target="_blank" rel="noopener">LinkedIn</a>
      </div>

      <div class="footer-col">
        <h4>Navigate</h4>
        <a href="${base}work.html">Work</a>
        <a href="${base}services.html">Services</a>
        <a href="${base}process.html">Process</a>
        <a href="${base}blog.html">Blog</a>
        <a href="${base}faq.html">FAQ</a>
        <a href="${base}contact.html">Contact</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© 2026 Mohammad Najjar · Built with attention in Dubai</div>
      <div>AVAILABLE FOR PROJECTS · RESPONSE TIME ~4H</div>
    </div>
  </div>
</footer>`;
  }
}

// ─── Register ────────────────────────────────────────────────────────────────

customElements.define('site-ticker', SiteTicker);
customElements.define('site-nav',    SiteNav);
customElements.define('site-footer', SiteFooter);
