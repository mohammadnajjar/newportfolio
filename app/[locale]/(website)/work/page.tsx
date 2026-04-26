import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import { getAppsAndSaaS, getWebsites, websiteChips, type ProjectListing } from '@/lib/projects'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'workPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  }
}

function PortfolioCard({ p, viewLabel, visitLabel }: { p: ProjectListing; viewLabel: string; visitLabel: string }) {
  const href = p.external || `/projects/${p.slug}`
  const isExternal = !!p.external
  return (
    <Link
      href={isExternal ? (href as never) : (href as never)}
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
          {isExternal ? visitLabel : viewLabel} <span>{isExternal ? '↗' : '→'}</span>
        </div>
      </div>
    </Link>
  )
}

export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('workPage')
  const apps = getAppsAndSaaS(locale)
  const sites = getWebsites(locale)

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="work" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{t('header.eyebrow')}</div>
          <h1>{t('header.title1')}<br /><span className="serif">{t('header.title2')}</span></h1>
          <p>{t('header.desc')}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>{t('featuredEyebrow')}</div>
          <div className="portfolio-grid">
            {apps.map(p => <PortfolioCard key={p.slug} p={p} viewLabel={t('viewCase')} visitLabel={t('visitSite')} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">{t('websitesEyebrow')}</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            {t('websitesTitle1')} <span className="serif">{t('websitesTitle2')}</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: '560px' }}>
            {t('websitesDesc')}
          </p>

          <div className="portfolio-grid">
            {sites.map(p => <PortfolioCard key={p.slug} p={p} viewLabel={t('viewCase')} visitLabel={t('visitSite')} />)}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>{t('moreWebsites')}</div>
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
            <div className="result-big">120<span className="plus">+</span></div>
            <div className="result-lbl">{t('results.shipped')}</div>
          </div>
          <div className="result-item">
            <div className="result-big">92<span className="plus">%</span></div>
            <div className="result-lbl">{t('results.perf')}</div>
          </div>
          <div className="result-item">
            <div className="result-big">14</div>
            <div className="result-lbl">{t('results.industries')}</div>
          </div>
          <div className="result-item">
            <div className="result-big">6<span className="plus">+</span></div>
            <div className="result-lbl">{t('results.years')}</div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
