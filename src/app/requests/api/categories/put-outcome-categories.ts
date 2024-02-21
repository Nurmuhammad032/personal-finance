import { api } from '@/app/lib/axios-config'
import { CategoriesWithoutId } from '../../types/category'

export const updateOutcomeCategory = async (id: string, data: CategoriesWithoutId) => {
  const res = await api.put(`/categories-outcome/${id}`, data)

  return res.data
}
