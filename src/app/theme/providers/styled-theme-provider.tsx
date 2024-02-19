// ** ThemeProvider Import
import { ThemeProvider } from 'styled-components'

// ** React Imports
import { ReactNode, useMemo } from 'react'
import { useTheme } from '../hooks/useTheme'
import { darkTheme, lightTheme } from '../theme'

interface Props {
  children: ReactNode
}

export const StyledThemeProvider = ({ children }: Props) => {
  // ** Hook
  const { theme } = useTheme()

  const currentTheme = useMemo(() => {
    return theme === 'dark' ? darkTheme : lightTheme
  }, [theme])

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
