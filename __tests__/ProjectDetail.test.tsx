import { render, screen } from '@testing-library/react'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectContent from '@/components/projects/ProjectContent'
import ProjectNav from '@/components/projects/ProjectNav'
import { projects } from '@/lib/projects'

const mockProject = projects[0] // menobook

describe('ProjectHero', () => {
  it('renders cover image', () => {
    render(<ProjectHero title={mockProject.title} coverImage={mockProject.coverImage} />)
    expect(screen.getByRole('img', { name: mockProject.title })).toBeInTheDocument()
  })

  it('renders nothing when no coverImage', () => {
    const { container } = render(<ProjectHero title={mockProject.title} coverImage="" />)
    expect(container.firstChild).toBeNull()
  })
})

describe('ProjectOverview', () => {
  it('renders role, year, and duration', () => {
    render(
      <ProjectOverview
        role={mockProject.role}
        tools={mockProject.tools}
        year={mockProject.year}
        duration={mockProject.duration}
      />
    )
    expect(screen.getByText(mockProject.role)).toBeInTheDocument()
    expect(screen.getByText(mockProject.year)).toBeInTheDocument()
    expect(screen.getByText(mockProject.duration)).toBeInTheDocument()
  })
})

describe('ProjectContent', () => {
  it('renders a text block with heading', () => {
    render(
      <ProjectContent
        sections={[{ type: 'text', heading: 'Problem', body: 'The challenge was...' }]}
      />
    )
    expect(screen.getByText('Problem')).toBeInTheDocument()
    expect(screen.getByText('The challenge was...')).toBeInTheDocument()
  })
})

describe('ProjectNav', () => {
  it('renders next project link', () => {
    render(<ProjectNav prev={null} next={projects[1]} />)
    expect(screen.getByText(projects[1].title)).toBeInTheDocument()
  })

  it('renders prev project link', () => {
    render(<ProjectNav prev={projects[0]} next={null} />)
    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
  })

  it('does not render prev when null', () => {
    render(<ProjectNav prev={null} next={projects[1]} />)
    expect(screen.queryByText('← Previous')).not.toBeInTheDocument()
  })
})
