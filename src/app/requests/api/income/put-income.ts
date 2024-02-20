import { api } from '@/app/lib/axios-config'
import { PostIncome } from '../../types/income'

export const updateIncome = async (id: string, data: PostIncome) => {
  const res = await api.put(`/income/${id}`, data)

  return res.data
}
