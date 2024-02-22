import { render, screen } from '@testing-library/react'
import Label from './index'

describe('Label Component', () => {
  it('renders label with children', () => {
    render(<Label>Test Label</Label>)
    const labelElement = screen.getByText('Test Label')
    expect(labelElement).toBeInTheDocument()
  })

  it('renders label with required sign when required prop is true', () => {
    render(<Label required>Test Label</Label>)
    const requiredSignElement = screen.getByText('*')
    expect(requiredSignElement).toBeInTheDocument()
  })

  it('does not render required sign when required prop is false', () => {
    render(<Label required={false}>Test Label</Label>)
    const requiredSignElement = screen.queryByText('*')
    expect(requiredSignElement).toBeNull()
  })
})
