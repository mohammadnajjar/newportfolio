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

export const metadata = {
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
  {
    num: '07', icon: 'W', title: 'Custom Website Development',
    desc: 'I\'ve built 60+ corporate, real estate, and brand websites solo. Pixel-perfect, fast, SEO-friendly, multilingual when needed. End-to-end including hosting setup.',
    features: ['Custom design or pre-built theme', 'Bilingual Arabic / English support', 'CMS so you can edit content', 'Hosting + domain + SSL handover'],
    price: 'Starting at', amount: '$1,500',
  },
  {
    num: '08', icon: 'A', title: 'API & Backend Engineering',
    desc: 'Backend-only engagements. I architect and build the API; your team handles the frontend. Battle-tested on 12+ production mobile apps and dozens of web platforms.',
    features: ['REST or GraphQL API design', 'Authentication, roles & permissions', 'Background jobs & queues', 'OpenAPI documentation included'],
    price: 'Starting at', amount: '$2,500',
  },
  {
    num: '09', icon: 'I', title: 'IoT & Real-time Systems',
    desc: 'MQTT pipelines, real-time tracking, sensor data ingestion. The UCOFY platform ingests 58k IoT events/day. I\'ve done this in production — not as a demo.',
    features: ['MQTT broker + ingestion pipeline', 'Real-time WebSocket dashboards', 'Time-series storage & queries', 'Edge device firmware coordination'],
    price: 'Starting at', amount: '$6,000',
  },
  {
    num: '10', icon: 'X', title: 'E-commerce Platform',
    desc: 'Multi-vendor or single-store. Cart, checkout, payments, inventory, delivery tracking, vendor dashboards. Built for Lootah Shop, Dirim Mall, and others in production.',
    features: ['Multi-vendor or single-store mode', 'Payment gateway integration (Stripe / local)', 'Inventory & order management', 'Customer + admin + vendor portals'],
    price: 'Starting at', amount: '$5,000',
  },
  {
    num: '11', icon: 'D', title: 'Admin Dashboard & Internal Tools',
    desc: 'Custom dashboards that replace Excel sheets and chaos. HR, ops, finance, reporting — built for the team that actually uses them, not for the boardroom slide.',
    features: ['Role-based access & permissions', 'Real-time data views & exports', 'Approval workflows & audit log', 'Built around the actual workflow'],
    price: 'Starting at', amount: '$2,500',
  },
  {
    num: '12', icon: 'O', title: 'DevOps & Deployment Setup',
    desc: 'Docker, CI/CD, zero-downtime deploys, monitoring. If your project ships in a hurry but no one set up the infrastructure properly, I clean it up.',
    features: ['Dockerized stack & docker-compose', 'GitHub Actions CI/CD pipeline', 'Zero-downtime deployment', 'Monitoring + alerts + backups'],
    price: 'Starting at', amount: '$1,000',
  },
  {
    num: '13', icon: 'WP', title: 'WordPress Development',
    desc: 'Custom WordPress sites: corporate, blog, portfolio, multilingual. Custom theme from scratch or Elementor / ACF stack — your choice. Speed-optimized and SEO-ready.',
    features: ['Custom theme or page builder', 'WooCommerce store setup', 'Multilingual (WPML / Polylang)', 'Speed + SEO + security hardening'],
    price: 'Starting at', amount: '$900',
  },
  {
    num: '14', icon: 'SH', title: 'Shopify Store Build',
    desc: 'Shopify stores from scratch or migrating an existing catalog. Custom theme, app integrations, checkout customization, and full launch — including DNS and email.',
    features: ['Custom Shopify theme (Liquid)', 'Product import & catalog setup', 'Apps + payment + shipping config', 'Launch checklist + 14-day support'],
    price: 'Starting at', amount: '$1,500',
  },
  {
    num: '15', icon: 'CR', title: 'CRM System Development',
    desc: 'Custom CRMs that fit how your team actually works. I\'ve built lead-generation CRMs and contract-management CRMs in production — not generic Salesforce wrappers.',
    features: ['Lead capture, scoring & assignment', 'Pipeline stages & follow-up automation', 'Contract / document management', 'Reports + role-based dashboards'],
    price: 'Starting at', amount: '$3,500',
  },
  {
    num: '16', icon: 'L', title: 'High-Conversion Landing Pages',
    desc: 'Built 40+ landing pages optimized for Google Ads — improved quality score, lower CPC, higher lead capture. Fast, clean, A/B-ready, conversion-focused copy.',
    features: ['Optimized for Google Ads quality score', 'Sub-2s load on 4G mobile', 'A/B-ready variants & analytics wired', 'Lead form + CRM integration'],
    price: 'Starting at', amount: '$600',
  },
  {
    num: '17', icon: 'T', title: 'Engineering Team Mentoring',
    desc: 'Lead an 11-person team in production. Train juniors. Coach ICPC contestants. If your team needs hands-on technical mentorship — code review, pair programming, growth — I\'ve done it.',
    features: ['Weekly 1-on-1s with each engineer', 'Code review + architecture coaching', 'Junior-to-mid skill roadmap', 'Hiring & technical-interview support'],
    price: 'From', amount: '$1,200 / mo',
  },
  {
    num: '18', icon: 'SE', title: 'SEO & Multilingual Optimization',
    desc: 'Get found in Arabic and English. Technical SEO, multilingual hreflang, schema, Core Web Vitals, on-page rewrite. Practical SEO — not a 60-page report nobody reads.',
    features: ['Technical SEO audit + fixes', 'Multilingual setup (AR / EN hreflang)', 'Schema.org + sitemap + indexing', 'Core Web Vitals to green'],
    price: 'Starting at', amount: '$800',
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
