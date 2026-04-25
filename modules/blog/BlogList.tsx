'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n/navigation'
import type { BlogPostMeta } from '@/lib/blog-posts'

interface Props {
  featured: BlogPostMeta
  posts: BlogPostMeta[]
}

function postHref(p: BlogPostMeta) {
  return p.published ? `/blog/${p.slug}` : '#'
}

export default function BlogList({ featured, posts }: Props) {
  const [active, setActive] = useState('all')
  const t = useTranslations('blogPage')

  const filters = t.raw('filters') as { id: string; label: string }[]
  const headerEyebrow = t('header.eyebrow')
  const title1 = t('header.title1')
  const title2 = t('header.title2')
  const title3 = t('header.title3')
  const desc = t('desc')

  const visible = posts.filter(p => active === 'all' || p.filterTags.includes(active))
  const featuredVisible = active === 'all' || featured.filterTags.includes(active)

  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="eyebrow">{headerEyebrow}</div>
          <h1>{title1}<br />{title2} <span className="serif">{title3}</span></h1>
          <p>{desc}</p>
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.id}
                type="button"
                className={`filter-chip${active === f.id ? ' active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          {featuredVisible && (
            <Link href={postHref(featured)} className="blog-featured">
              <div className="blog-featured-visual">{featured.thumbLabel}</div>
              <div className="blog-featured-body">
                <div className="blog-meta">
                  <span className="cat">{featured.category}</span>
                  <span className="dot"></span>
                  <span>{featured.date}</span>
                  <span className="dot"></span>
                  <span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="blog-featured-link">{t('readPost')}</span>
              </div>
            </Link>
          )}

          <div className="blog-grid">
            {visible.map(p => (
              <Link key={p.slug} href={postHref(p)} className="blog-card">
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
                    {t('readShort')} — {p.readTime.replace(' read', '')} <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && !featuredVisible && (
            <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-mute)' }}>
              {t('noPosts')}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
