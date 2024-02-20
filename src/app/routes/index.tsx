// ** Import Router Items
import { Routes as RouteWrapper, Route } from 'react-router-dom'

// ** Page Imports
import Home from '@/pages/home'
import Income from '@/pages/income'
import Outcome from '@/pages/outcome'
import IncomeForm from '@/pages/income-form'
import OutcomeForm from '@/pages/outcome-form'

// ** Styled Component Import
import { Main } from './styles'

const Routes = () => {
  return (
    <Main>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/income/add" element={<IncomeForm />} />
        <Route path="/income/:id" element={<IncomeForm />} />
        <Route path="/income/:id/view" element={<IncomeForm />} />
        <Route path="/outcome" element={<Outcome />} />
        <Route path="/outcome/add" element={<OutcomeForm />} />
        <Route path="/outcome/edit" element={<OutcomeForm />} />
      </RouteWrapper>
    </Main>
  )
}

export default Routes
