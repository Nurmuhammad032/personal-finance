import { LabelHTMLAttributes, forwardRef } from 'react'
import { StyledLabel, StyledRequiredSign } from './styles'

const Label = forwardRef<
  React.ElementRef<'label'>,
  LabelHTMLAttributes<React.ElementRef<'label'>> & { isError?: boolean; required?: boolean }
>(({ isError = false, required = true, children, ...props }, ref) => (
  <StyledLabel $isError={isError} ref={ref} {...props}>
    {children}
    {required && <StyledRequiredSign>*</StyledRequiredSign>}
  </StyledLabel>
))

Label.displayName = 'Label'

export default Label
