import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteIncome } from '../api/income/delete-income'
import { QUERY_KEYS } from '../query-keys'
import { createIncome } from '../api/income/post-income'
import { PostIncome } from '../types/income'
import { updateIncome } from '../api/income/put-income'

export const useIncomeDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteIncome(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.INCOME]
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
    }
  })
}
