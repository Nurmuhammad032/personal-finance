import { api } from '@/app/lib/axios-config'
import { Categories } from '../../types/category'

export const getOutcomeCategories = async (): Promise<Categories[]> => {
  const res = await api.get<Categories[]>('/categories-outcome')

  return res.data
}

export const getOutcomeCategorySingle = async (id: string): Promise<Categories> => {
  const res = await api.get<Categories>(`/categories-outcome/${id}`)

  return res.data
}
