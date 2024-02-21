import { z } from 'zod'

export const formSchema = z.object({
  category: z.string().min(1).max(50),
  amount: z.coerce.number().positive().min(1),
  date: z.string(),
  notes: z.string().max(500)
})

export type FormSchema = z.infer<typeof formSchema>
