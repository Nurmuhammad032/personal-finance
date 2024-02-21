import { api } from '@/app/lib/axios-config'
import { Balance } from '../../types/balance'
import { Income } from '../../types/income'
import { Outcome } from '../../types/outcome'

export const getBalance = async (): Promise<Balance> => {
  const incomeResponse = await api.get<Income[]>('/income')
  const income = incomeResponse.data

  const outcomeResponse = await api.get<Outcome[]>('/outcome')
  const outcome = outcomeResponse.data
  const res = await api.get<Balance>('/balance')
  const balance = res.data.money

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0)

  const totalOutcome = outcome.reduce((acc, item) => acc + item.amount, 0)

  const currentBalance = balance + totalIncome - totalOutcome

  return {
    money: currentBalance,
    currency: res.data.currency
  }
}

export const getBalanceMoney = async (): Promise<number> => {
  const res = await api.get<Balance>('/balance')

  return res.data.money
}
type Currency = Pick<Balance, 'currency'>

export const getCurrency = async (): Promise<Currency['currency']> => {
  const res = await api.get<Balance>('/balance')

  return res.data.currency
}
