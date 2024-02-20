import { api } from '@/app/lib/axios-config'
import { PostIncome } from '../../types/income'

export const createIncome = async (data: PostIncome) => {
  const res = await api.post(`/income`, data)

  return res.data
}
