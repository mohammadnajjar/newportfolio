import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import { SiteTicker, SiteNav, SiteFooter } from '@/modules/common'
import { BlogTOC } from '@/modules/blog'
import { FAQAccordion } from '@/modules/faq'
import { getBlogPostBodies, getBlogPosts } from '@/lib/blog-posts'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

export function generateStaticParams() {
  return Object.keys(getBlogPostBodies('en')).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params
  const post = getBlogPostBodies(locale)[slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const post = getBlogPostBodies(locale)[slug]
  if (!post) notFound()
  const t = await getTranslations('blogPage.post')

  const related = getBlogPosts(locale).filter(p => p.slug !== slug).slice(0, 2)

  return (
    <>
      <SiteTicker items={`${t('tickerBy')} · ${post.category.toUpperCase()} | ${post.readTime.toUpperCase()} | ${t('tickerAuthor')}`} />
      <SiteNav active="blog" />

      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="faq-layout">
            <BlogTOC items={post.toc} title={t('tocTitle')} />

            <article className="blog-article">
              <Link href={'/blog' as never} className="project-back" style={{ marginTop: '24px', display: 'inline-block' }}>{t('back')}</Link>

              <div className="blog-meta">
                <span className="cat">{post.category}</span>
                <span className="dot"></span>
                <span>{post.date}</span>
                <span className="dot"></span>
                <span>{post.readTime}</span>
                <span className="dot"></span>
                <span>{t('by')}</span>
              </div>

              <h1>{post.title}</h1>

              <p className="lead">{post.lead}</p>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />

              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="author-card">
                <div className="author-avatar">MN</div>
                <div className="author-body">
                  <div className="name">Mohammad Najjar</div>
                  <div className="bio">{t('authorBio')}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
        <div className="container">
          <div className="section-eyebrow">{t('faqEyebrow')}</div>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>
            {t('faqTitle1')} <span className="serif">{t('faqTitle2')}</span>
          </h2>
          <div style={{ maxWidth: '880px' }}>
            <FAQAccordion items={post.faq} />
          </div>
        </div>
      </section>

      <section className="mega-cta">
        <div className="container">
          <h2>
            {t('ctaTitle1')}<br /><span className="serif">{t('ctaTitle2')}</span>
          </h2>
          <p>{t('ctaDesc')}</p>
          <Link href="/contact" className="btn-big on-dark">
            {t('ctaBtn')} <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="container">
            <div className="section-eyebrow">{t('relatedEyebrow')}</div>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              {t('relatedTitle1')} <span className="serif">{t('relatedTitle2')}</span>
            </h2>
            <div className="blog-grid">
              {related.map(p => (
                <Link key={p.slug} href={(p.published ? `/blog/${p.slug}` : '#') as never} className="blog-card">
                  <div className={`blog-thumb${p.tone ? ` ${p.tone}` : ''}`}>{p.thumbLabel}</div>
                  <div className="blog-body">
                    <div className="blog-meta">
                      <span className="cat">{p.category}</span>
                      <span className="dot"></span>
                      <span>{p.date}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-read">
                      Read — {p.readTime.replace(' read', '')} <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter headline="talk" />
    </>
  )
}
