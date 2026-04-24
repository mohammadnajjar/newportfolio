'use client'

import { useState } from 'react'

interface WorkFilterProps {
  chips: { label: string; value: string }[]
  children: React.ReactNode
}

export default function WorkFilter({ chips, children }: WorkFilterProps) {
  const [active, setActive] = useState('all')

  return (
    <>
      <div className="filter-bar">
        {chips.map(chip => (
          <button
            key={chip.value}
            className={`filter-chip${active === chip.value ? ' active' : ''}`}
            onClick={() => setActive(chip.value)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <div data-filter-container data-active={active}>
        {children}
      </div>
    </>
  )
}
