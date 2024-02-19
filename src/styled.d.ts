import 'styled-components'
import { lightTheme } from './app/theme/theme'

type CustomTheme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
