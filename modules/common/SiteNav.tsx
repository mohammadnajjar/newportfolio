'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { slug: 'work', label: 'Work' },
  { slug: 'services', label: 'Services' },
  { slug: 'process', label: 'Process' },
  { slug: 'experience', label: 'Experience' },
  { slug: 'blog', label: 'Blog' },
  { slug: 'faq', label: 'FAQ' },
]

export default function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="container">
      <nav className="site-nav">
        <Link href="/" className="logo">Najjar.dev</Link>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className={active === slug ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="nav-cta">Hire Me →</Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </div>
  )
}
