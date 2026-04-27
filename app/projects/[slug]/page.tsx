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
          category={project.category}
          coverImage={project.coverImage}
        />
        <ProjectOverview
          role={project.role}
          tools={project.tools}
          year={project.year}
          duration={project.duration}
        />
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-muted leading-relaxed text-lg max-w-3xl">
            {project.summary}
          </p>
        </div>
        <ProjectContent sections={project.sections} />
        <ProjectNav prev={prev} next={next} />

        <div className="py-8 text-center">
          <Link
            href="/#projects"
            className="text-sm text-muted hover:text-deep transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </main>
    </>
  )
}
