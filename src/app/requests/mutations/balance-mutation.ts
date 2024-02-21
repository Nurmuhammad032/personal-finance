import { useMutation, useQueryClient } from '@tanstack/react-query'
import { putBalanceMoney } from '../api/balance/put-balance'
import { QUERY_KEYS } from '../query-keys'

export const useUpdateMoney = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (moneyAmount: number) => putBalanceMoney(moneyAmount),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BALANCE]
      })
    }
  })
}
