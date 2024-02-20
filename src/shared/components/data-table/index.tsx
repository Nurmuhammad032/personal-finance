// ** Tanstack Table Imports
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

// ** React Imports
import { useState } from 'react'

// ** Skeleton Imports
import Skeleton from 'react-loading-skeleton'

// ** Custom Component Imports
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table-components'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[] | undefined
  isLoading: boolean
  error: Error | null
}

export function DataTable<TData, TValue>({ columns, data, isLoading, error }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: data ?? [],
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      columnFilters
    }
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <TableHead key={header.id} className="bg-background text-muted-foreground">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {isLoading ? (
          new Array(8).fill(undefined).map((_, i) => (
            <TableRow key={i} className="text-base font-semibold">
              {columns.map((_, i) => (
                <TableCell key={i}>
                  <Skeleton
                    height={5}
                    borderRadius={12}
                    style={{
                      width: Math.floor(Math.random() * (150 - 80 + 1)) + 80 + 'px'
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : error ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center text-destructive">
              {error.message}
            </TableCell>
          </TableRow>
        ) : table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map(row => (
            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="text-base font-semibold">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
