import { z } from 'zod'

export const incomeRecordSchema = z.object({
  source: z.string().min(2).max(50),
  amount: z.coerce.number().positive().min(1),
  date: z.string(),
  notes: z.string().max(500)
})

export type RecordSchema = z.infer<typeof incomeRecordSchema>
