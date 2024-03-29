import { Income } from '@/app/requests/types/income'
import { formatDate } from '@/shared/utils/formatDate'
import { truncateAfterWords } from '@/shared/utils/truncate'
import { ColumnDef } from '@tanstack/react-table'

export const incomeColumns: ColumnDef<Income>[] = [
  {
    accessorKey: 'source',
    header: 'Source'
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
