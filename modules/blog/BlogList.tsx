'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/blog-posts'

interface Props {
  featured: BlogPostMeta
  posts: BlogPostMeta[]
}

const filters = [
  { id: 'all', label: 'All posts' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'laravel', label: 'Laravel' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'performance', label: 'Performance' },
]

function postHref(p: BlogPostMeta) {
  return p.published ? `/blog/${p.slug}` : '#'
}

export default function BlogList({ featured, posts }: Props) {
  const [active, setActive] = useState('all')

  const visible = posts.filter(p => active === 'all' || p.filterTags.includes(active))
  const featuredVisible = active === 'all' || featured.filterTags.includes(active)

  return (
    <>
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

      <section style={{ paddingTop: 0 }}>
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
                <span className="blog-featured-link">Read the post →</span>
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
                    Read — {p.readTime.replace(' read', '')} <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && !featuredVisible && (
            <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-mute)' }}>
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
