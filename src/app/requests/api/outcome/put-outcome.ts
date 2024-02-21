import { api } from '@/app/lib/axios-config'
import { OutcomeWithoutId } from '../../types/outcome'

export const updateOutcome = async (id: string, data: OutcomeWithoutId) => {
  const res = await api.put(`/outcome/${id}`, data)

  return res.data
}
