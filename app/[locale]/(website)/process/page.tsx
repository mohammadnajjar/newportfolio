import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'

export const metadata = {
  title: 'Process',
  description: 'Six clearly-defined stages from first call to post-launch support. Transparent, fixed-price, weekly demos.',
}

const stages = [
  { n: '01', t: 'Discovery Call', sub: 'Free · No obligation', p: "A 30-minute conversation to understand your goals, constraints, and what \"done\" actually looks like. I ask the tough questions upfront so we avoid expensive surprises later.", li: ['What problem does this solve, and for whom?', "What's your budget, and is it realistic for the scope?", 'What does success look like — in metrics, not adjectives?'], time: '30 min · Free' },
  { n: '02', t: 'Proposal & Plan', sub: 'Written, itemized, specific', p: 'Within 48 hours of our call, you get a document — stack recommendation, timeline, itemized budget, and concrete deliverables. No vague promises, everything specific and measurable.', li: ['Architecture decisions (and why)', 'Milestone-by-milestone timeline', 'Line-item budget with no hidden fees'], time: '48 hours' },
  { n: '03', t: 'Design & Architecture', sub: 'Paper before code', p: 'Wireframes, database schema, API contracts, UI mockups — everything documented before a single line of production code is written. You approve every step.', li: ['Figma mockups for every screen', 'Database schema & relationships', 'API contract (OpenAPI spec)'], time: '1–2 weeks' },
  { n: '04', t: 'Weekly Sprints', sub: 'Build · Demo · Adjust', p: 'A live demo every Friday. You see real progress, give real feedback, and we adjust before small changes become expensive. Your staging environment is always reachable.', li: ['Friday demo call, 30–45 min', 'Always-on staging environment', 'Daily commits visible in your repo'], time: '4–12 weeks' },
  { n: '05', t: 'Testing & Launch', sub: 'QA · Perf · Security', p: 'Full QA pass, performance testing, security review, and deployment on your infrastructure — your servers or your cloud, not mine. Complete handover with written documentation.', li: ['Load & performance testing', 'Security review (OWASP Top 10)', 'Deployment runbook & handover docs'], time: '1 week' },
  { n: '06', t: 'Post-Launch Support', sub: '30 days free · Retainer optional', p: "30 days of free bug fixes — you shouldn't pay to fix my mistakes. Optional monthly retainer afterwards for ongoing features, security patches, and improvements.", li: ['30 days of bug fixes, free', 'Optional retainer from $800 / mo', 'Clear escalation path for urgent issues'], time: 'Ongoing' },
]

const principles = [
  ['01', 'Transparency over polish', 'You see the real state of the work every week, even the messy bits. Polish comes at the end; visibility comes from day one.'],
  ['02', 'Your code, your infrastructure', 'Every line belongs to you, 100%. Deployed on your cloud, your servers, your domain. No vendor lock-in, ever.'],
  ['03', 'Fixed price, flexible scope', 'The price you sign is the price you pay. If scope changes, we renegotiate openly — no silent overruns, no billed surprises.'],
  ['04', 'Architecture before ambition', 'Grand visions only survive on solid foundations. We agree the schema, contracts and flows before the first commit.'],
  ['05', 'Honest over optimistic', "If I don't know, I'll say so. If a deadline is at risk, you'll hear it early — not the day it slips."],
  ['06', 'Performance is a feature', 'Every feature ships with a performance budget. Slow software is broken software, even when all the tests pass.'],
]

const tools = [
  ['Planning', 'Linear', 'Issue tracking, sprint planning, transparent roadmap.'],
  ['Design', 'Figma', 'Wireframes, mockups, and a shared design system.'],
  ['Backend', 'Laravel', 'Battle-tested PHP framework. Ships fast, scales sensibly.'],
  ['Frontend', 'React + Vite', 'Modern frontend, fast builds, TypeScript by default.'],
  ['Mobile', 'Flutter', 'Native iOS + Android from a single well-tested codebase.'],
  ['DevOps', 'Docker + CI', 'Reproducible builds, GitHub Actions, zero-downtime deploys.'],
  ['DB', 'MySQL / Postgres', 'Relational, indexed, queried with intention.'],
  ['Comms', 'Slack / WhatsApp', 'I live in your channel. 4-hour average response time.'],
]

export default function ProcessPage() {
  return (
    <>
      <SiteTicker items="PROCESS · DISCOVERY → PROPOSAL → DESIGN → SPRINTS → LAUNCH → SUPPORT | WEEKLY DEMOS | YOUR CODE · YOUR CLOUD" />
      <SiteNav active="process" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">How we work together</div>
          <h1>Simple,<br /><span className="serif">transparent</span><br />process.</h1>
          <p>
            No surprises, no vague promises. Six clearly-defined stages from the first
            call to post-launch support. You see real progress every week, and you&apos;re
            always in control — of the scope, the schedule, and the code.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="process-list">
            {stages.map(s => (
              <div key={s.n} className="process-row">
                <div className="process-num-big">{s.n}</div>
                <div className="process-head">
                  <h3>{s.t}</h3>
                  <div className="process-subtitle">{s.sub}</div>
                </div>
                <div className="process-body">
                  <p>{s.p}</p>
                  <ul>
                    {s.li.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="process-time">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="eyebrow">The principles behind it</div>
          <h2>The way I work <span className="serif">is the product.</span></h2>
          <div className="principles-grid">
            {principles.map(([n, t, p]) => (
              <div className="principle" key={n}>
                <div className="principle-num">{n}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">How the sausage gets made</div>
            <h2>Tools I use <span className="serif">every day</span></h2>
          </div>
          <div className="tools-grid">
            {tools.map(([lbl, name, desc]) => (
              <div className="tool-card" key={name}>
                <div className="tool-label">{lbl}</div>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mega-cta">
        <div className="container mega-cta-content">
          <h2>Ready when<br />you <span className="serif">are.</span></h2>
          <p>
            Start with the discovery call. 30 minutes, no pitch — just a conversation about
            what you&apos;re trying to build and whether I&apos;m the right fit.
          </p>
          <Link href="/contact" className="btn-big">
            Book the call <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
