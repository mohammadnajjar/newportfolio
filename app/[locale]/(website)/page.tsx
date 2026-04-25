import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'
import SkillsGrid from '@/modules/experience/SkillsGrid'

export default function HomePage() {
  return (
    <>
      <SiteTicker items="AVAILABLE FOR Q3 2026 PROJECTS | DUBAI · GMT+4 | LARAVEL · REACT · FLUTTER · IOT | TECH LEAD @ YS LOOTAH" />
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-identity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.com/mohammadnajjar.png?size=120"
                  alt="Mohammad Najjar"
                  className="hero-avatar"
                  width={48}
                  height={48}
                  loading="eager"
                />
                <div className="hero-identity-text">
                 
                  <div className="hero-tag">
                    <span className="dot" />
                    Available for new projects · Q3 2026
                  </div>
                </div>
              </div>

              <div className="hero-mono-caption">
                <span className="hmc-prompt">~$</span> whoami{' '}
                <span className="hmc-comment">// full-stack · dubai · ships fast</span>
              </div>

              <h1>
                I build <span className="italic">digital</span> products that{' '}
                <span className="highlight">ship</span>
              </h1>
              <p>
                Full-stack engineer based in Dubai. Six years building enterprise SaaS,
                IoT platforms, and mobile apps that real people use every day.
              </p>
              <div className="hero-cta-group">
                <Link href="#contact" className="btn-big">
                  Start a project <span className="arrow">↗</span>
                </Link>
                <Link href="/work" className="btn-ghost">
                  See selected work →
                </Link>
              </div>

              <div className="hero-stack-strip">
                <span className="hss-label">Stack</span>
                {[
                  { slug: 'laravel',     color: 'FF2D20', name: 'Laravel' },
                  { slug: 'react',       color: '61DAFB', name: 'React' },
                  { slug: 'flutter',     color: '02569B', name: 'Flutter' },
                  { slug: 'kubernetes',  color: '326CE5', name: 'Kubernetes' },
                  { slug: 'docker',      color: '2496ED', name: 'Docker' },
                  { slug: 'mysql',       color: '4479A1', name: 'MySQL' },
                  { slug: 'redis',       color: 'DC382D', name: 'Redis' },
                  { slug: 'typescript',  color: '3178C6', name: 'TypeScript' },
                ].map(t => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={t.slug}
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt={t.name}
                    title={t.name}
                    width={22}
                    height={22}
                    loading="lazy"
                    className="hss-logo"
                  />
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card hero-card-1">
                <div className="hc-label">Shipped</div>
                <div className="hc-big">90+</div>
                <div className="hc-desc">production projects across 14 industries</div>
              </div>
              <div className="hero-card hero-card-2">
                <div className="hc-label">Currently</div>
                <div className="hc-big">Tech Lead</div>
                <div className="hc-desc">@ YS Lootah · 11 engineers</div>
              </div>

              {/* Code card — replaces the old "Performance 92%" stat */}
              <div className="hero-card hero-card-code">
                <div className="hcc-bar">
                  <span className="hcc-dot hcc-dot-r" />
                  <span className="hcc-dot hcc-dot-y" />
                  <span className="hcc-dot hcc-dot-g" />
                  <span className="hcc-file">~/about.ts</span>
                </div>
                <pre className="hcc-code">
                  <code>
                    <span className="cc-key">const</span>{' '}
                    <span className="cc-var">me</span> = {'{'}
                    {'\n'}  role: <span className="cc-str">&apos;engineer&apos;</span>,
                    {'\n'}  stack: [<span className="cc-str">&apos;laravel&apos;</span>,{' '}
                    <span className="cc-str">&apos;flutter&apos;</span>],
                    {'\n'}  ships: <span className="cc-num">90</span>,
                    {'\n'}  available: <span className="cc-key">true</span>,
                    {'\n'}{'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip" style={{ padding: '40px 0' }}>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-big">6<span className="plus">+</span></div>
            <div className="stat-lbl">Years building</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">90<span className="plus">+</span></div>
            <div className="stat-lbl">Projects shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">11</div>
            <div className="stat-lbl">Engineers led</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">25k<span className="plus">+</span></div>
            <div className="stat-lbl">LinkedIn followers</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">What I do</div>
            <h2 className="section-title">
              Flagship services, <span className="serif">one engineer</span>
            </h2>
            <p className="section-desc">
              Fixed pricing. No retainers unless you want one. Senior code, every time.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-block featured">
              <div className="service-num">01</div>
              <div className="service-icon">S</div>
              <h3>SaaS MVP in 6 weeks</h3>
              <p>
                Auth, billing, admin panel, your one core feature. Live and taking
                payments in six weeks or I keep working free until it is.
              </p>
              <div className="service-price">
                Starting at <strong>$4,500</strong>
              </div>
            </div>

            <div className="service-block">
              <div className="service-num">02</div>
              <div className="service-icon">E</div>
              <h3>Enterprise Web Platform</h3>
              <p>
                Multi-role dashboards, complex business rules, integration with legacy
                apps, IoT tracking, real-time monitoring. Built for scale from day one.
              </p>
              <div className="service-price">
                Starting at <strong>$8,000</strong>
              </div>
            </div>

            <div className="service-block">
              <div className="service-num">03</div>
              <div className="service-icon">M</div>
              <h3>Cross-platform Mobile App</h3>
              <p>
                Flutter-based. One codebase, iOS + Android. Push notifications, payment
                integration, App Store + Play Store deployment included.
              </p>
              <div className="service-price">
                Starting at <strong>$3,500</strong>
              </div>
            </div>

            <div className="service-block">
              <div className="service-num">04</div>
              <div className="service-icon">P</div>
              <h3>Performance Optimization</h3>
              <p>
                Your app is slow? I find the bottlenecks. Database queries, caching
                strategy, frontend bundle size, server configuration. Guaranteed 50%+ improvement.
              </p>
              <div className="service-price">
                Starting at <strong>$800</strong>
              </div>
            </div>

            <div className="service-block">
              <div className="service-num">05</div>
              <div className="service-icon">C</div>
              <h3>Fractional CTO</h3>
              <p>
                Need CTO-level thinking without full-time cost? 10–20 hours/week:
                architecture decisions, code reviews, hiring, roadmap planning, team mentoring.
              </p>
              <div className="service-price">
                From <strong>$2,000 / mo</strong>
              </div>
            </div>

            <div className="service-block">
              <div className="service-num">06</div>
              <div className="service-icon">R</div>
              <h3>Technical Audit</h3>
              <p>
                48-hour deep dive into your codebase, infrastructure, and architecture.
                You get a written report with prioritized recommendations and clear next steps.
              </p>
              <div className="service-price">
                Fixed price <strong>$1,200</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Selected work</div>
            <h2 className="section-title">
              Real projects, <span className="serif">real clients</span>
            </h2>
            <p className="section-desc">
              A curated selection from 90+ projects. Each one shipped, tested, and serving users.
            </p>
          </div>

          <div className="work-grid">
            <Link href="/projects/ucofy" className="work-item size-lg featured">
              <div className="work-tag">IoT · SaaS · Multi-role</div>
              <h3 className="work-title">UCOFY</h3>
              <p className="work-desc">
                A full digital platform managing the entire lifecycle of used cooking oil
                collection. 5 integrated applications, real-time driver tracking, IoT sensor
                integration, and a comprehensive reporting and accountability system.
              </p>
              <div className="work-tech">
                <span>Laravel</span><span>Flutter</span><span>MySQL</span>
                <span>Real-time</span><span>IoT</span><span>Multi-role</span>
              </div>
            </Link>

            <Link href="/projects/yjoz" className="work-item size-md accent">
              <div className="work-tag">E-commerce · Mobile</div>
              <h3 className="work-title">YJOZ</h3>
              <p className="work-desc">
                Full-featured e-commerce mobile application for iOS and Android with inventory,
                secure payments, and conversion-optimized UX.
              </p>
              <div className="work-tech">
                <span>Flutter</span><span>Laravel API</span><span>Payment Gateway</span>
              </div>
            </Link>

            <Link href="/projects/royce" className="work-item size-md lime">
              <div className="work-tag">Real Estate</div>
              <h3 className="work-title">Royce</h3>
              <p className="work-desc">
                Premium real estate platform for Dubai market — residential, commercial, and
                off-plan listings with advanced filters.
              </p>
              <div className="work-tech">
                <span>Laravel</span><span>React</span><span>Custom CMS</span>
              </div>
            </Link>

            <Link href="/projects/yslinvestments" className="work-item size-sm">
              <div className="work-tag">Holding</div>
              <h3 className="work-title">YSL Investments</h3>
              <p className="work-desc">Corporate platform for a diversified Dubai investment group.</p>
            </Link>

            <Link href="/projects/zmkauto" className="work-item size-sm">
              <div className="work-tag">Automotive</div>
              <h3 className="work-title">ZMK Auto</h3>
              <p className="work-desc">Full digital solution for UAE automotive industry.</p>
            </Link>

            <Link href="/work" className="work-item size-sm">
              <div className="work-tag">All work</div>
              <h3 className="work-title">See all 90+ →</h3>
              <p className="work-desc">Apps, websites, e-commerce — full portfolio.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Skills</div>
            <h2 className="section-title">
              The full <span className="serif">tech stack</span>
            </h2>
            <p className="section-desc">
              Languages, frameworks, databases, and the practices that hold them together.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container">
          <p className="quote-big">
            Mohammad is an outstanding full-stack engineer who ranks in the{' '}
            <em>top 10%</em> of our peer group. Thoughtful, thorough, and a true
            professional throughout every interaction.
          </p>
          <div className="quote-author">
            <div className="quote-avatar">JI</div>
            <div>
              <div className="quote-name">Join Imagine Program</div>
              <div className="quote-role">OFFICIAL RECOMMENDATION · 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">How we work</div>
            <h2 className="section-title">
              Simple, <span className="serif">transparent</span> process
            </h2>
            <p className="section-desc">
              No surprises. Clear milestones. Weekly demos. You&apos;re always in control.
            </p>
          </div>

          <div className="process-list">
            {[
              { n: '01', t: 'Discovery Call', d: '30-minute call to understand your goals, challenges, and constraints. I ask the tough questions upfront so we avoid surprises later.', time: '30 min · Free' },
              { n: '02', t: 'Proposal & Plan', d: 'Within 48 hours: stack recommendation, timeline, itemized budget, deliverables. No vague promises — everything is specific and measurable.', time: '48 hours' },
              { n: '03', t: 'Design & Architecture', d: 'Wireframes, database schema, API contracts, UI mockups. Everything documented before a single line of code is written. You approve every step.', time: '1–2 weeks' },
              { n: '04', t: 'Weekly Sprints', d: 'Live demo every Friday. You see real progress, give feedback, and we adjust before changes become expensive. Maximum transparency.', time: '4–12 weeks' },
              { n: '05', t: 'Testing & Launch', d: 'Full QA, performance testing, security review, deployment on your infrastructure. Complete handover with documentation.', time: '1 week' },
              { n: '06', t: 'Post-Launch Support', d: '30 days of free bug fixes. Optional monthly maintenance retainer for ongoing improvements, security updates, and new features.', time: 'Ongoing' },
            ].map(row => (
              <div className="process-row" key={row.n}>
                <div className="process-num-big">{row.n}</div>
                <div><div className="process-title">{row.t}</div></div>
                <div className="process-body"><p>{row.d}</p></div>
                <div className="process-time">{row.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGA CTA */}
      <section className="mega-cta" id="contact">
        <div className="container mega-cta-content">
          <h2>
            Let&apos;s build<br />
            something <span className="serif">excellent</span>
          </h2>
          <p>
            Free 30-minute consultation. No pressure, no sales pitch. Just an honest
            conversation about your project and whether I&apos;m the right person for it.
          </p>
          <Link href="/contact" className="btn-big">
            Send me a message <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Common questions</div>
            <h2 className="section-title">
              Quick <span className="serif">answers</span>
            </h2>
          </div>

          <FAQAccordion
            items={[
              { q: 'When are you available to start?', a: 'I usually have one or two slots opening per quarter. Book a discovery call and I\'ll tell you the soonest realistic start date.' },
              { q: 'Do you work with international clients?', a: 'Yes — I\'m in Dubai (GMT+4) but work with founders from Europe, the US, and across MENA. Async-friendly and on-call when needed.' },
              { q: 'What if my project changes mid-build?', a: 'It usually does. We track changes weekly. Small ones are absorbed; large ones get a quick re-scope so you stay in control of budget and timeline.' },
              { q: 'Can you refer me if you\'re not the right fit?', a: 'Absolutely. I have a small network of trusted designers and engineers I refer to. No commission — just trying to help you ship.' },
            ]}
          />
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
