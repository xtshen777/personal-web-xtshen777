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
              <div className="w-full rounded-2xl bg-mist aspect-video gradient-bg opacity-30" />
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
                  <div className="w-full rounded-xl bg-mist aspect-video gradient-bg opacity-30" />
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
