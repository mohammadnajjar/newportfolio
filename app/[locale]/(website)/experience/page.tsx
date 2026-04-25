import { getTranslations, setRequestLocale } from 'next-intl/server'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import SkillsGrid from '@/modules/experience/SkillsGrid'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'experiencePage' })
  return { title: t('metaTitle'), description: t('metaDesc') }
}

interface Role {
  company: string
  location?: string
  title: string
  type: string
  period: string
  bullets: string[]
}

interface Volunteering {
  org: string
  title: string
  period: string
  bullets: string[]
}

export default async function ExperiencePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('experiencePage')

  const roles = t.raw('roles') as Role[]
  const volunteering = t.raw('volunteering.items') as Volunteering[]
  const personalSkills = t.raw('skills.personalSkills') as string[]
  const languages = t.raw('languages.items') as { name: string; level: string; pct: number }[]
  const achievements = t.raw('achievements.items') as string[]

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="experience" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{t('header.eyebrow')}</div>
          <h1>{t('header.title1')}<br /><span className="serif">{t('header.title2')}</span></h1>
          <p>{t('header.desc')}</p>
        </div>
      </header>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">{t('work.eyebrow')}</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            {t('work.title1')} <span className="serif">{t('work.title2')}</span> {t('work.title3')}
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            {t('work.desc')}
          </p>

          <ol className="exp-timeline">
            {roles.map((r, i) => (
              <li key={i} className="exp-item">
                <div className="exp-dot" aria-hidden="true" />
                <div className="exp-card">
                  <div className="exp-head">
                    <div>
                      <div className="exp-company">
                        {r.company}
                        {r.location ? <span className="exp-loc"> — {r.location}</span> : null}
                      </div>
                      <h3 className="exp-title">{r.title}</h3>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-type">{r.type}</span>
                      <span className="exp-period">{r.period}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">{t('volunteering.eyebrow')}</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            {t('volunteering.title1')} <span className="serif">{t('volunteering.title2')}</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            {t('volunteering.desc')}
          </p>

          <ol className="exp-timeline">
            {volunteering.map((v, i) => (
              <li key={i} className="exp-item">
                <div className="exp-dot" aria-hidden="true" />
                <div className="exp-card">
                  <div className="exp-head">
                    <div>
                      <div className="exp-company">{v.org}</div>
                      <h3 className="exp-title">{v.title}</h3>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{v.period}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {v.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">{t('skills.eyebrow')}</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            {t('skills.title1')} <span className="serif">{t('skills.title2')}</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            {t('skills.desc')}
          </p>

          <SkillsGrid />

          <div style={{ marginTop: '3rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>{t('skills.personalEyebrow')}</div>
            <div className="websites-list">
              {personalSkills.map(s => (
                <span key={s} className="website-chip" style={{ cursor: 'default' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', padding: '4rem 0' }}>
        <div className="container">
          <div className="exp-grid-2">
            <div className="exp-info-card">
              <div className="section-eyebrow">{t('education.eyebrow')}</div>
              <h3 className="exp-info-title">{t('education.school')}</h3>
              <p className="exp-info-sub">{t('education.degree')}</p>
              <div className="exp-info-meta">
                <span>{t('education.location')}</span>
                <span>{t('education.period')}</span>
              </div>
              <div className="exp-pill" style={{ marginTop: '1rem' }}>{t('education.gpa')}</div>
            </div>

            <div className="exp-info-card">
              <div className="section-eyebrow">{t('languages.eyebrow')}</div>
              <div style={{ marginTop: '1.25rem' }}>
                {languages.map(l => (
                  <div key={l.name} className="lang-row">
                    <div className="lang-head">
                      <span className="lang-name">{l.name}</span>
                      <span className="lang-level">{l.level}</span>
                    </div>
                    <div className="lang-bar">
                      <div className="lang-bar-fill" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="exp-info-card">
              <div className="section-eyebrow">{t('achievements.eyebrow')}</div>
              <ul className="exp-bullets" style={{ marginTop: '1rem' }}>
                {achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>

            <div className="exp-info-card">
              <div className="section-eyebrow">{t('recommendation.eyebrow')}</div>
              <blockquote className="exp-quote">
                <span className="quote-mark">“</span>
                {t('recommendation.quote1')}
                <strong> {t('recommendation.quote2')} </strong>
                {t('recommendation.quote3')}
                <span className="quote-mark closing">”</span>
              </blockquote>
              <div className="exp-info-sub" style={{ marginTop: '0.5rem' }}>{t('recommendation.by')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="results-strip">
        <div className="container">
          <div className="results-row">
            <div className="result-item">
              <div className="result-big">6<span className="plus">+</span></div>
              <div className="result-lbl">{t('results.years')}</div>
            </div>
            <div className="result-item">
              <div className="result-big">80<span className="plus">+</span></div>
              <div className="result-lbl">{t('results.websites')}</div>
            </div>
            <div className="result-item">
              <div className="result-big">10<span className="plus">+</span></div>
              <div className="result-lbl">{t('results.mobile')}</div>
            </div>
            <div className="result-item">
              <div className="result-big">11</div>
              <div className="result-lbl">{t('results.engineers')}</div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter headline="talk" />
    </>
  )
}
