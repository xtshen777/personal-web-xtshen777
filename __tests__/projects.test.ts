import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'

describe('projects data', () => {
  it('has exactly 9 projects', () => {
    expect(projects).toHaveLength(9)
  })

  it('every project has all required fields', () => {
    for (const p of projects) {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(['UX/UI', 'Marketing', 'Art & Design']).toContain(p.category)
      expect(p.year).toBeTruthy()
      expect(p.role).toBeTruthy()
      expect(p.tools.length).toBeGreaterThan(0)
      expect(p.duration).toBeTruthy()
      expect(p.coverImage).toBeTruthy()
      expect(p.summary).toBeTruthy()
    }
  })

  it('all slugs are unique', () => {
    const slugs = projects.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('getProjectBySlug returns the correct project', () => {
    const p = getProjectBySlug('menobook')
    expect(p?.title).toBe('MenoBook')
  })

  it('getProjectBySlug returns undefined for unknown slug', () => {
    expect(getProjectBySlug('nonexistent')).toBeUndefined()
  })

  it('getAdjacentProjects returns prev and next', () => {
    const { prev, next } = getAdjacentProjects('floraverse')
    expect(prev?.slug).toBe('menobook')
    expect(next?.slug).toBe('eyeconic')
  })

  it('getAdjacentProjects returns null prev for first project', () => {
    const { prev } = getAdjacentProjects('menobook')
    expect(prev).toBeNull()
  })

  it('getAdjacentProjects returns null next for last project', () => {
    const { next } = getAdjacentProjects('selected-works')
    expect(next).toBeNull()
  })

  it('getAdjacentProjects returns null prev and next for unknown slug', () => {
    const { prev, next } = getAdjacentProjects('nonexistent')
    expect(prev).toBeNull()
    expect(next).toBeNull()
  })
})
