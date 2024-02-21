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
import { ButtonWrapper, StyledFormWrapper } from './styles'

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
import { useIncomeCategory, useIncomeSingle } from '@/app/requests/queries/income-queries'
import SingleSelect from '@/shared/components/select/single-select'
import Modal from '@/shared/components/modal'
import IncomeCategoryForm from '@/shared/components/category-form/income-category-form'
import { StyledLinkButton } from '@/shared/components/link-button'

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

  const { data: incomeCategories } = useIncomeCategory()

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

  const handleReset = () => {
    form.reset(initialForm)
    navigate(-1)
  }

  async function onSubmit(incomeData: RecordSchema) {
    if (data && id) {
      await updateIncome({ id, data: incomeData })
    } else {
      await createIncome(incomeData)
    }
    handleReset()
  }

  const options = useMemo(() => {
    if (incomeCategories?.length) {
      return incomeCategories?.map(({ name }) => ({
        value: name.toLowerCase(),
        label: name
      }))
    } else {
      return []
    }
  }, [incomeCategories])

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
                    render={({ field: { onChange, value } }) => (
                      <FormItem>
                        <FormLabel>Income source</FormLabel>
                        <FormControl>
                          <SingleSelect
                            isDisabled={isViewPage()}
                            value={options.find(option => option.value === value)}
                            options={options}
                            onChange={e => onChange(e!.value)}
                            placeholder="Source"
                          />
                        </FormControl>
                        {!isViewPage() && (
                          <FormDescription>
                            Please enter the source of your income (e.g., Salary, Freelance Work, Dividends). <br />
                            <StyledLinkButton onClick={handleOpenModal}>Add a new source category</StyledLinkButton>
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
          return <IncomeCategoryForm mode="create" close={handleCloseModal} />
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
