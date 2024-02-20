import { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from './theme/hooks/useTheme'
import { useMemo } from 'react'
import { darkTheme, lightTheme } from './theme/theme'

interface Props {
  children: React.ReactNode
}

const SkeletonThemeWrapper = ({ children }: Props) => {
  const { theme } = useTheme()

  const currentColor = useMemo(() => {
    return theme === 'light' ? lightTheme.accent : darkTheme.accent
  }, [theme])

  return (
    <SkeletonTheme baseColor={currentColor} highlightColor="#eee">
      {children}
    </SkeletonTheme>
  )
}
export default SkeletonThemeWrapper
