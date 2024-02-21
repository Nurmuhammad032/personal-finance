import { forwardRef } from 'react'
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHead,
  StyledTableCell,
  StyledTableCaption
} from './styles'

/* Separate React components are created to encapsulate styling logic
           flexibility, clearer code structure. */

const Table = forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ ...props }, ref) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      overflow: 'auto'
    }}
  >
    <StyledTable ref={ref} {...props} />
  </div>
))

Table.displayName = 'Table'

const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ ...props }, ref) => <StyledTableHeader ref={ref} {...props} />
)

TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ ...props }, ref) => <StyledTableBody ref={ref} {...props} />
)
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ ...props }, ref) => <StyledTableFooter ref={ref} {...props} />
)
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ ...props }, ref) => (
  <StyledTableRow ref={ref} {...props} />
))

TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ ...props }, ref) => <StyledTableHead ref={ref} {...props} />
)

TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ ...props }, ref) => <StyledTableCell ref={ref} {...props} />
)

TableCell.displayName = 'TableCell'

const TableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ ...props }, ref) => <StyledTableCaption ref={ref} {...props} />
)

TableCaption.displayName = 'TableCaption'

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
