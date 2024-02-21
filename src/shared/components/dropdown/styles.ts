import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    display: none;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    display: block;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    display: block;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
    display: none;
  }
`

const StyledDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledDropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 7px;
  z-index: 10;
  background-color: ${({ theme }) => theme.cardBackground};
  width: 13rem;
  padding: 0.3rem;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.2s ease forwards;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`

const StyledDropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 7px;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  color: ${({ theme }) => theme.foreground};

  /* Styling for the text content wrapper */
  span {
    padding-top: 2px;
  }

  /* Styling for the icon content */
  svg {
    width: 20px;
    height: 20px;
  }
`

export { StyledDropdownContainer, StyledDropdownMenu, StyledDropdownMenuItem }
