import { api } from '@/app/lib/axios-config'

export const deleteOutcomeCategory = async (id: string) => {
  const res = await api.delete(`/categories-outcome/${id}`)

  return res.data
}
