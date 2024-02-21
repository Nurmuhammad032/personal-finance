import { api } from '@/app/lib/axios-config'
import { OutcomeWithoutId } from '../../types/outcome'

export const createOutcome = async (data: OutcomeWithoutId) => {
  const res = await api.post(`/outcome`, data)

  return res.data
}
