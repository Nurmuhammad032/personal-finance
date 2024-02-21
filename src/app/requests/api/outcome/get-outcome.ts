import { api } from '@/app/lib/axios-config'
import { Outcome } from '../../types/outcome'

export const getOutcome = async (): Promise<Outcome[]> => {
  const res = await api.get<Outcome[]>('/outcome')

  return res.data
}

export const getOutcomeSingle = async (id: string): Promise<Outcome> => {
  const res = await api.get<Outcome>(`/outcome/${id}`)

  return res.data
}
