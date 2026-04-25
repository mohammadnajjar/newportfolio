'use client'

import { useState } from 'react'

const filters = [
  { id: 'all',      label: 'All' },
  { id: 'arch',     label: 'Architecture' },
  { id: 'backend',  label: 'Backend Development' },
  { id: 'database', label: 'Database' },
  { id: 'devops',   label: 'DevOps' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'lang',     label: 'Programming Language' },
]

type IconSpec =
  | { slug: string; color: string }       // simpleicons.org
  | { url: string }                       // any external URL

type Tech = { name: string; cats: string[]; icon: IconSpec }

// AWS removed their brand marks from Simple Icons; skillicons.dev still hosts a clean AWS mark.
const AWS_ICON: IconSpec = { url: 'https://skillicons.dev/icons?i=aws' }

const stack: Tech[] = [
  { name: '.NET',           cats: ['backend'],              icon: { slug: 'dotnet',             color: '512BD4' } },
  { name: 'ArgoCD',         cats: ['devops'],               icon: { slug: 'argo',               color: 'EF7B4D' } },
  { name: 'AWS',            cats: ['devops', 'arch'],       icon: AWS_ICON },
  { name: 'AWS ECR',        cats: ['devops'],               icon: AWS_ICON },
  { name: 'AWS EKS',        cats: ['devops', 'arch'],       icon: AWS_ICON },
  { name: 'Angular',        cats: ['frontend'],             icon: { slug: 'angular',            color: 'DD0031' } },
  { name: 'Azure',          cats: ['devops', 'arch'],       icon: { slug: 'microsoftazure',     color: '0078D4' } },
  { name: 'Django',         cats: ['backend'],              icon: { slug: 'django',             color: '092E20' } },
  { name: 'Docker',         cats: ['devops'],               icon: { slug: 'docker',             color: '2496ED' } },
  { name: 'Firebase',       cats: ['backend', 'database'],  icon: { slug: 'firebase',           color: 'FFCA28' } },
  { name: 'Flutter',        cats: ['frontend'],             icon: { slug: 'flutter',            color: '02569B' } },
  { name: 'GitHub Actions', cats: ['devops'],               icon: { slug: 'githubactions',      color: '2088FF' } },
  { name: 'Google Cloud',   cats: ['devops', 'arch'],       icon: { slug: 'googlecloud',        color: '4285F4' } },
  { name: 'Grafana',        cats: ['devops'],               icon: { slug: 'grafana',            color: 'F46800' } },
  { name: 'GraphQL',        cats: ['backend', 'arch'],      icon: { slug: 'graphql',            color: 'E10098' } },
  { name: 'Java',           cats: ['lang'],                 icon: { slug: 'openjdk',            color: '000000' } },
  { name: 'Kotlin',         cats: ['lang'],                 icon: { slug: 'kotlin',             color: '7F52FF' } },
  { name: 'Kubernetes',     cats: ['devops', 'arch'],       icon: { slug: 'kubernetes',         color: '326CE5' } },
  { name: 'Laravel',        cats: ['backend'],              icon: { slug: 'laravel',            color: 'FF2D20' } },
  { name: 'MongoDB',        cats: ['database'],             icon: { slug: 'mongodb',            color: '47A248' } },
  { name: 'MySQL',          cats: ['database'],             icon: { slug: 'mysql',              color: '4479A1' } },
  { name: 'Nest.js',        cats: ['backend'],              icon: { slug: 'nestjs',             color: 'E0234E' } },
  { name: 'Next.js',        cats: ['frontend'],             icon: { slug: 'nextdotjs',          color: '000000' } },
  { name: 'PWA',            cats: ['frontend'],             icon: { slug: 'pwa',                color: '5A0FC8' } },
  { name: 'PostgreSQL',     cats: ['database'],             icon: { slug: 'postgresql',         color: '4169E1' } },
  { name: 'Prometheus',     cats: ['devops', 'arch'],       icon: { slug: 'prometheus',         color: 'E6522C' } },
  { name: 'Python',         cats: ['lang'],                 icon: { slug: 'python',             color: '3776AB' } },
  { name: 'Queue Workers',  cats: ['backend', 'arch'],      icon: { slug: 'redis',              color: 'DC382D' } },
  { name: 'Redis',          cats: ['database', 'backend'],  icon: { slug: 'redis',              color: 'DC382D' } },
  { name: 'React',          cats: ['frontend'],             icon: { slug: 'react',              color: '61DAFB' } },
  { name: 'SQL Server',     cats: ['database'],             icon: { slug: 'microsoftsqlserver', color: 'CC2927' } },
  { name: 'Swift',          cats: ['lang'],                 icon: { slug: 'swift',              color: 'F05138' } },
  { name: 'TypeScript',     cats: ['lang', 'frontend'],     icon: { slug: 'typescript',         color: '3178C6' } },
]

export default function TechStack() {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? stack
    : stack.filter(t => t.cats.includes(active))

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
        {visible.map(t => {
          const src = 'url' in t.icon
            ? t.icon.url
            : `https://cdn.simpleicons.org/${t.icon.slug}/${t.icon.color}`
          return (
            <div key={t.name} className="tech-item">
              <span className="tech-item-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>{t.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
