'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item${openIdx === i ? ' open' : ''}`}
        >
          <div
            className="faq-q"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setOpenIdx(openIdx === i ? null : i)
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={openIdx === i}
          >
            {item.q}
            <div className="faq-toggle-box">+</div>
          </div>
          <div className="faq-a">
            <div
              className="faq-a-inner"
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
