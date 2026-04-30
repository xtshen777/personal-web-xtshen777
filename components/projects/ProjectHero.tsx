import { assetPath } from '@/lib/asset-path'

interface Props {
  title: string
  coverImage: string
  coverPosition?: string
}

export default function ProjectHero({ title, coverImage, coverPosition = 'top' }: Props) {
  if (!coverImage) return null
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
