import { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from './theme/hooks/useTheme'
import { useMemo } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { darkTheme, lightTheme } from './theme/theme'

interface Props {
  children: React.ReactNode
}

const SkeletonThemeWrapper = ({ children }: Props) => {
  const { theme } = useTheme()

  const currentColor = useMemo(() => {
    return theme === 'dark' ? '#f1f5f9' : '#eee'
  }, [theme])

  return <SkeletonTheme baseColor={currentColor}>{children}</SkeletonTheme>
}
export default SkeletonThemeWrapper
