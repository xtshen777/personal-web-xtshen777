'use client'

import { useState } from 'react'
import { assetPath } from '@/lib/asset-path'

const phones = [
  { src: '/projects/votrnet/social-1.png', alt: 'Feed screen' },
  { src: '/projects/votrnet/social-2.png', alt: 'Trend screen' },
  { src: '/projects/votrnet/social-3.png', alt: 'Search screen' },
  { src: '/projects/votrnet/social-4.png', alt: 'Chat screen' },
  { src: '/projects/votrnet/social-5.png', alt: 'Group screen' },
  { src: '/projects/votrnet/social-6.png', alt: 'Profile screen' },
]

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="gradient-text font-semibold">{children}</span>
)

export default function VotrSocialFeature() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className="-mx-6 sm:-mx-16 lg:-mx-32 px-6 sm:px-16 lg:px-32">
        <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-1">Function 1</p>
        <h3 className="font-display font-bold text-xl sm:text-2xl gradient-text mb-4 leading-tight">
          Social Media: Communicate &amp; Follow Trends
        </h3>
        <p className="text-deep text-base leading-relaxed mb-8">
          A clear interface with functions for{' '}
          <G>liking, reposting, and replying to posts</G>.{' '}
          <G>Search for topics of interest</G> and{' '}
          <G>receive tailored suggestions</G>.{' '}
          <G>Stay updated</G> on popular political topics and group chats. Connect with others who share your interests and{' '}
          <G>join discussions</G> on political topics.
        </p>

        <div className="flex gap-6">
          {/* Feed & Trend */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-3">
              {phones.slice(0, 3).map((p, i) => (
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
            <p className="text-center text-sm text-muted font-medium">Feed &amp; Trend</p>
          </div>

          {/* Chat & Profile */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-3">
              {phones.slice(3).map((p, i) => (
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
            <p className="text-center text-sm text-muted font-medium">Chat &amp; Profile</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
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
