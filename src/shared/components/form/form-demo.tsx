import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '.'
import Input from '../input'

export const formSchema = z.object({
  name: z.string().min(2).max(20),
  message: z.string().min(2).max(500)
})

export type IForm = z.infer<typeof formSchema>

const FormDemo = () => {
  const form = useForm<IForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: ''
    }
  })

  function onSubmit(values: IForm) {
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5 pt-11">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon raqam</FormLabel>
                <FormControl>
                  <Input placeholder="+998 (--) --- -- --" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
export default FormDemo
