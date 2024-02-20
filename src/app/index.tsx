// ** Import Global Styles
import GlobalStyle from './globalStyle'
import NormalizeStyle from './normalizeStyle'
import './fontStyle.css'
import 'react-loading-skeleton/dist/skeleton.css'

// React Router Import
import { BrowserRouter as Router } from 'react-router-dom'

// ** Imports Routes Custom Component
import Routes from './routes'

// ** Theme Imports
import ThemeProvider from './theme/providers/theme-provider'
import SkeletonThemeWrapper from './skeleton-theme'
import { QueryProvider } from './lib/query-provider'
import Sidebar from '@/shared/components/sidebar/index'

function App() {
  return (
    <ThemeProvider>
      <SkeletonThemeWrapper>
        <QueryProvider>
          <GlobalStyle />
          <NormalizeStyle />
          <Router>
            <Sidebar />
            <Routes />
          </Router>
        </QueryProvider>
      </SkeletonThemeWrapper>
    </ThemeProvider>
  )
}

export default App
