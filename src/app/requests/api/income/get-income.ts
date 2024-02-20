import { api } from '@/app/lib/axios-config'
import { Income } from '../../types/income'

export const getIncome = async (): Promise<Income[]> => {
  const res = await api.get<Income[]>('/income')

  return res.data
}

export const getIncomeSingle = async (id: string): Promise<Income> => {
  const res = await api.get<Income>(`/income/${id}`)

  return res.data
}
