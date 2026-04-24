'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

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
        <select id="service" name="service" required defaultValue="">
          <option value="">Select a service</option>
          <option>SaaS MVP (6 weeks)</option>
          <option>Enterprise Web Application</option>
          <option>Cross-platform Mobile App</option>
          <option>Performance Optimization</option>
          <option>Fractional CTO</option>
          <option>Technical Audit</option>
          <option>Something else</option>
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
