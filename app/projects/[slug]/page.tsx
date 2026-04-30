import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'
import Navbar from '@/components/Navbar'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectContent from '@/components/projects/ProjectContent'
import ProjectNav from '@/components/projects/ProjectNav'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | Lucia Shen`,
    description: project.summary,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  const { prev, next } = getAdjacentProjects(params.slug)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProjectHero
          title={project.title}
          coverImage={project.coverImage}
          coverPosition={project.coverPosition}
        />
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-0">
          <span className="text-xs uppercase tracking-widest text-muted/60 mb-3 block">
            {project.tagline ?? project.category}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-deep">
            {project.title}
          </h1>
        </div>
        <ProjectOverview
          role={project.role}
          tools={project.tools}
          year={project.year}
          time={project.time}
          duration={project.duration}
        />
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-muted leading-relaxed text-lg">
            {project.summary}
          </p>
        </div>
        <ProjectContent sections={project.sections} />
        <ProjectNav prev={prev} next={next} />

        <div className="py-8 flex items-center justify-center gap-8">
          <Link
            href="/#projects"
            className="text-sm text-muted hover:text-deep transition-colors"
          >
            ← Back to all projects
          </Link>
          <span className="text-deep/20">|</span>
          <a
            href="#"
            className="text-sm text-muted hover:text-deep transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </main>
    </>
  )
}
