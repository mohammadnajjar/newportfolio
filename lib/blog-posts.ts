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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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

// ============================================================
// laravel-performance
// ============================================================
const laravelPerformanceBody = `
<p>The dashboard had been slow for months. The kind of slow where you click a tab, walk to the kitchen, come back, and it's <em>almost</em> done. The team had stopped noticing. The client had stopped noticing. Then a board member opened it on a demo call, watched the spinner for eight seconds, and stopped being polite about it.</p>

<p>I got the email that night. Forty-eight hours later the same dashboard rendered in 600 milliseconds. This is the autopsy — the actual order of operations, the actual queries, the actual numbers. No magic, no rewrite, no "we switched to Postgres." Just five bottlenecks fixed in the right order.</p>

<h2 id="baseline">Step zero: measure before you guess</h2>

<p>Every performance gig I've ever taken on, the team already had a theory. "It's the database." "It's the queue." "It's that one report nobody uses." They are wrong about half the time. Profiling first isn't optional — it's the only thing that separates this work from astrology.</p>

<p>I run three things, in this order, on the staging copy:</p>

<ul>
  <li><strong>Laravel Telescope</strong> with the slow-query threshold lowered to 50ms. Reveals the N+1s and the fat queries.</li>
  <li><strong>Clockwork</strong> in the browser dev tools. Shows me the request timeline — where the time actually goes within a single page load.</li>
  <li><strong>tideways or Blackfire</strong> on a single representative request. CPU flame graph, not aggregates.</li>
</ul>

<p>The dashboard's baseline was ugly: 8.1s wall time, 312 SQL queries, 47 of them duplicates, and a single render() call that ate 1.4s on its own.</p>

<h2 id="bottleneck-one">Bottleneck #1: the eager-loading lie</h2>

<p>The codebase was full of <code>->with('user', 'project', 'tags')</code> eager loads. So far so good — except the controller then called a model accessor that re-queried inside a loop. Classic N+1 hidden behind a method.</p>

<pre><code>// looks innocent
public function getStatusLabelAttribute() {
    return $this->statusHistory()-&gt;latest()-&gt;first()?-&gt;label;
}

// renders 80 rows → 80 extra queries</code></pre>

<p>Fix: load <code>statusHistory</code> as a relation with <code>->latestOfMany()</code> and read from the loaded collection instead of the accessor. Cost: 30 minutes. Saved: 1.9s and 78 queries.</p>

<h2 id="bottleneck-two">Bottleneck #2: the report that paginated <em>after</em> filtering in PHP</h2>

<p>The most expensive query in the whole app loaded the entire <code>orders</code> table (340k rows), filtered it in a PHP collection, and <em>then</em> called <code>->forPage()</code>. Someone, years ago, had written it that way to "keep the SQL simple." It was returning 25 rows to the user and loading 340,000 to do it.</p>

<p>Fix: push the filter into a query scope, paginate at the database level, add a composite index on <code>(user_id, status, created_at)</code>. Cost: 90 minutes including the migration. Saved: 3.2s on every dashboard load.</p>

<blockquote>If a query takes longer than 200ms, the answer is almost never "more cache." The answer is "this query is wrong."</blockquote>

<h2 id="bottleneck-three">Bottleneck #3: a JSON column scanned without an index</h2>

<p>Half the dashboard widgets queried a <code>metadata</code> JSON column with <code>WHERE metadata-&gt;'$.tier' = 'pro'</code>. MySQL was doing a full table scan every time. The fix is unsexy: a generated column plus a normal B-tree index.</p>

<pre><code>ALTER TABLE accounts
  ADD COLUMN tier VARCHAR(20) GENERATED ALWAYS AS
    (JSON_UNQUOTE(metadata-&gt;'$.tier')) STORED,
  ADD INDEX idx_accounts_tier (tier);</code></pre>

<p>This single migration cut three widgets from 400ms apiece to under 20ms. If you're storing typed data inside JSON because schema changes are scary, generated columns let you have both.</p>

<h2 id="bottleneck-four">Bottleneck #4: the cache that wasn't</h2>

<p>The team had wrapped the most expensive computation in <code>Cache::remember(...)</code>. Beautiful. Except the cache key included the current timestamp. Every request was a cache miss. They'd been running uncached for two years and didn't know it.</p>

<p>Fix: a stable cache key based on the user ID and a daily bucket. TTL of one hour. The first hit warms it; the next 600 hit Redis instead of MySQL. Saved: 1.1s per request.</p>

<h2 id="bottleneck-five">Bottleneck #5: a Vue component re-rendering on every keystroke</h2>

<p>Backend was now under 400ms but the UI still felt sluggish. Clockwork was clean. The problem was on the front end: a search input rebound the entire dataset on every keystroke instead of debouncing. The render function alone was 600ms because it was re-creating 800 chart points twelve times per second.</p>

<p>Fix: 250ms debounce, memoized chart data, virtual scrolling on the list below. Cost: a single afternoon. The page now <em>feels</em> instant.</p>

<h2 id="lessons">What I take away from every one of these</h2>

<ol>
  <li><strong>Profile production-shaped data, not local seed data.</strong> The seed file had 100 rows; production had 340k. The bug only existed at scale.</li>
  <li><strong>The fix is almost never "rewrite."</strong> Five surgical changes beat a four-month rewrite every time.</li>
  <li><strong>Indexes pay rent.</strong> Two indexes accounted for 60% of the total improvement. Neither took an hour to add.</li>
  <li><strong>Cache hits are a metric.</strong> If you don't track them, you don't have caching — you have hopeful code.</li>
</ol>

<p>From 8.1s to 0.6s in two days, no rewrite, no new infrastructure, no team changes. That's the boring secret of performance work. Most slow apps are slow for the same five reasons, and the fixes have been documented for fifteen years. You just have to actually measure.</p>
`

// ============================================================
// flutter-offline-sync
// ============================================================
const flutterOfflineSyncBody = `
<p>The first delivery app I built assumed the rider had signal. They didn't. Not in basement loading docks, not in the metro tunnels, not in some of the older buildings in Deira. The naive approach — cache the request, retry when online — corrupted three days of orders before we noticed. This is what I do now instead.</p>

<h2 id="model">The mental model: every action is an event</h2>

<p>Stop thinking about screens and forms. Start thinking about events. When the rider taps "delivered," that's not an HTTP call — it's an event that <em>describes</em> what happened. The event gets persisted locally first, with a UUID, a timestamp, and the rider's device clock. The HTTP call is a separate concern that may or may not succeed.</p>

<pre><code>class DeliveryEvent {
  final String id;            // UUID v4, generated on device
  final String orderId;
  final EventType type;       // delivered, refused, partial
  final DateTime occurredAt;  // device time
  final Map&lt;String, dynamic&gt; payload;
  SyncStatus status;          // pending, synced, conflict
}</code></pre>

<p>Once the event is on disk, the UI can confirm it instantly. The sync layer takes over from there. The user never waits for the network.</p>

<h2 id="storage">Storage: SQLite, not Hive</h2>

<p>I've used Hive, Isar, ObjectBox, SQLite. For sync workloads I always come back to SQLite (via <code>drift</code>). Reason: I need transactions, indexes, and the ability to query "all unsynced events older than 5 minutes" cheaply. NoSQL stores give you none of those at the speed SQLite does.</p>

<p>The schema is two tables. <code>events</code> holds the queue. <code>state</code> holds the last-known-server view that the UI renders from. Writes go to <code>events</code>. Reads come from <code>state</code>. The sync worker reconciles the two.</p>

<h2 id="conflicts">Conflict resolution: the part everyone gets wrong</h2>

<p>Two riders both mark order #4421 as delivered, three minutes apart, both offline. Their phones come online at different times. What's the truth?</p>

<p>The naive answer is "last write wins" — and it's the answer that has burned me three times. Last-write-wins by device clock means you're trusting unsynchronized clocks; one rider with a wrong timezone setting can wipe out a colleague's work.</p>

<p>The model that holds up:</p>

<ul>
  <li><strong>Server timestamp wins for ordering.</strong> The device timestamp is metadata; the order is decided by when the server received the event.</li>
  <li><strong>Idempotent operations only.</strong> Every event has a UUID. The server stores it. A duplicate UUID is a no-op, not an error.</li>
  <li><strong>Conflicts are surfaced, not silenced.</strong> If two events for the same order disagree (one "delivered," one "refused"), the dispatcher gets a notification. A human resolves it.</li>
</ul>

<blockquote>Silent conflict resolution is a bug that takes six months to find. Loud conflict resolution is a Slack notification that takes a minute to fix.</blockquote>

<h2 id="sync-worker">The sync worker</h2>

<p>One isolate, one job: drain the queue. Algorithm:</p>

<ol>
  <li>Listen to connectivity changes via <code>connectivity_plus</code>.</li>
  <li>On reconnect, fetch up to 50 pending events sorted by <code>occurredAt</code>.</li>
  <li>POST them to <code>/sync/events</code> in a single batch with their UUIDs.</li>
  <li>Server returns the canonical state. Update local <code>state</code> table inside a transaction.</li>
  <li>Mark events <code>synced</code>. Drop them after 7 days.</li>
</ol>

<p>The batching matters. A rider coming up from a metro tunnel after 40 minutes has 60–80 queued events. Sending them one-at-a-time over a flaky 4G connection is a death-march of TCP handshakes. One batched POST gets through.</p>

<h2 id="clock-skew">Clock skew is real</h2>

<p>Device clocks are wrong. I have logs of riders whose phones think it's two days in the future. The fix: at every successful sync response, the server returns its own UTC time. The client computes the offset and uses <em>that</em> for "now" in subsequent events. The device clock becomes a hint, not a source of truth.</p>

<h2 id="ux">What the UI shows</h2>

<p>Three states the user must always see:</p>

<ul>
  <li><strong>✓ Synced</strong> — green, no badge, normal.</li>
  <li><strong>↻ 12 pending</strong> — yellow, count badge, never blocking.</li>
  <li><strong>⚠ Conflict on order #4421</strong> — red, tappable, opens a resolution screen.</li>
</ul>

<p>The thing that builds rider trust isn't the sync engine itself. It's the count badge. They know, at a glance, that the app remembers what they did. Without that, they re-tap the button "just to be sure," which is its own kind of corruption.</p>

<h2 id="testing">How I test it</h2>

<p>The bug surface is huge and most of it is timing. I test three scenarios on every release:</p>

<ol>
  <li>Airplane mode for 30 minutes, complete 40 deliveries, reconnect. All 40 must arrive in order.</li>
  <li>Two devices, same rider account, same order, both offline, both mark complete. Server gets the conflict, dispatcher resolves it.</li>
  <li>Mid-sync force-quit. Reopen. The half-synced batch must finish, not duplicate.</li>
</ol>

<p>If you can't reproduce those three on a Saturday afternoon with two test phones, your sync layer isn't ready for production.</p>
`

// ============================================================
// leading-eleven-engineers
// ============================================================
const leadingElevenBody = `
<p>I lead an eleven-person engineering team and I still write code every day. People ask how that's possible. The honest answer is: it's barely possible, it's a daily fight against drift, and the only reason it works is that I've ruthlessly cut things that look like the job but aren't.</p>

<h2 id="rule-one">Rule one: maker time is sacred</h2>

<p>I block 09:00–13:00 every day. No meetings, no Slack, no PR reviews. Phone on Do Not Disturb. The team knows. The client knows. The calendar shows "Deep work — emergencies only" and emergencies, in practice, happen twice a year.</p>

<p>Without this block, I become the bottleneck the team complains about. With it, I ship code, the team ships code, and nobody is waiting on me at 4pm to unblock a merge.</p>

<h2 id="standup">The standup that doesn't waste anyone's time</h2>

<p>We don't do morning standups. They eat the freshest brain hours of the day. Instead, async written updates by 10:30 in a thread. Three lines:</p>

<ul>
  <li>What I shipped yesterday</li>
  <li>What I'm shipping today</li>
  <li>What's blocking me, if anything</li>
</ul>

<p>If something's blocked, the person blocking responds in the thread. If two people need to talk, they talk — not me, not the whole team. We have a 20-minute team huddle on Tuesdays for actual coordination. That's it.</p>

<h2 id="prs">PR reviews: the ones that matter and the ones that don't</h2>

<p>I do not review every PR. I review the ones that touch:</p>

<ol>
  <li>Authentication, authorization, or billing.</li>
  <li>Database migrations.</li>
  <li>Public API contracts.</li>
  <li>Anything tagged <code>architecture</code> by the author.</li>
</ol>

<p>That's roughly 30% of merges. The rest are reviewed by peers. I look at all of them async, but only block on the four categories above. The rule the team follows: <em>two senior engineers approve, ship.</em> If you wait for me, you're wasting your week.</p>

<h2 id="onones">1-on-1s, weekly, no agenda from me</h2>

<p>Every engineer gets 30 minutes a week. I don't bring an agenda. They do. If they don't have anything, the meeting is 5 minutes long and we both go back to work. If they have something, it gets the time it needs.</p>

<p>The questions I keep in my back pocket, used sparingly:</p>

<ul>
  <li>"What's the most frustrating part of your week?"</li>
  <li>"Who on the team makes you better?"</li>
  <li>"What would you change about how we work, if you could?"</li>
</ul>

<p>I write the answers down. Not for HR. For the next time we hire — they tell me what kind of person fits the team I actually have.</p>

<h2 id="hiring">The hiring filter that protects everyone</h2>

<p>Eleven people is the size where one bad hire stalls the whole team for a quarter. I do not hire from CVs alone. The pipeline is: 30-minute culture conversation, 60-minute pair programming on a real bug from our backlog, async written architecture exercise, team chat with two engineers they'd work with daily.</p>

<p>The architecture exercise filters out people who can pass take-homes but can't think out loud. The pair programming filters out people who write code in isolation but freeze when watched. The team chat is the team's veto. Anyone on the team can kill the offer. I've had it happen twice. Both times they were right.</p>

<h2 id="delegation">Delegation isn't dumping</h2>

<p>The trap every new lead falls into: handing off a problem with "let me know if you have questions." That's not delegation. That's abandonment with extra steps.</p>

<blockquote>Delegating well takes longer than doing it yourself the first three times. After that, it's the only way the team scales.</blockquote>

<p>What I actually do: I write a one-paragraph problem statement, list two or three constraints, list one or two non-goals, and end with "your first checkpoint is in 48 hours — show me the approach before you write the code." Then I go away. The 48-hour checkpoint catches the wrong direction before it's expensive.</p>

<h2 id="energy">Protecting energy, not just time</h2>

<p>Time is the metric everyone tracks. Energy is the one that actually matters. Two hours of clear-headed work in the morning produces more than eight hours of fragmented afternoon attention. I learned this the slow way.</p>

<p>What I changed: no Slack notifications on my phone, ever. Email checked twice a day. Calls clustered in two windows — 14:00–15:30 and 16:30–17:30. The morning is for code. The late afternoon is for people. The evening is for my family.</p>

<h2 id="code">Why I still write code</h2>

<p>This is the unpopular part. Some leads stop coding because "leverage" — a single decision they make affects ten people, why would they spend time on a single feature?</p>

<p>The answer: because if I stop coding, I stop knowing what's hard. I make calls about timelines that are wrong. I underestimate refactoring. I miss the friction my team feels every day in the build pipeline. Two hours of code a day keeps me honest. The leverage is real, but it's earned by staying technical, not by climbing out of the editor.</p>
`

// ============================================================
// multi-tenant-laravel
// ============================================================
const multiTenantBody = `
<p>Every multi-tenant SaaS I've built started with the same question: separate database per tenant, or shared schema with a tenant column? I've shipped both. I've migrated from one to the other under load. After five years and seven multi-tenant Laravel apps, I'd use the shared-schema, row-level pattern every single time. Here's why, and here's the exact pattern.</p>

<h2 id="why-shared">Why shared schema, not database-per-tenant</h2>

<p>The pitch for database-per-tenant sounds good: clean isolation, easy backup-per-customer, painless deletion. In practice, it falls apart on day one of cross-tenant analytics, day two of schema migrations, and day three of onboarding the 50th customer.</p>

<ul>
  <li><strong>Migrations don't scale.</strong> Running <code>php artisan migrate</code> across 200 tenant databases is a 40-minute deploy with one failed migration locking you in a half-state.</li>
  <li><strong>Cross-tenant reports are a nightmare.</strong> Aggregating across 200 databases is either slow or requires a separate ETL pipeline.</li>
  <li><strong>Onboarding is heavy.</strong> Provisioning a new database, running migrations, seeding — it's a job queue, not a button click.</li>
  <li><strong>Backups multiply.</strong> 200 customers means 200 nightly backups, 200 restore plans, 200 retention policies.</li>
</ul>

<p>Shared schema gives you all that for free. Run one migration, query across tenants with a where clause, onboard a new customer in under a second. The tradeoff — isolation — is a software problem, not a database problem. And it's a software problem we have to solve anyway.</p>

<h2 id="the-pattern">The pattern</h2>

<p>One column on every tenant-scoped table: <code>tenant_id</code>. Indexed, foreign-keyed, never nullable. One global scope on every model. One middleware that resolves the current tenant and binds it. That's the entire mechanism.</p>

<pre><code>// migration
$table-&gt;foreignId('tenant_id')
      -&gt;constrained()
      -&gt;cascadeOnDelete()
      -&gt;index();</code></pre>

<h2 id="resolution">Resolving the current tenant</h2>

<p>The tenant is identified by the subdomain in 95% of cases — <code>acme.myapp.com</code>, <code>globex.myapp.com</code>. Middleware reads the host, looks up the tenant, binds it to the container.</p>

<pre><code>class IdentifyTenant {
  public function handle($request, $next) {
    $sub = explode('.', $request-&gt;getHost())[0];
    $tenant = Tenant::where('slug', $sub)-&gt;firstOrFail();
    app()-&gt;instance(Tenant::class, $tenant);
    return $next($request);
  }
}</code></pre>

<p>Now any model, any query, any job has access to <code>app(Tenant::class)</code>. Don't read it from the request — read it from the container. Jobs have no request.</p>

<h2 id="global-scope">The global scope that prevents disasters</h2>

<p>This is the piece that prevents the worst bug in multi-tenant: a developer writes <code>User::all()</code> and accidentally returns every user across every tenant. The scope makes that impossible by default.</p>

<pre><code>class TenantScope implements Scope {
  public function apply(Builder $b, Model $m) {
    if (app()-&gt;has(Tenant::class)) {
      $b-&gt;where(
        $m-&gt;getTable() . '.tenant_id',
        app(Tenant::class)-&gt;id
      );
    }
  }
}

abstract class TenantModel extends Model {
  protected static function booted() {
    static::addGlobalScope(new TenantScope);
    static::creating(function ($m) {
      $m-&gt;tenant_id ??= app(Tenant::class)-&gt;id;
    });
  }
}</code></pre>

<p>Two safeguards: every read is scoped, every write auto-fills <code>tenant_id</code>. The developer literally cannot leak data across tenants without doing it on purpose.</p>

<blockquote>The point of a multi-tenant pattern isn't to make tenant isolation possible. It's to make tenant <em>leakage</em> impossible — even when a tired developer ships a Friday hotfix.</blockquote>

<h2 id="jobs-and-mail">Jobs, mail, and other async work</h2>

<p>The trap: a job dispatched in tenant A's request runs in a worker process that has no Tenant binding. <code>app(Tenant::class)</code> throws or — worse — returns the previous tenant from the worker's cached container.</p>

<p>Fix: every queueable job and notification carries the tenant_id explicitly and rebinds it at the start of <code>handle()</code>:</p>

<pre><code>class SendInvoice implements ShouldQueue {
  public function __construct(
    public int $tenantId,
    public int $invoiceId
  ) {}

  public function handle() {
    $tenant = Tenant::findOrFail($this-&gt;tenantId);
    app()-&gt;instance(Tenant::class, $tenant);
    Config::set('mail.from.address', $tenant-&gt;mail_from);
    // ... do the work
  }
}</code></pre>

<h2 id="cross-tenant">When you actually need cross-tenant queries</h2>

<p>Admin dashboards, analytics, support tools. The scope gets in the way. The escape hatch:</p>

<pre><code>// in an admin controller
$users = User::withoutGlobalScope(TenantScope::class)
  -&gt;where('email', $email)
  -&gt;get();</code></pre>

<p>The escape hatch should be loud. I add a static analyzer rule that flags every <code>withoutGlobalScope(TenantScope::class)</code> for code review. Most don't need it — they're a developer not understanding the pattern. The ones that do need it get a comment explaining why.</p>

<h2 id="domain-per-tenant">Custom domains</h2>

<p>The day a customer asks for <code>app.theirowndomain.com</code> instead of <code>theirowndomain.myapp.com</code>, the resolution layer needs a second path. I keep a <code>tenant_domains</code> table mapping host → tenant_id. The middleware checks the subdomain pattern first, then falls back to the domains table. SSL is handled by Caddy with on-demand TLS, not by Laravel.</p>

<h2 id="files">File storage</h2>

<p>Never share a bucket prefix. Every tenant gets <code>tenants/{id}/...</code>. The disk is configured per tenant via a service provider that reads from the bound Tenant. Cross-tenant URL leaks have killed more SaaS reputations than I'd like to admit.</p>

<h2 id="closing">The version of this pattern I'd ship today</h2>

<p>One package handles the lot: <code>spatie/laravel-multitenancy</code> or <code>tenancy/tenancy</code> v3. Both implement what's above. I lean toward Spatie's because the surface area is smaller and the failure modes are easier to reason about. The pattern itself is what matters; the package is just an implementation.</p>

<p>Whatever you do: pick this on day one. Migrating a single-tenant app to multi-tenant on day 600 is a six-month project. Doing it on day one costs a single afternoon.</p>
`

// ============================================================
// ucofy-iot-ingest
// ============================================================
const ucofyIotBody = `
<p>UCOFY tracks waste and recycling for facilities that have to prove their numbers to regulators. The platform ingests roughly 58,000 IoT events per day from sensors on bins, weighbridges, and trucks. The contract with our customers, written into the SLA, is that we don't drop events. Not "rarely drop." Not "drop and retry." Don't drop. This is the architecture that gets us there.</p>

<h2 id="problem">The shape of the problem</h2>

<p>An IoT pipeline has four distinct failure surfaces, and most teams underestimate three of them:</p>

<ul>
  <li><strong>The device.</strong> Loses power, loses signal, sends garbage payloads, sends the same payload twice.</li>
  <li><strong>The transport.</strong> MQTT broker hiccups, certificate rotations, connection storms.</li>
  <li><strong>The ingestion service.</strong> Crashes mid-message, runs out of memory, deploys mid-flight.</li>
  <li><strong>The downstream database.</strong> Locks, deadlocks, slow indexes, full disks.</li>
</ul>

<p>You don't get reliability by hardening one of these. You get it by accepting that all four <em>will</em> fail and designing handoffs that survive any of them failing alone.</p>

<h2 id="topology">The topology</h2>

<p>The pipeline has five stages. Each stage owns its data; failures don't propagate.</p>

<ol>
  <li><strong>Device → MQTT broker.</strong> Mosquitto with TLS and per-device certificates.</li>
  <li><strong>Broker → MQTT consumer.</strong> A small Go service subscribes, validates, persists raw payload to Redis.</li>
  <li><strong>Redis Stream → queue worker pool.</strong> Laravel workers read, parse, and write.</li>
  <li><strong>Worker → MySQL.</strong> Idempotent writes keyed on <code>device_id + sequence</code>.</li>
  <li><strong>Worker → dead-letter queue.</strong> On unrecoverable error, payload + error reason go here.</li>
</ol>

<p>Each arrow is a place where the message is on disk somewhere durable before the previous stage acks. That's the whole reliability trick.</p>

<h2 id="idempotent">Idempotent writes are non-negotiable</h2>

<p>Devices retransmit. Workers retry. Brokers occasionally double-deliver under failover. If your write isn't idempotent, you've got duplicates in regulatory data and you're going to have an awkward call.</p>

<pre><code>INSERT INTO sensor_events
  (device_id, sequence, payload, recorded_at)
VALUES (?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  -- no-op; the unique key (device_id, sequence)
  -- protects us from duplicates
  device_id = device_id;</code></pre>

<p>The <code>(device_id, sequence)</code> unique index is the contract. If a device sends the same event twice, the second write is a no-op. If the worker crashes mid-batch and retries, the already-written rows are no-ops. The pipeline is safe to retry at every stage.</p>

<h2 id="dead-letter">The dead-letter queue that actually gets read</h2>

<p>Most teams have a DLQ. Most teams' DLQs fill up and nobody looks at them. Ours has three things that make it useful:</p>

<ul>
  <li><strong>Slack notification on first message of the hour.</strong> One notification, not 200. Lets us know to look without spamming.</li>
  <li><strong>Admin UI page</strong> showing each entry with the parsed payload, the error stack, and the device that produced it.</li>
  <li><strong>One-click replay</strong> after the underlying bug is fixed. The DLQ feeds back into stage 3.</li>
</ul>

<blockquote>A dead-letter queue without an operator UI is just a graveyard with extra disk usage.</blockquote>

<h2 id="backpressure">Backpressure: the device doesn't get to crash us</h2>

<p>Every IoT pipeline has a runaway-device scenario. A misconfigured firmware update sends 1,000 events a second from a single sensor. Without backpressure, that sensor takes the whole queue down.</p>

<p>The Go consumer enforces a per-device rate limit at ingest. Above a threshold (10 events/sec sustained per device, configurable), excess goes to a low-priority Redis stream that the workers drain only when the high-priority stream is empty. The misbehaving device gets logged, the operator gets paged, the platform stays up.</p>

<h2 id="observability">What we watch</h2>

<p>Three metrics tell us whether the pipeline is healthy:</p>

<ul>
  <li><strong>Queue depth at each stage.</strong> Trending up = a downstream stage can't keep up. Alert at 5x the 24-hour median.</li>
  <li><strong>End-to-end latency.</strong> Time from MQTT publish to MySQL row. Target p95 under 8 seconds. Alert above 30.</li>
  <li><strong>DLQ count per hour.</strong> Should be near-zero. Anything above 10/hour gets a page.</li>
</ul>

<p>Prometheus scrapes from every service. Grafana shows the three numbers on one dashboard. The on-call engineer doesn't need to read code to know what's wrong; the dashboard tells them which stage is sick.</p>

<h2 id="audit">The audit angle</h2>

<p>Regulators want to see, for any specific bin on any specific day, the raw sensor events with timestamps and signatures. The system stores raw payloads forever in cold object storage, alongside the parsed rows in MySQL. Recovery from the raw archive takes minutes, not days. We've used it for one regulatory audit so far. It worked.</p>

<h2 id="numbers">The actual numbers</h2>

<p>From the last 90 days of production:</p>

<ul>
  <li>Events ingested: 5.18 million</li>
  <li>Events dropped: 0</li>
  <li>Events DLQ'd and replayed: 412</li>
  <li>Median end-to-end latency: 2.1s</li>
  <li>p99 end-to-end latency: 11.4s</li>
  <li>Pipeline uptime: 99.97% (one 14-minute MQTT broker incident)</li>
</ul>

<p>The architecture isn't clever. It's the plain version of every reliable pipeline you've read about, minus the parts I've watched fail in production. Boring scales. Clever wakes you up at 2am.</p>
`

// ============================================================
// pair-programming-interviews
// ============================================================
const pairProgrammingInterviewsBody = `
<p>I used to send candidates a take-home. The same one we'd been using for years — a small CRUD app, maybe 4–6 hours of work, "do it on your own time." It filtered for something, but I gradually realized it wasn't filtering for the engineer I wanted to hire. The last 30 hires came through a different process. Here it is.</p>

<h2 id="problem-with-takehome">What take-homes actually filter for</h2>

<p>The conventional wisdom is that take-homes are fairer because everyone gets the same problem on their own time. The reality, after running both for years:</p>

<ul>
  <li><strong>They filter for unemployed candidates.</strong> Senior engineers with full-time jobs and a family don't have a free Saturday. The best people decline.</li>
  <li><strong>They reward solo perfectionism over collaboration.</strong> The candidate spends 12 hours polishing what should have been a 3-hour exercise. You learn nothing about how they work with others.</li>
  <li><strong>They're game-able.</strong> Friend-of-friend reviews, AI-assisted polish, ChatGPT — none of which are bad in real work, but all of which obscure the signal.</li>
  <li><strong>The rubric drifts.</strong> Reviewer fatigue means the third take-home of the week gets a different read than the first.</li>
</ul>

<p>The take-home filters for "willing to spend their evenings unpaid." That's a real signal — but it's not the one I'm hiring on.</p>

<h2 id="format">The format I use now</h2>

<p>One 60-minute live pair programming session. Real bug from our backlog, severity-low so it's safe to talk about. Candidate drives, I navigate. Tools: their machine, their editor, their Google, their AI — same tools they'd use on the job. We ship the bug fix together and merge it.</p>

<h2 id="setup">The 5 minutes before we start</h2>

<p>I share three things at the start of the call:</p>

<ol>
  <li>A 200-line code snippet — the relevant module — and a one-paragraph description of the bug.</li>
  <li>The repo URL with a fresh branch already pulled.</li>
  <li>"Use any tool you'd use in your normal workflow. ChatGPT is fine. Stack Overflow is fine. Talking out loud is encouraged."</li>
</ol>

<p>That last one matters. Half of candidates apologize when they Google something. I tell them: <em>I Google things every day. The skill is knowing what to Google.</em></p>

<h2 id="what-im-watching">What I'm actually watching</h2>

<p>The bug fix itself is a side effect. What I'm watching is six things:</p>

<ul>
  <li><strong>Reading.</strong> When they open the file, do they read the surrounding code, or do they jump straight to the line number I mentioned? Senior engineers read context first.</li>
  <li><strong>Hypotheses.</strong> Do they form a theory before changing things, or do they print-debug at random? Good engineers narrate: "I think X is happening, let me verify."</li>
  <li><strong>Verification.</strong> Once they think they have the fix, do they prove it? Tests, repro, manual check — what's their evidence?</li>
  <li><strong>Communication under uncertainty.</strong> When stuck, do they say "I'm stuck" or do they go silent? The first is a signal of someone who works well in a team.</li>
  <li><strong>Tool fluency.</strong> Not which tool — which level of comfort. Watching someone navigate their own editor for an hour reveals a lot.</li>
  <li><strong>Disagreement handling.</strong> I plant one moment where I push back on their approach. Do they defend it, capitulate, or genuinely consider and respond? This predicts how they'll act in a code review.</li>
</ul>

<blockquote>I don't care if they finish. I care how they work. The candidates I've regretted hiring all "finished" their take-homes; the candidates I've loved hiring sometimes ran out of time.</blockquote>

<h2 id="rubric">The rubric, written down</h2>

<p>Five lines, scored 1–4 each, written into the same Notion doc every time. Reviewer-drift killer. The lines:</p>

<ol>
  <li>Could read existing code before changing it</li>
  <li>Stated hypotheses before testing them</li>
  <li>Verified the fix before declaring done</li>
  <li>Communicated naturally under pressure</li>
  <li>Engaged genuinely with pushback</li>
</ol>

<p>Total above 14: hire. 11–14: team chat, second opinion. Below 11: pass. The rubric removes most of the bias around "vibe" — vibe is real, but it should follow the data, not lead it.</p>

<h2 id="objections">The two objections I get</h2>

<p><strong>"Pair programming favors extroverts."</strong> Genuinely believed this for the first six months. Then I noticed: my best hires include three people who described themselves as "really uncomfortable being watched code." They were uncomfortable. They were also obviously skilled. The format reveals discomfort but doesn't penalize it — the rubric scores how they work, not how relaxed they look.</p>

<p><strong>"It's hard to scale."</strong> Yes. One senior engineer can do 4–5 of these a week, max. We've made the funnel earlier — a 30-minute culture chat first — so we only run pair programming on candidates we genuinely want to hire. That's the trade.</p>

<h2 id="results">The results</h2>

<p>Last 30 hires. Two left in their first year (one personal reasons, one I'd hire again — wrong-team fit, not wrong-skill). One I'd quietly call a mistake. Twenty-seven I'd hire again. Compared to the take-home era, the hit rate roughly doubled.</p>

<p>The format is harder for me. It's also easier for the candidate, more honest, and produces better data. Worth every Saturday I don't get back.</p>
`

// ============================================================
// flutter-stopped-bloc
// ============================================================
const flutterStoppedBlocBody = `
<p>I shipped four production Flutter apps with Bloc. I taught Bloc to two junior developers. I wrote a Bloc style guide for my team. And then on the last three apps, I switched to Riverpod plus a thin domain layer — and I'm not going back. This is what changed and why.</p>

<h2 id="what-bloc-was-good-at">What Bloc was good at</h2>

<p>Bloc gave us three real things:</p>

<ul>
  <li>Predictable state transitions, every event mapped to exactly one state shape.</li>
  <li>Easy testing — events in, states out, no widgets needed.</li>
  <li>A team-wide pattern that everyone followed without bikeshedding.</li>
</ul>

<p>Those are real. I want to be clear: Bloc is not bad. Tools age, codebases age, and the friction stopped being worth the structure for our use cases.</p>

<h2 id="what-stopped-working">What stopped working</h2>

<p>Three specific frustrations, all of which compounded as the codebase grew past about 30,000 lines:</p>

<h3>1. Boilerplate weight</h3>

<p>A trivial feature — a toggle that affects two screens — needed an event class, a state class, a Bloc, a provider in the widget tree, and a BlocListener or BlocBuilder at the consumer. Six files for what should have been a single piece of state.</p>

<pre><code>// Bloc version: 4 files, ~80 lines
abstract class ToggleEvent {}
class ToggleFlipped extends ToggleEvent {}
class ToggleState { final bool on; ... }
class ToggleBloc extends Bloc&lt;ToggleEvent, ToggleState&gt; { ... }

// Riverpod version: 1 file, 8 lines
final toggleProvider = StateProvider&lt;bool&gt;((ref) =&gt; false);
// consumer: ref.watch(toggleProvider)</code></pre>

<p>Multiplied across hundreds of features, the difference is whole days of typing.</p>

<h3>2. Cross-Bloc dependencies got ugly</h3>

<p>When BlocA needs to react to BlocB, the documented options are: stream subscriptions in the constructor, BlocListener trees in the widget, or a manual event bus. All three leaked complexity into places that didn't deserve it.</p>

<p>Riverpod's <code>ref.watch</code> dependency graph solved this by accident. Provider A reads provider B; if B changes, A recomputes. No subscriptions, no event plumbing.</p>

<h3>3. The mental model was bigger than it needed to be</h3>

<p>A new developer joining the team had to learn: events vs states vs the Bloc itself, when to use Bloc vs Cubit, how to lay out state classes (sealed classes? union types? freezed?), how to compose multiple Blocs in a widget tree. That's two solid weeks of ramp-up.</p>

<p>With Riverpod the mental model is "providers expose values, widgets watch providers, providers can watch other providers." Three sentences. Junior engineers are productive on day three.</p>

<h2 id="thin-domain">The thin domain layer that replaced Bloc</h2>

<p>Riverpod alone isn't a full Bloc replacement. Bloc gave us a place to put business logic. Riverpod is just dependency injection plus reactive state. The missing piece is a domain layer.</p>

<p>The pattern: each feature has a <code>Controller</code> class. The Controller exposes commands (the verbs the UI can perform) and reads state from repositories. Riverpod hosts the Controller. The widget calls <code>controller.markDelivered(orderId)</code>; the Controller updates the repo; the repo's stream pushes new state through Riverpod.</p>

<pre><code>class OrdersController {
  OrdersController(this._repo);
  final OrdersRepo _repo;

  Future&lt;void&gt; markDelivered(String orderId) async {
    await _repo.updateStatus(orderId, OrderStatus.delivered);
  }
}

final ordersControllerProvider = Provider((ref) {
  return OrdersController(ref.watch(ordersRepoProvider));
});</code></pre>

<p>This is approximately what the Bloc did, minus the events, minus the state class, minus the boilerplate. The testing story is identical: instantiate the controller with a fake repo, call methods, assert.</p>

<h2 id="what-i-miss">What I miss about Bloc</h2>

<p>Two things, honestly:</p>

<ul>
  <li><strong>The discoverability of state shape.</strong> Reading a Bloc, you can see every possible state in one file. With Controllers + Riverpod, state is more distributed; you have to read the repo and the providers together.</li>
  <li><strong>The naming discipline.</strong> Bloc forced events to be named things like <code>OrderDeliveryConfirmed</code>. That naming practice was good. With method calls on a Controller, names get sloppier.</li>
</ul>

<p>I make up for the second by enforcing a naming convention in code review. The first I just live with.</p>

<h2 id="numbers">The numbers</h2>

<p>The last project we migrated had ~6,200 lines of Bloc code. After the migration: ~2,400 lines covering the same features. Roughly 60% reduction. Build times dropped 18%. New-feature velocity, measured by PR throughput, went up about 30% — though I'd attribute half of that to team familiarity rather than the framework.</p>

<h2 id="should-you">Should you switch?</h2>

<p>If you have a working Bloc app and a happy team, no. The cost of migration is real and the benefit is incremental. If you're starting a new project today, I'd start with Riverpod plus a Controller layer and not look back.</p>

<blockquote>Frameworks are a tax. The right framework charges a tax you don't notice. The wrong one — even a perfectly good one — charges enough that you start counting receipts.</blockquote>
`

// ============================================================
// arabic-rtl-patterns
// ============================================================
const arabicRtlBody = `
<p>I've shipped Arabic-English bilingual apps for six years. The first one took six months and I redid the layout twice. The most recent ones take a week of additional work on top of an English-only build, and they don't break. The difference isn't talent — it's five patterns, baked in from day one. If you bolt RTL on at the end, you suffer. If you start with these, you don't.</p>

<h2 id="not-flip">RTL is not "flip the layout"</h2>

<p>The most common mistake is thinking RTL means <code>direction: rtl</code> on the body and you're done. It isn't. Arabic users expect:</p>

<ul>
  <li>Reading order right-to-left (yes).</li>
  <li>Numbers and Latin text remain left-to-right (mixed bidirectionality).</li>
  <li>Icons that point at things flip; icons that <em>are</em> things don't.</li>
  <li>Animation directions reverse.</li>
  <li>Form labels and inputs swap sides, but radio groups don't.</li>
  <li>Charts and progress bars usually stay LTR even in RTL contexts.</li>
</ul>

<p>None of this is automatic. Each is a decision someone has to make for each component.</p>

<h2 id="pattern-1">Pattern 1: logical properties everywhere</h2>

<p>Throw out <code>margin-left</code>, <code>padding-right</code>, <code>left: 0</code>. Use <code>margin-inline-start</code>, <code>padding-inline-end</code>, <code>inset-inline-start: 0</code>. The browser flips them automatically when <code>dir="rtl"</code>.</p>

<pre><code>/* old */
.card { margin-left: 16px; border-right: 2px solid; }

/* new */
.card { margin-inline-start: 16px; border-inline-end: 2px solid; }</code></pre>

<p>This single change makes 80% of a CSS codebase RTL-correct without any JavaScript or framework involvement. Every modern browser supports logical properties. Tailwind 3.3+ has <code>ms-*</code> and <code>me-*</code> utilities that map to these.</p>

<h2 id="pattern-2">Pattern 2: the icon classification</h2>

<p>Every icon falls into one of three buckets:</p>

<ul>
  <li><strong>Directional (flip):</strong> back arrow, forward arrow, chevron-right in a breadcrumb, send-arrow on a chat input.</li>
  <li><strong>Non-directional (don't flip):</strong> envelope, heart, calendar, clock, settings gear.</li>
  <li><strong>Logo-like (never flip):</strong> brand marks, country flags, app icons.</li>
</ul>

<p>I add a class — <code>icon-flip</code> — to the directional ones and a CSS rule:</p>

<pre><code>html[dir="rtl"] .icon-flip {
  transform: scaleX(-1);
}</code></pre>

<p>Now anyone adding an icon makes one decision: does this point at something? If yes, add the class. If no, leave it. The decision is at authoring time, not after the bug report.</p>

<h2 id="pattern-3">Pattern 3: typography pairs</h2>

<p>Arabic and Latin scripts have different rhythm. A font that looks great in English looks too thin or too tight in Arabic. The Arabic glyphs are taller, denser, more expressive.</p>

<p>I always use two fonts and let the browser pick:</p>

<pre><code>body {
  font-family: 'IBM Plex Sans Arabic', 'Inter', sans-serif;
}</code></pre>

<p>The Arabic font is listed first; for Latin characters the browser falls through to Inter automatically. The pair I use most often: IBM Plex Sans Arabic + Inter, or Tajawal + Inter. They have matching x-heights and weights, so a mixed-script line doesn't look ransom-note-ish.</p>

<h2 id="pattern-4">Pattern 4: numbers stay LTR, even in Arabic text</h2>

<p>Arabic native speakers read prices, phone numbers, dates, and IDs in left-to-right Arabic numerals (٠-٩) or Latin numerals. Forcing the entire string into RTL flips the digits visually. Wrap numbers in a span:</p>

<pre><code>&lt;p dir="rtl"&gt;
  السعر:
  &lt;span dir="ltr"&gt;1,250 AED&lt;/span&gt;
&lt;/p&gt;</code></pre>

<p>Better: use the Unicode bidi isolation characters (LRI/RLI/PDI) or CSS <code>unicode-bidi: isolate</code>. The result is text that reads naturally in either direction without the brain-glitch of seeing "AED 1,250" flipped to "052,1 AED."</p>

<blockquote>Arabic readers don't read flipped numbers. They read numbers. The bidi algorithm is your friend; trust it, isolate the runs that matter, and stop overriding direction on every span.</blockquote>

<h2 id="pattern-5">Pattern 5: the i18n layer is a decision tree, not a string table</h2>

<p>Arabic has dual forms (one item / two items / many items), gendered verbs, and grammatical agreement that English doesn't. <code>tr('messages.welcome', { name })</code> works for English. For Arabic, "welcome, Sarah" and "welcome, Ahmed" use different verb endings.</p>

<p>I use ICU MessageFormat, not flat strings:</p>

<pre><code>{count, plural,
  =0 {لا توجد رسائل}
  one {رسالة واحدة}
  two {رسالتان}
  few {# رسائل}
  many {# رسالة}
  other {# رسالة}
}</code></pre>

<p>The dev cost is real. The benefit: native speakers don't notice your app is translated. They notice the apps that aren't.</p>

<h2 id="testing">How I test</h2>

<p>One QA pass in each language, run by a native speaker, every release. The English speaker on my team can spot 40% of RTL bugs. A native Arabic speaker spots all of them. I budget the cost.</p>

<p>Automated check: I add a Playwright test that loads each major page in <code>dir="rtl"</code>, takes a screenshot, and diffs against a baseline. Visual regression on RTL catches the layout breaks that creep in when someone adds a new component without thinking.</p>

<h2 id="closing">The cost, honestly</h2>

<p>A bilingual Arabic-English app costs about 15% more than a monolingual English app, if you start with these patterns. It costs about 80% more if you bolt RTL on after launch. The math is obvious. The only reason teams still bolt it on is they didn't know — and now you do.</p>
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
      { q: "What if six weeks really isn't enough for my product?", a: "Then it's not an MVP — it's a v1. We can absolutely build it, but I'll quote it as a 10–14 week engagement instead. The six-week framework only works for a strict subset of \"smallest useful product\" scopes." },
      { q: 'Do you guarantee the six-week timeline?', a: "Yes, with a caveat: the timeline assumes you're responsive (replies inside 24h), the scope is genuinely cut to MVP-size, and there are no major mid-project pivots. If the timeline slips because of my work, I keep going free until launch. If it slips because of scope creep, we re-quote." },
      { q: 'What stack do you use for SaaS MVPs?', a: 'Laravel + Inertia + React on the back end and front end, Tailwind for styling, MySQL for data, Redis for cache and queues, deployed via Forge or Docker on your infrastructure of choice. Boring, proven, fast to ship.' },
      { q: 'Can I see an example of a real six-week MVP?', a: 'Most of them are under NDA, but UCOFY (in the Work section) started as a six-week MVP for a single use case before scaling into the full platform you see now. The first version shipped in 41 days.' },
      { q: 'How much does a SaaS MVP cost?', a: 'Starting at $4,500 for a single-feature MVP. Most engagements land between $5,500 and $7,500 depending on integrations (Stripe, transactional email, third-party APIs). Fixed price, no surprises.' },
    ],
  },

  'laravel-performance': {
    ...blogPosts.find(p => p.slug === 'laravel-performance')!,
    lead: "8.1 seconds to 600 milliseconds in 48 hours. No rewrite, no new infrastructure, no team changes. Just five surgical fixes in the right order. The actual queries, the actual numbers, the actual order of operations.",
    toc: [
      { id: 'baseline', label: 'Step zero: measure first' },
      { id: 'bottleneck-one', label: '#1: the eager-loading lie' },
      { id: 'bottleneck-two', label: '#2: paginating in PHP' },
      { id: 'bottleneck-three', label: '#3: JSON without an index' },
      { id: 'bottleneck-four', label: '#4: the cache that wasn\'t' },
      { id: 'bottleneck-five', label: '#5: the front-end re-render' },
      { id: 'lessons', label: 'What I take away' },
    ],
    body: laravelPerformanceBody,
    faq: [
      { q: 'Do you offer a guaranteed performance improvement?', a: 'Yes — 50% reduction in p95 page load or your money back. In practice every engagement has come in well above that, but the guarantee is what we contractually commit to.' },
      { q: 'How long does a typical performance gig take?', a: 'Two to five days for the diagnosis and the top three fixes. The remaining work depends on what we find — a rewrite of a single hot path is usually another week, full-stack tuning is two to three.' },
      { q: 'Will you need access to production?', a: "I work from a recent staging copy with production-shaped data and read-only access to production logs. I never run migrations against your production DB without your engineer in the room." },
      { q: 'Do you only work on Laravel?', a: 'No — same techniques apply to Node, Rails, Django. Laravel is just where I have the most depth. Drop me a note about your stack.' },
    ],
  },

  'flutter-offline-sync': {
    ...blogPosts.find(p => p.slug === 'flutter-offline-sync')!,
    lead: "Drivers go underground. Delivery riders lose signal for 40 minutes. The naive cache-and-retry approach corrupts data. After three production sync layers — and one painful rewrite — here's the conflict-resolution model I trust on every mobile project now.",
    toc: [
      { id: 'model', label: 'The mental model' },
      { id: 'storage', label: 'Storage: SQLite' },
      { id: 'conflicts', label: 'Conflict resolution' },
      { id: 'sync-worker', label: 'The sync worker' },
      { id: 'clock-skew', label: 'Clock skew is real' },
      { id: 'ux', label: 'What the UI shows' },
      { id: 'testing', label: 'How I test it' },
    ],
    body: flutterOfflineSyncBody,
    faq: [
      { q: 'Why SQLite over Hive or Isar?', a: 'Transactions, indexes, and complex queries. Sync workloads need all three. Hive and Isar are great for simple key-value caches; SQLite is the right tool when you need "give me all unsynced events from device X older than 5 minutes" cheaply.' },
      { q: 'How big does the local DB get?', a: 'On a delivery rider device with 1,000 events/day, the events table stays under 10MB if you drop synced events after 7 days. The state table is whatever the app needs — usually a few hundred kilobytes.' },
      { q: 'What about end-to-end encryption?', a: "I default to platform secure storage (Keychain / Keystore) for keys and SQLCipher for the DB on apps that handle sensitive data. Most logistics apps don't need it; healthcare and finance do." },
      { q: 'Does this work for collaborative apps (Google Docs-style)?', a: "Different problem. Last-write-wins doesn't fit there — you need CRDTs or operational transforms. The pattern in this article is for transactional event streams, which is most logistics, ops, and field-service apps." },
    ],
  },

  'leading-eleven-engineers': {
    ...blogPosts.find(p => p.slug === 'leading-eleven-engineers')!,
    lead: "I lead an eleven-person engineering team and I still write code every day. Barely possible, daily fight against drift — but it works because I've cut things that look like the job but aren't. Here's the calendar, the rituals, and the hiring filter that keep both halves honest.",
    toc: [
      { id: 'rule-one', label: 'Maker time is sacred' },
      { id: 'standup', label: 'The standup that doesn\'t waste time' },
      { id: 'prs', label: 'PR reviews that matter' },
      { id: 'onones', label: '1-on-1s, weekly' },
      { id: 'hiring', label: 'The hiring filter' },
      { id: 'delegation', label: 'Delegation isn\'t dumping' },
      { id: 'energy', label: 'Protecting energy' },
      { id: 'code', label: 'Why I still write code' },
    ],
    body: leadingElevenBody,
    faq: [
      { q: "Doesn't the team feel ignored when you don't review every PR?", a: "Asked them — opposite. They feel trusted. The risk is the four categories I mentioned (auth, migrations, public APIs, tagged-architecture); everywhere else, peer review by two seniors is faster and just as good." },
      { q: 'How much code do you actually ship per week?', a: 'Roughly 8–15 hours of focused coding, usually 2–4 PRs of meaningful size. Sometimes more in a sprint where I take a hairy refactor; sometimes less when hiring season is on.' },
      { q: 'What about culture, hiring drives, off-sites — do you skip those?', a: "No, but they go in the late-afternoon block, not the morning. The 09:00–13:00 rule isn't 'don't be a manager' — it's 'don't be a manager before lunch.'" },
    ],
  },

  'multi-tenant-laravel': {
    ...blogPosts.find(p => p.slug === 'multi-tenant-laravel')!,
    lead: "Row-level isolation, shared schema, zero dual-writes. Five years of multi-tenant mistakes condensed into one migration, one middleware, one global scope. The pattern I'd ship on day one of every Laravel SaaS — and the escape hatches that prevent the worst bug in the genre.",
    toc: [
      { id: 'why-shared', label: 'Why shared schema' },
      { id: 'the-pattern', label: 'The pattern' },
      { id: 'resolution', label: 'Resolving the tenant' },
      { id: 'global-scope', label: 'The global scope' },
      { id: 'jobs-and-mail', label: 'Jobs and mail' },
      { id: 'cross-tenant', label: 'Cross-tenant queries' },
      { id: 'domain-per-tenant', label: 'Custom domains' },
      { id: 'files', label: 'File storage' },
      { id: 'closing', label: "What I'd ship today" },
    ],
    body: multiTenantBody,
    faq: [
      { q: 'What about regulated industries that require physical data separation?', a: "Different problem. If your contract requires per-customer encryption keys or per-jurisdiction data residency, shared schema is wrong; you need database-per-tenant or even cluster-per-tenant. For 95% of B2B SaaS, that's not the case." },
      { q: 'Spatie/laravel-multitenancy or tenancy/tenancy v3?', a: "Spatie. Smaller surface area, easier to reason about, and the maintainer is responsive. Tenancy v3 is more flexible but more rope to hang yourself with." },
      { q: 'Can I migrate a single-tenant app later?', a: "Yes, and I've done it twice. Budget six months. It's mostly safe data migration, retrofitting the global scope, and finding every place a developer assumed there was only one tenant. Don't put it off." },
    ],
  },

  'ucofy-iot-ingest': {
    ...blogPosts.find(p => p.slug === 'ucofy-iot-ingest')!,
    lead: "58,000 events a day from waste-management sensors, regulators watching, contractual SLA that says we don't drop. After 90 days: 5.18 million events ingested, zero dropped, 99.97% uptime. The architecture isn't clever — it's the boring version, with every place I've watched a clever version fail removed.",
    toc: [
      { id: 'problem', label: 'Shape of the problem' },
      { id: 'topology', label: 'The topology' },
      { id: 'idempotent', label: 'Idempotent writes' },
      { id: 'dead-letter', label: 'The DLQ that gets read' },
      { id: 'backpressure', label: 'Backpressure' },
      { id: 'observability', label: 'What we watch' },
      { id: 'audit', label: 'The audit angle' },
      { id: 'numbers', label: 'The actual numbers' },
    ],
    body: ucofyIotBody,
    faq: [
      { q: 'Why MQTT and not HTTP?', a: 'Devices on cellular connections drop and reconnect constantly. MQTT keeps a long-lived session and resumes cheaply; HTTP would burn a TCP handshake and TLS negotiation per event. At 58k/day from hundreds of devices, that math matters.' },
      { q: 'Why Go for the consumer and Laravel for the workers?', a: "Go is great at high-throughput, low-latency I/O — perfect for the MQTT bridge. Laravel is great for business logic, validation, queues, and the admin UI. Each tool where it shines, talking through Redis." },
      { q: 'Can this scale to 10× the current load?', a: "Yes. The bottleneck at 580k/day would be MySQL writes, which we'd address with horizontal sharding by device_id. The pipeline architecture itself doesn't change." },
      { q: 'What does the dead-letter UI look like?', a: "A simple admin page: list of failed events, parsed payload, error stack trace, device that produced it, and a Replay button. We use it about twice a week — usually after we've shipped a fix to a parser bug." },
    ],
  },

  'pair-programming-interviews': {
    ...blogPosts.find(p => p.slug === 'pair-programming-interviews')!,
    lead: "I used to send candidates a take-home. Then I noticed the take-home filtered for unemployed candidates with free Saturdays. The last 30 hires came through a 60-minute pair programming session on a real bug, and the hit rate roughly doubled.",
    toc: [
      { id: 'problem-with-takehome', label: 'What take-homes filter for' },
      { id: 'format', label: 'The format I use' },
      { id: 'setup', label: 'The 5 minutes before' },
      { id: 'what-im-watching', label: 'What I watch for' },
      { id: 'rubric', label: 'The rubric, written down' },
      { id: 'objections', label: 'The two objections I get' },
      { id: 'results', label: 'The results' },
    ],
    body: pairProgrammingInterviewsBody,
    faq: [
      { q: 'Do you tell candidates the bug in advance?', a: "I tell them the file, a one-paragraph description, and the symptom. I don't show the fix or the diff — the work of forming a hypothesis is half the signal." },
      { q: 'What if the candidate is too nervous to perform?', a: "I expect nerves. I open with 5 minutes of low-stakes chat, I narrate my own thinking when I navigate, and I explicitly say AI tools and Google are fine. The rubric scores how they work, not how relaxed they look." },
      { q: 'How do you keep the rubric from drifting across reviewers?', a: "Same five lines, same Notion template, every time. After every interview I write a single paragraph of evidence per line. Drift mostly comes from missing rubrics, not from broken ones." },
      { q: 'What about candidates from countries where pair programming is uncommon?', a: "I explain the format on the scheduling email and again at the start. About 1 in 6 candidates has never paired before; their first 10 minutes are slower, but the signal evens out." },
    ],
  },

  'flutter-stopped-bloc': {
    ...blogPosts.find(p => p.slug === 'flutter-stopped-bloc')!,
    lead: "I shipped four production Flutter apps with Bloc, taught it to two juniors, wrote a team style guide. Then on the last three apps I switched to Riverpod plus a thin Controller layer — and the codebase shrunk 60%. Here's what stopped working, and what replaced it.",
    toc: [
      { id: 'what-bloc-was-good-at', label: 'What Bloc was good at' },
      { id: 'what-stopped-working', label: 'What stopped working' },
      { id: 'thin-domain', label: 'The thin domain layer' },
      { id: 'what-i-miss', label: 'What I miss about Bloc' },
      { id: 'numbers', label: 'The numbers' },
      { id: 'should-you', label: 'Should you switch?' },
    ],
    body: flutterStoppedBlocBody,
    faq: [
      { q: 'Riverpod or Provider?', a: "Riverpod. Provider was a stepping stone; Riverpod fixed the things that Provider got wrong (compile-time safety, no BuildContext dependency, better testing). The author of both says use Riverpod — I agree." },
      { q: "Isn't Bloc more testable?", a: "Marginally. Bloc gives you events-in-states-out testing, which is clean. Controllers + Riverpod give you instantiate-call-method-assert, which is more direct. Both are fine; the difference is taste." },
      { q: 'What about GetX?', a: "I won't use it on a team project. It encourages global state, hides dependencies, and the documentation is unreliable. Junior devs love it because it's fast to start; senior devs hate it because it's hard to maintain." },
      { q: 'Will you migrate our existing Bloc app?', a: "Sometimes worth it, often not. If the team is happy and shipping, the migration cost rarely pays off. If the team is burning out on boilerplate, it usually does. Drop me a note with the codebase size and I'll give you a straight answer." },
    ],
  },

  'arabic-rtl-patterns': {
    ...blogPosts.find(p => p.slug === 'arabic-rtl-patterns')!,
    lead: "Six years of bilingual Arabic-English apps. The first one took six months and I redid the layout twice. The most recent ones add a week of work to an English-only build. The difference isn't talent — it's five patterns, baked in from day one. Bolt them on at the end and you suffer.",
    toc: [
      { id: 'not-flip', label: "RTL isn't 'flip the layout'" },
      { id: 'pattern-1', label: 'Logical properties' },
      { id: 'pattern-2', label: 'Icon classification' },
      { id: 'pattern-3', label: 'Typography pairs' },
      { id: 'pattern-4', label: 'Numbers stay LTR' },
      { id: 'pattern-5', label: 'i18n is a decision tree' },
      { id: 'testing', label: 'How I test' },
      { id: 'closing', label: 'The cost, honestly' },
    ],
    body: arabicRtlBody,
    faq: [
      { q: 'Do I need a separate build for Arabic?', a: "No. One codebase, one build, one bundle. The dir attribute on the html tag flips the entire app at runtime. The five patterns in this article make that flip safe." },
      { q: 'What about Hebrew, Urdu, Farsi?', a: "Same patterns. Hebrew is the closest to Arabic in layout behavior. Urdu and Farsi share the script family but have language-specific typography preferences — talk to a native speaker about font choice." },
      { q: 'Tailwind or vanilla CSS?', a: "Tailwind 3.3+ has logical-property utilities (ms-*, me-*, ps-*, pe-*) that map directly to the CSS in this article. Use them. If you're on an older Tailwind, upgrade or fall back to a tiny custom plugin." },
      { q: 'How do I QA the Arabic version?', a: "Native Arabic speaker, every release, even if it's a 30-minute pass. I budget the cost. Automated visual regression catches layout bugs; only a native speaker catches the typographic and tone issues." },
    ],
  },
}
