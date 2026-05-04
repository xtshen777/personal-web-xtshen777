'use client'

import { useState, useEffect, useCallback } from 'react'
import { assetPath } from '@/lib/asset-path'

interface UIGridItem {
  src: string
  alt: string
  label: string
}

export default function UIGrid({ items }: { items: UIGridItem[] }) {
  const [selected, setSelected] = useState<UIGridItem | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const close = useCallback(() => {
    setSelected(null)
    setSelectedIndex(-1)
  }, [])

  const open = (item: UIGridItem, index: number) => {
    setSelected(item)
    setSelectedIndex(index)
  }

  const prev = useCallback(() => {
    const i = (selectedIndex - 1 + items.length) % items.length
    setSelected(items[i])
    setSelectedIndex(i)
  }, [selectedIndex, items])

  const next = useCallback(() => {
    const i = (selectedIndex + 1) % items.length
    setSelected(items[i])
    setSelectedIndex(i)
  }, [selectedIndex, items])

  useEffect(() => {
    if (!selected) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close, prev, next])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => open(item, i)}
            className="group relative overflow-hidden rounded-xl cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(item.src)}
              alt={item.alt}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-3 py-3 translate-y-0">
              <span className="text-white text-sm font-semibold drop-shadow">{item.label}</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.82)' }}
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(selected.src)}
              alt={selected.alt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
              <span className="text-white font-semibold text-base">{selected.label}</span>
              <span className="text-white/50 text-sm ml-3">{selectedIndex + 1} / {items.length}</span>
            </div>

            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white text-xl flex items-center justify-center transition-colors"
            >
              ×
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white text-lg flex items-center justify-center transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white text-lg flex items-center justify-center transition-colors"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
