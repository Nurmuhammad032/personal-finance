import { font } from '@/shared/utils/styles'
import styled from 'styled-components'
import { Position } from './types'
import { positionVariants } from './utils'

export const StyledTitle = styled.h1<{ $position?: Position }>`
  ${font.size(18)}
  ${font.medium}
  ${({ $position }) => $position && positionVariants[$position]}
`
