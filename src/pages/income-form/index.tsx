// ** React Imports
import { useEffect, useMemo } from 'react'

// ** Router Imports
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// ** Custom Component Imports
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { StyledPaper } from '@/shared/components/paper'
import { StyledSectionHeading } from '@/shared/components/typography/section-heading'
import { StyledSubtitle } from '@/shared/components/typography/subtitle'
import { StyledTitle } from '@/shared/components/typography/title'
import Input from '@/shared/components/input'
import { FlexBox } from '@/shared/components/flex-box'
import Textarea from '@/shared/components/textarea'
import Button from '@/shared/components/button'

// ** Styled Component Imports
import { StyledFormWrapper } from './styles'

// ** Form Items Imports
import { RecordSchema, incomeRecordSchema } from './form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/form'

// ** Query & Mutation Imports
import { useCreateIncome, useUpdateIncome } from '@/app/requests/mutations/income-mutations'
import { useIncomeSingle } from '@/app/requests/queries/income-queries'

const initialForm = {
  amount: 0,
  date: new Date().toISOString().split('T')[0],
  notes: '',
  source: ''
}

const IncomeForm = () => {
  // Navigation
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname)

  const currentPathname = useMemo(() => {
    return getLastWordAfterSlashes(pathname)
  }, [pathname])

  const isViewPage = (): boolean => {
    return currentPathname === 'view'
  }

  // ** Hook
  const { id } = useParams()

  // ** Form hook
  const form = useForm<RecordSchema>({
    resolver: zodResolver(incomeRecordSchema),
    defaultValues: initialForm
  })

  const { mutateAsync: createIncome, isPending } = useCreateIncome()
  const { mutateAsync: updateIncome, isPending: isUpdating } = useUpdateIncome()

  const { data } = useIncomeSingle(id)

  useEffect(() => {
    if (data && id) {
      form.reset(data)
    }
  }, [data])

  async function onSubmit(incomeData: RecordSchema) {
    if (data && id) {
      await updateIncome({ id, data: incomeData })
    } else {
      await createIncome(incomeData)
    }
    form.reset(initialForm)
    navigate(-1)
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
                          <Input disabled={isViewPage()} placeholder="Source" {...field} />
                        </FormControl>
                        {!isViewPage() && (
                          <FormDescription>
                            Please enter the source of your income (e.g., Salary, Freelance Work, Dividends).
                          </FormDescription>
                        )}
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
                          <Input disabled={isViewPage()} min={0} type="number" placeholder="Amount" {...field} />
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
                          <Input disabled={isViewPage()} type="date" placeholder="Source" {...field} />
                        </FormControl>
                        {!isViewPage() && (
                          <FormDescription>If left the field, today's date will be saved.</FormDescription>
                        )}
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
                          <Textarea rows={4} disabled={isViewPage()} placeholder="Notes..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {isViewPage() ? (
                    <Button onClick={() => navigate('/income')}>Back</Button>
                  ) : (
                    <Button $fullWidth type="submit" isLoading={isPending || isUpdating}>
                      Submit
                    </Button>
                  )}
                </FlexBox>
              </form>
            </Form>
          </div>
        </StyledFormWrapper>
      </StyledPaper>
    </section>
  )
}

const getLastWordAfterSlashes = (str: string): string => {
  const parts = str.split('/')

  return parts[parts.length - 1]
}

export default IncomeForm
