import { api } from '@/app/lib/axios-config'
import { CategoriesWithoutId } from '../../types/category'

export const updateIncomeCategory = async (id: string, data: CategoriesWithoutId) => {
  const res = await api.put(`/categories-income/${id}`, data)

  return res.data
}
