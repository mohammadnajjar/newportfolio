import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import { SiteTicker, SiteNav, SiteFooter } from '@/modules/common'
import { getProjectDetails } from '@/lib/projects'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

export function generateStaticParams() {
  return Object.keys(getProjectDetails('en')).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params
  const p = getProjectDetails(locale)[slug]
  if (!p) return {}
  const t = await getTranslations({ locale, namespace: 'project' })
  return {
    title: `${p.title} — ${t('metaCaseStudy')}`,
    description: p.summary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const p = getProjectDetails(locale)[slug]
  if (!p) notFound()
  const t = await getTranslations('project')

  const nextHref = `/projects/${p.next.slug}`

  return (
    <>
      <SiteTicker items={p.tickerItems} />
      <SiteNav active="work" />

      <header className="project-hero">
        <div className="container">
          <Link href={'/work' as never} className="project-back">{t('back')}</Link>

          <div className="project-meta-row">
            <span>{p.category}</span>
            <span className="pipe">/</span>
            <span>{p.year}</span>
            <span className="pipe">/</span>
            <span>{p.duration}</span>
            <span className="pipe">/</span>
            <span>{p.role}</span>
          </div>

          <h1 className="project-title">{p.title}</h1>

          <p className="project-summary">{p.summary}</p>

          <div className="project-hero-actions">
            {p.liveUrl && (
              <a href={p.liveUrl} className="btn-big" target="_blank" rel="noopener noreferrer">
                {t('viewLive')} <span className="arrow">↗</span>
              </a>
            )}
            <a href="#methods" className="btn-ghost">{t('readStory')}</a>
          </div>
        </div>

        <div className={`project-cover ${p.tone}`}>
          <div className="project-cover-inner">{p.coverInitial}</div>
        </div>
      </header>

      <section className="project-body" id="methods">
        <div className="container">
          <div className="project-layout">
            <div className="project-narrative">
              <h2>{t('methodsTitle1')} <span className="serif">{t('methodsTitle2')}</span></h2>

              <h3>{t('challenge')}</h3>
              {p.narrative.challenge.map((para, i) => <p key={i}>{para}</p>)}

              <div className="divider"></div>

              <h3>{t('architecture')}</h3>
              {p.narrative.architecture.map((para, i) => <p key={i}>{para}</p>)}
              {p.narrative.architectureBullets.length > 0 && (
                <ul>
                  {p.narrative.architectureBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}

              <div className="divider"></div>

              <h3>{t('shipped')}</h3>
              {p.narrative.whatShipped.map((para, i) => <p key={i}>{para}</p>)}
              {p.narrative.whatShippedBullets.length > 0 && (
                <ul>
                  {p.narrative.whatShippedBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}

              <div className="divider"></div>

              <h3>{t('outcome')}</h3>
              {p.narrative.outcome.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            <aside className="project-sidebar">
              <h4>{t('details')}</h4>
              {p.details.map((d, i) => (
                <div key={i} className="project-detail-item">
                  <div className="lbl">{d.lbl}</div>
                  <div className="val">
                    {d.val}
                    {d.small && <small>{d.small}</small>}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="kpi-strip">
        <div className="container">
          <div className="section-eyebrow">{t('numbersEyebrow')}</div>
          <h2 className="section-title">{t('numbersTitle1')} <span className="serif">{t('numbersTitle2')}</span></h2>
          <div className="kpi-grid">
            {p.kpis.map((k, i) => (
              <div key={i} className="kpi-card">
                <div className="lbl">{k.lbl}</div>
                <div className="num">
                  {k.num}
                  {k.plus && <span className="plus">{k.plus}</span>}
                </div>
                <div className="desc">{k.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-strip">
        <div className="container">
          <div className="eyebrow">{t('techEyebrow')}</div>
          <h2>{t('techTitle1')} <span className="serif">{t('techTitle2')}</span></h2>
          <div className="tech-row">
            {p.techStack.map(t => (
              <div key={t} className="tech-pill">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-eyebrow">{t('galleryEyebrow')}</div>
          <h2 className="section-title">{t('galleryTitle1')} <span className="serif">{t('galleryTitle2')}</span></h2>
          <div className="gallery-grid">
            {p.gallery.map((g, i) => (
              <div key={i} className={`gallery-item ${g.tone}`}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="label">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="container">
          <div className="eyebrow">{t('nextEyebrow')}</div>
          <Link href={nextHref as never} className="next-link">
            <h3>
              {p.next.title}
              <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}>
                {t('nextLabel')}
              </span>
            </h3>
            <span className="arrow-big">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
