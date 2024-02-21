import { api } from '@/app/lib/axios-config'
import { CategoriesWithoutId } from '../../types/category'

export const createOutcomeCategory = async (data: CategoriesWithoutId) => {
  const res = await api.post('/categories-outcome', data)

  return res.data
}
