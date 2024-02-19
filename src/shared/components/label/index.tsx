import { LabelHTMLAttributes, forwardRef } from 'react'
import { StyledLabel } from './styles'

const Label = forwardRef<
  React.ElementRef<'label'>,
  LabelHTMLAttributes<React.ElementRef<'label'>> & { isError?: boolean }
>(({ isError = false, ...props }, ref) => <StyledLabel $isError={isError} ref={ref} {...props} />)

Label.displayName = 'Label'

export default Label
