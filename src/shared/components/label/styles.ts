import { font } from '@/shared/utils/styles'
import styled, { css } from 'styled-components'

export const StyledLabel = styled.label<{ $isError: boolean }>`
  padding: 0.2rem;
  color: ${({ theme }) => theme.foreground};
  display: block;
  ${font.size(14)}
  ${({ $isError }) =>
    $isError &&
    css`
      color: ${({ theme }) => theme.destructive};
    `}
`
