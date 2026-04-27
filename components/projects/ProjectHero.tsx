interface Props {
  title: string
  category: string
  coverImage: string
}

export default function ProjectHero({ title, category }: Props) {
  return (
    <div className="relative w-full aspect-[16/7] bg-mist overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-20" />

      <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest text-deep/60 mb-3">
          {category}
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-deep">
          {title}
        </h1>
      </div>
    </div>
  )
}
