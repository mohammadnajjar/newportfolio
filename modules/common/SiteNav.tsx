'use client'

import { useState, useTransition } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/lib/i18n/navigation'

const navIds = ['work', 'services', 'process', 'experience', 'blog', 'faq'] as const

export default function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [, startTransition] = useTransition()

  const switchLocale = (next: 'en' | 'ar') => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div className="container">
      <nav className="site-nav">
        <Link href="/" className="logo">Najjar.dev</Link>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {navIds.map(id => (
            <Link
              key={id}
              href={`/${id}`}
              className={active === id ? 'active' : ''}
            >
              {t(id)}
            </Link>
          ))}
        </div>
        <div className="nav-lang" role="group" aria-label={t('language')}>
          <button
            type="button"
            className={`nav-lang-btn${locale === 'en' ? ' active' : ''}`}
            onClick={() => switchLocale('en')}
            aria-pressed={locale === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            className={`nav-lang-btn${locale === 'ar' ? ' active' : ''}`}
            onClick={() => switchLocale('ar')}
            aria-pressed={locale === 'ar'}
          >
            ع
          </button>
        </div>
        <Link href="/contact" className="nav-cta">{t('hireMe')}</Link>
        <button
          className="nav-toggle"
          aria-label={t('toggle')}
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
