import Breadcrumbs from '@/shared/components/breadcrumbs'
import { StyledPaper } from '@/shared/components/paper'
import { StyledSectionHeading } from '@/shared/components/typography/section-heading'
import { StyledSubtitle } from '@/shared/components/typography/subtitle'
import { StyledTitle } from '@/shared/components/typography/title'
import { StyledFormWrapper } from './style'
import { RecordSchema, incomeRecordSchema } from './form-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/form'
import Input from '@/shared/components/input'
import { FlexBox } from '@/shared/components/flex-box'
import Textarea from '@/shared/components/textarea'
import Button from '@/shared/components/button'

const Income = () => {
  const form = useForm<RecordSchema>({
    resolver: zodResolver(incomeRecordSchema),
    defaultValues: {
      amount: '',
      date: new Date().toISOString().split('T')[0],
      notes: '',
      source: ''
    }
  })

  function onSubmit(values: RecordSchema) {
    console.log(values)
  }

  return (
    <section>
      <Breadcrumbs items={['Home', 'Income']} />
      <div style={{ textAlign: 'center' }}>
        <StyledSectionHeading>Income</StyledSectionHeading>
        <StyledSubtitle>Keep track of your income</StyledSubtitle>
      </div>
      <StyledPaper>
        <StyledFormWrapper>
          <div>
            <StyledTitle>Add your income</StyledTitle>
            <StyledSubtitle $fontSize={13}>Enter your income details below:</StyledSubtitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox $flexDir="column" $alignItems="center" $gap="1rem" $maxWidth="1000px" $margin="1rem 0">
                  <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Income source</FormLabel>
                        <FormControl>
                          <Input placeholder="Source" {...field} />
                        </FormControl>
                        <FormDescription>
                          Please enter the source of your income (e.g., Salary, Freelance Work, Dividends).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel required={false}>Date</FormLabel>
                        <FormControl>
                          <Input type="date" placeholder="Source" {...field} />
                        </FormControl>
                        <FormDescription>If left the field, today's date will be saved.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel required={false}>Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Notes..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button $fullWidth type="submit">
                    Submit
                  </Button>
                </FlexBox>
              </form>
            </Form>
          </div>
        </StyledFormWrapper>
      </StyledPaper>
    </section>
  )
}

export default Income
