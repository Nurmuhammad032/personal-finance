// ** Import Global Styles
import GlobalStyle from './globalStyle'
import NormalizeStyle from './normalizeStyle'
import './fontStyle.css'
import 'react-loading-skeleton/dist/skeleton.css'

// ** Imports Routes Custom Component
import Routes from './routes'

// ** Theme Imports
import ThemeProvider from './theme/providers/theme-provider'
import SkeletonThemeWrapper from './skeleton-theme'

function App() {
  return (
    <ThemeProvider>
      <SkeletonThemeWrapper>
        <GlobalStyle />
        <NormalizeStyle />
        <Routes />
      </SkeletonThemeWrapper>
    </ThemeProvider>
  )
}

export default App
