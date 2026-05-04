import { assetPath } from '@/lib/asset-path'

interface PersonaCardProps {
  name: string
  title: string
  photo?: string
  demographics: { label: string; value: string }[]
  quote: string
  bio: string
  painPoints: { title: string; body: string }[]
  needs: string[]
}

export default function PersonaCard({ name, title, photo, demographics, quote, bio, painPoints, needs }: PersonaCardProps) {
  return (
    <div className="bg-mist rounded-2xl p-8 flex flex-col md:flex-row gap-8">
      {/* Left column */}
      <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-44">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={assetPath(photo)} alt={name} className="w-full mb-4 object-contain" />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-200 to-pink-200 mb-4" />
        )}
        <p className="font-display font-bold text-xl gradient-text text-center md:text-left">{name}</p>
        <p className="text-xs uppercase tracking-widest text-muted/60 mt-1 mb-5 text-center md:text-left">{title}</p>
        <div className="w-full space-y-2">
          {demographics.map((d, i) => (
            <div key={i} className="flex gap-3 items-baseline">
              <span className="text-xs uppercase tracking-widest text-muted/50 w-20 shrink-0 text-right">{d.label}</span>
              <span className="text-xs font-semibold text-deep uppercase tracking-wide">{d.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Quote */}
        <div className="bg-white rounded-xl px-6 py-4 border border-violet-100">
          <p className="text-muted text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-xl px-6 py-4 border border-violet-100">
          <p className="text-xs uppercase tracking-widest text-deep font-semibold mb-2">Bio</p>
          <p className="text-muted text-sm leading-relaxed">{bio}</p>
        </div>

        {/* Pain points + Needs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl px-6 py-4 border border-violet-100">
            <p className="text-xs uppercase tracking-widest text-deep font-semibold mb-3">Pain Points</p>
            <ul className="space-y-3">
              {painPoints.map((p, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed">
                  <span className="font-semibold text-deep">{p.title}:</span> {p.body}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 border border-violet-100">
            <p className="text-xs uppercase tracking-widest text-deep font-semibold mb-3">Needs</p>
            <ul className="space-y-3">
              {needs.map((n, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed">{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
