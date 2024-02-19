// ** React Imports
import { createContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function CustomThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  // ** State
  const [theme, setTheme] = useState<Theme>((localStorage.getItem(storageKey) as Theme) || defaultTheme)

  const setThemeFn = (theme: Theme) => {
    localStorage.setItem(storageKey, theme)
    setTheme(theme)
  }

  // User's preferred color scheme
  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

      setThemeFn(systemTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: setThemeFn
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
