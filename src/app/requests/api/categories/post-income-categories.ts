import { api } from '@/app/lib/axios-config'
import { CategoriesWithoutId } from '../../types/category'

export const createIncomeCategory = async (data: CategoriesWithoutId) => {
  const res = await api.post('/categories-income', data)

  return res.data
}
