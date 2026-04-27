import Link from 'next/link'
import { Project } from '@/lib/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      role="article"
      data-category={project.category}
      className="group relative rounded-2xl overflow-hidden bg-mist aspect-[4/3]"
    >
      <div className="absolute inset-0 gradient-bg opacity-20" />

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-1">
          {project.category}
        </span>
        <h3 className="text-white font-display font-bold text-xl">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm mt-1 line-clamp-2">
          {project.summary}
        </p>
      </Link>
    </article>
  )
}
