import Link from 'next/link'
import { Project } from '@/lib/projects'

interface Props {
  prev: Project | null
  next: Project | null
}

export default function ProjectNav({ prev, next }: Props) {
  return (
    <div className="border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="group flex flex-col">
            <span className="text-xs text-muted uppercase tracking-widest mb-1 group-hover:text-deep transition-colors">
              ← Previous
            </span>
            <span className="font-display font-bold text-lg text-deep group-hover:gradient-text transition-all">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/projects/${next.slug}`} className="group flex flex-col items-end">
            <span className="text-xs text-muted uppercase tracking-widest mb-1 group-hover:text-deep transition-colors">
              Next →
            </span>
            <span className="font-display font-bold text-lg text-deep group-hover:gradient-text transition-all">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
