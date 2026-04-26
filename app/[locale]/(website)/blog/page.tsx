import { getTranslations, setRequestLocale } from 'next-intl/server'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import BlogList from '@/modules/blog/BlogList'
import { getBlogPosts } from '@/lib/blog-posts'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogPage' })
  return { title: t('metaTitle'), description: t('metaDesc') }
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('blogPage')

  const posts = getBlogPosts(locale)
  const featured = posts.find(p => p.featured)!
  const others = posts.filter(p => !p.featured)

  return (
    <>
      <SiteTicker items={t('ticker')} />
      <SiteNav active="blog" />

      <BlogList featured={featured} posts={others} />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ padding: '48px', border: '2px solid var(--ink)', borderRadius: '24px', background: 'var(--paper-dark)', textAlign: 'center' }}>
            <div className="section-eyebrow" style={{ marginBottom: '12px' }}>{t('newsletter.eyebrow')}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              {t('newsletter.title1')} <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>{t('newsletter.title2')}</span>
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '520px', margin: '0 auto 24px' }}>
              {t('newsletter.desc')}
            </p>
            <form
              style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}
              action="mailto:mohammadnajjamgl@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t('newsletter.placeholder')}
                style={{ flex: 1, minWidth: '220px', padding: '14px 18px', border: '2px solid var(--ink)', borderRadius: '50px', fontFamily: 'var(--font-display)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }}
              />
              <button type="submit" className="btn-big" style={{ padding: '14px 28px', fontSize: '15px' }}>
                {t('newsletter.subscribe')} <span className="arrow">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
