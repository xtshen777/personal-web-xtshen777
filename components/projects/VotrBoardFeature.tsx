'use client'

import { useState } from 'react'
import { assetPath } from '@/lib/asset-path'

const phones = [
  { src: '/projects/votrnet/board-1.png', alt: 'Board overview' },
  { src: '/projects/votrnet/board-2.png', alt: 'Board intro' },
  { src: '/projects/votrnet/board-3.png', alt: 'Text tool' },
  { src: '/projects/votrnet/board-4.png', alt: 'Brush tool' },
  { src: '/projects/votrnet/board-5.png', alt: 'Sticker tool' },
  { src: '/projects/votrnet/board-6.png', alt: 'Filter tool' },
]

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="gradient-text font-semibold">{children}</span>
)

export default function VotrBoardFeature() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className="-mx-6 sm:-mx-16 lg:-mx-32 px-6 sm:px-16 lg:px-32">
        <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-1">Function 2</p>
        <h3 className="font-display font-bold text-xl sm:text-2xl gradient-text mb-4 leading-tight">
          Collaborative Board: Create &amp; Share
        </h3>
        <p className="text-deep text-base leading-relaxed mb-8">
          A <G>creative space</G> to share ideas and visuals on political topics.{' '}
          <G>Add text, draw with brushes, use hand-drawn style stickers, apply templates, and upload photos with customizable filters</G>.{' '}
          Collaborate online, share boards, or transform them into real-world projects and assemblies.
        </p>

        <div className="flex gap-3">
          {phones.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={assetPath(p.src)}
              alt={p.alt}
              onClick={() => setLightbox(assetPath(p.src))}
              className="flex-1 min-w-0 object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Enlarged screen"
            className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
