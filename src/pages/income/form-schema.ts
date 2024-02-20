import { z } from 'zod'

export const incomeRecordSchema = z.object({
  source: z.string().min(2).max(50),
  amount: z.string().min(1),
  date: z.string(),
  notes: z.string().max(500).optional()
})

export type RecordSchema = z.infer<typeof incomeRecordSchema>
