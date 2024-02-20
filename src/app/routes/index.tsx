// ** Import Router Items
import Home from '@/pages/home'
import Income from '@/pages/income'
import Outcome from '@/pages/outcome'
import Sidebar from '@/shared/components/sidebar'
import { BrowserRouter as Router, Routes as RouteWrapper, Route } from 'react-router-dom'
import { Main } from './styles'

const Routes = () => {
  return (
    <Router>
      <Sidebar />
      <Main>
        <RouteWrapper>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/outcome" element={<Outcome />} />
        </RouteWrapper>
      </Main>
    </Router>
  )
}
export default Routes