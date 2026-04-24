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

const stack = [
  { name: '.Net Core',      cats: ['backend'] },
  { name: 'AWS',            cats: ['devops', 'arch'] },
  { name: 'Angular',        cats: ['frontend'] },
  { name: 'Azure',          cats: ['devops', 'arch'] },
  { name: 'Django',         cats: ['backend'] },
  { name: 'Docker',         cats: ['devops'] },
  { name: 'Firebase',       cats: ['backend', 'database'] },
  { name: 'Flutter',        cats: ['frontend'] },
  { name: 'Google Cloud',   cats: ['devops', 'arch'] },
  { name: 'GraphQL',        cats: ['backend', 'arch'] },
  { name: 'Java',           cats: ['lang'] },
  { name: 'Kotlin',         cats: ['lang'] },
  { name: 'Kubernetes',     cats: ['devops'] },
  { name: 'Laravel',        cats: ['backend'] },
  { name: 'MongoDB',        cats: ['database'] },
  { name: 'Nest.js',        cats: ['backend'] },
  { name: 'Next.js',        cats: ['frontend'] },
  { name: 'PWA',            cats: ['frontend'] },
  { name: 'PostgreSQL',     cats: ['database'] },
  { name: 'Python',         cats: ['lang'] },
  { name: 'Redis',          cats: ['database'] },
  { name: 'React',          cats: ['frontend'] },
  { name: 'SQL Server',     cats: ['database'] },
  { name: 'Swift',          cats: ['lang'] },
  { name: 'TypeScript',     cats: ['lang', 'frontend'] },
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
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
