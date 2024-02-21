import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteIncome } from '../api/income/delete-income'
import { QUERY_KEYS } from '../query-keys'
import { createIncome } from '../api/income/post-income'
import { PostIncome } from '../types/income'
import { updateIncome } from '../api/income/put-income'
import { deleteIncomeCategory } from '../api/categories/delete-income-categories'
import { createIncomeCategory } from '../api/categories/post-income-categories'
import { CategoriesWithoutId } from '../types/category'
import { updateIncomeCategory } from '../api/categories/put-income-categories'

// ======== Income Mutations ======== //
export const useIncomeDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteIncome(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

export const useCreateIncome = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: PostIncome) => createIncome(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

export const useUpdateIncome = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: PostIncome }) => updateIncome(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

// ======== Income's Category Mutations ======== //
export const useIncomeCategoryDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteIncomeCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME_CATEGORY]
      })
    }
  })
}

export const useIncomeCategoryCreate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CategoriesWithoutId) => createIncomeCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME_CATEGORY]
      })
    }
  })
}

export const useIncomeCategoryUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CategoriesWithoutId }) => updateIncomeCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME_CATEGORY]
      })
    }
  })
}
