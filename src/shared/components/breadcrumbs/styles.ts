import styled from 'styled-components'

import { color, font } from '@/shared/utils/styles'

export const Container = styled.div`
  color: ${color.textMedium};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${font.size(15)};
  ${font.medium};
  margin-bottom: 2rem;
`

export const Active = styled.span`
  color: ${({ theme }) => theme.primary};
`
