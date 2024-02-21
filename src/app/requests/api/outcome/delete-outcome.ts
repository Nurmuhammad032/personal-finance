import { api } from '@/app/lib/axios-config'

export const deleteOutcome = async (id: string) => {
  const res = await api.delete(`/outcome/${id}`)

  return res.data
}
