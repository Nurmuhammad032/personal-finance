export type Income = {
  id: string
  source: string
  amount: number
  date: string
  notes: string
}

export type PostIncome = Omit<Income, 'id'>
