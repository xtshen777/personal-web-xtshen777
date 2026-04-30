'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg gradient-text">
          Lucia Shen
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-deep transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm px-4 py-1.5 rounded-full font-medium text-deep gradient-border hover:opacity-80 transition-opacity"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="w-6 h-0.5 bg-deep block" />
          <span className="w-6 h-0.5 bg-deep block" />
          <span className="w-6 h-0.5 bg-deep block" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-deep"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="/resume.pdf" download className="text-sm font-medium gradient-text">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
