import { assetPath } from '@/lib/asset-path'
import { ContentBlock } from '@/lib/projects'

interface Props {
  sections: ContentBlock[]
}

export default function ProjectContent({ sections }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      {sections.map((block, i) => {
        if (block.type === 'text') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">
                  {block.heading}
                </h2>
              )}
              <p className="text-muted leading-relaxed whitespace-pre-line">{block.body}</p>
            </div>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath(block.src)} alt={block.alt} className="w-full rounded-2xl" />
              {block.caption && (
                <figcaption className="text-center text-muted text-sm mt-3">
                  {block.caption}
                </figcaption>
              )}
            </figure>
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
