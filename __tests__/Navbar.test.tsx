import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders site logo/name', () => {
    render(<Navbar />)
    expect(screen.getByText('Lucia Shen')).toBeInTheDocument()
  })

  it('nav links point to correct anchors', () => {
    render(<Navbar />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/#about')
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/#projects')
    expect(screen.getByText('Resume').closest('a')).toHaveAttribute('href', '/#resume')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/#contact')
  })
})
