// ** Import Global Styles
import GlobalStyle from './globalStyle'
import NormalizeStyle from './normalizeStyle'
import './fontStyle.css'

// ** Imports Routes Custom Component
import Routes from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <NormalizeStyle />
      <Routes />
    </>
  )
}

export default App
