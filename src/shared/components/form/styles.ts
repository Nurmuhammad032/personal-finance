import { font } from '@/shared/utils/styles'
import styled from 'styled-components'

export const StyledFormMessage = styled.p`
  ${font.size(14)}
  color: ${({ theme }) => theme.destructive};
  padding: 0.3rem 0;
`
