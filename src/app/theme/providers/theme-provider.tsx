import { ReactNode } from 'react'
import { CustomThemeProvider } from './custom-theme-provider'
import { StyledThemeProvider } from './styled-theme-provider'

interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <CustomThemeProvider>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </CustomThemeProvider>
  )
}

export default ThemeProvider
