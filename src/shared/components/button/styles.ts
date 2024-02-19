import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryForeground};
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.foreground};
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  `
}

// Styled Button component
export const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  ${({ variant = 'default' }) => buttonVariants[variant]};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5 !important;
      cursor: not-allowed;
    `};
`
