export type Tone = '' | 'tone-accent' | 'tone-lime' | 'tone-blue' | 'tone-paper' | 'tone-ink'

export interface ProjectListing {
  slug: string
  title: string
  shortTitle?: string
  category: string
  description: string
  badge: string
  tone: Tone
  tags: string[]
  filterTags: string[]
  external?: string
  image?: string          // path under /images/projects/ e.g. '/images/projects/ucofy.png'
}

export interface ProjectDetail extends ProjectListing {
  year: string
  duration: string
  role: string
  summary: string
  liveUrl?: string
  coverInitial: string
  details: { lbl: string; val: string; small?: string }[]
  narrative: {
    challenge: string[]
    architecture: string[]
    architectureBullets: string[]
    whatShipped: string[]
    whatShippedBullets: string[]
    outcome: string[]
  }
  kpis: { num: string; plus?: string; lbl: string; desc: string }[]
  techStack: string[]
  gallery: { tone: Tone; label: string }[]
  next: { slug: string; title: string }
  tickerItems: string
}

// Apps & SaaS - featured grid
export const appsAndSaaS: ProjectListing[] = [
  {
    slug: 'ucofy',
    title: 'Lootah UCOFY',
    shortTitle: 'UCOFY',
    category: 'IoT · SaaS · Multi-role',
    description: "Full digital platform managing the used cooking oil lifecycle in UAE. 5 integrated apps, IoT sensors, real-time tracking, regulator-grade audit trail.",
    badge: 'Flagship',
    tone: 'tone-accent',
    tags: ['Laravel', 'Flutter', 'IoT', 'MySQL'],
    filterTags: ['apps', 'enterprise'],
    image: '/images/projects/ucofy.png',
  },
  {
    slug: 'yjoz',
    title: 'Yjoz',
    shortTitle: 'YJOZ',
    category: 'Rental & Booking · Mobile',
    description: 'Rental & booking platform for iOS and Android. Led backend architecture and a Flutter team, serving thousands of active users across the UAE.',
    badge: 'Team Lead',
    tone: 'tone-lime',
    tags: ['Flutter', 'Laravel API', 'Firebase', 'Payments'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/yjoz.png',
  },
  {
    slug: 'lootah-islamic',
    title: 'Lootah Islamic',
    category: 'Islamic Finance · Mobile App',
    description: 'Sharia-compliant Islamic products marketplace. Built the backend API powering the iOS & Android app with product catalog, user auth, and order management.',
    badge: 'Backend',
    tone: 'tone-blue',
    tags: ['Laravel', 'Flutter', 'REST API', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/lootah-shop.png',
  },
  {
    slug: 'dirim',
    title: 'Dirim',
    category: 'E-commerce Ecosystem · Mobile',
    description: 'Multi-app e-commerce ecosystem: customer app, delivery app, and seller portal. Shared backend API, real-time order tracking, payment integration.',
    badge: 'Backend',
    tone: 'tone-accent',
    tags: ['Laravel', 'Flutter', 'WebSockets', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/drim.png',
  },
  {
    slug: 'lootah-biofuels',
    title: 'Lootah Biofuels',
    shortTitle: 'Biofuels',
    category: 'Energy · Web & App',
    description: 'Corporate platform for a biofuel energy leader. Built the backend powering the mobile app plus the full corporate website at lootahbiofuels.com.',
    badge: 'Backend',
    tone: 'tone-lime',
    tags: ['Laravel', 'Flutter', 'WordPress', 'MySQL'],
    filterTags: ['apps', 'enterprise'],
    image: '/images/projects/lootah-biofuels.png',
  },
  {
    slug: 'stockart',
    title: 'Stockart',
    category: 'Art Marketplace · Mobile',
    description: 'Digital art marketplace connecting UAE artists with buyers. Built the API backend: listings, artist profiles, order flow, and admin panel at stockart.ae.',
    badge: 'Backend',
    tone: 'tone-paper',
    tags: ['Laravel', 'Flutter', 'Stripe', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/stockart.png',
  },
  {
    slug: 'carbonproof',
    title: 'CarbonProof Token',
    shortTitle: 'CPT',
    category: 'Carbon Credits · Blockchain',
    description: 'Carbon credit tokenization platform at cpt-token.com. Built the backend API handling token issuance, wallet management, and compliance reporting.',
    badge: 'Backend',
    tone: 'tone-blue',
    tags: ['Laravel', 'Blockchain', 'Flutter', 'REST API'],
    filterTags: ['apps', 'enterprise'],
  },
  {
    slug: 'khadoom',
    title: 'Khadoom',
    category: 'On-demand Services · Mobile',
    description: 'On-demand home services platform with 3 apps: customer, serviceman, and provider. Built the full backend powering all three apps from a single API.',
    badge: 'Backend',
    tone: 'tone-accent',
    tags: ['Laravel', 'Flutter', 'Push Notifications', 'MySQL'],
    filterTags: ['apps'],
    image: '/images/projects/khadoom.jpg',
  },
  {
    slug: 'luxam',
    title: 'Luxam',
    category: 'Luxury Retail · Mobile',
    description: 'Luxury goods mobile app. Supervised and contributed to backend development, coordinating a cross-functional team to deliver iOS & Android on schedule.',
    badge: 'Led & Built',
    tone: 'tone-lime',
    tags: ['Laravel', 'Flutter', 'Payment Gateway', 'Firebase'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/reparee.png',
  },
  {
    slug: 'lootah-shop',
    title: 'Lootah Shop',
    category: 'Retail · Mobile App + Dashboard',
    description: "Fully owned end-to-end: designed and built the backend API, Flutter mobile app, and admin dashboard. The complete retail ecosystem for YS Lootah's shopping platform.",
    badge: 'Full Stack',
    tone: 'tone-accent',
    tags: ['Laravel', 'Flutter', 'Admin Dashboard', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/lootah-shop.png',
  },
  {
    slug: 'lootah-ecommerce',
    title: 'Lootah E-commerce',
    shortTitle: 'Lootah E-com',
    category: 'E-commerce · Mobile App',
    description: "Backend API for Lootah's main e-commerce mobile app. Product catalog, cart, checkout, order management, and delivery tracking — all powered by a single robust API.",
    badge: 'Backend',
    tone: 'tone-blue',
    tags: ['Laravel', 'Flutter', 'REST API', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/alo-mall.png',
  },
  {
    slug: 'offer123',
    title: 'Offer 123',
    category: 'Deals & Offers · Mobile App',
    description: 'Deals and offers aggregator mobile app. Built the backend API handling merchant onboarding, offer listings, user targeting, and redemption tracking.',
    badge: 'Backend',
    tone: 'tone-lime',
    tags: ['Laravel', 'Flutter', 'Push Notifications', 'MySQL'],
    filterTags: ['apps', 'ecommerce'],
    image: '/images/projects/offers123.jpg',
  },
]

// Websites grid
export const websites: ProjectListing[] = [
  {
    slug: 'royce',
    title: 'Royce',
    category: 'Real Estate · Dubai',
    description: 'Premium real estate website for royce.ae. Sub-300ms property search on 1,800+ listings with bilingual Arabic/English support.',
    badge: 'Featured',
    tone: 'tone-blue',
    tags: ['Laravel', 'React', 'Meilisearch'],
    filterTags: ['websites', 'realestate'],
    image: '/images/projects/royce.png',
  },
  {
    slug: 'yslinvestments',
    title: 'YSL Investments',
    shortTitle: 'YSL',
    category: 'Holding Group · Corporate',
    description: 'Corporate website for yslinvestments.com — a diversified Dubai investment group. Multi-brand subsidiary pages, investor portal, press center.',
    badge: 'Corporate',
    tone: 'tone-paper',
    tags: ['Laravel', 'Multi-tenant', 'CMS'],
    filterTags: ['websites', 'enterprise'],
    image: '/images/projects/yslinvestments.png',
  },
  {
    slug: 'zmkauto',
    title: 'ZMK Auto',
    shortTitle: 'ZMK',
    category: 'Automotive · UAE',
    description: 'Full digital platform for zmkauto.com in the UAE automotive industry. Inventory management, trade-in flow, lead routing, and reporting dashboards.',
    badge: 'Automotive',
    tone: '',
    tags: ['Laravel', 'Vue.js', 'Reporting'],
    filterTags: ['websites', 'enterprise'],
    image: '/images/projects/zmkauto.png',
  },
  {
    slug: 'mindtrax',
    title: 'MindTrax AI',
    shortTitle: 'MindTrax',
    category: 'AI / Tech · Web',
    description: 'AI-powered product website at mindtraxai.com. Full design and development, landing page, product showcase, and onboarding flow.',
    badge: 'AI',
    tone: 'tone-accent',
    tags: ['Laravel', 'React', 'AI Integration'],
    filterTags: ['websites', 'enterprise'],
    external: 'https://mindtraxai.com',
  },
  {
    slug: 'procurehub',
    title: 'Procurehub',
    category: 'Procurement · B2B Platform',
    description: 'B2B procurement platform at procurehub.ae. Vendor management, RFQ flow, purchase order tracking, and admin dashboard.',
    badge: 'B2B',
    tone: 'tone-lime',
    tags: ['Laravel', 'Vue.js', 'B2B'],
    filterTags: ['websites', 'enterprise'],
    external: 'https://procurehub.ae',
  },
  {
    slug: 'dirim-mall',
    title: 'Dirim Mall',
    shortTitle: 'Dirim',
    category: 'Online Mall · E-commerce',
    description: 'Full-featured e-commerce mall website at dirim-mall.com. Multi-vendor catalog, shopping cart, checkout, seller dashboard, and delivery tracking.',
    badge: 'E-commerce',
    tone: 'tone-blue',
    tags: ['Laravel', 'Multi-vendor', 'Payment'],
    filterTags: ['websites', 'ecommerce'],
    external: 'https://dirim-mall.com',
  },
  {
    slug: 'ysl-robotics',
    title: 'YSL Robotics',
    shortTitle: 'Robotics',
    category: 'Robotics · Corporate',
    description: 'Corporate tech website for yslootahrobotics.com. Product showcase, capabilities overview, robotics solution catalog, and contact flow.',
    badge: 'Tech',
    tone: 'tone-accent',
    tags: ['Laravel', 'React', 'CMS'],
    filterTags: ['websites', 'enterprise'],
    external: 'https://yslootahrobotics.com',
  },
  {
    slug: 'nottingham-mep',
    title: 'Nottingham MEP',
    shortTitle: 'Nottingham',
    category: 'MEP Engineering · Corporate',
    description: 'Corporate website for nottingham-mep.com. Project portfolio showcase, service catalog, team pages, and lead generation forms.',
    badge: 'Construction',
    tone: 'tone-lime',
    tags: ['WordPress', 'Custom Theme', 'SEO'],
    filterTags: ['websites', 'enterprise'],
    external: 'https://nottingham-mep.com',
    image: '/images/projects/nottingham.png',
  },
  {
    slug: 'reparee',
    title: 'Reparee',
    category: 'Repair Services · Web Platform',
    description: 'Service booking and repair management platform at reparee.com. Technician booking flow, job status tracking, and customer portal.',
    badge: 'Platform',
    tone: 'tone-paper',
    tags: ['Laravel', 'Vue.js', 'Booking Engine'],
    filterTags: ['websites'],
    external: 'https://reparee.com',
    image: '/images/projects/reparee.png',
  },
]

// Compact website chip list
export const websiteChips: { url: string; label: string }[] = [
  { url: 'https://lapisproperties.com', label: 'lapisproperties.com' },
  { url: 'https://dazproperties.ae', label: 'dazproperties.ae' },
  { url: 'https://serdar.ae', label: 'serdar.ae' },
  { url: 'https://zooma.ae', label: 'zooma.ae' },
  { url: 'https://www.greenlandsintl.com', label: 'greenlandsintl.com' },
  { url: 'https://1188estate.ae', label: '1188estate.ae' },
  { url: 'https://savosrealty.com', label: 'savosrealty.com' },
  { url: 'https://vre.ae', label: 'vre.ae' },
  { url: 'https://jsrgroup.ae', label: 'jsrgroup.ae' },
  { url: 'https://oneportfolio.ae', label: 'oneportfolio.ae' },
  { url: 'https://alrafaheiarentacar.com', label: 'alrafaheiarentacar.com' },
  { url: 'https://nr-rentacar.com', label: 'nr-rentacar.com' },
  { url: 'https://alo-mall.com', label: 'alo-mall.com' },
  { url: 'https://yjoz.com', label: 'yjoz.com' },
  { url: 'https://locksbyloulou.com', label: 'locksbyloulou.com' },
  { url: 'https://aldosani.com', label: 'aldosani.com' },
  { url: 'https://chongqingnoodlehouse.ae', label: 'chongqingnoodlehouse.ae' },
  { url: 'https://ez-estore.com', label: 'ez-estore.com' },
  { url: 'https://integratedbiofuels.com', label: 'integratedbiofuels.com' },
  { url: 'https://lootah-islamic.com', label: 'lootah-islamic.com' },
  { url: 'https://lootahbiofuels.com', label: 'lootahbiofuels.com' },
  { url: 'https://mentors.yjoz.com', label: 'mentors.yjoz.com' },
  { url: 'https://moradiinvestment.com', label: 'moradiinvestment.com' },
  { url: 'https://nagylawfirm.ae', label: 'nagylawfirm.ae' },
  { url: 'https://nmlawfirmae.com', label: 'nmlawfirmae.com' },
  { url: 'https://stockart.ae', label: 'stockart.ae' },
  { url: 'https://bricksexecutivesearch.com', label: 'bricksexecutivesearch.com' },
  { url: 'https://sustainable-biofuel.com', label: 'sustainable-biofuel.com' },
  { url: 'https://yousufbinsaeedlootah.com', label: 'yousufbinsaeedlootah.com' },
  { url: 'https://dmjecospace.com', label: 'dmjecospace.com' },
  { url: 'https://cpt-token.com', label: 'cpt-token.com' },
  { url: 'https://shop.yslootahtech.com', label: 'shop.yslootahtech.com' },
  { url: 'https://whitelotusuae.com', label: 'whitelotusuae.com' },
  { url: 'https://dx9000.com', label: 'dx9000.com' },
  { url: 'https://newline.ae/ARMANI/', label: 'newline.ae/ARMANI' },
  { url: 'https://newline.ae/villa/', label: 'newline.ae/villa' },
  { url: 'https://newline.ae/villa-register/', label: 'newline.ae/villa-register' },
  { url: 'https://newline.ae/palm-jumeirah/', label: 'newline.ae/palm-jumeirah' },
  { url: 'https://newline.ae/palm/', label: 'newline.ae/palm' },
  { url: 'https://newline.ae/zx/', label: 'newline.ae/zx' },
  { url: 'https://capitalhills.mohammadnajjar.net', label: 'capitalhills' },
  { url: 'https://expert-team.ae', label: 'expert-team.ae' },
  { url: 'https://frabicdynamic.com', label: 'frabicdynamic.com' },
  { url: 'https://gsldecor.ae', label: 'gsldecor.ae' },
  { url: 'https://jsrgroup.newline.ae', label: 'jsrgroup.newline.ae' },
  { url: 'https://leadgeneration.ae', label: 'leadgeneration.ae' },
  { url: 'https://microline.ae', label: 'microline.ae' },
  { url: 'https://quantumlinkglobal.com', label: 'quantumlinkglobal.com' },
  { url: 'https://wazdecoration.ae', label: 'wazdecoration.ae' },
  { url: 'https://nojoomaldaleel.com', label: 'nojoomaldaleel.com' },
  { url: 'https://musicboxdubai.com', label: 'musicboxdubai.com' },
  { url: 'https://soulight.me', label: 'soulight.me' },
  { url: 'https://grandrestaurant.mohammadnajjar.net', label: 'grandrestaurant' },
  { url: 'https://eslamelgendy.com', label: 'eslamelgendy.com' },
  { url: 'https://mohammadnajjar.net', label: 'mohammadnajjar.net' },
  { url: 'https://impact.laravel-dubai.com', label: 'impact training' },
  { url: 'https://amal.mohammadnajjar.net', label: 'amal clearing' },
  { url: 'https://mdlaw.sa', label: 'mdlaw.sa' },
  { url: 'https://dana.mohammadnajjar.net', label: 'dana car rental' },
  { url: 'https://balirento.mohammadnajjar.net', label: 'balirento' },
  { url: 'https://carrental.mohammadnajjar.net', label: 'car rental demo' },
  { url: 'https://ecommercen.mohammadnajjar.net', label: 'ecommercen' },
]

// ============================================================
// Project detail templates
// ============================================================

const allListings = [...appsAndSaaS, ...websites]

const baseDetails = (p: Partial<ProjectDetail>): ProjectDetail => {
  const listing = allListings.find(x => x.slug === p.slug)!
  const idx = allListings.findIndex(x => x.slug === p.slug)
  const nextListing = allListings[(idx + 1) % allListings.length]
  return {
    ...listing,
    year: p.year || '2024',
    duration: p.duration || '8 weeks',
    role: p.role || 'Full-Stack',
    summary: p.summary || listing.description,
    liveUrl: p.liveUrl,
    coverInitial: p.coverInitial || listing.shortTitle || listing.title.slice(0, 4).toUpperCase(),
    details: p.details || [
      { lbl: 'Year', val: p.year || '2024' },
      { lbl: 'Role', val: p.role || 'Full-Stack' },
      { lbl: 'Duration', val: p.duration || '8 weeks' },
      { lbl: 'Category', val: listing.category },
    ],
    narrative: p.narrative || {
      challenge: ['The client needed a production-grade platform built quickly without sacrificing engineering quality.'],
      architecture: ['Modular monolith with clear domain boundaries. Laravel on the backend, Flutter on the front. CI/CD on day one.'],
      architectureBullets: ['Domain-driven module split', 'Queue workers for heavy tasks', 'Idempotent API design', 'Observable from day one'],
      whatShipped: ['A full production system, used daily, with monitoring and a real admin panel.'],
      whatShippedBullets: ['Auth + roles', 'Core feature flow', 'Admin dashboard', 'Real-time updates', 'Reporting & exports'],
      outcome: ['The platform is live, growing, and stable. Performance is well under target. Ops use it without my help.'],
    },
    kpis: p.kpis || [
      { num: '99.9', plus: '%', lbl: 'Uptime', desc: 'Production availability since launch.' },
      { num: '< 300', lbl: 'API ms', desc: 'P95 response time across all endpoints.' },
      { num: '0', lbl: 'Critical Bugs', desc: 'Reported in production over six months.' },
      { num: '5', lbl: 'Days to Train', desc: 'A new team member was productive in five.' },
    ],
    techStack: p.techStack || ['Laravel 11', 'PHP 8.3', 'MySQL 8', 'Redis', 'Flutter', 'Docker', 'Nginx', 'GitHub Actions'],
    gallery: p.gallery || [
      { tone: 'tone-accent', label: 'Dashboard' },
      { tone: 'tone-ink', label: 'Mobile' },
      { tone: 'tone-lime', label: 'Reports' },
      { tone: '', label: 'Admin' },
      { tone: 'tone-blue', label: 'Roles' },
      { tone: '', label: 'Audit log' },
    ],
    next: p.next || { slug: nextListing.slug, title: nextListing.title },
    tickerItems: p.tickerItems || `CASE STUDY · ${listing.title.toUpperCase()} | ${listing.category.toUpperCase()} | DUBAI · ${p.year || '2024'} | LARAVEL · FLUTTER · MYSQL`,
  }
}

export const projectDetails: Record<string, ProjectDetail> = Object.fromEntries(
  allListings.map(p => [p.slug, baseDetails({ slug: p.slug })])
)

// Customize select projects with richer narratives
projectDetails['ucofy'] = baseDetails({
  slug: 'ucofy',
  year: '2023 — present',
  duration: '14 months · ongoing',
  role: 'Tech Lead',
  liveUrl: 'https://ucofy.ae',
  summary: 'Five integrated apps powering the entire used cooking oil collection lifecycle in the UAE — from IoT-enabled tank monitoring to driver dispatch, regulatory reporting, and end-of-pipe accountability.',
  narrative: {
    challenge: [
      'Used cooking oil collection in UAE is a regulated industry. Every drop must be traceable from restaurant to refinery, with proof for the federal regulator.',
      'The legacy process: paper logs, WhatsApp photos, an Excel sheet that someone updates weekly. Lost data. Disputed pickups. Audit pain.',
    ],
    architecture: [
      'A modular Laravel backend serving five Flutter apps (admin web, driver mobile, restaurant mobile, supervisor tablet, regulator dashboard) plus an MQTT ingestion layer for IoT tank sensors.',
    ],
    architectureBullets: [
      'Event-sourced collection log — every state change is auditable',
      'MQTT → queue worker pipeline ingesting 58k IoT events / day',
      'Role-based UI: drivers see jobs, supervisors see fleets, regulator sees the whole network',
      'Offline-first driver app with conflict-resolution sync',
    ],
    whatShipped: [
      'Five production apps used by drivers, restaurants, supervisors, and the regulator daily across the UAE.',
    ],
    whatShippedBullets: [
      'Driver dispatch + route optimization',
      'IoT tank-level monitoring (real-time)',
      'Restaurant self-service portal',
      'Regulator audit dashboard with export',
      'Multi-language (AR / EN) across all surfaces',
    ],
    outcome: [
      '1,200+ active users, 58k events/day, and a clean compliance audit. The CFO stopped chasing weekly Excel reports.',
    ],
  },
  kpis: [
    { num: '5', lbl: 'Apps in Production', desc: 'Driver, restaurant, supervisor, admin, regulator.' },
    { num: '1.2', plus: 'k', lbl: 'Daily Active Users', desc: 'Across all five apps in the field.' },
    { num: '58', plus: 'k', lbl: 'IoT Events / Day', desc: 'MQTT messages ingested, queued, and stored.' },
    { num: '99.9', plus: '%', lbl: 'Uptime', desc: 'Since first production deployment.' },
  ],
  techStack: ['Laravel 11', 'PHP 8.3', 'MySQL 8', 'Redis', 'Mosquitto MQTT', 'Flutter', 'Riverpod', 'Docker', 'Nginx', 'GitHub Actions'],
  next: { slug: 'yjoz', title: 'YJOZ' },
  tickerItems: 'CASE STUDY · UCOFY | IOT · SAAS · MULTI-ROLE | UAE · 2023 → PRESENT | 5 APPS · 1.2K USERS · 58K EVENTS/DAY',
})

projectDetails['yjoz'] = baseDetails({
  slug: 'yjoz',
  year: '2022 — 2024',
  duration: '18 months',
  role: 'Tech Lead · Backend Architect',
  liveUrl: 'https://yjoz.com',
  next: { slug: 'royce', title: 'Royce' },
})

projectDetails['royce'] = baseDetails({
  slug: 'royce',
  year: '2024',
  duration: '10 weeks',
  role: 'Solo · End-to-end',
  liveUrl: 'https://royce.ae',
  next: { slug: 'lootah-islamic', title: 'Lootah Islamic' },
})
