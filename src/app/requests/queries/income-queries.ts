import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../query-keys'
import { getIncome, getIncomeSingle } from '../api/income/get-income'

export const useIncome = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.INCOME],
    queryFn: getIncome
  })
}

export const useIncomeSingle = (id?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.INCOME_DETAIL],
    queryFn: () => getIncomeSingle(id!),
    enabled: !!id
  })
}
