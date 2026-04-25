'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  label: string
}

export default function BlogTOC({ items, title = 'Table of contents' }: { items: TOCItem[]; title?: string }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="faq-sidebar" style={{ position: 'sticky', top: '100px' }}>
      <h4>{title}</h4>
      {items.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          style={{
            display: 'block',
            padding: '10px 12px',
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: activeId === item.id ? 700 : 500,
            color: activeId === item.id ? 'var(--accent)' : 'var(--ink)',
            textDecoration: 'none',
            borderRadius: '10px',
            background: activeId === item.id ? 'var(--accent-soft)' : 'transparent',
            transition: 'all 0.2s',
            marginBottom: '2px',
            borderLeft: activeId === item.id ? '3px solid var(--accent)' : '3px solid transparent',
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
