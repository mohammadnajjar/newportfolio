import { getTranslations, setRequestLocale } from 'next-intl/server'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faqPage' })
  return { title: t('metaTitle'), description: t('metaDesc') }
}

interface Group {
  id: string
  title1: string
  title2: string
  desc: string
  items: { q: string; a: string }[]
}

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('faqPage')

  const groups = t.raw('groups') as Group[]

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="faq" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{t('header.eyebrow')}</div>
          <h1>{t('header.title1')}<br /><span className="serif">{t('header.title2')}</span></h1>
          <p>{t('header.desc')}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <h4>{t('jumpTo')}</h4>
              {groups.map(g => (
                <a key={g.id} href={`#${g.id}`}>{g.title1} {g.title2}</a>
              ))}
            </aside>

            <div>
              {groups.map(g => (
                <div key={g.id} className="faq-group" id={g.id}>
                  <h2 className="faq-group-title">{g.title1} <span className="serif">{g.title2}</span></h2>
                  <p className="faq-group-desc">{g.desc}</p>
                  <FAQAccordion items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="container">
          <h2>{t('help.title1')}<br />{t('help.title2')} <span className="serif">{t('help.title3')}</span></h2>
          <p>{t('help.desc')}</p>
          <div className="help-cta-group">
            <a href="mailto:mohammadnajjamgl@gmail.com?subject=Quick%20Question" className="btn-big on-dark">{t('help.emailMe')} <span className="arrow">↗</span></a>
            <a href="https://wa.me/971501026045" className="btn-big secondary" target="_blank" rel="noopener noreferrer">{t('help.whatsapp')}</a>
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
