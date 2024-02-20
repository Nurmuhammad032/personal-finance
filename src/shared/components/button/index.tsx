import { forwardRef } from 'react'
import Spinner from '../spinner'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ $variant = 'default', children, isLoading = false, $fullWidth = false, ...props }, ref) => {
    return (
      <StyledButton ref={ref} $variant={$variant} $fullWidth={$fullWidth} {...props}>
        {isLoading && <Spinner />}
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export default Button
