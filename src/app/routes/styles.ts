import { font, sizes } from '@/shared/utils/styles'
import styled from 'styled-components'

const paddingLeft = sizes.sideBarWidth + 40

export const Main = styled.main`
  padding: 25px 32px 50px ${paddingLeft}px;
`

export const BalanceWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > p {
    ${font.size(20)}
    ${font.semiBold}
    color: ${({ theme }) => theme.mutedForeground};
  }
`
