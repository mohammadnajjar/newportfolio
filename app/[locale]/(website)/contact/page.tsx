import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'
import ContactForm from '@/modules/contact/ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch — email, WhatsApp, LinkedIn, or book a free 30-minute discovery call. Replies in under 4 hours, GMT+4.',
}

export default function ContactPage() {
  return (
    <>
      <SiteTicker items="CONTACT · DUBAI · GMT+4 | RESPONSE UNDER 4H IN BUSINESS HOURS | FREE NDA · FREE DISCOVERY CALL" />
      <SiteNav active="contact" />

      <header className="page-header" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="eyebrow">Get in touch</div>
        </div>
      </header>

      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro">
            <h1>Let&apos;s build<br />something <span className="serif">useful.</span></h1>
            <p>
              Tell me what you&apos;re trying to ship. I reply inside 4 hours in business
              hours (Dubai, GMT+4), often much faster. No obligation, no sales pitch —
              if we&apos;re not the right fit I&apos;ll say so and point you somewhere better.
            </p>

            <div className="contact-channels">
              <a href="mailto:mohammadnajjamgl@gmail.com" className="contact-channel">
                <div className="contact-channel-icon">@</div>
                <div className="contact-channel-body">
                  <div className="lbl">Email — fastest</div>
                  <div className="val">mohammadnajjamgl@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/971501026045" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">W</div>
                <div className="contact-channel-body">
                  <div className="lbl">WhatsApp — for quick questions</div>
                  <div className="val">+971 50 102 6045</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mglnaj" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">L</div>
                <div className="contact-channel-body">
                  <div className="lbl">LinkedIn — for long threads</div>
                  <div className="val">linkedin.com/in/mglnaj</div>
                </div>
              </a>
              <a href="https://cal.com/mohammadnajjar" target="_blank" rel="noopener noreferrer" className="contact-channel">
                <div className="contact-channel-icon">C</div>
                <div className="contact-channel-body">
                  <div className="lbl">Book a call — 30 minutes, free</div>
                  <div className="val">cal.com/mohammadnajjar</div>
                </div>
              </a>
            </div>

            <div className="contact-sla">
              <div className="icon">⏱</div>
              <div className="txt">
                <strong>4-hour average response</strong>
                Business hours, GMT+4. Under 1 hour for retainer clients on urgent issues.
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <section style={{ padding: '80px 0 120px', background: 'var(--paper-dark)', borderTop: '2px solid var(--ink)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '56px', alignItems: 'flex-start' }}>
            <div>
              <div className="section-eyebrow">Where I work</div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Dubai, <span className="serif">UAE.</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
                Based in Dubai (GMT+4). Most engagements are remote, but I meet local
                clients in person when it helps. Regularly work across MENA, Europe,
                and the US with live overlap hours.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', lineHeight: 2 }}>
                <div>Business hours · Sun — Thu · 09:00 — 19:00 GST</div>
                <div>Weekend response · within 24h for urgent items</div>
                <div>Travel · available for on-site kickoffs</div>
              </div>
            </div>

            <div>
              <div className="section-eyebrow">Quick answers</div>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                Before you <span className="serif">ask.</span>
              </h2>

              <FAQAccordion
                items={[
                  { q: 'How fast do you respond?', a: 'Average is under 4 hours during business hours (GMT+4). Urgent items on retainer clients are under an hour.' },
                  { q: 'Do I need a finished spec to reach out?', a: 'No. Most clients start with a rough idea. The discovery call exists to turn it into a scoped, estimated, realistic plan.' },
                  { q: 'Can you sign an NDA before we talk details?', a: "Yes, and it's free. Send me yours or use my mutual template. We sign before anything sensitive hits a message." },
                  { q: "Can we meet in person if I'm in Dubai?", a: "Happy to — DIFC, Business Bay or Downtown. Just propose a coffee spot in the form or on WhatsApp and I'll confirm." },
                ]}
              />

              <div style={{ marginTop: '24px' }}>
                <Link href="/faq" className="btn-ghost">See full FAQ →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter headline="contact" />
    </>
  )
}
