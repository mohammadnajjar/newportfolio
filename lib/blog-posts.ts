export interface TOCEntry {
  id: string
  label: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tone?: '' | 'tone-accent' | 'tone-lime' | 'tone-ink' | 'tone-blue' | 'tone-paper'
  thumbLabel: string
  filterTags: string[]
  tags: string[]
  featured?: boolean
  published?: boolean
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'saas-mvp-in-6-weeks',
    title: 'How I ship a SaaS MVP in exactly six weeks (and what I cut)',
    excerpt: "Six weeks isn't a deadline — it's a forcing function. The real work is deciding what not to build. Here's the exact list of features I cut every time, the three I refuse to compromise on, and why week 5 is the hardest.",
    category: 'Architecture',
    date: '14 Apr 2026',
    readTime: '12 min read',
    thumbLabel: 'Ship in six weeks.',
    filterTags: ['architecture', 'saas'],
    tags: ['SaaS', 'Architecture', 'Methodology', 'MVP', 'Laravel', 'Founders'],
    featured: true,
    published: true,
  },
  {
    slug: 'laravel-performance',
    title: 'From 8 seconds to 600 milliseconds: a Laravel performance autopsy',
    excerpt: "The dashboard was slow and the client was patient — until they weren't. Here's the real profiling log, the five bottlenecks we found, and the fixes that actually moved the needle.",
    category: 'Performance',
    date: '02 Apr 2026',
    readTime: '9 min read',
    tone: 'tone-accent',
    thumbLabel: 'Laravel',
    filterTags: ['laravel', 'performance'],
    tags: ['Laravel', 'Performance', 'MySQL', 'Profiling'],
    published: false,
  },
  {
    slug: 'flutter-offline-sync',
    title: 'Offline-first Flutter: the sync strategy that actually holds up in the field',
    excerpt: 'Drivers go underground. Delivery riders lose signal for 40 minutes. The naive "cache and retry" approach corrupts data. Here\'s the conflict resolution model I trust.',
    category: 'Flutter',
    date: '21 Mar 2026',
    readTime: '11 min read',
    thumbLabel: 'Flutter',
    filterTags: ['flutter'],
    tags: ['Flutter', 'Mobile', 'Offline'],
    published: false,
  },
  {
    slug: 'leading-eleven-engineers',
    title: 'Leading eleven engineers without turning into a project manager',
    excerpt: "I still write code every day. Here's how I organize my week, protect maker-time, and still review every PR that matters — without becoming the bottleneck.",
    category: 'Leadership',
    date: '08 Mar 2026',
    readTime: '7 min read',
    tone: 'tone-lime',
    thumbLabel: 'Team',
    filterTags: ['leadership'],
    tags: ['Leadership', 'Engineering Management'],
    published: false,
  },
  {
    slug: 'multi-tenant-laravel',
    title: "Multi-tenant Laravel: the pattern I'd use every time",
    excerpt: 'Row-level tenant isolation, shared schema, zero dual-writes. Five years of multi-tenant mistakes condensed into one migration file and a middleware.',
    category: 'Architecture',
    date: '22 Feb 2026',
    readTime: '14 min read',
    tone: 'tone-ink',
    thumbLabel: 'Architecture',
    filterTags: ['architecture', 'laravel'],
    tags: ['Laravel', 'Architecture', 'Multi-tenant'],
    published: false,
  },
  {
    slug: 'ucofy-iot-ingest',
    title: 'How UCOFY ingests 58k IoT events a day without dropping one',
    excerpt: 'MQTT into a queue worker cluster, idempotent writes, and a dead-letter strategy that actually gets read. The boring architecture that made regulatory audit possible.',
    category: 'Architecture',
    date: '05 Feb 2026',
    readTime: '10 min read',
    tone: 'tone-accent',
    thumbLabel: 'IoT',
    filterTags: ['architecture'],
    tags: ['IoT', 'Architecture', 'MQTT', 'Laravel'],
    published: false,
  },
  {
    slug: 'pair-programming-interviews',
    title: 'The take-home I ditched — and what I ask candidates instead',
    excerpt: "Take-homes filter for the wrong skill. Here's the 60-minute pair programming format I've used for the last 30 hires, and why it gets me better signal with less candidate pain.",
    category: 'Leadership',
    date: '18 Jan 2026',
    readTime: '8 min read',
    thumbLabel: 'Hiring',
    filterTags: ['leadership', 'performance'],
    tags: ['Hiring', 'Leadership'],
    published: false,
  },
  {
    slug: 'flutter-stopped-bloc',
    title: 'Why I stopped using Bloc (and what replaced it)',
    excerpt: "Bloc was great, right until it wasn't. On our last three production apps, the state management footprint shrunk 60% after switching to Riverpod + a thin domain layer.",
    category: 'Flutter',
    date: '29 Dec 2025',
    readTime: '6 min read',
    tone: 'tone-lime',
    thumbLabel: 'Mobile',
    filterTags: ['flutter', 'performance'],
    tags: ['Flutter', 'Riverpod', 'State Management'],
    published: false,
  },
  {
    slug: 'arabic-rtl-patterns',
    title: "Bilingual Arabic/English web apps that don't suffer",
    excerpt: "A proper RTL implementation isn't a flip — it's a design decision baked in from day one. The five patterns I use on every Arabic project.",
    category: 'Architecture',
    date: '12 Dec 2025',
    readTime: '9 min read',
    tone: 'tone-ink',
    thumbLabel: 'RTL',
    filterTags: ['architecture'],
    tags: ['RTL', 'Arabic', 'i18n'],
    published: false,
  },
]

// ============================================================
// Blog post bodies (the actual articles)
// ============================================================

export interface BlogPostFull extends BlogPostMeta {
  lead: string
  toc: TOCEntry[]
  body: string // HTML body
  faq: { q: string; a: string }[]
}

const saasMvpBody = `
<p>Founders come to me with a spec. The spec is always too long. That's not a criticism — it's physics. You've been thinking about your product for months; I've been thinking about it for an hour. Of course your mental model has more branches than mine.</p>

<p>My job, in the first week, is to prune that tree down to what a paying customer actually needs. Not what a pitch deck needs. Not what <em>future you</em> might need when you have 500 customers. What <em>today's</em> first user — the one who hasn't signed up yet — needs to reach a moment of usefulness.</p>

<h2 id="skeleton">The six-week skeleton</h2>

<p>Every MVP runs on the same backbone. The domain varies, the features vary, the scoreline varies — but the cadence is identical. Six weeks broken into four phases:</p>

<ul>
  <li><strong>Week 1:</strong> Discovery, cuts, and architecture. No code.</li>
  <li><strong>Weeks 2–3:</strong> Auth, billing, admin shell. The boring stuff first.</li>
  <li><strong>Weeks 4–5:</strong> The one feature that matters. The thing a user pays for.</li>
  <li><strong>Week 6:</strong> Polish, deploy, and the launch checklist.</li>
</ul>

<p>Notice what's missing: there's no "design week," no "user testing sprint," no "iterate on feedback." Those things happen — but they happen <em>concurrently</em>, not in their own box. A six-week MVP doesn't have the runway for sequential quality gates.</p>

<h2 id="cuts">The things I cut every single time</h2>

<p>Here's the list I bring to every kickoff call. If your spec contains any of these, they're leaving the room. We can add them back in week 7 — after you have paying customers telling you to.</p>

<blockquote>"But customers will expect it." No they won't. They'll expect it if you <em>list</em> it. They won't notice if you don't.</blockquote>

<h3>1. Social login</h3>
<p>Email + password is fine for an MVP. Sign-in-with-Google costs you a day of integration, a Google Cloud console, an OAuth consent screen that needs review if you go past 100 users, and a dependency that can break on you without warning. Launch with email. Add Google in week 7 if users ask. <em>They will not ask.</em></p>

<h3>2. Password reset by SMS</h3>
<p>You don't have 1,000 users yet. You have zero. Email password reset is free, it works, and Twilio costs per message. Ship the email flow. Add SMS when the cost per password reset is less than the cost per signup.</p>

<h3>3. In-app notifications</h3>
<p>Email is a notification system that already exists, has infinite retention, works on every device, and users read. A bell icon with a badge count is half a week of engineering that buys you nothing a weekly digest email doesn't.</p>

<h3>4. Dark mode</h3>
<p>Nobody has ever canceled a subscription because a SaaS lacked dark mode. It's a week of CSS variables and QA that doesn't convert a single user. Six months from now, when your product has design DNA worth respecting, do it right. Not now.</p>

<h2 id="non-negotiables">The three I refuse to compromise on</h2>

<p>Equally important is the list of things I <em>won't</em> ship without. These are the non-negotiables. Skip any of them and the MVP isn't a product, it's a demo:</p>

<ol>
  <li><strong>Billing that can actually charge a card.</strong> Not "billing coming soon." Not a Stripe test key. An MVP that can't take money isn't an MVP — it's a prototype with HTML.</li>
  <li><strong>A password reset flow that actually works.</strong> 30% of your early users will lock themselves out in the first week. If your recovery flow doesn't work, those users are permanently gone.</li>
  <li><strong>An admin panel you can use without a database client.</strong> Not Forge, not phpMyAdmin, not SSH + MySQL CLI. A real admin panel where you or your support person can see a user, toggle a flag, refund a charge. You will use it every single day.</li>
</ol>

<h2 id="week-five">Why week five is always the hardest</h2>

<p>In weeks 1–4, everyone's excited. Auth ships. Billing ships. The shell comes together. Founders get their first <em>look, it's real</em> moment. Then week five arrives and reality hits.</p>

<p>Week five is when the one feature that actually matters — the thing your product is <em>for</em> — collides with the time you have left. Every MVP I've ever done, the core feature is more complex than the spec suggested. Not because founders are wrong. Because the spec only captured the happy path, and production is an obstacle course of edge cases.</p>

<pre><code>// The naive spec:
user.uploads(receipt)
  .then(r =&gt; ocr.extract(r))
  .then(data =&gt; db.save(data))

// The actual week 5 reality:
// — what if the receipt is a PDF?
// — what if the photo is upside down?
// — what if OCR returns 3 possible values?
// — what if the user uploads the same receipt twice?
// — what if OCR is down?
// — what if the user cancels mid-upload?</code></pre>

<p>My rule for week five: <strong>cut every "nice to have" in the core feature, no exceptions.</strong> Every founder wants to push back. Every founder wants to keep "just this one small thing." It's never just one small thing — it's the thing that pushes week six into week eight.</p>

<h2 id="launch">Week six — the launch week</h2>

<p>Week six is never about building. If you're still building in week six, you've already slipped. Week six is: deploy, test on real devices, fill the legal pages, set up the transactional emails, run the checkout on a real card, and write the launch post.</p>

<p>I ship on a Wednesday. Not Friday — Friday ships die over the weekend when nobody's watching. Not Monday — Monday is for the team to recover from weekend panic. Wednesday gives you Thursday and Friday to fix what's broken before anyone important is watching.</p>

<h2 id="outside-mvp">What's outside the MVP</h2>

<p>The question I get most is: "what about all the things we cut?" The answer: <em>they're in version 1.1.</em> An MVP is not a finished product. It's the smallest possible version of your product that can take money and teach you what you got wrong. Everything else is <em>version 1.1, 1.2, 1.3…</em></p>

<p>If the MVP succeeds, you'll spend the next six months adding back the things you cut — but only the ones that actually mattered. Most of them, it turns out, don't. That's the whole point of the exercise.</p>

<h2 id="truth">The uncomfortable truth</h2>

<p>Six weeks is a constraint, not a promise. I promise a shipped product. I don't promise it'll be <em>your</em> vision of the product. It'll be the smallest version of your product that actually works — and in my experience, that's the version your users prefer anyway.</p>

<p>If you're considering a SaaS MVP and the "six weeks" number scares you, that's a good sign. If it sounds comfortable, your spec is too short.</p>
`

export const blogPostBodies: Record<string, BlogPostFull> = {
  'saas-mvp-in-6-weeks': {
    ...blogPosts.find(p => p.slug === 'saas-mvp-in-6-weeks')!,
    lead: "Six weeks isn't a deadline. It's a forcing function. The real work isn't deciding what to build — it's deciding what not to. After shipping 40+ of these, here's the exact framework, the features I cut every single time, and why week five is always the one that breaks founders.",
    toc: [
      { id: 'skeleton', label: 'The six-week skeleton' },
      { id: 'cuts', label: 'Things I cut every time' },
      { id: 'non-negotiables', label: 'The three non-negotiables' },
      { id: 'week-five', label: 'Why week five is hardest' },
      { id: 'launch', label: 'Week six — launch week' },
      { id: 'outside-mvp', label: "What's outside the MVP" },
      { id: 'truth', label: 'The uncomfortable truth' },
    ],
    body: saasMvpBody,
    faq: [
      { q: 'What if six weeks really isn\'t enough for my product?', a: 'Then it\'s not an MVP — it\'s a v1. We can absolutely build it, but I\'ll quote it as a 10–14 week engagement instead. The six-week framework only works for a strict subset of \"smallest useful product\" scopes.' },
      { q: 'Do you guarantee the six-week timeline?', a: 'Yes, with a caveat: the timeline assumes you\'re responsive (replies inside 24h), the scope is genuinely cut to MVP-size, and there are no major mid-project pivots. If the timeline slips because of my work, I keep going free until launch. If it slips because of scope creep, we re-quote.' },
      { q: 'What stack do you use for SaaS MVPs?', a: 'Laravel + Inertia + React on the back end and front end, Tailwind for styling, MySQL for data, Redis for cache and queues, deployed via Forge or Docker on your infrastructure of choice. Boring, proven, fast to ship.' },
      { q: 'Can I see an example of a real six-week MVP?', a: 'Most of them are under NDA, but UCOFY (in the Work section) started as a six-week MVP for a single use case before scaling into the full platform you see now. The first version shipped in 41 days.' },
      { q: 'How much does a SaaS MVP cost?', a: 'Starting at $4,500 for a single-feature MVP. Most engagements land between $5,500 and $7,500 depending on integrations (Stripe, transactional email, third-party APIs). Fixed price, no surprises.' },
    ],
  },
}
