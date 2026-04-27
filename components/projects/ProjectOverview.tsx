interface Props {
  role: string
  tools: string[]
  year: string
  duration: string
}

const META = [
  { label: 'Role', key: 'role' as const },
  { label: 'Year', key: 'year' as const },
  { label: 'Duration', key: 'duration' as const },
]

export default function ProjectOverview({ role, tools, year, duration }: Props) {
  const values = { role, year, duration }

  return (
    <div className="border-y border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {META.map(({ label, key }) => (
          <div key={key}>
            <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
            <p className="text-deep font-medium">{values[key]}</p>
          </div>
        ))}
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">Tools</p>
          <p className="text-deep font-medium">{tools.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
