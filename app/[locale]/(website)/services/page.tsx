import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import TechStack from '@/modules/services/TechStack'

const industries = [
  {
    icon: '🏥',
    title: 'Health Care',
    desc: 'Digital health solutions, patient management systems, and medical data analytics.',
  },
  {
    icon: '🏦',
    title: 'Banking',
    desc: 'Secure banking platforms, digital wallets, and real-time transaction systems.',
  },
  {
    icon: '📈',
    title: 'Financial',
    desc: 'FinTech innovations, investment platforms, and regulatory compliance tools.',
  },
  {
    icon: '✈️',
    title: 'Tourism',
    desc: 'Travel booking systems, hospitality management, and visitor experience apps.',
  },
  {
    icon: '🛍️',
    title: 'Retail',
    desc: 'E-commerce platforms, inventory management, and omnichannel solutions.',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Smart factory solutions, supply chain optimization, and quality control systems.',
  },
  {
    icon: '🚚',
    title: 'Logistics & Transportation',
    desc: 'Fleet management, route optimization, and real-time tracking solutions.',
  },
  {
    icon: '💻',
    title: 'Information Technologies',
    desc: 'Enterprise IT solutions, cloud infrastructure, and cybersecurity services.',
  },
]


  title: 'Services',
  description: 'SaaS MVP, Enterprise platforms, mobile apps, performance audits, and fractional CTO. Fixed pricing, real accountability.',
}

const services = [
  {
    num: '01 / FLAGSHIP',
    icon: 'S',
    title: 'SaaS MVP in 6 weeks',
    desc: 'From idea to production launch. My signature offer — the fastest way to validate a SaaS idea with real paying users.',
    features: ['Laravel + React architecture', 'Authentication, billing & admin dashboard', 'Full RTL support if your market needs it', 'Deployed on your infrastructure, day 42'],
    price: 'Starting at',
    amount: '$4,500',
    featured: true,
  },
  {
    num: '02', icon: 'E', title: 'Enterprise Web Application',
    desc: 'Complex, multi-role platforms with custom workflows. Think UCOFY — 5 integrated apps, IoT tracking, real-time monitoring. Built for scale from day one.',
    features: ['Multi-role access control from the start', 'Reporting, audit log & data export', 'Real-time features & WebSocket integration', 'Performance-tested at expected load'],
    price: 'Starting at', amount: '$8,000',
  },
  {
    num: '03', icon: 'M', title: 'Cross-platform Mobile App',
    desc: 'Flutter-based. One codebase, iOS + Android. Push notifications, payments, offline support, App Store and Play Store deployment included.',
    features: ['Native iOS & Android from one codebase', 'Offline-first with local sync', 'Payment + push notification integration', 'Store submissions handled end-to-end'],
    price: 'Starting at', amount: '$3,500',
  },
  {
    num: '04', icon: 'P', title: 'Performance Optimization',
    desc: 'Your app is slow? I find the bottlenecks. Database queries, caching strategy, frontend bundle, server config. Guaranteed 50%+ improvement or refund.',
    features: ['Full profiling & root-cause analysis', 'DB indexing, query plans & N+1 hunt', 'Caching & CDN layer design', 'Frontend bundle & Core Web Vitals fix'],
    price: 'Starting at', amount: '$800',
  },
  {
    num: '05', icon: 'C', title: 'Fractional CTO',
    desc: 'Need CTO-level thinking without the full-time cost? 10–20 hours a week: architecture decisions, code reviews, hiring, roadmap, team mentoring.',
    features: ['Architecture & tech stack decisions', 'Hiring pipeline & technical interviews', 'Weekly code review & mentoring', 'Board-facing tech reporting'],
    price: 'From', amount: '$2,000 / mo',
  },
  {
    num: '06', icon: 'R', title: 'Technical Audit',
    desc: 'A 48-hour deep dive into your codebase, infrastructure and architecture. You get a written report with prioritized recommendations and clear next steps.',
    features: ['Code quality & security review', 'Infrastructure & DevOps assessment', 'Scalability & bottleneck analysis', 'Prioritized, budgeted action plan'],
    price: 'Fixed price', amount: '$1,200',
  },
]

const compareRows = [
  ['Free NDA before discussion', true, true, true, true],
  ['Fixed price, no surprises', true, true, true, true],
  ['Weekly demo on Friday', true, true, true, false],
  ['Full code ownership (100% yours)', true, true, true, true],
  ['Deploy to your infrastructure', true, true, true, false],
  ['30 days of free bug fixes', true, true, true, false],
  ['Written architecture doc', true, true, true, true],
  ['Security review before launch', true, true, true, true],
] as const

export default function ServicesPage() {
  return (
    <>
      <SiteTicker items="SERVICES · FIXED PRICING | NO RETAINERS UNLESS YOU WANT ONE | DUBAI · GMT+4 | 6+ YEARS · 90+ PROJECTS" />
      <SiteNav active="services" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">What I offer</div>
          <h1>
            Services built on<br />
            <span className="highlight">real experience</span>
          </h1>
          <p>
            No generic offerings. Every service below reflects work I&apos;ve already delivered
            multiple times — refined until it became repeatable and reliable. Fixed pricing,
            clear deliverables, real accountability.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <div key={s.num} className={`service-block${s.featured ? ' featured' : ''}`}>
                <div className="service-num">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-list">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="service-price">
                  {s.price} <strong>{s.amount}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compare-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">What&apos;s included</div>
            <h2 className="section-title">Every engagement <span className="serif">includes</span></h2>
            <p className="section-desc">Not a menu of add-ons. These are baked into every project, regardless of size.</p>
          </div>

          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>What you get</th>
                  <th>MVP</th>
                  <th>Enterprise</th>
                  <th>Mobile</th>
                  <th>Audit</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(row => (
                  <tr key={row[0] as string}>
                    <td>{row[0]}</td>
                    {[row[1], row[2], row[3], row[4]].map((v, i) => (
                      <td key={i} className={v ? 'yes' : 'no'}>{v ? '✓' : '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Domains</div>
            <h2 className="section-title">
              Industry <span className="serif">expertise.</span>
            </h2>
            <p className="section-desc">
              We&apos;ve excelled our experience in a wide range of industries to bring
              valuable insights and provide truly beneficial solutions.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map(ind => (
              <div key={ind.title} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Stack</div>
            <h2 className="section-title">
              Our technology <span className="serif">stack.</span>
            </h2>
            <p className="section-desc">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      <section className="mega-cta">
        <div className="container mega-cta-content">
          <h2>Not sure which<br />one <span className="serif">fits?</span></h2>
          <p>
            30-minute free call. Tell me the goal, the constraints and the deadline — I&apos;ll
            tell you honestly which service fits (or if none of them do).
          </p>
          <Link href="/contact" className="btn-big">
            Book a discovery call <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
