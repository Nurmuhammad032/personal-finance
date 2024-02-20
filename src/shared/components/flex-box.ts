import styled from 'styled-components'

interface Props {
  $display?: string
  $justifyContent?: string
  $alignItems?: string
  $width?: string | number
  $height?: string | number
  $flexWrap?: string
  $flexDir?: string
  $maxWidth?: string
  $margin?: string
  $gap?: string
  $flexGrow?: string
}

export const FlexBox = styled.div<Props>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'start'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'start'};
  flex-wrap: ${({ $flexWrap }) => $flexWrap ?? 'nowrap'};
  flex-direction: ${({ $flexDir }) => $flexDir ?? 'row'};
  width: ${({ $width }) => $width ?? 'auto'};
  height: ${({ $height }) => $height ?? 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth ?? 'none'};
  gap: ${({ $gap }) => $gap ?? '0'};
  flex-grow: ${({ $flexGrow }) => $flexGrow ?? '0'};
  margin: ${({ $margin }) => $margin ?? '0'};
`
