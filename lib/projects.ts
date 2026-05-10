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
  image?: string
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

interface LocaleStrings {
  appsAndSaaS: Record<string, { category: string; description: string; badge: string }>
  websites: Record<string, { category: string; description: string; badge: string }>
  details: { year: string; role: string; duration: string; category: string }
  defaults: {
    role: string
    duration: string
    challenge: string
    architecture: string
    architectureBullets: string[]
    whatShipped: string
    whatShippedBullets: string[]
    outcome: string
    kpiUptimeLbl: string
    kpiUptimeDesc: string
    kpiApiLbl: string
    kpiApiDesc: string
    kpiBugsLbl: string
    kpiBugsDesc: string
    kpiTrainLbl: string
    kpiTrainDesc: string
    galleryLabels: string[]
  }
  ucofy: {
    summary: string
    challenge: string[]
    architecture: string[]
    architectureBullets: string[]
    whatShipped: string[]
    whatShippedBullets: string[]
    outcome: string[]
    kpiAppsLbl: string
    kpiAppsDesc: string
    kpiUsersLbl: string
    kpiUsersDesc: string
    kpiEventsLbl: string
    kpiEventsDesc: string
    kpiUptimeLbl: string
    kpiUptimeDesc: string
    role: string
    duration: string
  }
}

const en: LocaleStrings = {
  appsAndSaaS: {
    'gonsure': { category: 'Insurance CRM · Event-driven · Multi-channel', description: 'Insurance lifecycle CRM ingesting GTM DataLayer events via HMAC-verified webhooks across a 14-module architecture. Tracks journeys across 6 stages and 30 substages in real time.', badge: '2026 Flagship' },
    'damin': { category: 'Insurance CRM · Lead Management', description: 'Lead management CRM with a centralized Stage Engine, 30+ substages, JSONB custom fields, bilingual UI, financial reporting, and Livewire Kanban boards.', badge: 'Lead Engine' },
    'we-publishing': { category: 'Education SaaS · Multi-tenant', description: 'Customized Laravel school SaaS with database-per-tenant architecture, digital book delivery, student portal, real-time chat, dashboards, and full Arabic translation.', badge: 'SaaS Platform' },
    'ucofy': { category: 'IoT · SaaS · Multi-role', description: 'Full digital platform managing the used cooking oil lifecycle in UAE. 5 integrated apps, IoT sensors, real-time tracking, regulator-grade audit trail.', badge: 'Flagship' },
    'yjoz': { category: 'Rental & Booking · Mobile', description: 'Rental & booking platform for iOS and Android. Led backend architecture and a Flutter team, serving thousands of active users across the UAE.', badge: 'Team Lead' },
    'lootah-islamic': { category: 'Islamic Finance · Mobile App', description: 'Sharia-compliant Islamic products marketplace. Built the backend API powering the iOS & Android app with product catalog, user auth, and order management.', badge: 'Backend' },
    'dirim': { category: 'E-commerce Ecosystem · Mobile', description: 'Multi-app e-commerce ecosystem: customer app, delivery app, and seller portal. Shared backend API, real-time order tracking, payment integration.', badge: 'Backend' },
    'lootah-biofuels': { category: 'Energy · Web & App', description: 'Corporate platform for a biofuel energy leader. Built the backend powering the mobile app plus the full corporate website at lootahbiofuels.com.', badge: 'Backend' },
    'stockart': { category: 'Art Marketplace · Mobile', description: 'Digital art marketplace connecting UAE artists with buyers. Built the API backend: listings, artist profiles, order flow, and admin panel at stockart.ae.', badge: 'Backend' },
    'carbonproof': { category: 'Carbon Credits · Blockchain', description: 'Carbon credit tokenization platform at cpt-token.com. Built the backend API handling token issuance, wallet management, and compliance reporting.', badge: 'Backend' },
    'khadoom': { category: 'On-demand Services · Mobile', description: 'On-demand home services platform with 3 apps: customer, serviceman, and provider. Built the full backend powering all three apps from a single API.', badge: 'Backend' },
    'luxam': { category: 'Luxury Retail · Mobile', description: 'Luxury goods mobile app. Supervised and contributed to backend development, coordinating a cross-functional team to deliver iOS & Android on schedule.', badge: 'Led & Built' },
    'lootah-shop': { category: 'Retail · Mobile App + Dashboard', description: "Fully owned end-to-end: designed and built the backend API, Flutter mobile app, and admin dashboard. The complete retail ecosystem for YS Lootah's shopping platform.", badge: 'Full Stack' },
    'lootah-ecommerce': { category: 'E-commerce · Mobile App', description: "Backend API for Lootah's main e-commerce mobile app. Product catalog, cart, checkout, order management, and delivery tracking — all powered by a single robust API.", badge: 'Backend' },
    'offer123': { category: 'Deals & Offers · Mobile App', description: 'Deals and offers aggregator mobile app. Built the backend API handling merchant onboarding, offer listings, user targeting, and redemption tracking.', badge: 'Backend' },
  },
  websites: {
    'yslinvestments': { category: 'Holding Group · Corporate', description: 'Corporate website for yslinvestments.com — a diversified Dubai investment group. Multi-brand subsidiary pages, investor portal, press center.', badge: 'Corporate' },
    'zmkauto': { category: 'Automotive · UAE', description: 'Full digital platform for zmkauto.com in the UAE automotive industry. Inventory management, trade-in flow, lead routing, and reporting dashboards.', badge: 'Automotive' },
    'mindtrax': { category: 'AI / Tech · Web', description: 'AI-powered product website at mindtraxai.com. Full design and development, landing page, product showcase, and onboarding flow.', badge: 'AI' },
    'procurehub': { category: 'Procurement · B2B Platform', description: 'B2B procurement platform at procurehub.ae. Vendor management, RFQ flow, purchase order tracking, and admin dashboard.', badge: 'B2B' },
    'dirim-mall': { category: 'Online Mall · E-commerce', description: 'Full-featured e-commerce mall website at dirim-mall.com. Multi-vendor catalog, shopping cart, checkout, seller dashboard, and delivery tracking.', badge: 'E-commerce' },
    'ysl-robotics': { category: 'Robotics · Corporate', description: 'Corporate tech website for yslootahrobotics.com. Product showcase, capabilities overview, robotics solution catalog, and contact flow.', badge: 'Tech' },
    'nottingham-mep': { category: 'MEP Engineering · Corporate', description: 'Corporate website for nottingham-mep.com. Project portfolio showcase, service catalog, team pages, and lead generation forms.', badge: 'Construction' },
    'reparee': { category: 'Repair Services · Web Platform', description: 'Service booking and repair management platform at reparee.com. Technician booking flow, job status tracking, and customer portal.', badge: 'Platform' },
  },
  details: { year: 'Year', role: 'Role', duration: 'Duration', category: 'Category' },
  defaults: {
    role: 'Full-Stack',
    duration: '8 weeks',
    challenge: 'The client needed a production-grade platform built quickly without sacrificing engineering quality.',
    architecture: 'Modular monolith with clear domain boundaries. Laravel on the backend, Flutter on the front. CI/CD on day one.',
    architectureBullets: ['Domain-driven module split', 'Queue workers for heavy tasks', 'Idempotent API design', 'Observable from day one'],
    whatShipped: 'A full production system, used daily, with monitoring and a real admin panel.',
    whatShippedBullets: ['Auth + roles', 'Core feature flow', 'Admin dashboard', 'Real-time updates', 'Reporting & exports'],
    outcome: 'The platform is live, growing, and stable. Performance is well under target. Ops use it without my help.',
    kpiUptimeLbl: 'Uptime',
    kpiUptimeDesc: 'Production availability since launch.',
    kpiApiLbl: 'API ms',
    kpiApiDesc: 'P95 response time across all endpoints.',
    kpiBugsLbl: 'Critical Bugs',
    kpiBugsDesc: 'Reported in production over six months.',
    kpiTrainLbl: 'Days to Train',
    kpiTrainDesc: 'A new team member was productive in five.',
    galleryLabels: ['Dashboard', 'Mobile', 'Reports', 'Admin', 'Roles', 'Audit log'],
  },
  ucofy: {
    role: 'Tech Lead',
    duration: '14 months · ongoing',
    summary: 'Five integrated apps powering the entire used cooking oil collection lifecycle in the UAE — from IoT-enabled tank monitoring to driver dispatch, regulatory reporting, and end-of-pipe accountability.',
    challenge: [
      'Used cooking oil collection in UAE is a regulated industry. Every drop must be traceable from restaurant to refinery, with proof for the federal regulator.',
      'The legacy process: paper logs, WhatsApp photos, an Excel sheet that someone updates weekly. Lost data. Disputed pickups. Audit pain.',
    ],
    architecture: ['A modular Laravel backend serving five Flutter apps (admin web, driver mobile, restaurant mobile, supervisor tablet, regulator dashboard) plus an MQTT ingestion layer for IoT tank sensors.'],
    architectureBullets: [
      'Event-sourced collection log — every state change is auditable',
      'MQTT → queue worker pipeline ingesting 58k IoT events / day',
      'Role-based UI: drivers see jobs, supervisors see fleets, regulator sees the whole network',
      'Offline-first driver app with conflict-resolution sync',
    ],
    whatShipped: ['Five production apps used by drivers, restaurants, supervisors, and the regulator daily across the UAE.'],
    whatShippedBullets: [
      'Driver dispatch + route optimization',
      'IoT tank-level monitoring (real-time)',
      'Restaurant self-service portal',
      'Regulator audit dashboard with export',
      'Multi-language (AR / EN) across all surfaces',
    ],
    outcome: ['1,200+ active users, 58k events/day, and a clean compliance audit. The CFO stopped chasing weekly Excel reports.'],
    kpiAppsLbl: 'Apps in Production',
    kpiAppsDesc: 'Driver, restaurant, supervisor, admin, regulator.',
    kpiUsersLbl: 'Daily Active Users',
    kpiUsersDesc: 'Across all five apps in the field.',
    kpiEventsLbl: 'IoT Events / Day',
    kpiEventsDesc: 'MQTT messages ingested, queued, and stored.',
    kpiUptimeLbl: 'Uptime',
    kpiUptimeDesc: 'Since first production deployment.',
  },
}

const ar: LocaleStrings = {
  appsAndSaaS: {
    'gonsure': { category: 'تأمين · CRM · متعدد القنوات', description: 'نظام CRM لدورة حياة التأمين يستقبل أحداث GTM عبر webhooks موقعة HMAC ضمن بنية من ١٤ موديول، ويتتبع الرحلة عبر ٦ مراحل و٣٠ مرحلة فرعية لحظياً.', badge: 'المشروع الأحدث' },
    'damin': { category: 'تأمين · إدارة Leads', description: 'CRM لإدارة العملاء المحتملين مع Stage Engine مركزي و٣٠+ مرحلة فرعية وحقول JSONB مخصصة وواجهة ثنائية اللغة ولوحات Kanban.', badge: 'محرك مراحل' },
    'we-publishing': { category: 'تعليم · SaaS متعدد المستأجرين', description: 'تخصيص منصة Laravel تعليمية ببنية قاعدة بيانات لكل مستأجر، مع مكتبة كتب رقمية وبوابة طالب ودردشة فورية ولوحات تقارير وترجمة عربية كاملة.', badge: 'منصة SaaS' },
    'ucofy': { category: 'إنترنت الأشياء · SaaS · متعدد الأدوار', description: 'منصة رقمية كاملة تدير دورة حياة زيت الطهي المستعمل في الإمارات. ٥ تطبيقات متكاملة، حساسات IoT، تتبع لحظي، سجل تدقيق بمستوى الجهات التنظيمية.', badge: 'الرئيسي' },
    'yjoz': { category: 'تأجير وحجز · جوال', description: 'منصة تأجير وحجز لـ iOS و Android. قدت معمارية الـ backend وفريق Flutter، تخدم آلاف المستخدمين النشطين عبر الإمارات.', badge: 'قائد فريق' },
    'lootah-islamic': { category: 'تمويل إسلامي · تطبيق جوال', description: 'سوق منتجات إسلامية متوافقة مع الشريعة. بنيت الـ API الخلفي لتطبيق iOS و Android مع كتالوج المنتجات والمصادقة وإدارة الطلبات.', badge: 'Backend' },
    'dirim': { category: 'منظومة تجارة إلكترونية · جوال', description: 'منظومة تجارة إلكترونية متعددة التطبيقات: تطبيق العميل، تطبيق التوصيل، وبوابة البائع. API مشترك، تتبع لحظي، تكامل مدفوعات.', badge: 'Backend' },
    'lootah-biofuels': { category: 'طاقة · ويب وتطبيق', description: 'منصة شركة لرائدة الطاقة الحيوية. بنيت الـ backend الذي يشغّل تطبيق الجوال بالإضافة إلى الموقع المؤسسي الكامل على lootahbiofuels.com.', badge: 'Backend' },
    'stockart': { category: 'سوق فني · جوال', description: 'سوق فن رقمي يربط فناني الإمارات بالمشترين. بنيت الـ API الخلفي: القوائم، ملفات الفنانين، تدفق الطلبات، ولوحة الإدارة على stockart.ae.', badge: 'Backend' },
    'carbonproof': { category: 'أرصدة كربون · بلوكتشين', description: 'منصة ترميز أرصدة الكربون على cpt-token.com. بنيت الـ API الذي يتعامل مع إصدار الرموز، إدارة المحفظة، وتقارير الامتثال.', badge: 'Backend' },
    'khadoom': { category: 'خدمات حسب الطلب · جوال', description: 'منصة خدمات منزلية حسب الطلب بـ ٣ تطبيقات: العميل، العامل، ومزود الخدمة. بنيت الـ backend الكامل لتشغيل كل التطبيقات الثلاثة من API واحد.', badge: 'Backend' },
    'luxam': { category: 'تجزئة فاخرة · جوال', description: 'تطبيق سلع فاخرة. أشرفت وساهمت في تطوير الـ backend، ونسّقت فريقاً متعدد الوظائف لتسليم iOS و Android في الموعد.', badge: 'قيادة وبناء' },
    'lootah-shop': { category: 'تجزئة · تطبيق + لوحة', description: 'مملوك بالكامل من البداية للنهاية: صممت وبنيت الـ API الخلفي وتطبيق Flutter ولوحة الإدارة. منظومة التجزئة الكاملة لمنصة تسوق YS لوتاه.', badge: 'متكامل' },
    'lootah-ecommerce': { category: 'تجارة إلكترونية · تطبيق جوال', description: 'API خلفي لتطبيق Lootah الرئيسي للتجارة الإلكترونية. كتالوج، سلة، دفع، إدارة طلبات، تتبع توصيل — كل ذلك مدعوم بـ API قوي واحد.', badge: 'Backend' },
    'offer123': { category: 'عروض وخصومات · تطبيق جوال', description: 'تطبيق تجميع عروض وخصومات. بنيت الـ API الخلفي للتعامل مع تسجيل التجار، قوائم العروض، استهداف المستخدمين، وتتبع الاسترداد.', badge: 'Backend' },
  },
  websites: {
    'yslinvestments': { category: 'مجموعة قابضة · شركات', description: 'موقع شركة yslinvestments.com — مجموعة استثمارية متنوعة في دبي. صفحات شركات تابعة متعددة، بوابة مستثمرين، مركز إعلامي.', badge: 'شركات' },
    'zmkauto': { category: 'سيارات · الإمارات', description: 'منصة رقمية كاملة لـ zmkauto.com في قطاع السيارات الإماراتي. إدارة المخزون، تدفق المقايضة، توجيه العملاء، ولوحات تقارير.', badge: 'سيارات' },
    'mindtrax': { category: 'ذكاء اصطناعي / تقنية · ويب', description: 'موقع منتج بالذكاء الاصطناعي على mindtraxai.com. تصميم وتطوير كامل، صفحة هبوط، عرض منتج، وتدفق ترحيب.', badge: 'AI' },
    'procurehub': { category: 'مشتريات · منصة B2B', description: 'منصة مشتريات B2B على procurehub.ae. إدارة الموردين، تدفق طلبات الأسعار، تتبع أوامر الشراء، ولوحة إدارة.', badge: 'B2B' },
    'dirim-mall': { category: 'سوق إلكتروني · تجارة', description: 'موقع سوق إلكتروني كامل الميزات على dirim-mall.com. كتالوج متعدد البائعين، سلة تسوق، دفع، لوحة بائع، وتتبع توصيل.', badge: 'تجارة إلكترونية' },
    'ysl-robotics': { category: 'روبوتات · شركات', description: 'موقع شركة تقنية على yslootahrobotics.com. عرض منتجات، نظرة على القدرات، كتالوج حلول الروبوتات، وتدفق التواصل.', badge: 'تقنية' },
    'nottingham-mep': { category: 'هندسة MEP · شركات', description: 'موقع شركة nottingham-mep.com. عرض معرض المشاريع، كتالوج الخدمات، صفحات الفريق، ونماذج توليد العملاء.', badge: 'إنشاءات' },
    'reparee': { category: 'خدمات إصلاح · منصة ويب', description: 'منصة حجز خدمات وإدارة إصلاح على reparee.com. تدفق حجز الفنيين، تتبع حالة المهمة، وبوابة العميل.', badge: 'منصة' },
  },
  details: { year: 'السنة', role: 'الدور', duration: 'المدة', category: 'الفئة' },
  defaults: {
    role: 'متكامل',
    duration: '٨ أسابيع',
    challenge: 'احتاج العميل منصة بمستوى الإنتاج تُبنى بسرعة دون التضحية بجودة الهندسة.',
    architecture: 'monolith معياري بحدود نطاق واضحة. Laravel في الخلفية، Flutter في الواجهة. CI/CD من اليوم الأول.',
    architectureBullets: ['تقسيم وحدات قائم على النطاق', 'Queue workers للمهام الثقيلة', 'تصميم API idempotent', 'قابل للمراقبة من اليوم الأول'],
    whatShipped: 'نظام إنتاجي كامل، يُستخدم يومياً، مع مراقبة ولوحة إدارة حقيقية.',
    whatShippedBullets: ['مصادقة + أدوار', 'تدفق الميزة الأساسية', 'لوحة إدارة', 'تحديثات لحظية', 'تقارير وتصدير'],
    outcome: 'المنصة حية، تنمو، ومستقرة. الأداء أقل بكثير من المستهدف. العمليات تستخدمها بدون مساعدتي.',
    kpiUptimeLbl: 'وقت التشغيل',
    kpiUptimeDesc: 'توفّر الإنتاج منذ الإطلاق.',
    kpiApiLbl: 'API بالميلي ثانية',
    kpiApiDesc: 'زمن الاستجابة P95 عبر كل النقاط.',
    kpiBugsLbl: 'أخطاء حرجة',
    kpiBugsDesc: 'مُبلَّغ عنها في الإنتاج خلال ستة أشهر.',
    kpiTrainLbl: 'أيام للتدريب',
    kpiTrainDesc: 'عضو فريق جديد أصبح منتجاً في خمسة.',
    galleryLabels: ['لوحة', 'جوال', 'تقارير', 'إدارة', 'أدوار', 'سجل تدقيق'],
  },
  ucofy: {
    role: 'قائد تقني',
    duration: '١٤ شهراً · مستمر',
    summary: 'خمسة تطبيقات متكاملة تشغّل دورة حياة جمع زيت الطهي المستعمل بالكامل في الإمارات — من مراقبة الخزانات بـ IoT إلى توزيع السائقين، التقارير التنظيمية، والمحاسبة في نهاية الأنبوب.',
    challenge: [
      'جمع زيت الطهي المستعمل في الإمارات قطاع منظَّم. كل قطرة يجب أن تكون قابلة للتتبع من المطعم إلى المصفاة، مع إثبات للجهة الفيدرالية.',
      'العملية القديمة: سجلات ورقية، صور واتساب، ملف Excel يحدّثه أحدهم أسبوعياً. بيانات مفقودة. عمليات استلام متنازع عليها. ألم تدقيق.',
    ],
    architecture: ['backend معياري بـ Laravel يخدم خمسة تطبيقات Flutter (إدارة ويب، سائق جوال، مطعم جوال، مشرف تابلت، لوحة الجهة التنظيمية) بالإضافة إلى طبقة استقبال MQTT لحساسات الخزانات.'],
    architectureBullets: [
      'سجل جمع مدفوع بالأحداث — كل تغيير حالة قابل للتدقيق',
      'خط MQTT ← queue worker يستقبل ٥٨ ألف حدث IoT/يوم',
      'واجهة حسب الدور: السائقون يرون المهام، المشرفون يرون الأساطيل، الجهة التنظيمية ترى الشبكة كاملة',
      'تطبيق سائق يعمل دون اتصال مع مزامنة بحل التعارضات',
    ],
    whatShipped: ['خمسة تطبيقات إنتاجية يستخدمها السائقون والمطاعم والمشرفون والجهة التنظيمية يومياً عبر الإمارات.'],
    whatShippedBullets: [
      'توزيع السائقين + تحسين المسارات',
      'مراقبة مستوى الخزان IoT (لحظي)',
      'بوابة خدمة ذاتية للمطاعم',
      'لوحة تدقيق للجهة التنظيمية مع تصدير',
      'متعدد اللغات (عربي / إنجليزي) عبر كل الواجهات',
    ],
    outcome: ['+١,٢٠٠ مستخدم نشط، ٥٨ ألف حدث/يوم، وتدقيق امتثال نظيف. توقّف المدير المالي عن مطاردة تقارير Excel الأسبوعية.'],
    kpiAppsLbl: 'تطبيقات في الإنتاج',
    kpiAppsDesc: 'سائق، مطعم، مشرف، إدارة، جهة تنظيمية.',
    kpiUsersLbl: 'مستخدمون نشطون يومياً',
    kpiUsersDesc: 'عبر التطبيقات الخمسة في الميدان.',
    kpiEventsLbl: 'أحداث IoT / يوم',
    kpiEventsDesc: 'رسائل MQTT تُستقبل وتُصف وتُخزَّن.',
    kpiUptimeLbl: 'وقت التشغيل',
    kpiUptimeDesc: 'منذ أول نشر إنتاجي.',
  },
}

const locales = { en, ar } as const
type SupportedLocale = keyof typeof locales

function getStrings(locale: string): LocaleStrings {
  return locales[(locale as SupportedLocale) in locales ? (locale as SupportedLocale) : 'en']
}

// Tone & filter tags don't change per locale
const appsAndSaaSMeta: Array<{ slug: string; shortTitle?: string; tone: Tone; tags: string[]; filterTags: string[]; title: string }> = [
  { slug: 'gonsure',          shortTitle: 'Gonsure', title: 'Gonsure Lifecycle CRM', tone: 'tone-accent', tags: ['Laravel 11', 'Livewire 4', 'PostgreSQL', 'Azure DevOps'], filterTags: ['apps', 'enterprise'] },
  { slug: 'damin',            shortTitle: 'Damin',   title: 'Damin Insurance CRM', tone: 'tone-blue', tags: ['Laravel 11', 'Livewire 4', 'JSONB', 'Reporting'], filterTags: ['apps', 'enterprise'] },
  { slug: 'we-publishing',    shortTitle: 'WE',      title: 'We Publishing SaaS', tone: 'tone-lime', tags: ['Laravel 10', 'Multi-tenant', 'Pusher', 'MySQL'], filterTags: ['apps', 'enterprise'] },
  { slug: 'ucofy',            shortTitle: 'UCOFY', title: 'Lootah UCOFY', tone: 'tone-accent', tags: ['Laravel', 'Flutter', 'IoT', 'MySQL'],                          filterTags: ['apps', 'enterprise'] },
  { slug: 'yjoz',             shortTitle: 'YJOZ',  title: 'Yjoz',         tone: 'tone-lime',   tags: ['Flutter', 'Laravel API', 'Firebase', 'Payments'],             filterTags: ['apps', 'ecommerce'] },
  { slug: 'lootah-islamic',                        title: 'Lootah Islamic', tone: 'tone-blue', tags: ['Laravel', 'Flutter', 'REST API', 'MySQL'],                    filterTags: ['apps', 'ecommerce'] },
  { slug: 'dirim',                                 title: 'Dirim',          tone: 'tone-accent', tags: ['Laravel', 'Flutter', 'WebSockets', 'MySQL'],                filterTags: ['apps', 'ecommerce'] },
  { slug: 'lootah-biofuels',  shortTitle: 'Biofuels', title: 'Lootah Biofuels', tone: 'tone-lime', tags: ['Laravel', 'Flutter', 'WordPress', 'MySQL'],                filterTags: ['apps', 'enterprise'] },
  { slug: 'stockart',                              title: 'Stockart',       tone: 'tone-paper', tags: ['Laravel', 'Flutter', 'Stripe', 'MySQL'],                     filterTags: ['apps', 'ecommerce'] },
  { slug: 'carbonproof',      shortTitle: 'CPT',   title: 'CarbonProof Token', tone: 'tone-blue', tags: ['Laravel', 'Blockchain', 'Flutter', 'REST API'],            filterTags: ['apps', 'enterprise'] },
  { slug: 'khadoom',                               title: 'Khadoom',        tone: 'tone-accent', tags: ['Laravel', 'Flutter', 'Push Notifications', 'MySQL'],       filterTags: ['apps'] },
  { slug: 'luxam',                                 title: 'Luxam',          tone: 'tone-lime',   tags: ['Laravel', 'Flutter', 'Payment Gateway', 'Firebase'],       filterTags: ['apps', 'ecommerce'] },
  { slug: 'lootah-shop',                           title: 'Lootah Shop',    tone: 'tone-accent', tags: ['Laravel', 'Flutter', 'Admin Dashboard', 'MySQL'],         filterTags: ['apps', 'ecommerce'] },
  { slug: 'lootah-ecommerce', shortTitle: 'Lootah E-com', title: 'Lootah E-commerce', tone: 'tone-blue', tags: ['Laravel', 'Flutter', 'REST API', 'MySQL'],          filterTags: ['apps', 'ecommerce'] },
  { slug: 'offer123',                              title: 'Offer 123',      tone: 'tone-lime',   tags: ['Laravel', 'Flutter', 'Push Notifications', 'MySQL'],      filterTags: ['apps', 'ecommerce'] },
]

const websitesMeta: Array<{ slug: string; shortTitle?: string; tone: Tone; tags: string[]; filterTags: string[]; title: string; external?: string }> = [
  { slug: 'yslinvestments',  shortTitle: 'YSL', title: 'YSL Investments',  tone: 'tone-paper', tags: ['Laravel', 'Multi-tenant', 'CMS'],     filterTags: ['websites', 'enterprise'] },
  { slug: 'zmkauto',         shortTitle: 'ZMK', title: 'ZMK Auto',         tone: '',            tags: ['Laravel', 'Vue.js', 'Reporting'],     filterTags: ['websites', 'enterprise'] },
  { slug: 'mindtrax',        shortTitle: 'MindTrax', title: 'MindTrax AI', tone: 'tone-accent', tags: ['Laravel', 'React', 'AI Integration'], filterTags: ['websites', 'enterprise'], external: 'https://mindtraxai.com' },
  { slug: 'procurehub',      title: 'Procurehub',     tone: 'tone-lime',  tags: ['Laravel', 'Vue.js', 'B2B'],            filterTags: ['websites', 'enterprise'], external: 'https://procurehub.ae' },
  { slug: 'dirim-mall',      shortTitle: 'Dirim', title: 'Dirim Mall',    tone: 'tone-blue',  tags: ['Laravel', 'Multi-vendor', 'Payment'],   filterTags: ['websites', 'ecommerce'], external: 'https://dirim-mall.com' },
  { slug: 'ysl-robotics',    shortTitle: 'Robotics', title: 'YSL Robotics', tone: 'tone-accent', tags: ['Laravel', 'React', 'CMS'],         filterTags: ['websites', 'enterprise'], external: 'https://yslootahrobotics.com' },
  { slug: 'nottingham-mep',  shortTitle: 'Nottingham', title: 'Nottingham MEP', tone: 'tone-lime', tags: ['WordPress', 'Custom Theme', 'SEO'], filterTags: ['websites', 'enterprise'], external: 'https://nottingham-mep.com' },
  { slug: 'reparee',         title: 'Reparee',        tone: 'tone-paper', tags: ['Laravel', 'Vue.js', 'Booking Engine'], filterTags: ['websites'], external: 'https://reparee.com' },
]

export function getAppsAndSaaS(locale: string): ProjectListing[] {
  const s = getStrings(locale)
  return appsAndSaaSMeta.map(m => ({
    ...m,
    ...(s.appsAndSaaS[m.slug] || { category: '', description: '', badge: '' }),
  }))
}

export function getWebsites(locale: string): ProjectListing[] {
  const s = getStrings(locale)
  return websitesMeta.map(m => ({
    ...m,
    ...(s.websites[m.slug] || { category: '', description: '', badge: '' }),
  }))
}

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
  { url: 'https://prove.ae', label: 'prove.ae' },
  { url: 'https://impact-tc.com', label: 'impact-tc.com' },
  { url: 'https://ter.hdtc-academy.com', label: 'ter.hdtc-academy.com' },
  { url: 'https://ter.hdtc-ksa.com', label: 'ter.hdtc-ksa.com' },
  { url: 'https://pmt.hdtc-ksa.com', label: 'pmt.hdtc-ksa.com' },
  { url: 'https://test.hdtc-sy.com', label: 'test.hdtc-sy.com' },
  { url: 'https://chefcon.net', label: 'chefcon.net' },
  { url: 'https://tanoorexpress.com', label: 'tanoorexpress.com' },
  { url: 'https://menu.tanoorexpress.com', label: 'menu.tanoorexpress.com' },
  { url: 'https://ecommerce.prove-technology.com', label: 'ecommerce.prove-technology.com' },
  { url: 'https://impact.prove-media.com', label: 'impact.prove-media.com' },
  { url: 'https://feedback.prove-media.com', label: 'feedback.prove-media.com' },
  { url: 'https://digitalmedia.prove-technology.com', label: 'digitalmedia.prove-technology.com' },
  { url: 'https://marketing.prove-technology.com', label: 'marketing.prove-technology.com' },
  { url: 'https://ads.prove-media.com', label: 'ads.prove-media.com' },
  { url: 'https://sales.prove-group.com', label: 'sales.prove-group.com' },
  { url: 'https://task.prove-group.com', label: 'task.prove-group.com' },
  { url: 'https://website.prove.ae', label: 'website.prove.ae' },
  { url: 'https://clinic.prove.ae', label: 'clinic.prove.ae' },
  { url: 'https://goldenstarluster.com', label: 'goldenstarluster.com' },
  { url: 'http://resturant.prove.ae', label: 'resturant.prove.ae' },
  { url: 'http://apps.prove.ae', label: 'apps.prove.ae' },
  { url: 'http://ecommerce.prove.ae', label: 'ecommerce.prove.ae' },
  { url: 'https://media.prove.ae', label: 'media.prove.ae' },
  { url: 'https://feedback.prove.ae', label: 'feedback.prove.ae' },
  { url: 'https://ksa.prove-media.com', label: 'ksa.prove-media.com' },
  { url: 'http://realstate.prove.ae', label: 'realstate.prove.ae' },
  { url: 'http://services.prove.ae', label: 'services.prove.ae' },
  { url: 'http://tc.prove.ae', label: 'tc.prove.ae' },
  { url: 'http://beauty.prove.ae', label: 'beauty.prove.ae' },
  { url: 'https://mohammadnajjar.com', label: 'mohammadnajjar.com' },
  { url: 'https://laravel-dubai.com', label: 'laravel-dubai.com' },
  { url: 'https://web-development.ae', label: 'web-development.ae' },
  { url: 'https://wordpress-dubai.com', label: 'wordpress-dubai.com' },
  { url: 'https://njoomaldaleel.com', label: 'njoomaldaleel.com' },
]

export function getProjectDetails(locale: string): Record<string, ProjectDetail> {
  const s = getStrings(locale)
  const apps = getAppsAndSaaS(locale)
  const sites = getWebsites(locale)
  const all = [...apps, ...sites]

  const baseDetails = (slug: string, override: Partial<ProjectDetail> = {}): ProjectDetail => {
    const listing = all.find(x => x.slug === slug)!
    const idx = all.findIndex(x => x.slug === slug)
    const nextListing = all[(idx + 1) % all.length]
    const year = override.year || '2024'
    const role = override.role || s.defaults.role
    const duration = override.duration || s.defaults.duration

    return {
      ...listing,
      year,
      duration,
      role,
      summary: override.summary || listing.description,
      liveUrl: override.liveUrl,
      coverInitial: override.coverInitial || listing.shortTitle || listing.title.slice(0, 4).toUpperCase(),
      details: override.details || [
        { lbl: s.details.year, val: year },
        { lbl: s.details.role, val: role },
        { lbl: s.details.duration, val: duration },
        { lbl: s.details.category, val: listing.category },
      ],
      narrative: override.narrative || {
        challenge: [s.defaults.challenge],
        architecture: [s.defaults.architecture],
        architectureBullets: s.defaults.architectureBullets,
        whatShipped: [s.defaults.whatShipped],
        whatShippedBullets: s.defaults.whatShippedBullets,
        outcome: [s.defaults.outcome],
      },
      kpis: override.kpis || [
        { num: '99.9', plus: '%', lbl: s.defaults.kpiUptimeLbl, desc: s.defaults.kpiUptimeDesc },
        { num: '< 300', lbl: s.defaults.kpiApiLbl, desc: s.defaults.kpiApiDesc },
        { num: '0', lbl: s.defaults.kpiBugsLbl, desc: s.defaults.kpiBugsDesc },
        { num: '5', lbl: s.defaults.kpiTrainLbl, desc: s.defaults.kpiTrainDesc },
      ],
      techStack: override.techStack || ['Laravel 11', 'PHP 8.3', 'MySQL 8', 'Redis', 'Flutter', 'Docker', 'Nginx', 'GitHub Actions'],
      gallery: override.gallery || s.defaults.galleryLabels.map((label, i) => {
        const tones: Tone[] = ['tone-accent', 'tone-ink', 'tone-lime', '', 'tone-blue', '']
        return { tone: tones[i] || '', label }
      }),
      next: override.next || { slug: nextListing.slug, title: nextListing.title },
      tickerItems: override.tickerItems || `CASE STUDY · ${listing.title.toUpperCase()} | ${listing.category.toUpperCase()} | DUBAI · ${year} | LARAVEL · FLUTTER · MYSQL`,
    }
  }

  const details: Record<string, ProjectDetail> = Object.fromEntries(
    all.map(p => [p.slug, baseDetails(p.slug)])
  )

  // Customize select projects
  details['ucofy'] = baseDetails('ucofy', {
    year: '2023 — present',
    duration: s.ucofy.duration,
    role: s.ucofy.role,
    liveUrl: 'https://ucofy.ae',
    summary: s.ucofy.summary,
    narrative: {
      challenge: s.ucofy.challenge,
      architecture: s.ucofy.architecture,
      architectureBullets: s.ucofy.architectureBullets,
      whatShipped: s.ucofy.whatShipped,
      whatShippedBullets: s.ucofy.whatShippedBullets,
      outcome: s.ucofy.outcome,
    },
    kpis: [
      { num: '5', lbl: s.ucofy.kpiAppsLbl, desc: s.ucofy.kpiAppsDesc },
      { num: '1.2', plus: 'k', lbl: s.ucofy.kpiUsersLbl, desc: s.ucofy.kpiUsersDesc },
      { num: '58', plus: 'k', lbl: s.ucofy.kpiEventsLbl, desc: s.ucofy.kpiEventsDesc },
      { num: '99.9', plus: '%', lbl: s.ucofy.kpiUptimeLbl, desc: s.ucofy.kpiUptimeDesc },
    ],
    techStack: ['Laravel 11', 'PHP 8.3', 'MySQL 8', 'Redis', 'Mosquitto MQTT', 'Flutter', 'Riverpod', 'Docker', 'Nginx', 'GitHub Actions'],
    next: { slug: 'gonsure', title: 'Gonsure Lifecycle CRM' },
    tickerItems: 'CASE STUDY · UCOFY | IOT · SAAS · MULTI-ROLE | UAE · 2023 → PRESENT | 5 APPS · 1.2K USERS · 58K EVENTS/DAY',
  })

  details['gonsure'] = baseDetails('gonsure', {
    year: '2026 — present',
    duration: locale === 'ar' ? 'من 04/2026 حتى الآن' : '04/2026 — present',
    role: locale === 'ar' ? 'مهندس معماري · قائد تقني' : 'Solution Architect · Lead Engineer',
    liveUrl: 'https://gonsure.com',
    summary: locale === 'ar'
      ? 'نظام CRM لدورة حياة التأمين يستقبل أحداث GTM عبر webhooks موقعة HMAC ضمن بنية معيارية من ١٤ موديول، ويتتبع رحلة العميل لحظياً عبر ٦ مراحل و٣٠ مرحلة فرعية.'
      : 'An insurance lifecycle CRM ingesting GTM DataLayer events through HMAC-verified webhooks across a 14-module modular architecture, tracking customers in real time across 6 stages and 30 substages.',
    narrative: {
      challenge: locale === 'ar'
        ? [
            'فرق التسويق والعمليات احتاجت CRM يفهم سلوك العميل الفعلي من الأحداث، لا مجرد Leads تُدخل يدوياً.',
            'كان المطلوب ربط الرحلة الكاملة من الإشارة التسويقية إلى الحالة التشغيلية مع أتمتة واضحة وتتبّع كامل.'
          ]
        : [
            'Marketing and operations teams needed a CRM that understood behavioral events, not just manually entered leads.',
            'The platform had to unify customer journey tracking, campaign logic, and operational follow-up without losing auditability.'
          ],
      architecture: locale === 'ar'
        ? ['Laravel 11 بهيكلية معيارية من ١٤ موديول، مع PostgreSQL و Livewire 4 وطبقة webhook تتحقق من HMAC لأحداث GTM DataLayer.']
        : ['Laravel 11 modular monolith across 14 modules, backed by PostgreSQL and Livewire 4, with an HMAC-verified webhook ingestion layer for GTM DataLayer events.'],
      architectureBullets: locale === 'ar'
        ? ['بوابة webhooks موقعة بـ HMAC', 'محرك مراحل عبر ٦ مراحل و٣٠ مرحلة فرعية', 'تقسيم rule-based للجمهور والحملات', 'تنفيذ متعدد القنوات عبر WhatsApp و SMS و Email']
        : ['HMAC-verified webhook gateway for behavioral events', 'Journey engine spanning 6 stages and 30 substages', 'Rule-based segmentation and campaign targeting', 'Multi-channel delivery across WhatsApp, SMS, and email'],
      whatShipped: locale === 'ar'
        ? ['CRM تشغيلي كامل لإدارة رحلة العميل التأمينية من الحدث التسويقي حتى المتابعة والحملات والتقارير.']
        : ['A production insurance lifecycle CRM covering journey tracking, operations, campaign delivery, and reporting.'],
      whatShippedBullets: locale === 'ar'
        ? ['تقسيم rule-based', 'حملات متعددة القنوات مع opt-out enforcement', 'إنشاء حالات تلقائي للأحداث الحرجة', 'تقارير KPI و Funnel مع CSV/Excel export']
        : ['Rule-based segmentation', 'Multi-channel campaigns with opt-out enforcement', 'Automated case creation on critical events', 'KPI and funnel reporting with CSV/Excel export'],
      outcome: locale === 'ar'
        ? ['وحدة رؤية تشغيلية موحّدة للرحلة كاملة، مع ربط واضح بين التسويق والمتابعة والحالات في نظام واحد قابل للتوسع.']
        : ['Unified marketing, journey, and case-management visibility inside one scalable operating system for the insurance team.'],
    },
    kpis: [
      { num: '14', lbl: locale === 'ar' ? 'موديولات' : 'Modules', desc: locale === 'ar' ? 'ضمن الهيكلية الأساسية للمنتج.' : 'Inside the modular architecture.' },
      { num: '6', lbl: locale === 'ar' ? 'مراحل الرحلة' : 'Journey Stages', desc: locale === 'ar' ? 'المسار الرئيسي للعميل.' : 'Primary customer journey stages.' },
      { num: '30', plus: '+', lbl: locale === 'ar' ? 'مراحل فرعية' : 'Substages', desc: locale === 'ar' ? 'تفصيلات الحالة ضمن الرحلة.' : 'Fine-grained journey tracking.' },
      { num: '3', lbl: locale === 'ar' ? 'قنوات' : 'Channels', desc: locale === 'ar' ? 'WhatsApp و SMS و Email.' : 'WhatsApp, SMS, and email campaigns.' },
    ],
    techStack: ['Laravel 11', 'PHP 8.3', 'Livewire 4', 'PostgreSQL', 'Spatie Permission', 'Spatie Laravel Data', 'Docker', 'Azure DevOps'],
    next: { slug: 'damin', title: 'Damin Insurance CRM' },
    tickerItems: 'CASE STUDY · GONSURE | INSURANCE CRM · EVENT-DRIVEN | 2026 → PRESENT | 14 MODULES · 6 STAGES · 30+ SUBSTAGES',
  })

  details['damin'] = baseDetails('damin', {
    year: '2026 — present',
    duration: locale === 'ar' ? 'من 02/2026 حتى الآن' : '02/2026 — present',
    role: locale === 'ar' ? 'قائد بناء النظام' : 'Lead Engineer',
    liveUrl: 'https://daminbroker.com',
    summary: locale === 'ar'
      ? 'CRM لإدارة العملاء المحتملين والتأمين مع Pipeline كامل من Contact إلى Issue، ومحرك مراحل مركزي وحقول JSONB مخصصة وتقارير مالية وتحويلية وواجهة ثنائية اللغة.'
      : 'A lead-management CRM with a full Contact → Lead → Opportunity → Issue pipeline, a centralized Stage Engine, JSONB custom fields, financial reporting, and a bilingual UI.',
    narrative: {
      challenge: locale === 'ar'
        ? ['احتاج فريق الوساطة نظاماً يفرض انتقالات صحيحة بين المراحل مع سجل تاريخي واضح لكل حركة.', 'كما احتاجوا تقارير مالية وتحويلية مخصصة لا توفرها الأنظمة الجاهزة بسهولة.']
        : ['The brokerage team needed strict stage governance, clear movement history, and a single operating pipeline from first contact to issue resolution.', 'They also needed bilingual workflows and reporting that generic CRMs rarely model well.'],
      architecture: locale === 'ar'
        ? ['Laravel 11 مع Stage Engine مركزي، و PostgreSQL 15 وحقول JSONB مخصصة وواجهات Livewire Kanban ولوحة ثنائية اللغة.']
        : ['Laravel 11 backed by PostgreSQL 15, with a central Stage Engine, JSONB-backed custom fields, and bilingual Livewire Kanban surfaces.'],
      architectureBullets: locale === 'ar'
        ? ['Stage Engine للتنقلات والتاريخ', 'JSONB custom fields system', 'RBAC عبر ٤ أدوار باستخدام Spatie Permission', 'لوحات Kanban وتقارير تشغيلية ومالية']
        : ['Central Stage Engine for transitions and history', 'JSONB custom fields system', 'RBAC across 4 roles with Spatie Permission', 'Kanban workflow plus operational and financial reports'],
      whatShipped: locale === 'ar'
        ? ['نظام CRM كامل لإدارة الـ leads والفرص والقضايا مع تقارير وتحكم أدوار وواجهة عربية/إنجليزية.']
        : ['A production CRM for lead, opportunity, and issue management with reporting, permissions, and bilingual execution.'],
      whatShippedBullets: locale === 'ar'
        ? ['Pipeline من Contact إلى Issue', 'تقارير Finance و Win/Loss و Pipeline Value و Team Performance و Conversion Funnel', 'Livewire Kanban boards', 'إشعارات وتاريخ تغيرات مركزي']
        : ['Contact → Lead → Opportunity → Issue pipeline', 'Finance, win/loss, pipeline value, team performance, and conversion funnel reporting', 'Livewire Kanban boards', 'Automated notifications and centralized history logging'],
      outcome: locale === 'ar'
        ? ['توحيد طريقة تعامل الفريق مع الـ leads والتقارير ضمن نظام واحد واضح وقابل للقياس.']
        : ['Standardized how the brokerage team handles leads, transitions, and reporting inside one measurable system.'],
    },
    kpis: [
      { num: '30', plus: '+', lbl: locale === 'ar' ? 'مراحل فرعية' : 'Substages', desc: locale === 'ar' ? 'تفصيل دقيق للـ pipeline.' : 'Granular pipeline control.' },
      { num: '4', lbl: locale === 'ar' ? 'أدوار' : 'Roles', desc: locale === 'ar' ? 'RBAC عبر Spatie Permission.' : 'RBAC powered by Spatie Permission.' },
      { num: '5', lbl: locale === 'ar' ? 'تقارير أساسية' : 'Core Reports', desc: locale === 'ar' ? 'تقارير مالية وتحويلية وتشغيلية.' : 'Financial, funnel, and performance reporting.' },
      { num: '2', lbl: locale === 'ar' ? 'لغات' : 'Languages', desc: locale === 'ar' ? 'واجهة عربية وإنجليزية كاملة.' : 'Full Arabic and English UI.' },
    ],
    techStack: ['Laravel 11', 'PHP 8.3', 'Livewire 4', 'Alpine.js', 'PostgreSQL 15', 'Docker', 'Azure DevOps', 'Spatie Permission'],
    next: { slug: 'we-publishing', title: 'We Publishing SaaS' },
    tickerItems: 'CASE STUDY · DAMIN | INSURANCE CRM · LEAD MANAGEMENT | 2026 → PRESENT | 30+ SUBSTAGES · JSONB · BILINGUAL',
  })

  details['we-publishing'] = baseDetails('we-publishing', {
    year: '2025 — 2026',
    duration: locale === 'ar' ? '12/2025 — 04/2026' : '12/2025 — 04/2026',
    role: locale === 'ar' ? 'مهندس Full-Stack أول' : 'Senior Full-Stack Engineer',
    summary: locale === 'ar'
      ? 'تخصيص منصة SaaS تعليمية على Laravel 10 ببنية قاعدة بيانات لكل مستأجر، تخدم أربع فئات من المستخدمين، مع مكتبة كتب رقمية وبوابة طالب ودردشة فورية ولوحات تقارير وترجمة عربية كاملة.'
      : 'A customized Laravel 10 education SaaS with database-per-tenant architecture, four user tiers, digital book delivery, student portal features, real-time chat, dashboards, and full Arabic localization.',
    narrative: {
      challenge: locale === 'ar'
        ? ['المطلوب لم يكن مجرد موقع تعليمي، بل تخصيص عميق لمنصة SaaS مدرسية متعددة المستأجرين مع عزل بيانات حقيقي وتدفقات استخدام يومية.', 'كان لا بد من دعم المحتوى الرقمي والواجبات والاختبارات والدردشة الفورية مع تعريب كامل للواجهة.']
        : ['The platform needed deep tenant-specific customization, not a superficial school website refresh.', 'It had to support digital content, assignments, exams, student communication, and Arabic UX across the full product.'],
      architecture: locale === 'ar'
        ? ['Laravel 10 ببنية database-per-tenant، مع Queue Jobs وWebSockets عبر Pusher وواجهة Bootstrap 4 + jQuery.']
        : ['Laravel 10 with database-per-tenant isolation, queue jobs, WebSockets via Pusher, and a Bootstrap 4 + jQuery front-end.'],
      architectureBullets: locale === 'ar'
        ? ['Database-per-tenant architecture', 'أربع فئات مستخدمين ببوابات منفصلة', 'مكتبة كتب رقمية PDF / Flash / Flipbook', 'تعريب كامل وتقوية أمنية على مبادئ OWASP']
        : ['Database-per-tenant architecture', 'Four user tiers with separate portals', 'Digital book delivery via PDF, Flash, and Flipbook', 'Arabic localization plus OWASP-minded hardening'],
      whatShipped: locale === 'ar'
        ? ['منصة تعليمية SaaS مخصصة للإنتاج تشمل الطلاب والمعلمين والإدارة والمحتوى الرقمي والتقارير.']
        : ['A production-ready education SaaS tailored for school operations, content delivery, and role-specific workflows.'],
      whatShippedBullets: locale === 'ar'
        ? ['مكتبة رقمية مع licensing وتوزيع حسب المنهج', 'بوابة طالب مع واجبات واختبارات ودردشة فورية', 'لوحات تقارير تشغيلية', 'ترجمة عربية كاملة للمنتج']
        : ['Digital library with licensing and curriculum-based assignment', 'Student portal for assignments, exams, and real-time chat', 'Reporting dashboards for school operations', 'Full Arabic translation across the product'],
      outcome: locale === 'ar'
        ? ['منصة أكثر جاهزية للتشغيل اليومي داخل بيئات متعددة المستأجرين مع تجربة عربية كاملة ومحتوى رقمي منظم.']
        : ['A more production-ready school SaaS across multi-tenant environments with a complete Arabic user experience and structured digital content delivery.'],
    },
    kpis: [
      { num: '4', lbl: locale === 'ar' ? 'فئات مستخدمين' : 'User Tiers', desc: locale === 'ar' ? 'Super Admin و School Admin و Teacher و Student.' : 'Super Admin, School Admin, Teacher, and Student.' },
      { num: '3', lbl: locale === 'ar' ? 'أنواع كتب' : 'Book Types', desc: locale === 'ar' ? 'PDF و Flash و Flipbook.' : 'PDF, Flash, and Flipbook delivery.' },
      { num: '1', plus: '00%', lbl: locale === 'ar' ? 'تعريب الواجهة' : 'Arabic UI', desc: locale === 'ar' ? 'المنتج مترجم بالكامل.' : 'Full product localization.' },
      { num: '1', lbl: locale === 'ar' ? 'بنية Multi-DB' : 'Multi-DB', desc: locale === 'ar' ? 'عزل قاعدة بيانات لكل مستأجر.' : 'Database-per-tenant isolation.' },
    ],
    techStack: ['Laravel 10', 'PHP 8.3', 'MySQL', 'Bootstrap 4', 'jQuery', 'Pusher', 'DOMPDF', 'Maatwebsite Excel'],
    next: { slug: 'ucofy', title: 'Lootah UCOFY' },
    tickerItems: 'CASE STUDY · WE PUBLISHING | EDUCATION SAAS · MULTI-TENANT | 2025 → 2026 | 4 USER TIERS · DIGITAL LIBRARY',
  })

  details['yjoz'] = baseDetails('yjoz', {
    year: '2022 — 2024',
    duration: locale === 'ar' ? '١٨ شهراً' : '18 months',
    role: locale === 'ar' ? 'قائد تقني · مهندس Backend' : 'Tech Lead · Backend Architect',
    liveUrl: 'https://yjoz.com',
    next: { slug: 'lootah-islamic', title: 'Lootah Islamic' },
  })

  return details
}
