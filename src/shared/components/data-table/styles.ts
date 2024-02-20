import { font } from '@/shared/utils/styles'
import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  border: none !important;
  border-collapse: collapse;
  text-indent: 0;
  ${font.size(14)}
`

export const StyledTableHeader = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.muted};
`

export const StyledTableBody = styled.tbody`
  tr:last-child {
    border-width: 0px;
  }
`

export const StyledTableFooter = styled.tfoot`
  border-top-width: 1px;
  ${font.medium}
  &:last-child>tr {
    border-bottom-width: 0px;
  }
`

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:nth-child(even):hover {
    background-color: ${({ theme }) => theme.accent};
  }
`

export const StyledTableHead = styled.th`
  height: 3rem;
  padding: 0 1rem;
  text-align: left;
  vertical-align: middle;
  ${font.medium}
  color: ${({ theme }) => theme.mutedForeground};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  &:first-child {
    border-radius: 10px 0 0 0 !important;
  }
  &:last-child {
    border-radius: 0 10px 0 0 !important;
  }
`

export const StyledTableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
  /* border-bottom: 1px solid ${({ theme }) => theme.border}; */
`

export const StyledTableCaption = styled.caption`
  margin-top: 1rem;
  ${font.size(14)}
  color: ${({ theme }) => theme.mutedForeground};
`
