// ** Hook Imports
import { useToggle } from '@/shared/hooks/useToggle'
import { useOnClickOutside } from 'usehooks-ts'

// ** React Imports
import React, { createContext, useContext, Dispatch, SetStateAction, useRef, ElementRef } from 'react'

// ** Styled Component Imports
import { StyledDropdownContainer, StyledDropdownMenu, StyledDropdownMenuItem } from './styles'

interface DropdownContextType {
  isOpen: boolean
  toggle: () => void
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const initialDropdownContext: DropdownContextType = {
  isOpen: false,
  toggle: () => {},
  setIsOpen: () => {}
}

const DropdownContext = createContext<DropdownContextType>(initialDropdownContext)

interface Props {
  children: React.ReactNode
}

const useDropdown = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error('Toggle compound components must be rendered within the Toggle component')
  }

  return context
}

const Dropdown = ({ children }: Props) => {
  const [isOpen, toggle, setIsOpen] = useToggle()

  const contextValue = {
    isOpen,
    toggle,
    setIsOpen
  }

  const dropdownRef = useRef<ElementRef<'div'>>(null)

  const handleClickOutside = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  useOnClickOutside(dropdownRef, handleClickOutside)

  return (
    <DropdownContext.Provider value={contextValue}>
      <StyledDropdownContainer ref={dropdownRef}>{children}</StyledDropdownContainer>
    </DropdownContext.Provider>
  )
}

const DropdownTrigger = ({ children }: Props) => {
  const { toggle } = useDropdown()

  return <div onClick={toggle}>{children}</div>
}

const DropdownContent = ({ children }: Props) => {
  const { isOpen } = useContext(DropdownContext)

  return <StyledDropdownMenu $isOpen={isOpen}>{children}</StyledDropdownMenu>
}

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const { setIsOpen } = useContext(DropdownContext)

    return (
      <div onClick={() => setIsOpen(false)}>
        <StyledDropdownMenuItem ref={ref} {...props}>
          {children}
        </StyledDropdownMenuItem>
      </div>
    )
  }
)

DropdownMenuItem.displayName = 'DropdownMenuItem'

export { Dropdown, DropdownTrigger, DropdownContent, DropdownMenuItem }
