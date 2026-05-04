const EDUCATION = [
  {
    year: '2025.09 – Present',
    title: 'M.S. Technology Innovation',
    org: 'University of Washington · Seattle, WA',
    meta: 'GPA 4.0',
    description: 'Engineering, design, and business at the intersection of emerging technology and human-centered innovation.',
  },
  {
    year: '2023.07 – 2024.07',
    title: 'M.A. Advertising',
    org: 'S.I. Newhouse School of Public Communications, Syracuse University · NY',
    meta: ['GPA 3.86', 'Google Digital Marketing & E-commerce Certification (2024)', 'Adobe Certified Professional in Visual Design (12/2023)'],
    description: 'Developed expertise in brand strategy, integrated campaigns, and data-driven digital marketing across global markets.',
  },
  {
    year: '2016.09 – 2022.06',
    title: 'B.A. Fine Arts with Studio Practice',
    org: 'University of Waterloo · ON',
    meta: 'Minor: Digital Arts Communication',
    description: 'Built a foundation in visual thinking, studio practice, and digital media across fine arts and communication disciplines.',
  },
]

const EXPERIENCE = [
  {
    year: '2025.12 – 2027.03',
    title: 'Innovation Prototyping Lab Technical Assistant',
    org: 'University of Washington · Seattle, US',
    description: 'Supervised 100+ students on 3D printing, laser cutting, and prototyping equipment. Developed visual operation guides and training videos; co-built standardized lab workflows and documentation.',
  },
  {
    year: '2025.02 – 2025.09',
    title: 'Product Lead · UX Designer · Marketing Lead',
    org: 'Royalforce Media Inc. · Canada',
    description: 'Led full product lifecycle for Pixmancer AI and WhatsDeal across US, Canada, and Brazil. Drove 15+ iterative improvements, built global social media presence from 0 to 500+ followers with 80K+ viral content, and coordinated cross-functional sprints with 100% on-time delivery.',
  },
  {
    year: '2023.08 – 2024.08',
    title: 'Graphic Design Teaching Assistant',
    org: 'Syracuse University · Syracuse, US',
    description: 'Instructed 50+ undergraduate students in Adobe Creative Suite and core design principles. Delivered 100+ hours of one-on-one office hours and iterated course materials based on student feedback.',
  },
  {
    year: '2022.05 – 2023.06',
    title: 'Visual Design & Marketing Specialist',
    org: 'Btrust International Trading Inc. · Canada',
    description: 'Built the brand visual system from scratch and launched 3 social media accounts, growing to 1K+ followers in 3 months. Led multichannel campaigns that drove a 15% increase in sales.',
  },
  {
    year: '2021.05 – 2021.08',
    title: 'Multimedia Graphic Design Intern',
    org: 'Ctrl V · Canada',
    description: 'Designed full-suite marketing materials for in-store promotions. Built a reusable After Effects short-video template system adopted by the YouTube channel for 6+ months.',
  },
]

type TimelineItem = { year: string; title: string; org: string; meta?: string | string[]; description: string }

function TimelineColumn({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative border-l-2 border-mist ml-4 space-y-10">
      {items.map(({ year, title, org, meta, description }) => (
        <div key={title} className="relative pl-8">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full gradient-bg" />
          <p className="text-xs text-muted uppercase tracking-widest mb-1">{year}</p>
          <h3 className="font-display font-bold text-lg text-deep">{title}</h3>
          <p className="text-muted font-medium text-sm">{org}</p>
          {meta && (Array.isArray(meta)
            ? meta.map((m, i) => <p key={i} className="text-muted text-sm">{m}</p>)
            : <p className="text-muted text-sm">{meta}</p>
          )}
          {description && <p className="text-muted text-sm leading-relaxed mt-1">{description}</p>}
        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-16">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <div>
            <h3 className="font-display font-bold text-xl text-deep mb-8">Experience</h3>
            <TimelineColumn items={EXPERIENCE} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-deep mb-8">Education</h3>
            <TimelineColumn items={EDUCATION} />
          </div>
        </div>

        <a
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/resume.pdf`}
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
        >
          Download Full Resume ↓
        </a>
      </div>
    </section>
  )
}
