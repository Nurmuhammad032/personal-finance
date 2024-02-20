import styled, { css } from 'styled-components'

import { color, mixin, zIndexValues } from '@/shared/utils/styles'

type Position = 'aside' | 'center'

export const ScrollOverlay = styled.div`
  z-index: ${zIndexValues.modal};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${mixin.scrollableY}
`

export const ClickableOverlay = styled.div<{ $variant: Position }>`
  min-height: 100%;
  background: rgba(9, 30, 66, 0.54);
  ${props => clickOverlayStyles[props.$variant]}
`

const clickOverlayStyles = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
  `,
  aside: ''
}

export const StyledModal = styled.div<{ $variant: Position; $width: number }>`
  display: inline-block;
  position: relative;
  max-width: ${props => props.$width}px;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  ${props => modalStyles[props.$variant]}
`

const modalStyles = {
  center: css`
    vertical-align: middle;
    border-radius: 3px;
    ${mixin.boxShadowMedium}
  `,
  aside: css`
    min-height: 100vh;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  `
}

export const CloseIcon = styled.div<{ $variant: Position }>`
  position: absolute;
  font-size: 25px;
  color: ${color.textMedium};
  transition: all 0.1s;
  ${mixin.clickable}
  ${props => closeIconStyles[props.$variant]}
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`

const closeIconStyles = {
  center: css`
    top: 10px;
    right: 12px;
    padding: 3px 5px 0px 5px;
    border-radius: 4px;
  `,
  aside: css`
    top: 10px;
    right: -30px;
    width: 50px;
    height: 50px;
    padding-top: 10px;
    border-radius: 3px;
    text-align: center;
    background: #fff;
    ${mixin.boxShadowMedium};
    &:hover {
      color: ${color.primary};
    }
  `
}
