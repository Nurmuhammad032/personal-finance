import styled, { css } from 'styled-components'

export const StyledInput = styled.input<{ $isIcon?: boolean }>`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.input};
  padding: 10px 12px;
  background-color: transparent;
  border-radius: 9px;
  color: ${({ theme }) => theme.foreground};
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5 !important;
    `}
  ${({ $isIcon }) =>
    $isIcon &&
    css`
      padding-left: 2.2rem;
    `}
`

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const IconWrapper = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.6rem;
`
