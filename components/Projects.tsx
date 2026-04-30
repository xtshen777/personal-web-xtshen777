'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

type Filter = 'All' | 'UX/UI' | 'Product' | 'Marketing' | 'Art & Design'
const FILTERS: Filter[] = ['All', 'UX/UI', 'Product', 'Marketing', 'Art & Design']
const FEATURED_SLUGS = new Set(['pixmancer', 'whatsdeal'])

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = (active === 'All' ? projects : projects.filter(p =>
    p.category === active || p.extraCategories?.includes(active)
  ))
    .slice()
    .sort((a, b) => {
      const aF = FEATURED_SLUGS.has(a.slug) ? 0 : 1
      const bF = FEATURED_SLUGS.has(b.slug) ? 0 : 1
      return aF - bF
    })

  return (
    <section id="projects" className="py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-12">
          Selected <span className="gradient-text">Work</span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'gradient-bg text-white'
                  : 'bg-white text-muted hover:text-deep'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(project => {
            const featured = FEATURED_SLUGS.has(project.slug)
            return (
              <div key={project.slug} className={featured ? 'col-span-full' : ''}>
                <ProjectCard project={project} featured={featured} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
