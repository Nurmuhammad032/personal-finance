import Spinner from '../spinner'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button = ({ variant = 'default', children, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      <Spinner />
      {children}
    </StyledButton>
  )
}

export default Button
