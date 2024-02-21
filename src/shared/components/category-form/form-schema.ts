import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2).max(30)
})

export type FormSchema = z.infer<typeof formSchema>
