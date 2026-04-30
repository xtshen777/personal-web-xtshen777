import { assetPath } from '@/lib/asset-path'
import { ContentBlock } from '@/lib/projects'
import FeatureCarousel from './FeatureCarousel'

interface Props {
  sections: ContentBlock[]
}

export default function ProjectContent({ sections }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      {sections.map((block, i) => {
        if (block.type === 'text') {
          if (!block.heading && !block.body) return null
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">
                  {block.heading}
                </h2>
              )}
              {block.body && (
                <p className="text-muted leading-relaxed whitespace-pre-line">{block.body}</p>
              )}
            </div>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={i} className={block.contained ? '' : '-mx-6 sm:-mx-16 lg:-mx-32'}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(block.src)}
                alt={block.alt}
                className={`rounded-2xl ${block.contained ? 'w-3/4 mx-auto block' : 'w-full'}`}
              />
              {block.caption && (
                <figcaption className="text-center text-muted text-sm mt-3 px-6">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )
        }

        if (block.type === 'image-text') {
          const imgW = block.imageSize === 'narrow' ? 'md:w-[26%]' : block.imageSize === 'wide' ? 'md:w-[48%]' : 'md:w-[38%]'
          const align = block.imageSize === 'narrow' ? 'md:items-center' : 'items-start'
          return (
            <div key={i} className={`flex flex-col md:flex-row gap-8 ${align}`}>
              <div className={`w-full ${imgW} shrink-0`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assetPath(block.image.src)} alt={block.image.alt} className="w-full rounded-xl" />
              </div>
              <div className="flex-1">
                {block.heading && (
                  <h3 className="font-display font-semibold text-lg text-deep mb-3">{block.heading}</h3>
                )}
                <p className="text-muted text-sm leading-relaxed whitespace-pre-line">{block.body}</p>
              </div>
            </div>
          )
        }

        if (block.type === 'image-grid') {
          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {block.images.map((img, j) => (
                <figure key={j}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetPath(img.src)} alt={img.alt} className="w-full rounded-xl" />
                  {img.caption && (
                    <figcaption className="text-center text-muted text-xs mt-2">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )
        }

        if (block.type === 'table') {
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-deep/10">
                    {block.headers.map((h, j) => (
                      <th key={j} className="text-left py-3 px-4 font-display font-semibold text-deep first:pl-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className="border-b border-deep/5 hover:bg-mist/50 transition-colors">
                      {row.map((cell, k) => (
                        <td key={k} className={`py-3 px-4 first:pl-0 align-top ${k === 0 ? 'text-deep font-medium' : k === row.length - 1 ? 'font-semibold gradient-text' : 'text-muted'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        if (block.type === 'stats') {
          return (
            <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {block.items.map(({ value, label }) => (
                <div key={label} className="bg-mist rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl gradient-text mb-1">{value}</p>
                  <p className="text-muted text-sm">{label}</p>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'pain-points') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">{block.heading}</h2>
              )}
              <p className="text-muted leading-relaxed mb-8">{block.intro}</p>
              <div className={`grid gap-4 mb-6 ${block.problems.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {block.problems.map((p, j) => (
                  <div key={j} className="bg-mist rounded-2xl p-6 flex flex-col">
                    <p className="font-display font-bold text-3xl gradient-text mb-3">{p.stat}</p>
                    <p className="text-muted text-sm leading-relaxed">{p.description}</p>
                    {p.colors && (
                      <div className="flex gap-2 mt-4">
                        {p.colors.map((c, k) => (
                          <div key={k} className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-lg shadow-sm" style={{ backgroundColor: c.hex }} />
                            <span className="text-muted text-xs">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-deep/10 pt-6">
                <p className="text-xs uppercase tracking-widest text-muted/60 mb-4">{block.solutions.length} focus areas</p>
                <div className={`grid gap-3 grid-cols-2 ${block.solutions.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
                  {block.solutions.map((s, j) => (
                    <div key={j} className="border border-deep/10 rounded-xl p-4 text-sm text-deep font-medium leading-snug">
                      {s.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (block.type === 'carousel') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-6">{block.heading}</h2>
              )}
              <FeatureCarousel slides={block.slides} variant={block.variant} />
            </div>
          )
        }

        if (block.type === 'takeaway-list') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-2">{block.heading}</h2>
              )}
              <div>
                {block.items.map((item, j) => (
                  <div key={j} className="flex gap-8 py-7 border-t border-deep/10 last:border-b">
                    <p className="font-display font-semibold text-deep text-sm w-44 shrink-0 pt-0.5">{item.title}</p>
                    <p className="text-muted leading-relaxed text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        return null
      })}

      {sections.length === 0 && (
        <p className="text-muted text-center py-12">
          Case study content coming soon.
        </p>
      )}
    </div>
  )
}
