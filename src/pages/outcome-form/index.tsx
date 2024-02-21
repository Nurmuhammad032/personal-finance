// ** React Imports
import { useEffect, useMemo, useState } from 'react'

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
import { ButtonWrapper, StyledFormWrapper } from '../income-form/styles'

// ** Form Items Imports
// import { RecordSchema, incomeRecordSchema } from './form-schema'
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
import { useCreateOutcome, useUpdateOutcome } from '@/app/requests/mutations/outcome-mutations'

import SingleSelect from '@/shared/components/select/single-select'
import Modal from '@/shared/components/modal'
import { StyledLinkButton } from '@/shared/components/link-button'
import { FormSchema, formSchema } from './form-schema'
import OutcomeCategoryForm from '@/shared/components/category-form/outcome-category-form'
import { useOutcomeCategory, useOutcomeSingle } from '@/app/requests/queries/outcome-queries'
import { useBalance } from '@/app/requests/queries/balance-query'

const initialForm: FormSchema = {
  category: '',
  amount: 0,
  date: new Date().toISOString().split('T')[0],
  notes: ''
}

const IncomeForm = () => {
  // Navigation
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { data: outcomeCategories } = useOutcomeCategory()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const currentPathname = useMemo(() => {
    return getLastWordAfterSlashes(pathname)
  }, [pathname])

  const isViewPage = (): boolean => {
    return currentPathname === 'view'
  }

  // ** Hook
  const { id } = useParams()

  // ** Form hook
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialForm
  })

  const { mutateAsync: createIncome, isPending } = useCreateOutcome()
  const { mutateAsync: updateIncome, isPending: isUpdating } = useUpdateOutcome()
  const { data: balance } = useBalance()

  const { data } = useOutcomeSingle(id)

  useEffect(() => {
    if (data && id) {
      form.reset(data)
    }
  }, [data])

  const handleReset = () => {
    form.reset(initialForm)
    navigate(-1)
  }

  async function onSubmit(incomeData: FormSchema) {
    if (balance) {
      if (balance.money < incomeData.amount) {
        form.setError('amount', { message: "You don't have enough money" })

        return
      }

      if (data && id) {
        await updateIncome({ id, data: incomeData })
      } else {
        await createIncome(incomeData)
      }
      handleReset()
    }
  }

  const options = useMemo(() => {
    if (outcomeCategories?.length) {
      return outcomeCategories?.map(({ name }) => ({
        value: name.toLowerCase(),
        label: name
      }))
    } else {
      return []
    }
  }, [outcomeCategories])

  return (
    <section>
      <Breadcrumbs items={['Home', 'Outcome']} />
      <div style={{ textAlign: 'center' }}>
        <StyledSectionHeading>Outcome</StyledSectionHeading>
        <StyledSubtitle>Keep track of your outcome</StyledSubtitle>
      </div>
      <StyledPaper>
        <StyledFormWrapper>
          <div>
            <StyledTitle>Add your outcome</StyledTitle>
            <StyledSubtitle $fontSize={13}>Enter your outcome details below:</StyledSubtitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox $flexDir="column" $alignItems="center" $gap="1rem" $maxWidth="1000px" $margin="1rem 0">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field: { onChange, value } }) => (
                      <FormItem>
                        <FormLabel>Outcome</FormLabel>
                        <FormControl>
                          <SingleSelect
                            isDisabled={isViewPage()}
                            value={options.find(option => option.value === value)}
                            options={options}
                            onChange={e => onChange(e!.value)}
                            placeholder="Outcome"
                          />
                        </FormControl>
                        {!isViewPage() && (
                          <FormDescription>
                            Please enter the outcome category (e.g., Rent, Utilities, Groceries). <br />
                            <StyledLinkButton onClick={handleOpenModal}>Add a new outcome category</StyledLinkButton>
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
                    <ButtonWrapper>
                      <Button $fullWidth $variant="outline" onClick={() => handleReset()}>
                        Cancel
                      </Button>
                      <Button $fullWidth type="submit" isLoading={isPending || isUpdating}>
                        Submit
                      </Button>
                    </ButtonWrapper>
                  )}
                </FlexBox>
              </form>
            </Form>
          </div>
        </StyledFormWrapper>
      </StyledPaper>
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        renderContent={() => {
          return <OutcomeCategoryForm mode="create" close={handleCloseModal} />
        }}
      />
    </section>
  )
}

const getLastWordAfterSlashes = (str: string): string => {
  const parts = str.split('/')

  return parts[parts.length - 1]
}

export default IncomeForm
