import { Outcome } from '@/app/requests/types/outcome'
import { formatDate } from '@/shared/utils/formatDate'
import { truncateAfterWords } from '@/shared/utils/truncate'
import { ColumnDef } from '@tanstack/react-table'

export const outcomeColumns: ColumnDef<Outcome>[] = [
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <>{formatDate(row.getValue('date'))}</>
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => <>{truncateAfterWords(row.getValue('notes') as string, 6)}</>
  }
]
