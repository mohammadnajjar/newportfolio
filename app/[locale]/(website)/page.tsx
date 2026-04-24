import Link from 'next/link'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'
import SkillsGrid from '@/modules/experience/SkillsGrid'

const _unused = null
void _unused

const __techLogos_start = null
void __techLogos_start
    svg: <svg viewBox="0 0 50 52" width="28" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001L10.42.232c.248-.143.553-.143.8 0l10.45 6.034h.001c.033.02.06.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.615V11.773c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l10.451-6.033c.248-.143.552-.143.8 0l10.45 6.033c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.016.024.039.045.054.071.022.039.036.082.05.124.008.023.022.044.03.068zm-1.572 10.701v-9.423l-3.369 1.944-4.638 2.671v9.423l8.007-4.615zm-9.61 16.505v-9.428l-4.57 2.607-13.05 7.432v9.522l17.62-10.133zM1.602 7.719v31.53l17.619 10.134v-9.522l-9.2-5.238-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.013-.078-.016-.117-.003-.035-.01-.07-.009-.106v-.001-21.483L8.023 9.974l-6.42-3.702v1.447zm9.014-5.198L2.607 7.133l8.009 4.617 8.009-4.617-8.009-4.612zm4.387 27.347l4.638-2.671V7.719l-3.369 1.945-4.638 2.671v19.478l3.369-1.945zM39.623 7.133l-8.008 4.617 8.008 4.617 8.008-4.617-8.008-4.617zm-.801 10.693l-4.638-2.671-3.369-1.945v9.423l4.638 2.671 3.369 1.944v-9.422zM20.021 38.827l11.093-6.332 5.545-3.165-8-4.612-9.211 5.303-8.395 4.836 8.968 3.97z" fill="#FF2D20"/></svg>,
  },
  {
    name: 'React',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg>,
  },
  {
    name: 'Flutter',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 0L2 12.23l3.56 3.56L21.79 0h-7.56z" fill="#54C5F8"/><path d="M14.23 11.37L8.6 17l3.55 3.54 1.77-1.77 5.18-5.17-4.87-2.23z" fill="#54C5F8"/><path d="M8.6 17l3.55 3.54 1.77-1.77L10.37 15.2 8.6 17z" fill="#01579B"/><path d="M10.37 15.2l3.55 3.54 5.18-5.17-4.87-2.23-3.86 3.86z" fill="#29B6F6"/></svg>,
  },
  {
    name: 'Next.js',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="black"/><path d="M9 8.5v7l7-7v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    name: 'TypeScript',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M13 10h4v2h-1.5v7H14v-7H13v-2z" fill="white"/><path d="M10 12.5c-.8-.2-1.5-.2-1.5.5 0 .6.7.8 1.4 1 1 .4 2 .8 2 2.2 0 1.6-1.2 2-2.4 2-.7 0-1.5-.2-2-.5v-1.7c.5.4 1.2.7 1.9.7.7 0 1-.3 1-.7 0-.6-.7-.8-1.4-1.1C8 14.5 7 14 7 12.7c0-1.5 1.1-2 2.3-2 .6 0 1.2.1 1.7.3v1.5z" fill="white"/></svg>,
  },
  {
    name: 'Docker',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 10h-2V8h2v2zm-3 0h-2V8h2v2zm-3 0h-2V8h2v2zm6-3h-2V5h2v2zm-3 0h-2V5h2v2zm0-3h-2V2h2v2z" fill="#2496ED"/><path d="M22.5 10.5s-.75-1.5-2.5-1.5c-.5-2-2.5-3-5-3H2.5S2 8.5 3 10.5c-1 .5-1.5 1.5-1.5 2.5 0 2.5 2 4.5 4.5 4.5h12c2.5 0 4.5-2 4.5-4.5 0-.75-.25-1.5-.5-2.5z" fill="#2496ED"/></svg>,
  },
  {
    name: 'PostgreSQL',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="6" rx="7" ry="3.5" stroke="#336791" strokeWidth="1.5" fill="none"/><path d="M5 6v5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5V6" stroke="#336791" strokeWidth="1.5" fill="none"/><path d="M5 11v5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-5" stroke="#336791" strokeWidth="1.5" fill="none"/></svg>,
  },
  {
    name: 'AWS',
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.347.347 0 0 1 .056.183c0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.382-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.486-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.279 0-.567.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 7.5c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.321c-.048.16-.104.264-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08h-.687zm10.138.215a5.1 5.1 0 0 1-1.19-.143c-.383-.096-.679-.2-.878-.32-.12-.071-.2-.151-.224-.224a.56.56 0 0 1-.04-.216v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.503 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.533-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.329.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z" fill="#FF9900"/></svg>,
  },
  {
    name: 'Figma',
    svg: <svg viewBox="0 0 38 57" width="20" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/><path d="M9.5 47.5A9.5 9.5 0 0 1 19 38h9.5v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 .5h9.5a9.5 9.5 0 0 1 0 19H19z" fill="#FF7262"/><path d="M.5 28.5A9.5 9.5 0 0 1 10 19h9v19H10a9.5 9.5 0 0 1-9.5-9.5z" fill="#A259FF"/><path d="M.5 9.5A9.5 9.5 0 0 1 10 .5h9v19H10A9.5 9.5 0 0 1 .5 9.5z" fill="#F24E1E"/></svg>,
  },
  {
    name: 'Linear',
    svg: <svg viewBox="0 0 100 100" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 90 L90 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M10 60 L60 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M10 30 L30 10" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M40 90 L90 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M70 90 L90 70" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/></svg>,
  },
]

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
              <div className="hero-tag">
                <span className="dot" />
                Available for new projects · Q3 2026
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
              <div className="hero-card hero-card-3">
                <div className="hc-label">Performance</div>
                <div className="hc-big">92%</div>
                <div className="hc-desc">avg response-time gain on audits</div>
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

      {/* TECH LOGOS STRIP */}
      <section className="tech-logos-strip">
        <div className="container">
          <div className="tech-logos-label">Built with</div>
          <div className="tech-logos-row">
            {techLogos.map(({ name, svg }) => (
              <div key={name} className="tech-logo-item" title={name}>
                {svg}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">What I do</div>
            <h2 className="section-title">
              Six services, <span className="serif">one engineer</span>
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
              <h3 className="work-title">See all 50+ →</h3>
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
      <section className="testimonial-section">        <div className="container">
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
