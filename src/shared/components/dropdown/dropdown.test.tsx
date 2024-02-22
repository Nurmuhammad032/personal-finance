import { render, fireEvent, screen } from '@testing-library/react'
import { Dropdown, DropdownTrigger, DropdownContent, DropdownMenuItem } from './index'

describe('Dropdown component', () => {
  it('toggles dropdown content when trigger is clicked', () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownContent>Content</DropdownContent>
      </Dropdown>
    )

    const trigger = screen.getByText('Toggle')
    const content = screen.getByText('Content')

    expect(content).not.toBeVisible()

    fireEvent.click(trigger)

    expect(content).toBeVisible()

    fireEvent.click(trigger)

    expect(content).not.toBeVisible()
  })

  it('closes dropdown when clicking outside', () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownContent>Content</DropdownContent>
      </Dropdown>
    )

    const trigger = screen.getByText('Toggle')
    const content = screen.getByText('Content')

    fireEvent.click(trigger)

    expect(content).toBeVisible()

    fireEvent.mouseDown(document.body)

    expect(content).not.toBeVisible()
  })

  it('closes dropdown when clicking on a menu item', () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownContent>
      </Dropdown>
    )

    const trigger = screen.getByText('Toggle')
    fireEvent.click(trigger)

    const item1 = screen.getByText('Item 1')
    fireEvent.click(item1)

    expect(item1).not.toBeVisible()
  })
})
