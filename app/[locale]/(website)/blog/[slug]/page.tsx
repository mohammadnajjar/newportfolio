import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteTicker, SiteNav, SiteFooter } from '@/modules/common'
import { BlogTOC } from '@/modules/blog'
import { FAQAccordion } from '@/modules/faq'
import { blogPostBodies, blogPosts } from '@/lib/blog-posts'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

export function generateStaticParams() {
  return Object.keys(blogPostBodies).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = blogPostBodies[slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPostBodies[slug]
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <>
      <SiteTicker items={`READING · ${post.category.toUpperCase()} | ${post.readTime.toUpperCase()} | BY MOHAMMAD NAJJAR · DUBAI`} />
      <SiteNav active="blog" />

      <header className="page-header" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ marginBottom: '24px' }}>
            <Link href="/blog" className="btn-ghost">← All posts</Link>
          </div>
          <div className="eyebrow">{post.category}</div>
          <h1>{post.title}</h1>
          <div className="blog-meta" style={{ marginTop: '24px', fontSize: '14px' }}>
            <span>{post.date}</span>
            <span className="dot"></span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="faq-layout">
            <BlogTOC items={post.toc} />

            <article className="blog-article">
              <p className="lead">{post.lead}</p>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />

              <div className="article-tags" style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {post.tags.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div
                className="author-card"
                style={{
                  marginTop: '48px',
                  padding: '28px',
                  border: '2px solid var(--ink)',
                  borderRadius: '20px',
                  background: 'var(--paper-dark)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'var(--paper)',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '22px',
                    flexShrink: 0,
                  }}
                >
                  MN
                </div>
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '4px' }}>Mohammad Najjar</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>
                    Senior software engineer · 6+ years shipping SaaS, mobile and web apps from Dubai.
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-dark)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
        <div className="container">
          <div className="section-eyebrow">Frequently asked</div>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>
            About this <span className="serif">post.</span>
          </h2>
          <div style={{ maxWidth: '880px' }}>
            <FAQAccordion items={post.faq} />
          </div>
        </div>
      </section>

      <section className="mega-cta">
        <div className="container">
          <h2>
            Got a SaaS idea?<br /><span className="serif">Let&apos;s scope it.</span>
          </h2>
          <p>
            30-minute discovery call, free, no obligation. We&apos;ll figure out together
            whether six weeks is realistic — or what a smarter scope looks like.
          </p>
          <Link href="/contact" className="btn-big on-dark">
            Book a call <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="container">
            <div className="section-eyebrow">Keep reading</div>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              Related <span className="serif">posts.</span>
            </h2>
            <div className="blog-grid">
              {related.map(p => (
                <Link key={p.slug} href={p.published ? `/blog/${p.slug}` : '#'} className="blog-card">
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
