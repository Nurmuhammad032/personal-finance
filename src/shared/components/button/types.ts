/* eslint-disable lines-around-comment */
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * the variant of the button to use (default = primary)
   * @default 'default'
   */
  $variant?: 'default' | 'outline' | 'ghost'
  children: React.ReactNode
  isLoading?: boolean
  $fullWidth?: boolean
}
