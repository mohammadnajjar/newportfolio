import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about working together — availability, pricing, payment, IP, and support.',
}

const groups = [
  {
    id: 'working',
    title: <>Working <span className="serif">together</span></>,
    desc: 'Availability, scope, collaboration model.',
    items: [
      { q: "What's your current availability?", a: 'I accept a maximum of 3 concurrent projects to protect quality. Typical project start is 1–2 weeks after contract signing. For urgent needs I offer a rush option with a 20% premium.' },
      { q: 'Do you work with international clients?', a: "Yes. I'm based in Dubai but most of my freelance work is remote. I regularly collaborate with clients across Europe, the US, and MENA. Daily standup in your timezone is not a problem." },
      { q: 'Do you work alone or with a team?', a: 'For small-to-medium projects (under $10k): solo. For larger enterprise engagements I lead a hand-picked team of 2–5 trusted engineers under my direct supervision. You always deal with me as the primary contact.' },
      { q: 'What if I only have a rough idea, not a spec?', a: "That's the norm, not the exception. The discovery call and proposal stage exist exactly for that — we turn your rough idea into a scoped, estimated, realistic plan. No need to write a spec to get started." },
      { q: 'Can you take over a project someone else started?', a: "Yes, but I require a paid technical audit first ($1,200, fixed). This protects us both — I can see what I'm inheriting, and you get a written report either way, even if we decide not to continue together." },
    ],
  },
  {
    id: 'pricing',
    title: <>Pricing &amp; <span className="serif">payment</span></>,
    desc: 'How engagements are priced and how money moves.',
    items: [
      { q: "What's your payment structure?", a: 'Standard: 30% upfront, 40% at mid-project milestone, 30% upon delivery. Accepted methods: bank transfer (AED, USD, EUR), Wise, PayPal, or crypto (USDT). All fees are fixed — no hidden surprises.' },
      { q: 'Do you offer hourly rates?', a: "For ad-hoc work, yes — $75/hour. For full projects, I strongly prefer fixed pricing. Fixed pricing aligns incentives: I'm paid to deliver outcomes, not to spend hours." },
      { q: 'What happens if scope changes mid-project?', a: 'Change requests get a written mini-proposal: what it is, how it impacts timeline, and a fixed price add-on. You approve or decline before I touch a line of code. No silent scope creep.' },
      { q: 'Do you invoice in AED, USD, or EUR?', a: 'All three. Invoices are issued from my Dubai entity with proper VAT handling. I can also invoice in GBP on request.' },
      { q: 'Are there any discounts?', a: "Nonprofits and early-stage founders (pre-seed, no funding) can ask for a 15% scope discount. I don't negotiate pricing otherwise — my rates are already set fairly for the deliverable." },
    ],
  },
  {
    id: 'delivery',
    title: <>Delivery &amp; <span className="serif">support</span></>,
    desc: 'What you get, and what happens after launch.',
    items: [
      { q: 'What if I need changes after delivery?', a: 'Every project comes with 30 days of free bug fixes. For new features or major changes, monthly maintenance retainers start at $800/month. Hourly rate $75/hour for ad-hoc work.' },
      { q: 'Where does the code get deployed?', a: "On your infrastructure, always. Your cloud, your servers, your domain. I don't host client code. You own the deployment pipeline and credentials from day one." },
      { q: 'What if you become unavailable mid-project?', a: 'Every project has a written continuity plan — repository access, deployment runbook, and architecture doc. If something happens to me, any competent Laravel/React engineer can pick up where I left off. No lock-in.' },
      { q: 'Do you provide documentation?', a: 'Yes — architecture overview, API reference (OpenAPI spec), a deployment runbook, and a short handover video. All included. Documentation is a deliverable, not an afterthought.' },
      { q: 'How fast do you respond during a project?', a: 'Average response time during active work: under 4 hours in business hours (GST/GMT+4). For urgent production issues on clients with retainers, under 1 hour.' },
    ],
  },
  {
    id: 'legal',
    title: <>Legal &amp; <span className="serif">IP</span></>,
    desc: 'Who owns what, and how we protect it.',
    items: [
      { q: 'How do you handle intellectual property?', a: "I sign NDAs before any detailed discussion — free of charge. All code, files, and documentation belong to you 100%. I don't use your project in my portfolio without explicit written permission." },
      { q: 'Do you use open-source or proprietary libraries?', a: 'I use permissively-licensed open-source libraries (MIT, Apache, BSD). No AGPL, no copyleft surprises, no commercial SDKs without your explicit approval. Every dependency is audited before shipping.' },
      { q: 'What contract do you work under?', a: "Either my standard MSA + SOW, or yours — I'm happy to review and sign reasonable client agreements. Dubai jurisdiction by default, but I've worked under English, EU and US law as well." },
      { q: 'Can I see examples of past NDAs or contracts?', a: "Templates yes, signed ones no — that would defeat the point of the NDA. Ask and I'll send you my current MSA and mutual NDA templates for your legal team to review." },
      { q: 'Do you carry professional insurance?', a: 'Yes — professional indemnity coverage via a Dubai-based insurer. Certificate of coverage available on request during contracting.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <SiteTicker items="FAQ · ANSWERS BEFORE YOU ASK | AVAILABILITY · PRICING · IP · SUPPORT | EMAIL ME ANYTIME" />
      <SiteNav active="faq" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Questions answered</div>
          <h1>Frequently<br /><span className="serif">asked.</span></h1>
          <p>
            Everything clients typically ask before we start — availability, pricing,
            payments, IP ownership, support, working style. Honest answers, no marketing
            fluff. If something&apos;s missing, send me a note.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <h4>Jump to</h4>
              <a href="#working">Working together</a>
              <a href="#pricing">Pricing &amp; payment</a>
              <a href="#delivery">Delivery &amp; support</a>
              <a href="#legal">Legal &amp; IP</a>
            </aside>

            <div>
              {groups.map(g => (
                <div key={g.id} className="faq-group" id={g.id}>
                  <h2 className="faq-group-title">{g.title}</h2>
                  <p className="faq-group-desc">{g.desc}</p>
                  <FAQAccordion items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="container">
          <h2>Didn&apos;t find<br />your <span className="serif">answer?</span></h2>
          <p>No problem. Send me the question directly — I&apos;ll reply within a few hours, and I won&apos;t charge you to ask.</p>
          <div className="help-cta-group">
            <a href="mailto:mohammadnajjamgl@gmail.com?subject=Quick%20Question" className="btn-big on-dark">Email me <span className="arrow">↗</span></a>
            <a href="https://wa.me/971501026045" className="btn-big secondary" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
