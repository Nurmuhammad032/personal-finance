import { api } from '@/app/lib/axios-config'
import { Categories } from '../../types/category'

export const getIncomeCategories = async (): Promise<Categories[]> => {
  const res = await api.get<Categories[]>('/categories-income')

  return res.data
}

export const getIncomeCategorySingle = async (id: string): Promise<Categories> => {
  const res = await api.get<Categories>(`/categories-income/${id}`)

  return res.data
}
