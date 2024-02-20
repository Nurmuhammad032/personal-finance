import styled from 'styled-components'
import { positionVariants } from './typography/utils'
import { Position } from './typography/types'

export const StyledHeaderWrapper = styled.div<{ $position?: Position }>`
  margin-bottom: 1rem;
  ${({ $position }) => $position && positionVariants[$position]}
`
