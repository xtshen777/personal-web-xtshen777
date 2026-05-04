'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/lib/section-headings'

export default function ProjectSideNav({ headings }: { headings: SectionHeading[] }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? '')
  const [visible, setVisible] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const ticking = useRef(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headings.length === 0) return

    let heroObs: IntersectionObserver | null = null
    const hero = document.querySelector('main > div:first-child')
    if (hero) {
      heroObs = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      )
      heroObs.observe(hero)
    }

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const els = headings
          .map(h => document.getElementById(h.id))
          .filter(Boolean) as HTMLElement[]

        let current = els[0]?.id ?? ''
        for (const el of els) {
          if (el.getBoundingClientRect().top <= 140) current = el.id
        }
        setActive(current)
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      heroObs?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  useEffect(() => {
    if (!popoverOpen) return
    const handler = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopoverOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [popoverOpen])

  if (headings.length === 0) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Large screen: fixed sidebar (≥1540px) */}
      <nav
        className={`fixed top-28 z-30 flex-col
          hidden [@media(min-width:1540px)]:flex
          transition-all duration-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        style={{ right: 'max(8px, calc((100vw - 72rem) / 2 - 12rem))' }}
      >
        <p className="text-[10px] font-semibold text-muted/40 uppercase tracking-[0.15em] mb-3 w-44">
          On this page
        </p>
        <ul className="space-y-0.5 w-44">
          {headings.map(h => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={e => {
                  e.preventDefault()
                  scrollTo(h.id)
                }}
                className={`group flex items-start gap-2.5 py-1 text-xs leading-snug transition-all duration-150 ${
                  active === h.id ? 'text-deep font-semibold' : 'text-muted hover:text-deep'
                }`}
              >
                <span
                  className={`mt-[5px] shrink-0 w-0.5 h-3 rounded-full transition-all duration-150 ${
                    active === h.id
                      ? 'bg-gradient-to-b from-violet-400 to-pink-400'
                      : 'bg-muted/30 group-hover:bg-muted/60'
                  }`}
                />
                <span className={`max-w-[136px] ${active === h.id ? 'gradient-text' : ''}`}>
                  {h.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Medium screen: floating button + popover (768px–1539px) */}
      <div
        ref={popoverRef}
        className={`fixed bottom-8 right-6 z-40 hidden md:block [@media(min-width:1540px)]:hidden
          transition-all duration-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        {popoverOpen && (
          <div className="absolute bottom-12 right-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 mb-2">
            <p className="text-[10px] font-semibold text-muted/40 uppercase tracking-[0.15em] mb-3">
              On this page
            </p>
            <ul className="space-y-0.5">
              {headings.map(h => (
                <li key={h.id}>
                  <button
                    onClick={() => { scrollTo(h.id); setPopoverOpen(false) }}
                    className={`w-full flex items-start gap-2.5 py-1 text-xs leading-snug transition-all duration-150 text-left ${
                      active === h.id ? 'text-deep font-semibold' : 'text-muted hover:text-deep'
                    }`}
                  >
                    <span
                      className={`mt-[5px] shrink-0 w-0.5 h-3 rounded-full transition-all duration-150 ${
                        active === h.id
                          ? 'bg-gradient-to-b from-violet-400 to-pink-400'
                          : 'bg-muted/30'
                      }`}
                    />
                    <span className={active === h.id ? 'gradient-text' : ''}>
                      {h.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setPopoverOpen(o => !o)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 text-sm font-medium gradient-text hover:shadow-xl transition-shadow"
        >
          <span className="text-base leading-none">≡</span>
          Contents
        </button>
      </div>
    </>
  )
}
