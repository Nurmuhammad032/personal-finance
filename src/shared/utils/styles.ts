import { css } from 'styled-components'

export const color = {
  primary: '#221ECC', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textDarkest: '#172b4d',
  textDark: '#383746',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#f4f4fb',
  backgroundLightest: '#ffffff',
  backgroundLightPrimary: '#f4f4fb',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff'
}

export const sizes = {
  sideBarWidth: 230,
  containerWidth: 1200
}

export const font = {
  regular: 'font-family: "Poppins-Regular"; font-weight: normal;',
  medium: 'font-family: "Poppins-Medium"; font-weight: normal;',
  bold: 'font-family: "Poppins-Bold"; font-weight: normal;',
  semiBold: 'font-family: "Poppins-SemiBold"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`
}

export const mixin = {
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
}
