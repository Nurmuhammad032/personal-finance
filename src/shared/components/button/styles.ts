import styled, { css } from 'styled-components'
import { ButtonProps } from './types'
import { font } from '@/shared/utils/styles'

const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryForeground};
    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primaryForeground};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.6rem 2rem;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  ${font.size(16)}
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  ${({ $variant = 'default' }) => buttonVariants[$variant]};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5 !important;
      cursor: not-allowed;
    `}
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`
