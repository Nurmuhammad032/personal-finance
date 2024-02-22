import { render, screen, fireEvent } from '@testing-library/react'
import Input from './index'

describe('Input Component', () => {
  it('renders input without icon', () => {
    render(<Input data-testid="input" />)
    const inputElement = screen.getByTestId('input')
    expect(inputElement).toBeInTheDocument()
  })

  it('renders input with icon', () => {
    render(<Input icon="search" data-testid="input" />)
    const inputElement = screen.getByTestId('input')
    const iconElement = screen.getByTestId('icon-wrapper')
    expect(inputElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })

  it('should call onChange callback when input value changes', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} data-testid="input" />)
    const inputElement = screen.getByTestId<HTMLInputElement>('input')

    fireEvent.change(inputElement, { target: { value: 'test' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(inputElement.value).toBe('test')
  })

  it('should render input with specified type', () => {
    render(<Input type="password" data-testid="input" />)
    const inputElement = screen.getByTestId('input')

    expect(inputElement.getAttribute('type')).toBe('password')
  })
})
