import Link from 'next/link'
import { Project } from '@/lib/projects'
import { assetPath } from '@/lib/asset-path'

interface Props {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: Props) {
  if (featured) {
    return (
      <article
        role="article"
        data-category={project.category}
        data-categories={[project.category, ...(project.extraCategories ?? [])].join(',')}
        className="group relative rounded-2xl overflow-hidden bg-mist aspect-[16/8]"
      >
        <div className="absolute inset-0 gradient-bg opacity-60" />
        {project.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={assetPath(project.coverImage)} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.85) 0%, rgba(26,26,46,0.3) 40%, transparent 65%)' }}
        >
          <span className="text-white/60 text-xs uppercase tracking-widest mb-2">
            {project.tagline ?? project.category} · {project.year}
          </span>
          <h3 className="text-white font-display font-bold text-3xl md:text-4xl mb-2">
            {project.title}
          </h3>
          <p className="text-white/75 text-sm md:text-base max-w-2xl line-clamp-2">
            {project.summary}
          </p>
        </Link>
      </article>
    )
  }

  return (
    <article
      role="article"
      data-category={project.category}
      data-categories={[project.category, ...(project.extraCategories ?? [])].join(',')}
      className="group relative rounded-2xl overflow-hidden bg-mist aspect-[4/3]"
    >
      <div className="absolute inset-0 gradient-bg opacity-60" />
      {project.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={assetPath(project.coverImage)} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
      )}

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-1">
          {project.tagline ?? project.category}
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
