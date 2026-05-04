import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '@/components/Projects'

describe('Projects', () => {
  it('renders project cards', () => {
    render(<Projects />)
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0)
  })

  it('renders all filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'UX/UI' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Product' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Marketing' })).toBeInTheDocument()
  })

  it('filtering by Marketing shows fewer cards than All', () => {
    render(<Projects />)
    const allCount = screen.getAllByRole('article').length
    fireEvent.click(screen.getByRole('button', { name: 'Marketing' }))
    const filteredCount = screen.getAllByRole('article').length
    expect(filteredCount).toBeLessThan(allCount)
  })

  it('clicking All after filtering restores full list', () => {
    render(<Projects />)
    const allCount = screen.getAllByRole('article').length
    fireEvent.click(screen.getByRole('button', { name: 'UX/UI' }))
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('article').length).toBe(allCount)
  })

  it('filtered cards all belong to the selected category', () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole('button', { name: 'Marketing' }))
    screen.getAllByRole('article').forEach(card => {
      const categories = card.getAttribute('data-categories') ?? ''
      expect(categories.split(',').includes('Marketing')).toBe(true)
    })
  })
})
