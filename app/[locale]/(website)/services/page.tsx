import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import TechStack from '@/modules/services/TechStack'

const industries = [
  {
    icon: '♻️',
    title: 'Sustainability & IoT',
    desc: 'UCOFY — waste-tracking platform with MQTT sensor ingestion, weighbridge integration and regulatory reporting. 58k events a day, zero dropped.',
    proof: 'UCOFY · 5 integrated apps',
  },
  {
    icon: '🛍️',
    title: 'Retail & E-commerce',
    desc: 'Lootah Shop, Dirim Mall, ez-estore. Multi-vendor marketplaces, single-store builds, inventory + delivery tracking, vendor portals.',
    proof: '3 stores · Stripe + local PSPs',
  },
  {
    icon: '🚚',
    title: 'Logistics & Field Ops',
    desc: 'Route Pilot for last-mile dispatch, UCOFY driver coordination. Offline-first Flutter, conflict-resolved sync, live tracking dashboards.',
    proof: 'Route Pilot · UCOFY drivers',
  },
  {
    icon: '🏥',
    title: 'Health & Medical',
    desc: 'Patient portals, appointment booking, doctor-side dashboards. Bilingual Arabic/English with HIPAA-style access controls.',
    proof: 'Multiple clinics · UAE + KSA',
  },
  {
    icon: '🏗️',
    title: 'Real Estate & Construction',
    desc: 'Property listings, lead-capture CRMs, contract & document management. 60+ corporate sites for developers and brokerages.',
    proof: '60+ sites · custom CRM stack',
  },
  {
    icon: '💸',
    title: 'FinTech & Payments',
    desc: 'Stripe + local gateway integrations, Saudi payments (HyperPay, Tap, Tabby), refund flows, audit trails — built into SaaS and e-commerce.',
    proof: 'Production billing · 3 PSPs',
  },
  {
    icon: '📞',
    title: 'CRM & Internal Tools',
    desc: 'Lead-gen CRMs, contract-management dashboards, role-based admin panels. Replaces Excel chaos with workflow-shaped software.',
    proof: 'CRM builds · 4 industries',
  },
  {
    icon: '🎓',
    title: 'Education & Training',
    desc: 'Mentored 11-engineer teams in production, coached ICPC contestants, built training platforms. The work behind the engineers, not just the code.',
    proof: '11-person team lead · ICPC coach',
  },
]

export const metadata = {
  title: 'Services',
  description: 'SaaS MVP, Enterprise platforms, mobile apps, performance audits, and fractional CTO. Fixed pricing, real accountability.',
}

const services = [
  {
    num: '01 / FLAGSHIP', slug: 'saas-mvp', icon: 'S',
    title: 'SaaS MVP in 6 weeks',
    desc: 'From idea to production launch. My signature offer — the fastest way to validate a SaaS idea with real paying users.',
    features: ['Laravel + React architecture', 'Authentication, billing & admin dashboard', 'Full RTL support if your market needs it', 'Deployed on your infrastructure, day 42'],
    price: 'Starting at', amount: '$4,500', featured: true,
  },
  {
    num: '02', slug: 'enterprise-web', icon: 'E', title: 'Enterprise Web Application',
    desc: 'Complex, multi-role platforms with custom workflows. Think UCOFY — 5 integrated apps, IoT tracking, real-time monitoring. Built for scale from day one.',
    features: ['Multi-role access control from the start', 'Reporting, audit log & data export', 'Real-time features & WebSocket integration', 'Performance-tested at expected load'],
    price: 'Starting at', amount: '$8,000',
  },
  {
    num: '03', slug: 'mobile-app', icon: 'M', title: 'Cross-platform Mobile App',
    desc: 'Flutter-based. One codebase, iOS + Android. Push notifications, payments, offline support, App Store and Play Store deployment included.',
    features: ['Native iOS & Android from one codebase', 'Offline-first with local sync', 'Payment + push notification integration', 'Store submissions handled end-to-end'],
    price: 'Starting at', amount: '$3,500',
  },
  {
    num: '04', slug: 'performance', icon: 'P', title: 'Performance Optimization',
    desc: 'Your app is slow? I find the bottlenecks. Database queries, caching strategy, frontend bundle, server config. Guaranteed 50%+ improvement or refund.',
    features: ['Full profiling & root-cause analysis', 'DB indexing, query plans & N+1 hunt', 'Caching & CDN layer design', 'Frontend bundle & Core Web Vitals fix'],
    price: 'Starting at', amount: '$800',
  },
  {
    num: '05', slug: 'fractional-cto', icon: 'C', title: 'Fractional CTO',
    desc: 'Need CTO-level thinking without the full-time cost? 10–20 hours a week: architecture decisions, code reviews, hiring, roadmap, team mentoring.',
    features: ['Architecture & tech stack decisions', 'Hiring pipeline & technical interviews', 'Weekly code review & mentoring', 'Board-facing tech reporting'],
    price: 'From', amount: '$2,000 / mo',
  },
  {
    num: '06', slug: 'audit', icon: 'R', title: 'Technical Audit',
    desc: 'A 48-hour deep dive into your codebase, infrastructure and architecture. You get a written report with prioritized recommendations and clear next steps.',
    features: ['Code quality & security review', 'Infrastructure & DevOps assessment', 'Scalability & bottleneck analysis', 'Prioritized, budgeted action plan'],
    price: 'Fixed price', amount: '$1,200',
  },
  {
    num: '07', slug: 'website', icon: 'W', title: 'Custom Website Development',
    desc: 'I\'ve built 60+ corporate, real estate, and brand websites solo. Pixel-perfect, fast, SEO-friendly, multilingual when needed. End-to-end including hosting setup.',
    features: ['Custom design or pre-built theme', 'Bilingual Arabic / English support', 'CMS so you can edit content', 'Hosting + domain + SSL handover'],
    price: 'Starting at', amount: '$1,500',
  },
  {
    num: '08', slug: 'api-backend', icon: 'A', title: 'API & Backend Engineering',
    desc: 'Backend-only engagements. I architect and build the API; your team handles the frontend. Battle-tested on 12+ production mobile apps and dozens of web platforms.',
    features: ['REST or GraphQL API design', 'Authentication, roles & permissions', 'Background jobs & queues', 'OpenAPI documentation included'],
    price: 'Starting at', amount: '$2,500',
  },
  {
    num: '09', slug: 'iot', icon: 'I', title: 'IoT & Real-time Systems',
    desc: 'MQTT pipelines, real-time tracking, sensor data ingestion. The UCOFY platform ingests 58k IoT events/day. I\'ve done this in production — not as a demo.',
    features: ['MQTT broker + ingestion pipeline', 'Real-time WebSocket dashboards', 'Time-series storage & queries', 'Edge device firmware coordination'],
    price: 'Starting at', amount: '$6,000',
  },
  {
    num: '10', slug: 'ecommerce', icon: 'X', title: 'E-commerce Platform',
    desc: 'Multi-vendor or single-store. Cart, checkout, payments, inventory, delivery tracking, vendor dashboards. Built for Lootah Shop, Dirim Mall, and others in production.',
    features: ['Multi-vendor or single-store mode', 'Payment gateway integration (Stripe / local)', 'Inventory & order management', 'Customer + admin + vendor portals'],
    price: 'Starting at', amount: '$5,000',
  },
  {
    num: '11', slug: 'admin-dashboard', icon: 'D', title: 'Admin Dashboard & Internal Tools',
    desc: 'Custom dashboards that replace Excel sheets and chaos. HR, ops, finance, reporting — built for the team that actually uses them, not for the boardroom slide.',
    features: ['Role-based access & permissions', 'Real-time data views & exports', 'Approval workflows & audit log', 'Built around the actual workflow'],
    price: 'Starting at', amount: '$2,500',
  },
  {
    num: '12', slug: 'devops', icon: 'O', title: 'DevOps & Deployment Setup',
    desc: 'Docker, CI/CD, zero-downtime deploys, monitoring. If your project ships in a hurry but no one set up the infrastructure properly, I clean it up.',
    features: ['Dockerized stack & docker-compose', 'GitHub Actions CI/CD pipeline', 'Zero-downtime deployment', 'Monitoring + alerts + backups'],
    price: 'Starting at', amount: '$1,000',
  },
  {
    num: '13', slug: 'wordpress', icon: 'WP', title: 'WordPress Development',
    desc: 'Custom WordPress sites: corporate, blog, portfolio, multilingual. Custom theme from scratch or Elementor / ACF stack — your choice. Speed-optimized and SEO-ready.',
    features: ['Custom theme or page builder', 'WooCommerce store setup', 'Multilingual (WPML / Polylang)', 'Speed + SEO + security hardening'],
    price: 'Starting at', amount: '$900',
  },
  {
    num: '14', slug: 'shopify', icon: 'SH', title: 'Shopify Store Build',
    desc: 'Shopify stores from scratch or migrating an existing catalog. Custom theme, app integrations, checkout customization, and full launch — including DNS and email.',
    features: ['Custom Shopify theme (Liquid)', 'Product import & catalog setup', 'Apps + payment + shipping config', 'Launch checklist + 14-day support'],
    price: 'Starting at', amount: '$1,500',
  },
  {
    num: '15', slug: 'crm', icon: 'CR', title: 'CRM System Development',
    desc: 'Custom CRMs that fit how your team actually works. I\'ve built lead-generation CRMs and contract-management CRMs in production — not generic Salesforce wrappers.',
    features: ['Lead capture, scoring & assignment', 'Pipeline stages & follow-up automation', 'Contract / document management', 'Reports + role-based dashboards'],
    price: 'Starting at', amount: '$3,500',
  },
  {
    num: '16', slug: 'landing-pages', icon: 'L', title: 'High-Conversion Landing Pages',
    desc: 'Built 40+ landing pages optimized for Google Ads — improved quality score, lower CPC, higher lead capture. Fast, clean, A/B-ready, conversion-focused copy.',
    features: ['Optimized for Google Ads quality score', 'Sub-2s load on 4G mobile', 'A/B-ready variants & analytics wired', 'Lead form + CRM integration'],
    price: 'Starting at', amount: '$600',
  },
  {
    num: '17', slug: 'mentoring', icon: 'T', title: 'Engineering Team Mentoring',
    desc: 'Lead an 11-person team in production. Train juniors. Coach ICPC contestants. If your team needs hands-on technical mentorship — code review, pair programming, growth — I\'ve done it.',
    features: ['Weekly 1-on-1s with each engineer', 'Code review + architecture coaching', 'Junior-to-mid skill roadmap', 'Hiring & technical-interview support'],
    price: 'From', amount: '$1,200 / mo',
  },
  {
    num: '18', slug: 'seo', icon: 'SE', title: 'SEO & Multilingual Optimization',
    desc: 'Get found in Arabic and English. Technical SEO, multilingual hreflang, schema, Core Web Vitals, on-page rewrite. Practical SEO — not a 60-page report nobody reads.',
    features: ['Technical SEO audit + fixes', 'Multilingual setup (AR / EN hreflang)', 'Schema.org + sitemap + indexing', 'Core Web Vitals to green'],
    price: 'Starting at', amount: '$800',
  },
]

// Columns: Build = MVP / Enterprise / E-commerce / CRM / Web build,
//          Mobile = Flutter iOS+Android app,
//          Optimize = Performance / Audit / SEO / DevOps,
//          Advisory = Fractional CTO / Team Mentoring.
const compareRows = [
  ['Free NDA, signed before any code is shown', true, true, true, true],
  ['Fixed price agreed up front (or monthly retainer for advisory)', true, true, true, true],
  ['Weekly Friday demo of working software', true, true, false, false],
  ['Full source-code ownership — 100% yours, day one', true, true, true, true],
  ['Deployed to your infrastructure, with handover docs', true, true, true, false],
  ['30 days of free bug fixes after launch', true, true, true, false],
  ['Written architecture / decision document', true, true, true, true],
  ['Security review before launch (auth, payments, PII)', true, true, true, false],
  ['Performance baseline + Core Web Vitals report', true, true, true, false],
  ['Pair programming & code review with your team', false, false, false, true],
  ['Roadmap, hiring & technical-interview guidance', false, false, false, true],
  ['Direct WhatsApp / Slack channel during the engagement', true, true, true, true],
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
                <div className="service-actions">
                  <Link
                    href={`/contact?service=${s.slug}`}
                    className="service-cta"
                    aria-label={`Get a quote for ${s.title}`}
                  >
                    Get a quote <span className="arrow">→</span>
                  </Link>
                  <a
                    href={`https://wa.me/971501026045?text=${encodeURIComponent(`Hi Mohammad, I'm interested in your "${s.title}" service. Can we talk?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta-secondary"
                    aria-label={`Ask on WhatsApp about ${s.title}`}
                  >
                    Ask on WhatsApp
                  </a>
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
            <h2 className="section-title">Baked into every <span className="serif">engagement.</span></h2>
            <p className="section-desc">
              Not a menu of optional add-ons. Whatever you hire me for, these are the
              defaults — no upsells, no surprise invoices. The ✓ / — pattern just shows
              where each item naturally applies.
            </p>
          </div>

          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>What you get</th>
                  <th>Build<br /><span className="th-sub">MVP · Web · E-comm</span></th>
                  <th>Mobile<br /><span className="th-sub">Flutter app</span></th>
                  <th>Optimize<br /><span className="th-sub">Audit · Perf · SEO</span></th>
                  <th>Advisory<br /><span className="th-sub">CTO · Mentoring</span></th>
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

          <p className="compare-note">
            ✓ &nbsp;Want something not listed? Ask. Most &quot;extras&quot; on other agencies&apos;
            invoices are already on this page.
          </p>
        </div>
      </section>

      <section className="industry-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">Domains I&apos;ve shipped in</div>
            <h2 className="section-title">
              Where the work <span className="serif">actually lives.</span>
            </h2>
            <p className="section-desc">
              Six years, 90+ projects, eight industries that recur. Below are the
              domains where I&apos;ve already navigated the regulations, the gateways,
              the bilingual edge cases and the operator workflows. If you&apos;re in
              one of these, I won&apos;t need a quarter to ramp up.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map(ind => (
              <div key={ind.title} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <div className="industry-proof">{ind.proof}</div>
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
              The technology I <span className="serif">trust.</span>
            </h2>
            <p className="section-desc">
              No résumé-padding here — these are the tools I reach for daily, in
              production, on real client work. Boring, battle-tested, fast.
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
          <div className="mega-cta-actions">
            <Link href="/contact" className="btn-big">
              Book a discovery call <span className="arrow">↗</span>
            </Link>
            <a
              href="https://wa.me/971501026045?text=Hi%20Mohammad%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-ghost-light"
            >
              Or WhatsApp directly →
            </a>
          </div>
          <div className="mega-cta-note">
            ✓ Free 30-min call &nbsp;·&nbsp; ✓ Free NDA on request &nbsp;·&nbsp; ✓ Reply under 4h
          </div>
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
