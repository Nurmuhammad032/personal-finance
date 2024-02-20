import { font } from '@/shared/utils/styles'
import styled, { css } from 'styled-components'
import { Position } from './types'
import { positionVariants } from './utils'

export const StyledSubtitle = styled.p<{ $position?: Position; $fontSize?: number }>`
  ${font.size(14)};
  ${({ $position }) => $position && positionVariants[$position]};
  color: ${({ theme }) => theme.mutedForeground};
  margin-top: 5px;

  ${({ $fontSize }) =>
    $fontSize &&
    css`
      ${font.size($fontSize)};
    `}
`
