import { device } from '@/app/theme/media'
import { color, font, mixin, sizes, zIndexValues } from '@/shared/utils/styles'
import styled, { css } from 'styled-components'

export const StyledSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${sizes.sideBarWidth}px;
  padding: 0 16px 24px;
  z-index: ${zIndexValues.sidebar};
  background-color: ${({ theme }) => theme.cardBackground};
  overflow-x: visible !important;
  ${mixin.customScrollbar()}
  height: 100vh;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.border};
  transition: left 0.3s ease;
  @media ${device.lg} {
    ${({ $isOpen }) =>
      !$isOpen &&
      css`
        left: -${sizes.sideBarWidth}px;
      `}
  }
`

export const ProjectInfo = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`

export const LogoText = styled.h1`
  ${font.size(15)}
`

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 10px 12px;
  border-radius: 3px;
  ${mixin.clickable}
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
  svg {
    margin-right: 15px;
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.accent};
    i {
      color: ${({ theme }) => theme.primary};
    }
  }
`

export const LinkText = styled.p`
  padding-top: 2px;
  ${font.size(14.7)};
`

export const ProjectDescription = styled.p`
  ${font.size(10)}
  color: ${color.textMedium};
`

export const CloseIconWrapper = styled.div`
  position: absolute;
  right: -1.5rem;
  background-color: ${({ theme }) => theme.cardBackground};
  cursor: pointer;
  z-index: 50000000000000;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.border};
  ${mixin.center}
  border-radius: 50%;
  display: none;

  @media ${device.lg} {
    display: flex;
  }
`
