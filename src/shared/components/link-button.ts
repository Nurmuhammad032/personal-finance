import styled from 'styled-components'

export const StyledLinkButton = styled.span`
  display: block;
  margin-top: 2px;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  cursor: pointer;
`
