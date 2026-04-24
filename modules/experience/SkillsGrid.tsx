'use client'

import { useState } from 'react'

type Group = 'all' | 'languages' | 'frameworks' | 'frontend' | 'backend' | 'data' | 'tools' | 'practices'

const filters: { id: Group; label: string }[] = [
  { id: 'all',         label: 'All' },
  { id: 'languages',   label: 'Languages' },
  { id: 'frameworks',  label: 'Frameworks' },
  { id: 'frontend',    label: 'Frontend' },
  { id: 'backend',     label: 'Backend' },
  { id: 'data',        label: 'Data' },
  { id: 'tools',       label: 'Tools' },
  { id: 'practices',   label: 'Practices' },
]

// icon = simpleicons.org slug + brand hex (no '#').
type Skill = { name: string; cats: Group[]; icon?: { slug: string; color: string } }

const skills: Skill[] = [
  { name: 'Laravel',          cats: ['frameworks', 'backend'],   icon: { slug: 'laravel',     color: 'FF2D20' } },
  { name: 'React',            cats: ['frameworks', 'frontend'],  icon: { slug: 'react',       color: '61DAFB' } },
  { name: 'JavaScript',       cats: ['languages', 'frontend'],   icon: { slug: 'javascript',  color: 'F7DF1E' } },
  { name: 'TypeScript',       cats: ['languages', 'frontend'],   icon: { slug: 'typescript',  color: '3178C6' } },
  { name: 'WordPress',        cats: ['frameworks', 'backend'],   icon: { slug: 'wordpress',   color: '21759B' } },
  { name: 'PHP',              cats: ['languages', 'backend'],    icon: { slug: 'php',         color: '777BB4' } },
  { name: 'Redux',            cats: ['frameworks', 'frontend'],  icon: { slug: 'redux',       color: '764ABC' } },
  { name: 'jQuery',           cats: ['frameworks', 'frontend'],  icon: { slug: 'jquery',      color: '0769AD' } },
  { name: 'HTML5',            cats: ['languages', 'frontend'],   icon: { slug: 'html5',       color: 'E34F26' } },
  { name: 'CSS3',             cats: ['languages', 'frontend'],   icon: { slug: 'css',         color: '1572B6' } },
  { name: 'Sass',             cats: ['frontend'],                icon: { slug: 'sass',        color: 'CC6699' } },
  { name: 'Bootstrap',        cats: ['frontend', 'frameworks'],  icon: { slug: 'bootstrap',   color: '7952B3' } },
  { name: 'Tailwind CSS',     cats: ['frontend', 'frameworks'],  icon: { slug: 'tailwindcss', color: '06B6D4' } },
  { name: 'MySQL',            cats: ['data', 'backend'],         icon: { slug: 'mysql',       color: '4479A1' } },
  { name: 'Shopify',          cats: ['frameworks', 'backend'],   icon: { slug: 'shopify',     color: '7AB55C' } },
  { name: 'Git',              cats: ['tools'],                   icon: { slug: 'git',         color: 'F05032' } },
  { name: 'Moodle',           cats: ['frameworks'],              icon: { slug: 'moodle',      color: 'F98012' } },
  { name: 'C / C++',          cats: ['languages'],               icon: { slug: 'cplusplus',   color: '00599C' } },
  { name: 'RESTful API',      cats: ['backend', 'practices'],    icon: { slug: 'swagger',     color: '85EA2D' } },
  { name: 'API Design',       cats: ['backend', 'practices'],    icon: { slug: 'openapiinitiative', color: '6BA539' } },
  { name: 'SEO',              cats: ['practices'],               icon: { slug: 'googlesearchconsole', color: '458CF5' } },
  { name: 'Agile',            cats: ['practices'],               icon: { slug: 'jira',        color: '0052CC' } },
  { name: 'Algorithms',       cats: ['practices'],               icon: { slug: 'leetcode',    color: 'FFA116' } },
  { name: 'Data Structures',  cats: ['practices'],               icon: { slug: 'codeforces',  color: '1F8ACB' } },
]

export default function SkillsGrid() {
  const [active, setActive] = useState<Group>('all')

  const visible = active === 'all' ? skills : skills.filter(s => s.cats.includes(active))

  return (
    <div>
      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${active === f.id ? ' active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="tech-stack-grid">
        {visible.map(s => (
          <div key={s.name} className="tech-item">
            {s.icon && (
              <span className="tech-item-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${s.icon.slug}/${s.icon.color}`}
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                />
              </span>
            )}
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
