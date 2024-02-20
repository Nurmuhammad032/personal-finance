import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'default' | 'outline' | 'ghost'
  children: React.ReactNode
  isLoading?: boolean
  $fullWidth?: boolean
}
