import SiteTicker from '@/modules/common/SiteTicker'
import SiteNav from '@/modules/common/SiteNav'
import SiteFooter from '@/modules/common/SiteFooter'
import SkillsGrid from '@/modules/experience/SkillsGrid'

export const metadata = {
  title: 'Experience — 6+ Years Building',
  description: 'Work experience, leadership roles, education, achievements, languages, and the full skill stack — Mohammad Najjar.',
}

type Role = {
  company: string
  location?: string
  title: string
  type: string
  period: string
  bullets: string[]
}

const roles: Role[] = [
  {
    company: 'YS Lootah Tech',
    location: 'Dubai',
    title: 'Lead Full-Stack Engineer & Team Lead',
    type: 'Full-time',
    period: '06/2024 — Present',
    bullets: [
      'Manage & mentor an 11-person engineering team (Laravel, React, Flutter, QA) — >35% drop in post-release defects.',
      'Mobile: architected and released 10 Android applications.',
      'Web: delivered 30+ production sites (see portfolio).',
      'Introduced OKR-driven Agile ceremonies; velocity improved 28% over three quarters.',
    ],
  },
  {
    company: 'Freelance',
    title: 'Full-Stack Developer',
    type: 'Part-time',
    period: '10/2022 — Present',
    bullets: [
      'Built and maintained 50+ live websites — top-tier performance, design consistency, and ongoing feature enhancements.',
      'Designed and developed 10+ high-conversion landing pages, optimizing UX and significantly improving campaign results.',
    ],
  },
  {
    company: 'Newline Information Technology & Marketing',
    title: 'Team Leader & Web Developer',
    type: 'Full-time',
    period: '05/2023 — 06/2024',
    bullets: [
      'Led the engineering of a CRM system, enhancing lead-generation efficiency.',
      'Created an innovative CRM solution tailored for contract management — streamlined contract handling and operational workflows.',
      'Built 10 modern, responsive websites using advanced development practices tailored to client industries and conversion goals.',
      'Created 30+ high-performing landing pages — significantly increased campaign engagement and drove measurable growth in lead capture and ROI.',
    ],
  },
  {
    company: 'Act Local Digital Marketing',
    location: 'Dubai',
    title: 'Full-Stack Web Developer',
    type: 'Full-time',
    period: '02/2023 — 04/2023',
    bullets: [
      'Developed 4 fully responsive WordPress websites from scratch — custom themes, Elementor layouts, multilingual SEO.',
      'Built and optimized 2 high-converting landing pages for Google Ads campaigns — improved ad quality score and lead capture rates.',
    ],
  },
  {
    company: 'Castles Code',
    title: 'Frontend Instructor',
    type: 'Part-time',
    period: '01/2023 — 12/2023',
    bullets: [
      'Developed a comprehensive curriculum for 15 students, enhancing practical front-end skills.',
      'Provided sustained technical support, significantly elevating student proficiency.',
    ],
  },
  {
    company: 'ICPC — International Collegiate Programming Contest',
    title: 'Coach',
    type: 'Part-time',
    period: '06/2022 — 09/2022',
    bullets: [
      'Conducted an impactful training camp educating 70+ students in C++, data structures, and algorithms.',
      'Fostered enhanced technical understanding among students with a notable success rate.',
    ],
  },
  {
    company: 'Unique Software Ideas Community',
    title: 'Junior Full-Stack Developer',
    type: 'Full-time',
    period: '08/2021 — 02/2022',
    bullets: [
      'Completed 5 front-end projects focused on innovative design and performance optimization.',
      'Used a diverse stack — JavaScript, jQuery, PHP — for dynamic web application development.',
    ],
  },
  {
    company: 'Injaz',
    title: 'Back-End Developer (Internship)',
    type: 'Internship',
    period: '10/2020 — 12/2020',
    bullets: [
      'Developed 2 responsive web applications using PHP and Laravel — including an educational platform.',
      'Implemented MySQL databases, optimizing data management and website functionality.',
    ],
  },
  {
    company: 'ICPC — International Collegiate Programming Contest',
    title: 'Contestant',
    type: 'Part-time',
    period: '05/2019 — 06/2020',
    bullets: [
      'Led a team to victory in the SCPC 2019 Private Universities category.',
      'Secured 8th place among all Aleppo universities in AleppoCPC 2019.',
    ],
  },
  {
    company: 'Wikilogia Hackathon — MyTaxi',
    title: 'Front-End Developer',
    type: 'Hackathon',
    period: '02/2018 — 04/2018',
    bullets: [
      'Contributed significantly to the MyTaxi project — focused on front-end development and database management.',
    ],
  },
]

const volunteering = [
  {
    org: 'National Union of Syrian Students',
    title: 'Student Body President',
    period: '01/2018 — 06/2022',
    bullets: [
      'Mediated with university administration, enhancing student experiences and addressing key concerns.',
      'Conducted a meeting with 300+ students to identify their pain points and communication needs with the administration.',
      'Orchestrated student-focused initiatives, leading to a 90% election victory.',
    ],
  },
]

const education = {
  school: 'Ittihad Private University',
  degree: 'Bachelor of Information Technology — Computer Science',
  gpa: 'GPA: 3.03 / 4.00',
  location: 'Aleppo, Syria',
  period: '10/2016 — 09/2022',
}

const languages = [
  { name: 'Arabic', level: 'Native', pct: 100 },
  { name: 'English', level: 'Fluent', pct: 90 },
]

const achievements = [
  'Championed the Private Universities category in SCPC 2019.',
  'Ranked 8th in AleppoCPC 2019.',
  'Certificate of Participation — Wikilogia Hackathon 2018.',
]

const personalSkills = ['Team Leadership', 'Teamwork', 'Communication', 'Volunteer Management']

export default function ExperiencePage() {
  return (
    <>
      <SiteTicker items="6+ YEARS BUILDING | LEAD ENGINEER · TEAM LEAD | 80+ WEBSITES · 10+ MOBILE APPS | DUBAI · MENA · WORLDWIDE" />
      <SiteNav active="experience" />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Experience</div>
          <h1>Six years,<br /><span className="serif">one craft</span></h1>
          <p>
            Lead Full-Stack Engineer & Technical Project Manager with 6 years across web,
            mobile, and SaaS. Led engineering teams and delivered 80+ websites, 10+ mobile
            apps, and multiple CRM systems for tech, real estate, and green-energy clients.
          </p>
        </div>
      </header>

      {/* WORK EXPERIENCE */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">Work experience</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            From <span className="serif">contestant</span> to tech lead
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            A timeline of roles, teams, and shipped products — full-time, freelance, and
            teaching positions across Dubai and the wider MENA region.
          </p>

          <ol className="exp-timeline">
            {roles.map((r, i) => (
              <li key={i} className="exp-item">
                <div className="exp-dot" aria-hidden="true" />
                <div className="exp-card">
                  <div className="exp-head">
                    <div>
                      <div className="exp-company">
                        {r.company}
                        {r.location ? <span className="exp-loc"> — {r.location}</span> : null}
                      </div>
                      <h3 className="exp-title">{r.title}</h3>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-type">{r.type}</span>
                      <span className="exp-period">{r.period}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VOLUNTEERING */}
      <section style={{ background: 'var(--paper-dark)', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">Volunteering & extracurriculars</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Leadership <span className="serif">beyond code</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            Elected representation, community organizing, and student advocacy — the
            non-engineering side of the resume.
          </p>

          <ol className="exp-timeline">
            {volunteering.map((v, i) => (
              <li key={i} className="exp-item">
                <div className="exp-dot" aria-hidden="true" />
                <div className="exp-card">
                  <div className="exp-head">
                    <div>
                      <div className="exp-company">{v.org}</div>
                      <h3 className="exp-title">{v.title}</h3>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{v.period}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {v.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-eyebrow">Skills</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            The full <span className="serif">tech stack</span>
          </h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: '3rem', maxWidth: 640 }}>
            Languages, frameworks, databases, and the practices that hold them together.
          </p>

          <SkillsGrid />

          <div style={{ marginTop: '3rem' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>Personal skills</div>
            <div className="websites-list">
              {personalSkills.map(s => (
                <span key={s} className="website-chip" style={{ cursor: 'default' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION + LANGUAGES + ACHIEVEMENTS + RECOMMENDATION */}
      <section style={{ background: 'var(--paper-dark)', padding: '4rem 0' }}>
        <div className="container">
          <div className="exp-grid-2">
            {/* Education */}
            <div className="exp-info-card">
              <div className="section-eyebrow">Education</div>
              <h3 className="exp-info-title">{education.school}</h3>
              <p className="exp-info-sub">{education.degree}</p>
              <div className="exp-info-meta">
                <span>{education.location}</span>
                <span>{education.period}</span>
              </div>
              <div className="exp-pill" style={{ marginTop: '1rem' }}>{education.gpa}</div>
            </div>

            {/* Languages */}
            <div className="exp-info-card">
              <div className="section-eyebrow">Languages</div>
              <div style={{ marginTop: '1.25rem' }}>
                {languages.map(l => (
                  <div key={l.name} className="lang-row">
                    <div className="lang-head">
                      <span className="lang-name">{l.name}</span>
                      <span className="lang-level">{l.level}</span>
                    </div>
                    <div className="lang-bar">
                      <div className="lang-bar-fill" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="exp-info-card">
              <div className="section-eyebrow">Achievements</div>
              <ul className="exp-bullets" style={{ marginTop: '1rem' }}>
                {achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>

            {/* Recommendation */}
            <div className="exp-info-card">
              <div className="section-eyebrow">Recommendation</div>
              <blockquote className="exp-quote">
                <span className="quote-mark">“</span>
                Endorsed by Join Imagine with a recommendation letter — ranked in the top
                <strong> 10% </strong>of their peer group.
                <span className="quote-mark closing">”</span>
              </blockquote>
              <div className="exp-info-sub" style={{ marginTop: '0.5rem' }}>— Join Imagine</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <div className="results-strip">
        <div className="container">
          <div className="results-row">
            <div className="result-item">
              <div className="result-big">6<span className="plus">+</span></div>
              <div className="result-lbl">Years Building</div>
            </div>
            <div className="result-item">
              <div className="result-big">80<span className="plus">+</span></div>
              <div className="result-lbl">Websites Shipped</div>
            </div>
            <div className="result-item">
              <div className="result-big">10<span className="plus">+</span></div>
              <div className="result-lbl">Mobile Apps</div>
            </div>
            <div className="result-item">
              <div className="result-big">11</div>
              <div className="result-lbl">Engineers Led</div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter headline="talk" />
    </>
  )
}
