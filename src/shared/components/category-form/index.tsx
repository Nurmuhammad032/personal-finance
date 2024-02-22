import { zodResolver } from '@hookform/resolvers/zod'
import { StyledFromWrapper } from './styles'
import { FormSchema, formSchema } from './form-schema'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { FlexBox } from '../flex-box'
import Input from '../input'
import Button from '../button'
import { StyledTitle } from '../typography/title'
import { useEffect } from 'react'

interface CategoryFormProps {
  mode: 'create' | 'edit'
  close: () => void
  id?: string
  onSubmit: (values: FormSchema) => void
  isLoading: boolean
  categoryData?: FormSchema
  category: 'income' | 'outcome'
}

const CategoryForm: React.FC<CategoryFormProps> = props => {
  // ** Props
  const { mode, close, id, onSubmit, category, isLoading, categoryData } = props

  // ** Form
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '' }
  })

  useEffect(() => {
    if (mode === 'edit' && id && categoryData) {
      form.reset(categoryData)
    }
  }, [categoryData])

  const handleSubmit = (values: FormSchema) => {
    onSubmit(values)
    form.reset()
    close()
  }

  return (
    <StyledFromWrapper>
      <StyledTitle>{mode === 'create' ? 'Create' : 'Edit'}</StyledTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FlexBox $flexDir="column" $alignItems="center" $gap="1rem" $maxWidth="1000px" $margin="1rem 0 0">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your {category === 'income' ? 'income' : 'outcome'} category</FormLabel>
                  <FormControl>
                    <Input placeholder={`${category === 'income' ? 'Income' : 'Outcome'} category`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button $fullWidth type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </FlexBox>
        </form>
      </Form>
    </StyledFromWrapper>
  )
}

export default CategoryForm
