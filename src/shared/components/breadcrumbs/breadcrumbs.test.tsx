import { render, screen } from '@testing-library/react'
import Breadcrumbs from './index'

describe('Breadcrumbs component', () => {
  it('renders correctly with multiple items', () => {
    const items = ['Home', 'Category', 'Settings', 'Income']
    render(<Breadcrumbs items={items} />)
    const breadcrumbContainer = screen.getByTestId('breadcrumbs-container')
    expect(breadcrumbContainer).toBeInTheDocument()

    items.forEach((item, index) => {
      const breadcrumbItem = screen.getByText(item)
      expect(breadcrumbItem).toBeInTheDocument()

      if (index !== 0 && index !== items.length - 1) {
        const chevronIcon = screen.getByTestId(`chevron-right-icon-${index}`)
        expect(chevronIcon).toBeInTheDocument()
      }
    })
  })
})
