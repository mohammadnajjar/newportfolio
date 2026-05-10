'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

type Group = 'all' | 'languages' | 'frameworks' | 'frontend' | 'backend' | 'data' | 'tools' | 'practices'

const filterIds: { id: Group; key: string }[] = [
  { id: 'all',         key: 'skillsAll' },
  { id: 'languages',   key: 'skillsLanguages' },
  { id: 'frameworks',  key: 'skillsFrameworks' },
  { id: 'frontend',    key: 'skillsFrontend' },
  { id: 'backend',     key: 'skillsBackend' },
  { id: 'data',        key: 'skillsData' },
  { id: 'tools',       key: 'skillsTools' },
  { id: 'practices',   key: 'skillsPractices' },
]

type Skill = { name: string; cats: Group[]; icon?: { slug: string; color: string } }

const skills: Skill[] = [
  { name: 'Laravel',               cats: ['frameworks', 'backend'],   icon: { slug: 'laravel', color: 'FF2D20' } },
  { name: 'Livewire',              cats: ['frameworks', 'backend'] },
  { name: 'React',                 cats: ['frameworks', 'frontend'],  icon: { slug: 'react', color: '61DAFB' } },
  { name: 'Vue.js',                cats: ['frameworks', 'frontend'],  icon: { slug: 'vuedotjs', color: '4FC08D' } },
  { name: 'Next.js',               cats: ['frameworks', 'frontend'],  icon: { slug: 'nextdotjs', color: '111111' } },
  { name: 'Alpine.js',             cats: ['frameworks', 'frontend'],  icon: { slug: 'alpinedotjs', color: '8BC0D0' } },
  { name: 'Flutter',               cats: ['frameworks', 'frontend'],  icon: { slug: 'flutter', color: '02569B' } },
  { name: 'WordPress',             cats: ['frameworks', 'backend'],   icon: { slug: 'wordpress', color: '21759B' } },
  { name: 'WooCommerce',           cats: ['frameworks', 'backend'],   icon: { slug: 'woocommerce', color: '96588A' } },
  { name: 'Shopify',               cats: ['frameworks', 'backend'],   icon: { slug: 'shopify', color: '7AB55C' } },
  { name: 'Moodle',                cats: ['frameworks'],              icon: { slug: 'moodle', color: 'F98012' } },
  { name: 'Redux',                 cats: ['frameworks', 'frontend'],  icon: { slug: 'redux', color: '764ABC' } },
  { name: 'jQuery',                cats: ['frameworks', 'frontend'],  icon: { slug: 'jquery', color: '0769AD' } },
  { name: 'Bootstrap',             cats: ['frameworks', 'frontend'],  icon: { slug: 'bootstrap', color: '7952B3' } },
  { name: 'Tailwind CSS',          cats: ['frameworks', 'frontend'],  icon: { slug: 'tailwindcss', color: '06B6D4' } },
  { name: 'JavaScript',            cats: ['languages', 'frontend'],   icon: { slug: 'javascript', color: 'F7DF1E' } },
  { name: 'TypeScript',            cats: ['languages', 'frontend'],   icon: { slug: 'typescript', color: '3178C6' } },
  { name: 'PHP',                   cats: ['languages', 'backend'],    icon: { slug: 'php', color: '777BB4' } },
  { name: 'Node.js',               cats: ['languages', 'backend'],    icon: { slug: 'nodedotjs', color: '5FA04E' } },
  { name: 'HTML5',                 cats: ['languages', 'frontend'],   icon: { slug: 'html5', color: 'E34F26' } },
  { name: 'CSS3',                  cats: ['languages', 'frontend'],   icon: { slug: 'css', color: '1572B6' } },
  { name: 'Sass',                  cats: ['languages', 'frontend'],   icon: { slug: 'sass', color: 'CC6699' } },
  { name: 'C / C++',               cats: ['languages'],               icon: { slug: 'cplusplus', color: '00599C' } },
  { name: 'MySQL',                 cats: ['data', 'backend'],         icon: { slug: 'mysql', color: '4479A1' } },
  { name: 'PostgreSQL',            cats: ['data', 'backend'],         icon: { slug: 'postgresql', color: '4169E1' } },
  { name: 'Redis',                 cats: ['data', 'backend'],         icon: { slug: 'redis', color: 'DC382D' } },
  { name: 'JSONB',                 cats: ['data', 'backend'] },
  { name: 'GraphQL',               cats: ['backend'],                 icon: { slug: 'graphql', color: 'E10098' } },
  { name: 'WebSockets',            cats: ['backend'],                 icon: { slug: 'socketdotio', color: '010101' } },
  { name: 'Queue Workers',         cats: ['backend', 'practices'] },
  { name: 'Webhooks (HMAC)',       cats: ['backend', 'practices'] },
  { name: 'REST APIs',             cats: ['backend', 'practices'],    icon: { slug: 'swagger', color: '85EA2D' } },
  { name: 'API Design',            cats: ['backend', 'practices'],    icon: { slug: 'openapiinitiative', color: '6BA539' } },
  { name: 'Spatie Permission',     cats: ['backend', 'practices'] },
  { name: 'Docker',                cats: ['tools'],                   icon: { slug: 'docker', color: '2496ED' } },
  { name: 'Azure DevOps',          cats: ['tools'],                   icon: { slug: 'azuredevops', color: '0078D7' } },
  { name: 'GitHub Actions',        cats: ['tools'],                   icon: { slug: 'githubactions', color: '2088FF' } },
  { name: 'Git',                   cats: ['tools'],                   icon: { slug: 'git', color: 'F05032' } },
  { name: 'GitOps',                cats: ['tools', 'practices'] },
  { name: 'Webpack',               cats: ['tools', 'frontend'],       icon: { slug: 'webpack', color: '8DD6F9' } },
  { name: 'Linux',                 cats: ['tools'],                   icon: { slug: 'linux', color: 'FCC624' } },
  { name: 'Nginx',                 cats: ['tools'],                   icon: { slug: 'nginx', color: '009639' } },
  { name: 'Kubernetes',            cats: ['tools'],                   icon: { slug: 'kubernetes', color: '326CE5' } },
  { name: 'AWS EKS',               cats: ['tools'],                   icon: { slug: 'amazonaws', color: 'FF9900' } },
  { name: 'ArgoCD',                cats: ['tools'],                   icon: { slug: 'argo', color: 'EF7B4D' } },
  { name: 'Prometheus',            cats: ['tools'],                   icon: { slug: 'prometheus', color: 'E6522C' } },
  { name: 'Grafana',               cats: ['tools'],                   icon: { slug: 'grafana', color: 'F46800' } },
  { name: 'CI/CD',                 cats: ['tools', 'practices'] },
  { name: 'Event-driven Architecture', cats: ['practices'] },
  { name: 'OWASP / JWT / Auth',    cats: ['practices'] },
  { name: 'SEO',                   cats: ['practices'],               icon: { slug: 'googlesearchconsole', color: '458CF5' } },
  { name: 'Google Tag Manager',    cats: ['practices'],               icon: { slug: 'googletagmanager', color: '246FDB' } },
  { name: 'Agile',                 cats: ['practices'],               icon: { slug: 'jira', color: '0052CC' } },
  { name: 'Architecture Decisions', cats: ['practices'] },
  { name: 'Team Leadership',       cats: ['practices'] },
  { name: 'Technical Interviewing', cats: ['practices'] },
  { name: 'AI-first Workflow',     cats: ['practices'],               icon: { slug: 'githubcopilot', color: '000000' } },
  { name: 'Algorithms',            cats: ['practices'],               icon: { slug: 'leetcode', color: 'FFA116' } },
  { name: 'Data Structures',       cats: ['practices'],               icon: { slug: 'codeforces', color: '1F8ACB' } },
]

export default function SkillsGrid() {
  const [active, setActive] = useState<Group>('all')
  const t = useTranslations('filters')

  const visible = active === 'all' ? skills : skills.filter(s => s.cats.includes(active))

  return (
    <div>
      <div className="filter-bar">
        {filterIds.map(f => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${active === f.id ? ' active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {t(f.key)}
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
