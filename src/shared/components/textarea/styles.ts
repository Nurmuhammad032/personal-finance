import styled from 'styled-components'
import { css } from 'styled-components'

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 10rem;
  min-height: 3rem;
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
`
