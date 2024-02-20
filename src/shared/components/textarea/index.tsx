import { ElementRef, TextareaHTMLAttributes, forwardRef } from 'react'
import { StyledTextarea } from './styles'

const Textarea = forwardRef<ElementRef<'textarea'>, TextareaHTMLAttributes<ElementRef<'textarea'>>>(
  ({ ...props }, ref) => {
    return <StyledTextarea ref={ref} {...props} />
  }
)

export default Textarea
