import { assetPath } from '@/lib/asset-path'

interface Props {
  title: string
  category: string
  coverImage: string
}

export default function ProjectHero({ title, category, coverImage }: Props) {
  return (
    <div className="relative w-full aspect-[16/7] bg-mist overflow-hidden">
      {coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={assetPath(coverImage)} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest text-white/70 mb-3">
          {category}
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white">
          {title}
        </h1>
      </div>
    </div>
  )
}
