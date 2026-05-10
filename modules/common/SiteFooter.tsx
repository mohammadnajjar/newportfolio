import type { ReactElement } from 'react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import { appConfig } from '@/config/app.config'

const IconEmail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconWhatsApp = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const IconCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3.01 3.9 3.01 5L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
)

const IconGithub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.649.5.5 5.649.5 12c0 5.086 3.292 9.402 7.86 10.924.575.106.785-.25.785-.556 0-.275-.01-1.004-.016-1.971-3.197.694-3.872-1.54-3.872-1.54-.523-1.328-1.278-1.682-1.278-1.682-1.044-.714.08-.699.08-.699 1.155.081 1.762 1.186 1.762 1.186 1.026 1.758 2.69 1.25 3.346.956.104-.743.402-1.25.731-1.537-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.281 1.184-3.085-.119-.29-.513-1.457.113-3.037 0 0 .965-.309 3.162 1.179A10.98 10.98 0 0 1 12 6.032c.974.005 1.955.132 2.872.387 2.195-1.488 3.158-1.18 3.158-1.18.628 1.58.234 2.748.115 3.038.737.804 1.182 1.83 1.182 3.085 0 4.415-2.689 5.387-5.251 5.672.414.356.783 1.059.783 2.135 0 1.541-.014 2.783-.014 3.162 0 .309.207.668.79.555C20.21 21.398 23.5 17.084 23.5 12c0-6.351-5.149-11.5-11.5-11.5Z"/>
  </svg>
)

type HeadlineKey = 'talk' | 'contact' | ''

function Headline({ headline, t }: { headline: HeadlineKey; t: (k: string) => string }): ReactElement {
  if (headline === 'talk') {
    return (
      <>
        {t('headlineTalk1')} <span className="serif">{t('headlineTalk2')}</span><br />{t('headlineTalk3')}
      </>
    )
  }
  if (headline === 'contact') {
    return (
      <>
        {t('headlineContact1')} <span className="serif">{t('headlineContact2')}</span>
      </>
    )
  }
  return (
    <>
      {t('headlineDefault1')} <span className="serif">{t('headlineDefault2')}</span>
    </>
  )
}

export default async function SiteFooter({ headline = '' }: { headline?: HeadlineKey }) {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-huge">
              <Headline headline={headline} t={t} />
            </div>
            <Link
              href={`mailto:${appConfig.contact.email}?subject=Project%20Inquiry`}
              className="btn-big on-dark"
              style={{ marginTop: '32px', display: 'inline-flex' }}
            >
              {t('sendMessage')} <span className="arrow">↗</span>
            </Link>
          </div>

          <div className="footer-col">
            <h4>{t('navigation')}</h4>
            <Link href="/work">{tNav('work')}</Link>
            <Link href="/services">{tNav('services')}</Link>
            <Link href="/process">{tNav('process')}</Link>
            <Link href="/experience">{tNav('experience')}</Link>
            <Link href="/blog">{tNav('blog')}</Link>
            <Link href="/faq">{tNav('faq')}</Link>
            <Link href="/contact">{tNav('contact')}</Link>
          </div>

          <div className="footer-col">
            <h4>{t('connect')}</h4>
            <a href={`mailto:${appConfig.contact.email}`} target="_blank" rel="noopener noreferrer">
              <IconEmail /> {t('email')}
            </a>
            <a href={appConfig.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn /> {t('linkedin')}
            </a>
            <a href={appConfig.contact.github} target="_blank" rel="noopener noreferrer">
              <IconGithub /> GitHub
            </a>
            <a href={appConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp /> {t('whatsapp')}
            </a>
            <a href={appConfig.contact.cal} target="_blank" rel="noopener noreferrer">
              <IconCalendar /> {t('bookCall')}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Mohammad Najjar. {t('rights')}.</span>
          <span>{t('location')}</span>
        </div>
      </div>
    </footer>
  )
}
