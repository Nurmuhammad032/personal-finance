// ** React Imports
import { forwardRef } from 'react'

// ** Styled Component Imports
import { IconWrapper, InputWrapper, StyledInput } from './styles'

// ** Icon Imports
import Icon from '../icon'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, icon, ...props }, ref) => {
  if (icon) {
    return (
      <InputWrapper>
        <IconWrapper>
          <Icon icon={icon} />
        </IconWrapper>
        <StyledInput $isIcon type={type} ref={ref} {...props} />
      </InputWrapper>
    )
  }

  return (
    <StyledInput
      style={{
        justifyContent: 'center'
      }}
      type={type}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
