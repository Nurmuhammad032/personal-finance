import { api } from '@/app/lib/axios-config'
import { Balance } from '../../types/balance'
import { getCurrency } from './get-balance'

export const putBalanceMoney = async (money: number): Promise<Balance> => {
  const currentCurrency = await getCurrency()

  const res = await api.put<Balance>('/balance', {
    money: money,
    currency: currentCurrency
  })

  return res.data
}
