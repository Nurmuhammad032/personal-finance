import { font } from '@/shared/utils/styles'
import styled from 'styled-components'
import { Position } from './types'
import { positionVariants } from './utils'

export const StyledSectionHeading = styled.h1<{ $position?: Position }>`
  ${font.size(24)}
  ${font.semiBold}
   ${({ $position }) => $position && positionVariants[$position]}
`
