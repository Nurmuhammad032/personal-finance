import { api } from '@/app/lib/axios-config'

export const deleteIncomeCategory = async (id: string) => {
  const res = await api.delete(`/categories-income/${id}`)

  return res.data
}
