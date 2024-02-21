// ** Import Router Items
import { Routes as RouteWrapper, Route } from 'react-router-dom'

// ** Page Imports
import Home from '@/pages/home'
import Income from '@/pages/income'
import Outcome from '@/pages/outcome'
import Settings from '@/pages/settings'
import IncomeForm from '@/pages/income-form'
import OutcomeForm from '@/pages/outcome-form'

// ** Styled Component Import
import { BalanceWrapper, Main } from './styles'
import { useBalance } from '../requests/queries/balance-query'

const Routes = () => {
  const { data: balance } = useBalance()

  return (
    <Main>
      <BalanceWrapper>
        <p>
          {balance?.money} {balance?.currency}
        </p>
      </BalanceWrapper>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/income/add" element={<IncomeForm />} />
        <Route path="/income/:id" element={<IncomeForm />} />
        <Route path="/income/:id/view" element={<IncomeForm />} />
        <Route path="/outcome" element={<Outcome />} />
        <Route path="/outcome/add" element={<OutcomeForm />} />
        <Route path="/outcome/:id/view" element={<OutcomeForm />} />
        <Route path="/outcome/:id" element={<OutcomeForm />} />
        <Route path="/settings" element={<Settings />} />
      </RouteWrapper>
    </Main>
  )
}

export default Routes
