interface Props {
  role: string
  tools: string[]
  year: string
  duration: string
  time?: string
}

export default function ProjectOverview({ role, tools, year, duration, time }: Props) {
  return (
    <div className="border-y border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">Role</p>
          <p className="text-deep font-medium">{role}</p>
        </div>
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">{time ? 'Time' : 'Year'}</p>
          <p className="text-deep font-medium">{time ?? year}</p>
        </div>
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">Duration</p>
          <p className="text-deep font-medium">{duration}</p>
        </div>
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">Tools</p>
          <p className="text-deep font-medium">{tools.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
