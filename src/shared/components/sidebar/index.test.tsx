import { render, screen } from '@testing-library/react'
import ProjectSidebar from './index'
import { navLinks } from '@/shared/constants/nav-links'
import { BrowserRouter } from 'react-router-dom'

describe('ProjectSidebar', () => {
  test('renders logo, logo text, project description, and navigation links', () => {
    render(<ProjectSidebar />, { wrapper: BrowserRouter })

    const logoElement = screen.getByAltText(/logo/i)
    expect(logoElement).toBeInTheDocument()

    const logoTextElement = screen.getByText('Finance Peak')
    expect(logoTextElement).toBeInTheDocument()

    const projectDescriptionElement = screen.getByText('Strategic Money Moves')
    expect(projectDescriptionElement).toBeInTheDocument()

    navLinks.forEach(({ label, path }) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', path)
    })
  })
})
