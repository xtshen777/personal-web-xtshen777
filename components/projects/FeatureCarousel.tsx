'use client'

import { useRef, useState } from 'react'
import IPhoneMockup from './IPhoneMockup'
import { assetPath } from '@/lib/asset-path'

interface Slide {
  label?: string
  title?: string
  description?: string
  src: string
  alt: string
}

export default function FeatureCarousel({ slides, variant = 'iphone' }: { slides: Slide[]; variant?: 'iphone' | 'screen' | 'overview' | 'photo' }) {
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [locked, setLocked] = useState(false)

  // Append 2 clones at end — desktop shows 2 cards at once,
  // so position slides.length must visually match position 0
  const extended = [...slides, slides[0], slides[1] ?? slides[0]]

  const scrollToIndex = (index: number, animated: boolean = true) => {
    const el = ref.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const cardWidth = card ? card.offsetWidth + 16 : 280
    if (animated) {
      el.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    } else {
      // instant, no animation
      el.style.scrollBehavior = 'auto'
      el.scrollLeft = index * cardWidth
      // restore after one frame
      requestAnimationFrame(() => { el.style.scrollBehavior = '' })
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    if (locked) return

    if (dir === 'right') {
      if (current < slides.length - 1) {
        // normal forward
        scrollToIndex(current + 1)
        setCurrent(current + 1)
      } else {
        // at last real slide: scroll forward to clone, then snap back
        setLocked(true)
        scrollToIndex(slides.length) // clone of first
        setTimeout(() => {
          scrollToIndex(0, false)  // instant reset to real first
          setCurrent(0)
          setLocked(false)
        }, 420)
      }
    } else {
      if (current > 0) {
        scrollToIndex(current - 1)
        setCurrent(current - 1)
      } else {
        // at first: jump to last
        scrollToIndex(slides.length - 1)
        setCurrent(slides.length - 1)
      }
    }
  }

  return (
    <div className="relative px-8">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {extended.map((s, i) => (
          <div
            key={i}
            className={`shrink-0 snap-start ${variant === 'photo' ? 'w-[85%] md:w-[calc(50%-8px)]' : variant === 'screen' ? 'w-[92%] md:w-[88%]' : variant === 'overview' ? 'w-[80%] md:w-[calc(33.33%-11px)]' : 'w-[75%] md:w-[calc(50%-8px)]'}`}
          >
            {variant === 'photo' ? (
              <div className="rounded-2xl overflow-hidden aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(s.src)}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : variant === 'overview' ? (
              <div className="bg-mist rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="px-6 pt-6 pb-4">
                  {s.label && (
                    <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-1">{s.label}</p>
                  )}
                  <h4 className="font-display font-bold text-deep text-lg">{s.title}</h4>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(s.src)}
                  alt={s.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="px-6 py-5 flex-1">
                  <p className="text-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ) : variant === 'screen' ? (
              <div className="bg-mist rounded-2xl p-4">
                <img
                  src={assetPath(s.src)}
                  alt={s.alt}
                  className="w-full h-auto block rounded-xl"
                />
                <div className="p-5">
                  <h4 className="font-display font-semibold text-deep text-sm mb-2">{s.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{s.description}</p>
                </div>
              </div>
            ) : (
              <div className="bg-mist rounded-2xl p-6 flex flex-col items-center">
                <div className="w-full mb-5">
                  <h4 className="font-display font-semibold text-deep text-sm mb-2">{s.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{s.description}</p>
                </div>
                <IPhoneMockup src={s.src} alt={s.alt} />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-deep text-lg hover:shadow-lg transition-shadow"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-deep text-lg hover:shadow-lg transition-shadow"
      >
        ›
      </button>
    </div>
  )
}
