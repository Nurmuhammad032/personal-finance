import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../query-keys'
import { getBalance } from '../api/balance/get-balance'

export const useBalance = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BALANCE],
    queryFn: getBalance
  })
}
