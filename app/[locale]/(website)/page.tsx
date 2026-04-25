import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import FAQAccordion from '@/modules/faq/FAQAccordion'
import SkillsGrid from '@/modules/experience/SkillsGrid'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('home')

  const services = t.raw('services.items') as Array<{ title: string; desc: string; priceLabel: string; price: string }>
  const processItems = t.raw('process.items') as Array<{ t: string; d: string; time: string }>
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>

  const serviceMeta = [
    { num: '01', icon: 'S', featured: true },
    { num: '02', icon: 'E', featured: false },
    { num: '03', icon: 'M', featured: false },
    { num: '04', icon: 'P', featured: false },
    { num: '05', icon: 'C', featured: false },
    { num: '06', icon: 'R', featured: false },
  ]

  return (
    <>
      <SiteTicker items={t('ticker')} />
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
                    {t('hero.available')}
                  </div>
                </div>
              </div>

              <div className="hero-mono-caption">
                <span className="hmc-prompt">~$</span> {t('hero.monoCaption')}{' '}
                <span className="hmc-comment">{t('hero.monoComment')}</span>
              </div>

              <h1>
                {t('hero.title1')} <span className="italic">{t('hero.title2')}</span>{' '}
                {t('hero.title3')} <span className="highlight">{t('hero.title4')}</span>
              </h1>
              <p>{t('hero.description')}</p>
              <div className="hero-cta-group">
                <Link href="/#contact" className="btn-big">
                  {t('hero.ctaPrimary')} <span className="arrow">↗</span>
                </Link>
                <Link href="/work" className="btn-ghost">
                  {t('hero.ctaSecondary')}
                </Link>
              </div>

              <div className="hero-stack-strip">
                <span className="hss-label">{t('hero.stack')}</span>
                {[
                  { slug: 'laravel',     color: 'FF2D20', name: 'Laravel' },
                  { slug: 'react',       color: '61DAFB', name: 'React' },
                  { slug: 'flutter',     color: '02569B', name: 'Flutter' },
                  { slug: 'kubernetes',  color: '326CE5', name: 'Kubernetes' },
                  { slug: 'docker',      color: '2496ED', name: 'Docker' },
                  { slug: 'mysql',       color: '4479A1', name: 'MySQL' },
                  { slug: 'redis',       color: 'DC382D', name: 'Redis' },
                  { slug: 'typescript',  color: '3178C6', name: 'TypeScript' },
                ].map(tech => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={tech.slug}
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={tech.name}
                    title={tech.name}
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
                <div className="hc-label">{t('hero.card1Label')}</div>
                <div className="hc-big">{t('hero.card1Big')}</div>
                <div className="hc-desc">{t('hero.card1Desc')}</div>
              </div>
              <div className="hero-card hero-card-2">
                <div className="hc-label">{t('hero.card2Label')}</div>
                <div className="hc-big">{t('hero.card2Big')}</div>
                <div className="hc-desc">{t('hero.card2Desc')}</div>
              </div>

              <div className="hero-card hero-card-code">
                <div className="hcc-bar">
                  <span className="hcc-dot hcc-dot-r" />
                  <span className="hcc-dot hcc-dot-y" />
                  <span className="hcc-dot hcc-dot-g" />
                  <span className="hcc-file">~/about.ts</span>
                </div>
                <pre className="hcc-code" dir="ltr">
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
            <div className="stat-lbl">{t('stats.yearsLabel')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">90<span className="plus">+</span></div>
            <div className="stat-lbl">{t('stats.projectsLabel')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">11</div>
            <div className="stat-lbl">{t('stats.engineersLabel')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-big">25k<span className="plus">+</span></div>
            <div className="stat-lbl">{t('stats.followersLabel')}</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('services.eyebrow')}</div>
            <h2 className="section-title">
              {t('services.title1')} <span className="serif">{t('services.title2')}</span>
            </h2>
            <p className="section-desc">{t('services.desc')}</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-block${serviceMeta[i].featured ? ' featured' : ''}`}>
                <div className="service-num">{serviceMeta[i].num}</div>
                <div className="service-icon">{serviceMeta[i].icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-price">
                  {s.priceLabel} <strong>{s.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('work.eyebrow')}</div>
            <h2 className="section-title">
              {t('work.title1')} <span className="serif">{t('work.title2')}</span>
            </h2>
            <p className="section-desc">{t('work.desc')}</p>
          </div>

          <div className="work-grid">
            <Link href="/projects/ucofy" className="work-item size-lg featured">
              <div className="work-tag">IoT · SaaS · Multi-role</div>
              <h3 className="work-title">UCOFY</h3>
              <p className="work-desc">
                {locale === 'ar'
                  ? 'منصة رقمية كاملة تدير دورة حياة جمع زيت الطهي المستعمل بالكامل. ٥ تطبيقات متكاملة، تتبع لحظي للسائقين، تكامل مع حساسات IoT، ونظام تقارير ومحاسبة شامل.'
                  : 'A full digital platform managing the entire lifecycle of used cooking oil collection. 5 integrated applications, real-time driver tracking, IoT sensor integration, and a comprehensive reporting and accountability system.'}
              </p>
              <div className="work-tech">
                <span>Laravel</span><span>Flutter</span><span>MySQL</span>
                <span>Real-time</span><span>IoT</span><span>Multi-role</span>
              </div>
            </Link>

            <Link href="/projects/yjoz" className="work-item size-md accent">
              <div className="work-tag">{locale === 'ar' ? 'تجارة إلكترونية · جوال' : 'E-commerce · Mobile'}</div>
              <h3 className="work-title">YJOZ</h3>
              <p className="work-desc">
                {locale === 'ar'
                  ? 'تطبيق تجارة إلكترونية كامل الميزات لـ iOS و Android مع المخزون والمدفوعات الآمنة وتجربة مستخدم محسّنة للتحويل.'
                  : 'Full-featured e-commerce mobile application for iOS and Android with inventory, secure payments, and conversion-optimized UX.'}
              </p>
              <div className="work-tech">
                <span>Flutter</span><span>Laravel API</span><span>Payment Gateway</span>
              </div>
            </Link>

            <Link href="/projects/royce" className="work-item size-md lime">
              <div className="work-tag">{locale === 'ar' ? 'عقارات' : 'Real Estate'}</div>
              <h3 className="work-title">Royce</h3>
              <p className="work-desc">
                {locale === 'ar'
                  ? 'منصة عقارات متميزة لسوق دبي — قوائم سكنية وتجارية ومبيعات على الخارطة مع فلاتر متقدمة.'
                  : 'Premium real estate platform for Dubai market — residential, commercial, and off-plan listings with advanced filters.'}
              </p>
              <div className="work-tech">
                <span>Laravel</span><span>React</span><span>Custom CMS</span>
              </div>
            </Link>

            <Link href="/projects/yslinvestments" className="work-item size-sm">
              <div className="work-tag">{locale === 'ar' ? 'قابضة' : 'Holding'}</div>
              <h3 className="work-title">YSL Investments</h3>
              <p className="work-desc">{locale === 'ar' ? 'منصة شركة لمجموعة استثمارية متنوعة في دبي.' : 'Corporate platform for a diversified Dubai investment group.'}</p>
            </Link>

            <Link href="/projects/zmkauto" className="work-item size-sm">
              <div className="work-tag">{locale === 'ar' ? 'سيارات' : 'Automotive'}</div>
              <h3 className="work-title">ZMK Auto</h3>
              <p className="work-desc">{locale === 'ar' ? 'حل رقمي كامل لقطاع السيارات في الإمارات.' : 'Full digital solution for UAE automotive industry.'}</p>
            </Link>

            <Link href="/work" className="work-item size-sm">
              <div className="work-tag">{t('work.seeAllTag')}</div>
              <h3 className="work-title">{t('work.seeAllTitle')}</h3>
              <p className="work-desc">{t('work.seeAllDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('skills.eyebrow')}</div>
            <h2 className="section-title">
              {t('skills.title1')} <span className="serif">{t('skills.title2')}</span>
            </h2>
            <p className="section-desc">{t('skills.desc')}</p>
          </div>
          <SkillsGrid />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container">
          <p className="quote-big">
            {t('testimonial.quote1')}{' '}
            <em>{t('testimonial.quoteHighlight')}</em>{' '}
            {t('testimonial.quote2')}
          </p>
          <div className="quote-author">
            <div className="quote-avatar">JI</div>
            <div>
              <div className="quote-name">{t('testimonial.name')}</div>
              <div className="quote-role">{t('testimonial.role')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('process.eyebrow')}</div>
            <h2 className="section-title">
              {t('process.title1')} <span className="serif">{t('process.title2')}</span> {t('process.title3')}
            </h2>
            <p className="section-desc">{t('process.desc')}</p>
          </div>

          <div className="process-list">
            {processItems.map((row, i) => {
              const n = String(i + 1).padStart(2, '0')
              return (
                <div className="process-row" key={i}>
                  <div className="process-num-big">{n}</div>
                  <div><div className="process-title">{row.t}</div></div>
                  <div className="process-body"><p>{row.d}</p></div>
                  <div className="process-time">{row.time}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MEGA CTA */}
      <section className="mega-cta" id="contact">
        <div className="container mega-cta-content">
          <h2>
            {t('megaCta.title1')}<br />
            {t('megaCta.title2')} <span className="serif">{t('megaCta.title3')}</span>
          </h2>
          <p>{t('megaCta.desc')}</p>
          <Link href="/contact" className="btn-big">
            {t('megaCta.cta')} <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-intro">
            <div className="section-eyebrow">{t('faq.eyebrow')}</div>
            <h2 className="section-title">
              {t('faq.title1')} <span className="serif">{t('faq.title2')}</span>
            </h2>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <SiteFooter headline="talk" />
    </>
  )
}
