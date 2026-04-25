import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'processPage' })
  return { title: t('metaTitle'), description: t('metaDesc') }
}

const toolLogos: Record<string, React.ReactElement> = {
  Linear: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M10 90 L90 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
      <path d="M10 60 L60 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
      <path d="M10 30 L30 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
      <path d="M40 90 L90 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
      <path d="M70 90 L90 70" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="42">
      <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38h9.5v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
      <path d="M19 .5h9.5a9.5 9.5 0 0 1 0 19H19z" fill="#FF7262"/>
      <path d="M.5 28.5A9.5 9.5 0 0 1 10 19h9v19H10a9.5 9.5 0 0 1-9.5-9.5z" fill="#A259FF"/>
      <path d="M.5 9.5A9.5 9.5 0 0 1 10 .5h9v19H10A9.5 9.5 0 0 1 .5 9.5z" fill="#F24E1E"/>
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001L10.42.232c.248-.143.553-.143.8 0l10.45 6.034h.001c.033.02.06.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.615V11.773c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l10.451-6.033c.248-.143.552-.143.8 0l10.45 6.033c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.016.024.039.045.054.071.022.039.036.082.05.124.008.023.022.044.03.068z" fill="#FF2D20"/>
    </svg>
  ),
  'React + Vite': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <circle cx="50" cy="50" r="9" fill="#61DAFB"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 66 75" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="36">
      <path d="M38.8 0L0 38.8l12.2 12.2L63.2 0H38.8z" fill="#54C5F8"/>
      <path d="M38.8 36.6L21.2 54.2l12.1 12.1 5.9-5.9 17.5-17.6-17.9-6.2z" fill="#54C5F8"/>
      <path d="M21.2 54.2l12.1 12.1 5.9-5.9-12-12.2-6 6z" fill="#01579B"/>
      <path d="M33.3 66.3L45.5 78.5l17.7-17.7-17.5-17.6-12.4 23.1z" fill="#29B6F6"/>
    </svg>
  ),
  'Docker + CI': (
    <svg viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="32">
      <rect x="8" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="25" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="42" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="25" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="42" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="59" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="42" y="38" width="14" height="12" rx="2" fill="#2496ED"/>
    </svg>
  ),
  'MySQL / Postgres': (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <ellipse cx="30" cy="12" rx="26" ry="10" fill="#336791"/>
      <path d="M4 12v12c0 5.523 11.64 10 26 10s26-4.477 26-10V12c0 5.523-11.64 10-26 10S4 17.523 4 12z" fill="#336791"/>
      <path d="M4 24v12c0 5.523 11.64 10 26 10s26-4.477 26-10V24c0 5.523-11.64 10-26 10S4 29.523 4 24z" fill="#336791"/>
    </svg>
  ),
  'Slack / WhatsApp': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <rect x="10" y="40" width="18" height="18" rx="9" fill="#E01E5A"/>
      <rect x="10" y="62" width="18" height="18" rx="9" fill="#E01E5A"/>
      <rect x="32" y="10" width="18" height="18" rx="9" fill="#36C5F0"/>
      <rect x="54" y="10" width="18" height="18" rx="9" fill="#2EB67D"/>
      <rect x="54" y="32" width="18" height="18" rx="9" fill="#2EB67D"/>
      <rect x="76" y="32" width="18" height="18" rx="9" fill="#2EB67D"/>
      <rect x="32" y="54" width="18" height="18" rx="9" fill="#ECB22E"/>
      <rect x="32" y="76" width="18" height="18" rx="9" fill="#ECB22E"/>
      <rect x="54" y="54" width="18" height="18" rx="9" fill="#36C5F0"/>
    </svg>
  ),
}

export default async function ProcessPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('processPage')

  const stages = t.raw('stages') as Array<{ n: string; t: string; sub: string; p: string; li: string[]; time: string }>
  const principles = t.raw('principles.items') as Array<[string, string, string]>
  const tools = t.raw('tools.items') as Array<{ lbl: string; name: string; desc: string }>

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="process" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{t('header.eyebrow')}</div>
          <h1>{t('header.title1')}<br /><span className="serif">{t('header.title2')}</span><br />{t('header.title3')}</h1>
          <p>{t('header.desc')}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="process-list">
            {stages.map(s => (
              <div key={s.n} className="process-row">
                <div className="process-num-big">{s.n}</div>
                <div className="process-head">
                  <h3>{s.t}</h3>
                  <div className="process-subtitle">{s.sub}</div>
                </div>
                <div className="process-body">
                  <p>{s.p}</p>
                  <ul>
                    {s.li.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="process-time">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="eyebrow">{t('principles.eyebrow')}</div>
          <h2>{t('principles.title1')} <span className="serif">{t('principles.title2')}</span></h2>
          <div className="principles-grid">
            {principles.map(([n, title, desc]) => (
              <div className="principle" key={n}>
                <div className="principle-num">{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('tools.eyebrow')}</div>
            <h2>{t('tools.title1')} <span className="serif">{t('tools.title2')}</span></h2>
          </div>
          <div className="tools-grid">
            {tools.map(({ lbl, name, desc }) => (
              <div className="tool-card" key={name}>
                <div className="tool-card-logo">{toolLogos[name]}</div>
                <div className="tool-label">{lbl}</div>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mega-cta">
        <div className="container mega-cta-content">
          <h2>{t('megaCta.title1')}<br />{t('megaCta.title2')} <span className="serif">{t('megaCta.title3')}</span></h2>
          <p>{t('megaCta.desc')}</p>
          <Link href="/contact" className="btn-big">
            {t('megaCta.cta')} <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
