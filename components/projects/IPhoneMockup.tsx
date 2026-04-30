'use client'

import { assetPath } from '@/lib/asset-path'

interface Props {
  src?: string
  alt?: string
}

export default function IPhoneMockup({ src, alt }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      {/* Power button */}
      <div className="absolute -right-[3px] top-[26%] w-[3px] h-10 bg-[#3a3a3c] rounded-r-sm" />
      {/* Silent switch */}
      <div className="absolute -left-[3px] top-[13%] w-[3px] h-4 bg-[#3a3a3c] rounded-l-sm" />
      {/* Volume up */}
      <div className="absolute -left-[3px] top-[21%] w-[3px] h-7 bg-[#3a3a3c] rounded-l-sm" />
      {/* Volume down */}
      <div className="absolute -left-[3px] top-[31%] w-[3px] h-7 bg-[#3a3a3c] rounded-l-sm" />

      {/* Phone body */}
      <div className="bg-[#1c1c1e] rounded-[1.6rem] p-[3px] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        {/* Screen area */}
        <div
          className="relative bg-black rounded-[1.4rem] overflow-hidden"
          style={{ aspectRatio: '9 / 19.5' }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-10 w-[30%] h-[14px] bg-black rounded-full" />

          {/* Placeholder always visible as base layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] flex items-end justify-center pb-8">
            <span className="text-white/25 text-[10px] tracking-widest uppercase">Screenshot</span>
          </div>
          {/* Screenshot overlays placeholder once loaded */}
          {src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={assetPath(src)}
              alt={alt ?? ''}
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
