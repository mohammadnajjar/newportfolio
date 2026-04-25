'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

function ContactFormInner() {
  const t = useTranslations('contactPage.form')
  const tServices = useTranslations('servicesPage')
  const params = useSearchParams()
  const slug = params.get('service') || ''

  // Build service slug -> translated label map from the services list
  const serviceItems = tServices.raw('items') as Array<{ slug: string; title: string }>
  const serviceMap: Record<string, string> = Object.fromEntries(
    serviceItems.map(s => [s.slug, s.title])
  )
  const allServiceLabels = serviceItems.map(s => s.title)
  const somethingElse = t('somethingElse')

  const preSelectedService = serviceMap[slug] || ''
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState(preSelectedService)

  const budgetOptions = t.raw('budgetOptions') as string[]
  const timelineOptions = t.raw('timelineOptions') as string[]

  return (
    <form
      className="contact-form"
      onSubmit={e => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <h2>{t('title')}</h2>
      <p>{t('subtitle')}</p>

      {preSelectedService && (
        <div
          style={{
            padding: '12px 16px',
            marginBottom: '20px',
            background: 'var(--accent-soft)',
            border: '1.5px solid var(--accent)',
            borderRadius: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--ink)',
          }}
        >
          {t.rich('preFilled', {
            service: () => <strong>{preSelectedService}</strong>,
          })}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">{t('labelName')}</label>
          <input type="text" id="name" name="name" required placeholder={t('placeholderName')} />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('labelEmail')}</label>
          <input type="email" id="email" name="email" required placeholder={t('placeholderEmail')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">{t('labelCompany')}</label>
          <input type="text" id="company" name="company" placeholder={t('placeholderCompany')} />
        </div>
        <div className="form-group">
          <label htmlFor="budget">{t('labelBudget')}</label>
          <select id="budget" name="budget" required defaultValue="">
            <option value="">{t('selectRange')}</option>
            {budgetOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">{t('labelService')}</label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={e => setService(e.target.value)}
        >
          <option value="">{t('selectService')}</option>
          {allServiceLabels.map(s => (
            <option key={s}>{s}</option>
          ))}
          <option>{somethingElse}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="timeline">{t('labelTimeline')}</label>
        <select id="timeline" name="timeline" defaultValue="">
          <option value="">{t('selectTimeline')}</option>
          {timelineOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('labelMessage')}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t('placeholderMessage')}
        />
      </div>

      <button type="submit">
        {submitted ? t('submitted') : t('submit')} <span className="arrow">↗</span>
      </button>

      <div className="form-footnote">
        {t('footnote')}
      </div>
    </form>
  )
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="contact-form" style={{ minHeight: '600px' }} />}>
      <ContactFormInner />
    </Suspense>
  )
}
