import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'
import ContactForm from '@/modules/contact/ContactForm'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contactPage' })
  return { title: t('metaTitle'), description: t('metaDesc') }
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contactPage')
  const quickFaqItems = t.raw('quickFaq.items') as { q: string; a: string }[]

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="contact" />

      <header className="page-header" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="eyebrow">{t('header')}</div>
        </div>
      </header>

      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro">
            <h1>{t('intro.title1')}<br />{t('intro.title2')} <span className="serif">{t('intro.title3')}</span></h1>
            <p>{t('intro.desc')}</p>

            <div className="contact-channels">
              <a href="mailto:mohammadnajjamgl@gmail.com" className="contact-channel">
                <div className="contact-channel-icon">@</div>
                <div className="contact-channel-body">
                  <div className="lbl">{t('channels.emailLabel')}</div>
                  <div className="val">mohammadnajjamgl@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/971501026045" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">W</div>
                <div className="contact-channel-body">
                  <div className="lbl">{t('channels.whatsappLabel')}</div>
                  <div className="val">+971 50 102 6045</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mglnaj" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">L</div>
                <div className="contact-channel-body">
                  <div className="lbl">{t('channels.linkedinLabel')}</div>
                  <div className="val">linkedin.com/in/mglnaj</div>
                </div>
              </a>
              <a href="https://cal.com/mohammadnajjar" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">C</div>
                <div className="contact-channel-body">
                  <div className="lbl">{t('channels.bookCallLabel')}</div>
                  <div className="val">cal.com/mohammadnajjar</div>
                </div>
              </a>
            </div>

            <div className="contact-sla">
              <div className="icon">⏱</div>
              <div className="txt">
                <strong>{t('sla.headline')}</strong>
                {t('sla.desc')}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <section style={{ padding: '80px 0 120px', background: 'var(--paper-dark)', borderTop: '2px solid var(--ink)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <div className="section-eyebrow">{t('where.eyebrow')}</div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                {t('where.title1')} <span className="serif">{t('where.title2')}</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
                {t('where.desc')}
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', lineHeight: 2 }}>
                <div>{t('where.hours')}</div>
                <div>{t('where.weekend')}</div>
                <div>{t('where.travel')}</div>
              </div>
            </div>

            <div>
              <div className="section-eyebrow">{t('quickFaq.eyebrow')}</div>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                {t('quickFaq.title1')} <span className="serif">{t('quickFaq.title2')}</span>
              </h2>

              <FAQAccordion items={quickFaqItems} />

              <div style={{ marginTop: '24px' }}>
                <Link href="/faq" className="btn-ghost">{t('quickFaq.fullFaq')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter headline="contact" />
    </>
  )
}
