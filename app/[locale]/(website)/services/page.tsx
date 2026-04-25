import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import TechStack from '@/modules/services/TechStack'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'servicesPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  }
}

interface ServiceItem {
  num: string
  slug: string
  icon: string
  title: string
  desc: string
  features: string[]
  priceLabel: string
  price: string
}

interface IndustryItem {
  icon: string
  title: string
  desc: string
  proof: string
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('servicesPage')

  const services = t.raw('items') as ServiceItem[]
  const industries = t.raw('industries.items') as IndustryItem[]
  const compareRowLabels = t.raw('compare.rows') as string[]

  // Same comparison matrix as before
  const compareValues: boolean[][] = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, false, false],
    [true, true, true, true],
    [true, true, true, false],
    [true, true, true, false],
    [true, true, true, true],
    [true, true, true, false],
    [true, true, true, false],
    [false, false, false, true],
    [false, false, false, true],
    [true, true, true, true],
  ]

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="services" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{t('header.eyebrow')}</div>
          <h1>
            {t('header.title1')}<br />
            <span className="highlight">{t('header.title2')}</span>
          </h1>
          <p>{t('header.desc')}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => {
              const featured = i === 0
              return (
                <div key={s.slug} className={`service-block${featured ? ' featured' : ''}`}>
                  <div className="service-num">{s.num}</div>
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-list">
                    {s.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <div className="service-price">
                    {s.priceLabel} <strong>{s.price}</strong>
                  </div>
                  <div className="service-actions">
                    <Link
                      href={`/contact?service=${s.slug}` as never}
                      className="service-cta"
                      aria-label={`${t('getQuote')} — ${s.title}`}
                    >
                      {t('getQuote')} <span className="arrow">→</span>
                    </Link>
                    <a
                      href={`https://wa.me/971501026045?text=${encodeURIComponent(t('whatsappMessage', { title: s.title }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-cta-secondary"
                      aria-label={`${t('askWhatsapp')} — ${s.title}`}
                    >
                      {t('askWhatsapp')}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="compare-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('compare.eyebrow')}</div>
            <h2 className="section-title">{t('compare.title1')} <span className="serif">{t('compare.title2')}</span></h2>
            <p className="section-desc">{t('compare.desc')}</p>
          </div>

          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>{t('compare.headerWhat')}</th>
                  <th>{t('compare.headerBuild')}<br /><span className="th-sub">{t('compare.headerBuildSub')}</span></th>
                  <th>{t('compare.headerMobile')}<br /><span className="th-sub">{t('compare.headerMobileSub')}</span></th>
                  <th>{t('compare.headerOptimize')}<br /><span className="th-sub">{t('compare.headerOptimizeSub')}</span></th>
                  <th>{t('compare.headerAdvisory')}<br /><span className="th-sub">{t('compare.headerAdvisorySub')}</span></th>
                </tr>
              </thead>
              <tbody>
                {compareRowLabels.map((label, i) => (
                  <tr key={i}>
                    <td>{label}</td>
                    {compareValues[i].map((v, j) => (
                      <td key={j} className={v ? 'yes' : 'no'}>{v ? '✓' : '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="compare-note">{t('compare.note')}</p>
        </div>
      </section>

      <section className="industry-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('industries.eyebrow')}</div>
            <h2 className="section-title">
              {t('industries.title1')} <span className="serif">{t('industries.title2')}</span>
            </h2>
            <p className="section-desc">{t('industries.desc')}</p>
          </div>

          <div className="industry-grid">
            {industries.map(ind => (
              <div key={ind.title} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <div className="industry-proof">{ind.proof}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('stack.eyebrow')}</div>
            <h2 className="section-title">
              {t('stack.title1')} <span className="serif">{t('stack.title2')}</span>
            </h2>
            <p className="section-desc">{t('stack.desc')}</p>
          </div>
          <TechStack />
        </div>
      </section>

      <section className="mega-cta">
        <div className="container mega-cta-content">
          <h2>{t('megaCta.title1')}<br />{t('megaCta.title2')} <span className="serif">{t('megaCta.title3')}</span></h2>
          <p>{t('megaCta.desc')}</p>
          <div className="mega-cta-actions">
            <Link href="/contact" className="btn-big">
              {t('megaCta.ctaPrimary')} <span className="arrow">↗</span>
            </Link>
            <a
              href="https://wa.me/971501026045?text=Hi%20Mohammad%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-ghost-light"
            >
              {t('megaCta.ctaSecondary')}
            </a>
          </div>
          <div className="mega-cta-note">
            {t('megaCta.note')}
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
