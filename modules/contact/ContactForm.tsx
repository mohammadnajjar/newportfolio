'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

// slug -> visible <option> label
const serviceMap: Record<string, string> = {
  'saas-mvp': 'SaaS MVP (6 weeks)',
  'enterprise-web': 'Enterprise Web Application',
  'mobile-app': 'Cross-platform Mobile App',
  'performance': 'Performance Optimization',
  'fractional-cto': 'Fractional CTO',
  'audit': 'Technical Audit',
  'website': 'Custom Website Development',
  'api-backend': 'API & Backend Engineering',
  'iot': 'IoT & Real-time Systems',
  'ecommerce': 'E-commerce Platform',
  'admin-dashboard': 'Admin Dashboard & Internal Tools',
  'devops': 'DevOps & Deployment Setup',
  'wordpress': 'WordPress Development',
  'shopify': 'Shopify Store Build',
  'crm': 'CRM System Development',
  'landing-pages': 'High-Conversion Landing Pages',
  'mentoring': 'Engineering Team Mentoring',
  'seo': 'SEO & Multilingual Optimization',
}

const allServices = [
  'SaaS MVP (6 weeks)',
  'Enterprise Web Application',
  'Cross-platform Mobile App',
  'Performance Optimization',
  'Fractional CTO',
  'Technical Audit',
  'Custom Website Development',
  'API & Backend Engineering',
  'IoT & Real-time Systems',
  'E-commerce Platform',
  'Admin Dashboard & Internal Tools',
  'DevOps & Deployment Setup',
  'WordPress Development',
  'Shopify Store Build',
  'CRM System Development',
  'High-Conversion Landing Pages',
  'Engineering Team Mentoring',
  'SEO & Multilingual Optimization',
  'Something else',
]

function ContactFormInner() {
  const params = useSearchParams()
  const slug = params.get('service') || ''
  const preSelectedService = serviceMap[slug] || ''
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState(preSelectedService)

  return (
    <form
      className="contact-form"
      onSubmit={e => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <h2>Start a project</h2>
      <p>Takes less than 2 minutes. Every field helps me reply with something useful.</p>

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
          ✓ Pre-filled for <strong>{preSelectedService}</strong> — change anything below.
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required placeholder="e.g. Sara Al-Hashimi" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@yourdomain.com" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">Company (optional)</label>
          <input type="text" id="company" name="company" placeholder="Acme Studios" />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget range</label>
          <select id="budget" name="budget" required defaultValue="">
            <option value="">Select a range</option>
            <option>Under $3,000</option>
            <option>$3,000 — $8,000</option>
            <option>$8,000 — $20,000</option>
            <option>$20,000 — $50,000</option>
            <option>$50,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">What do you need?</label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={e => setService(e.target.value)}
        >
          <option value="">Select a service</option>
          {allServices.map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" defaultValue="">
          <option value="">Select a timeline</option>
          <option>ASAP — I have a hard deadline</option>
          <option>Within 1 month</option>
          <option>Within 1–3 months</option>
          <option>3+ months — still planning</option>
          <option>Just exploring</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell me about your project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, who's it for, and what does success look like? Even two or three sentences is fine — I'll ask for details on the call."
        />
      </div>

      <button type="submit">
        {submitted ? '✓ Sent — talk soon' : 'Send the message'} <span className="arrow">↗</span>
      </button>

      <div className="form-footnote">
        ✓ I reply personally · ✓ NDA available on request · ✓ No cold sales follow-ups
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
