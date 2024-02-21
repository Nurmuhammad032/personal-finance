import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../query-keys'
import { getOutcomeCategories, getOutcomeCategorySingle } from '../api/categories/get-outcome-categories'
import { getOutcome, getOutcomeSingle } from '../api/outcome/get-outcome'

// ======== Outcome Queries ======== //
export const useOutcome = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.OUTCOME],
    queryFn: getOutcome
  })
}

export const useOutcomeSingle = (id?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.OUTCOME_DETAIL],
    queryFn: () => getOutcomeSingle(id!),
    enabled: !!id
  })
}

// ======== Outcome's Category Queries ======== //

export const useOutcomeCategory = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.OUTCOME_CATEGORY],
    queryFn: getOutcomeCategories
  })
}

export const useOutcomeCategorySingle = (id?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.OUTCOME_CATEGORY_DETAIL],
    queryFn: () => getOutcomeCategorySingle(id!),
    enabled: !!id
  })
}
