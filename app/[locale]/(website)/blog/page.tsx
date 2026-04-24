import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import BlogList from '@/modules/blog/BlogList'
import { blogPosts } from '@/lib/blog-posts'

export const metadata = {
  title: 'Blog',
  description: 'Notes from the build — Mohammad Najjar writes about SaaS architecture, Laravel at scale, Flutter in production, team leadership, and hard-won lessons from shipping 90+ projects.',
}

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured)!
  const others = blogPosts.filter(p => !p.featured)

  return (
    <>
      <SiteTicker items="NOTES FROM THE BUILD | SAAS · LARAVEL · FLUTTER · LEADERSHIP | NEW POSTS EVERY TWO WEEKS | WRITTEN FROM DUBAI" />
      <SiteNav active="blog" />

      <BlogList featured={featured} posts={others} />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ padding: '48px', border: '2px solid var(--ink)', borderRadius: '24px', background: 'var(--paper-dark)', textAlign: 'center' }}>
            <div className="section-eyebrow" style={{ marginBottom: '12px' }}>Stay in the loop</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              New post, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>every other Friday.</span>
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '520px', margin: '0 auto 24px' }}>
              No spam, no sponsored drivel. Just the one thing I&apos;ve learned this fortnight that I think is worth your inbox.
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
                placeholder="you@yourdomain.com"
                style={{ flex: 1, minWidth: '220px', padding: '14px 18px', border: '2px solid var(--ink)', borderRadius: '50px', fontFamily: 'var(--font-display)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }}
              />
              <button type="submit" className="btn-big" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Subscribe <span className="arrow">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
