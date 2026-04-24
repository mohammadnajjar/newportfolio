import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import { appsAndSaaS, websites, websiteChips, type ProjectListing } from '@/lib/projects'

export const metadata = {
  title: 'Work — 50+ Projects',
  description: 'Selected work from 50+ shipped projects. SaaS, IoT, mobile apps, e-commerce, and corporate websites.',
}

function PortfolioCard({ p }: { p: ProjectListing }) {
  const href = p.external || `/projects/${p.slug}`
  const isExternal = !!p.external
  return (
    <Link
      href={href}
      className="portfolio-card"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      data-tags={p.filterTags.join(',')}
    >
      <div className={`portfolio-thumb ${p.tone}`}>
        <span className="badge">{p.badge}</span>
        {p.shortTitle || p.title}
      </div>
      <div className="portfolio-body">
        <div className="cat">{p.category}</div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="portfolio-tags">
          {p.tags.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="portfolio-link">
          {isExternal ? 'Visit site' : 'View case study'} <span>{isExternal ? '↗' : '→'}</span>
        </div>
      </div>
    </Link>
  )
}

export default function WorkPage() {
  return (
    <>
      <SiteTicker items="SELECTED WORK · 2019 — 2026 | 50+ PROJECTS SHIPPED | DUBAI · MENA · WORLDWIDE | SAAS · ENTERPRISE · MOBILE · IOT" />
      <SiteNav active="work" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Selected work</div>
          <h1>Real projects,<br /><span className="serif">real impact</span></h1>
          <p>
            A curated selection from 50+ shipped projects. SaaS platforms, enterprise
            systems, mobile apps, and IoT integrations — each one running in production,
            serving real users, delivering measurable results.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>Featured projects</div>
          <div className="portfolio-grid">
            {appsAndSaaS.map(p => <PortfolioCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">Websites & web projects</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Every pixel, <span className="serif">solo</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: '560px' }}>
            40+ websites designed and built end-to-end — solo. From concept and design to deployment and DNS.
          </p>

          <div className="portfolio-grid">
            {websites.map(p => <PortfolioCard key={p.slug} p={p} />)}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>+ More websites built solo</div>
            <div className="websites-list">
              {websiteChips.map(c => (
                <a key={c.url} href={c.url} target="_blank" rel="noopener" className="website-chip">
                  {c.label} <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="results-strip">
        <div className="results-row">
          <div className="result-item">
            <div className="result-big">50<span className="plus">+</span></div>
            <div className="result-lbl">Projects Shipped</div>
          </div>
          <div className="result-item">
            <div className="result-big">92<span className="plus">%</span></div>
            <div className="result-lbl">Best Perf Gain</div>
          </div>
          <div className="result-item">
            <div className="result-big">14</div>
            <div className="result-lbl">Industries Served</div>
          </div>
          <div className="result-item">
            <div className="result-big">6<span className="plus">+</span></div>
            <div className="result-lbl">Years In Production</div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
