import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Button from './index'

describe('Button component', () => {
  it('renders button correctly with default props', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders button correctly with isLoading prop', () => {
    render(<Button isLoading={true}>Loading...</Button>)
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('disables button and shows spinner when isLoading is true', async () => {
    const onClickMock = jest.fn()
    render(
      <Button onClick={onClickMock} isLoading={true}>
        Loading...
      </Button>
    )
    const buttonElement = screen.getByText('Loading...')
    fireEvent.click(buttonElement)
    expect(onClickMock).not.toHaveBeenCalled()
    await waitFor(() => {
      const spinnerElement = screen.getByTestId('spinner')
      expect(spinnerElement).toBeInTheDocument()
      expect(buttonElement).toBeDisabled()
    })
  })

  it('renders button correctly with fullWidth prop', () => {
    render(<Button $fullWidth={true}>Full Width Button</Button>)
    const buttonElement = screen.getByText('Full Width Button')
    expect(buttonElement).toHaveStyle('width: 100%')
  })
})
