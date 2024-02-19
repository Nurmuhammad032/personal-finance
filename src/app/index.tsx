// ** Import Global Styles
import GlobalStyle from './globalStyle'
import NormalizeStyle from './normalizeStyle'
import './fontStyle.css'

// ** Imports Routes Custom Component
import Routes from './routes'

// ** Theme Imports
import ThemeProvider from './theme/providers/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NormalizeStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
