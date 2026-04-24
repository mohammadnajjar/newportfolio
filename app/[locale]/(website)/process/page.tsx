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
  {
    lbl: 'Planning', name: 'Linear', desc: 'Issue tracking, sprint planning, transparent roadmap.',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M10 90 L90 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        <path d="M10 60 L60 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        <path d="M10 30 L30 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        <path d="M40 90 L90 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        <path d="M70 90 L90 70" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    lbl: 'Design', name: 'Figma', desc: 'Wireframes, mockups, and a shared design system.',
    logo: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="42">
        <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
        <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38h9.5v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
        <path d="M19 .5h9.5a9.5 9.5 0 0 1 0 19H19z" fill="#FF7262"/>
        <path d="M.5 28.5A9.5 9.5 0 0 1 10 19h9v19H10a9.5 9.5 0 0 1-9.5-9.5z" fill="#A259FF"/>
        <path d="M.5 9.5A9.5 9.5 0 0 1 10 .5h9v19H10A9.5 9.5 0 0 1 .5 9.5z" fill="#F24E1E"/>
      </svg>
    ),
  },
  {
    lbl: 'Backend', name: 'Laravel', desc: 'Battle-tested PHP framework. Ships fast, scales sensibly.',
    logo: (
      <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001L10.42.232c.248-.143.553-.143.8 0l10.45 6.034h.001c.033.02.06.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.615V11.773c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l10.451-6.033c.248-.143.552-.143.8 0l10.45 6.033c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.016.024.039.045.054.071.022.039.036.082.05.124.008.023.022.044.03.068zm-1.572 10.701v-9.423l-3.369 1.944-4.638 2.671v9.423l8.007-4.615zm-9.61 16.505v-9.428l-4.57 2.607-13.05 7.432v9.522l17.62-10.133zM1.602 7.719v31.53l17.619 10.134v-9.522l-9.2-5.238-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.013-.078-.016-.117-.003-.035-.01-.07-.009-.106v-.001-21.483L8.023 9.974l-6.42-3.702v1.447zm9.014-5.198L2.607 7.133l8.009 4.617 8.009-4.617-8.009-4.612zm4.387 27.347l4.638-2.671V7.719l-3.369 1.945-4.638 2.671v19.478l3.369-1.945zM39.623 7.133l-8.008 4.617 8.008 4.617 8.008-4.617-8.008-4.617zm-.801 10.693l-4.638-2.671-3.369-1.945v9.423l4.638 2.671 3.369 1.944v-9.422zM20.021 38.827l11.093-6.332 5.545-3.165-8-4.612-9.211 5.303-8.395 4.836 8.968 3.97z" fill="#FF2D20"/>
      </svg>
    ),
  },
  {
    lbl: 'Frontend', name: 'React + Vite', desc: 'Modern frontend, fast builds, TypeScript by default.',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <circle cx="50" cy="50" r="9" fill="#61DAFB"/>
        <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4"/>
        <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)"/>
      </svg>
    ),
  },
  {
    lbl: 'Mobile', name: 'Flutter', desc: 'Native iOS + Android from a single well-tested codebase.',
    logo: (
      <svg viewBox="0 0 66 75" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="36">
        <path d="M38.8 0L0 38.8l12.2 12.2L63.2 0H38.8z" fill="#54C5F8"/>
        <path d="M38.8 36.6L21.2 54.2l12.1 12.1 5.9-5.9 17.5-17.6-17.9-6.2z" fill="#54C5F8"/>
        <path d="M21.2 54.2l12.1 12.1 5.9-5.9-12-12.2-6 6z" fill="#01579B"/>
        <path d="M33.3 66.3L45.5 78.5l17.7-17.7-17.5-17.6-12.4 23.1z" fill="#29B6F6"/>
      </svg>
    ),
  },
  {
    lbl: 'DevOps', name: 'Docker + CI', desc: 'Reproducible builds, GitHub Actions, zero-downtime deploys.',
    logo: (
      <svg viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="32">
        <rect x="8" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="25" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="42" y="8" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="25" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="42" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="59" y="23" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="42" y="38" width="14" height="12" rx="2" fill="#2496ED"/>
        <path d="M6 52 Q50 72 94 52" stroke="#2496ED" strokeWidth="3" fill="none"/>
        <circle cx="82" cy="42" r="8" fill="none" stroke="#2496ED" strokeWidth="3"/>
        <path d="M90 42 Q96 36 92 30" stroke="#2496ED" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
  },
  {
    lbl: 'DB', name: 'MySQL / Postgres', desc: 'Relational, indexed, queried with intention.',
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <ellipse cx="30" cy="12" rx="26" ry="10" fill="#336791"/>
        <path d="M4 12v12c0 5.523 11.64 10 26 10s26-4.477 26-10V12c0 5.523-11.64 10-26 10S4 17.523 4 12z" fill="#336791"/>
        <path d="M4 24v12c0 5.523 11.64 10 26 10s26-4.477 26-10V24c0 5.523-11.64 10-26 10S4 29.523 4 24z" fill="#336791"/>
        <ellipse cx="30" cy="12" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="1.5" strokeOpacity=".3"/>
        <ellipse cx="30" cy="24" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="1.5" strokeOpacity=".2"/>
        <ellipse cx="30" cy="36" rx="26" ry="10" fill="#336791" stroke="#fff" strokeWidth="1.5" strokeOpacity=".2"/>
      </svg>
    ),
  },
  {
    lbl: 'Comms', name: 'Slack / WhatsApp', desc: 'I live in your channel. 4-hour average response time.',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect x="10" y="40" width="18" height="18" rx="9" fill="#E01E5A"/>
        <rect x="10" y="62" width="18" height="18" rx="9" fill="#E01E5A"/>
        <rect x="32" y="10" width="18" height="18" rx="9" fill="#36C5F0"/>
        <rect x="54" y="10" width="18" height="18" rx="9" fill="#2EB67D"/>
        <rect x="54" y="32" width="18" height="18" rx="9" fill="#2EB67D"/>
        <rect x="76" y="32" width="18" height="18" rx="9" fill="#2EB67D"/>
        <rect x="32" y="54" width="18" height="18" rx="9" fill="#ECB22E"/>
        <rect x="32" y="76" width="18" height="18" rx="9" fill="#ECB22E"/>
        <rect x="54" y="54" width="18" height="18" rx="9" fill="#36C5F0"/>
      </svg>
    ),
  },
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
            {tools.map(({ lbl, name, desc, logo }) => (
              <div className="tool-card" key={name}>
                <div className="tool-card-logo">{logo}</div>
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
