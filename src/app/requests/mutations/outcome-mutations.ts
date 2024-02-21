import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteOutcomeCategory } from '../api/categories/delete-outcome-categories'
import { QUERY_KEYS } from '../query-keys'
import { updateOutcomeCategory } from '../api/categories/put-outcome-categories'
import { CategoriesWithoutId } from '../types/category'
import { createOutcomeCategory } from '../api/categories/post-outcome-categories'
import { deleteOutcome } from '../api/outcome/delete-outcome'
import { OutcomeWithoutId } from '../types/outcome'
import { createOutcome } from '../api/outcome/post-outcome'
import { updateOutcome } from '../api/outcome/put-outcome'

// ======== Outcome Mutations ======== //
export const useOutcomeDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteOutcome(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

export const useCreateOutcome = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: OutcomeWithoutId) => createOutcome(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

export const useUpdateOutcome = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: OutcomeWithoutId }) => updateOutcome(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME]
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}

// ======== Outcome's Category Mutations ======== //
export const useOutcomeCategoryDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteOutcomeCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME_CATEGORY]
      })
    }
  })
}

export const useOutcomeCategoryCreate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CategoriesWithoutId) => createOutcomeCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME_CATEGORY]
      })
    }
  })
}

export const useOutcomeCategoryUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CategoriesWithoutId }) => updateOutcomeCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.OUTCOME_CATEGORY]
      })
    }
  })
}
