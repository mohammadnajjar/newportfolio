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

type Tech = { name: string; cats: string[]; icon: { slug: string; color: string } }

const stack: Tech[] = [
  { name: '.NET',         cats: ['backend'],            icon: { slug: 'dotnet',           color: '512BD4' } },
  { name: 'AWS',          cats: ['devops', 'arch'],     icon: { slug: 'amazonwebservices', color: 'FF9900' } },
  { name: 'Angular',      cats: ['frontend'],           icon: { slug: 'angular',          color: 'DD0031' } },
  { name: 'Azure',        cats: ['devops', 'arch'],     icon: { slug: 'microsoftazure',   color: '0078D4' } },
  { name: 'Django',       cats: ['backend'],            icon: { slug: 'django',           color: '092E20' } },
  { name: 'Docker',       cats: ['devops'],             icon: { slug: 'docker',           color: '2496ED' } },
  { name: 'Firebase',     cats: ['backend', 'database'], icon: { slug: 'firebase',         color: 'FFCA28' } },
  { name: 'Flutter',      cats: ['frontend'],           icon: { slug: 'flutter',          color: '02569B' } },
  { name: 'Google Cloud', cats: ['devops', 'arch'],     icon: { slug: 'googlecloud',      color: '4285F4' } },
  { name: 'GraphQL',      cats: ['backend', 'arch'],    icon: { slug: 'graphql',          color: 'E10098' } },
  { name: 'Java',         cats: ['lang'],               icon: { slug: 'openjdk',          color: '000000' } },
  { name: 'Kotlin',       cats: ['lang'],               icon: { slug: 'kotlin',           color: '7F52FF' } },
  { name: 'Kubernetes',   cats: ['devops'],             icon: { slug: 'kubernetes',       color: '326CE5' } },
  { name: 'Laravel',      cats: ['backend'],            icon: { slug: 'laravel',          color: 'FF2D20' } },
  { name: 'MongoDB',      cats: ['database'],           icon: { slug: 'mongodb',          color: '47A248' } },
  { name: 'Nest.js',      cats: ['backend'],            icon: { slug: 'nestjs',           color: 'E0234E' } },
  { name: 'Next.js',      cats: ['frontend'],           icon: { slug: 'nextdotjs',        color: '000000' } },
  { name: 'PWA',          cats: ['frontend'],           icon: { slug: 'pwa',              color: '5A0FC8' } },
  { name: 'PostgreSQL',   cats: ['database'],           icon: { slug: 'postgresql',       color: '4169E1' } },
  { name: 'Python',       cats: ['lang'],               icon: { slug: 'python',           color: '3776AB' } },
  { name: 'Redis',        cats: ['database'],           icon: { slug: 'redis',            color: 'DC382D' } },
  { name: 'React',        cats: ['frontend'],           icon: { slug: 'react',            color: '61DAFB' } },
  { name: 'SQL Server',   cats: ['database'],           icon: { slug: 'microsoftsqlserver', color: 'CC2927' } },
  { name: 'Swift',        cats: ['lang'],               icon: { slug: 'swift',            color: 'F05138' } },
  { name: 'TypeScript',   cats: ['lang', 'frontend'],   icon: { slug: 'typescript',       color: '3178C6' } },
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
        {visible.map(t => (
          <div key={t.name} className="tech-item">
            <span className="tech-item-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${t.icon.slug}/${t.icon.color}`}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
