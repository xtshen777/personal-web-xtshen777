const TIMELINE = [
  {
    year: '2024–Present',
    title: 'M.S. Technology Innovation',
    org: 'University of Washington',
    description: 'Human-computer interaction, product design, and emerging technology.',
  },
  {
    year: '2022–2024',
    title: 'Product Manager & UX Designer',
    org: '[Your Company]',
    description: 'Led full product lifecycle for 10+ features across US, Canada, and Brazil markets.',
  },
  {
    year: '2020–2022',
    title: 'Marketing & Brand Designer',
    org: '[Your Company]',
    description: 'Generated 500K+ content impressions through integrated visual campaigns.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-16">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>

        <div className="relative border-l-2 border-mist ml-4 space-y-12 mb-14">
          {TIMELINE.map(({ year, title, org, description }) => (
            <div key={title} className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full gradient-bg" />
              <p className="text-xs text-muted uppercase tracking-widest mb-1">{year}</p>
              <h3 className="font-display font-bold text-xl text-deep">{title}</h3>
              <p className="text-muted font-medium mb-1">{org}</p>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
        >
          Download Full Resume ↓
        </a>
      </div>
    </section>
  )
}
