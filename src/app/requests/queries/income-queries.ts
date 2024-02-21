import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../query-keys'
import { getIncome, getIncomeSingle } from '../api/income/get-income'
import { getIncomeCategories, getIncomeCategorySingle } from '../api/categories/get-income-categories'

// ======== Income Queries ======== //
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

// ======== Income's Category Queries ======== //

export const useIncomeCategory = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.INCOME_CATEGORY],
    queryFn: getIncomeCategories
  })
}

export const useIncomeCategorySingle = (id?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.INCOME_CATEGORY_DETAIL],
    queryFn: () => getIncomeCategorySingle(id!),
    enabled: !!id
  })
}
