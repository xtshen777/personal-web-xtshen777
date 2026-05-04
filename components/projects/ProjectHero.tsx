import { assetPath } from '@/lib/asset-path'

interface Props {
  title: string
  coverImage: string
  coverPosition?: string
  coverFit?: 'cover' | 'contain'
}

export default function ProjectHero({ title, coverImage, coverPosition = 'top', coverFit = 'cover' }: Props) {
  if (!coverImage) return null

  if (coverFit === 'contain') {
    return (
      <div className="w-full aspect-[16/7] overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath(coverImage)} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-90" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(coverImage)}
          alt={title}
          className="relative w-full h-full object-contain"
          style={{
            objectPosition: coverPosition,
            maskImage: 'linear-gradient(to right, transparent 0%, black 38%, black 62%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 38%, black 62%, transparent 100%)',
          }}
        />
      </div>
    )
  }

  return (
    <div className="w-full aspect-[16/7] bg-mist overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath(coverImage)}
        alt={title}
        className="w-full h-full object-cover"
        style={{ objectPosition: coverPosition }}
      />
    </div>
  )
}
