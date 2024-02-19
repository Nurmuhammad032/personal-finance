import { font } from '@/shared/utils/styles'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }
  
  body {
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.background};
    ${font.size(16)}
    ${font.regular}
  }
  
  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0 !important;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }
`
