import { api } from '@/app/lib/axios-config'

export const deleteIncome = async (id: string) => {
  const res = await api.delete(`/income/${id}`)

  return res.data
}
