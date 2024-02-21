export type Outcome = {
  id: string
  category: string
  amount: number
  date: string
  notes: string
}

export type OutcomeWithoutId = Omit<Outcome, 'id'>
