const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Products Shipped' },
  { value: '500K+', label: 'Content Impressions' },
  { value: '3', label: 'Countries' },
]

const SKILLS = [
  'Product Strategy', 'User Research', 'Figma', 'Axure',
  'Prototyping', 'Adobe Creative Cloud', 'Growth Strategy',
  'Cross-functional Leadership', 'Marketing', 'Brand Design',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Bio */}
          <div className="md:col-span-3 space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m Lucia Shen, a product manager and UX/UI designer with a
              background spanning product strategy, visual design, and marketing.
              I specialize in the full product lifecycle — from user research and
              ideation to high-fidelity prototypes and go-to-market execution.
            </p>
            <p>
              Over the past two years I&apos;ve shipped 10+ products and generated
              500,000+ content impressions across cross-regional markets in the US,
              Canada, and Brazil. I&apos;m currently pursuing my M.S. in Technology
              Innovation at the University of Washington.
            </p>
            <p>
              I believe great products live at the intersection of thoughtful design
              and measurable impact — and I bring both to every project I touch.
            </p>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-mist rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-4xl gradient-text mb-1">
                  {value}
                </p>
                <p className="text-muted text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {SKILLS.map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-mist rounded-full text-sm text-deep font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
