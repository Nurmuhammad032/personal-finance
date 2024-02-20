// ** Query Import
import { useIncome } from '@/app/requests/queries/income-queries'

// Custom Component Imports
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { DataTable } from '@/shared/components/data-table'
import { StyledPaper } from '@/shared/components/paper'
import { StyledSectionHeading } from '@/shared/components/typography/section-heading'
import { StyledSubtitle } from '@/shared/components/typography/subtitle'
import { StyledTitle } from '@/shared/components/typography/title'
import { StyledHeaderWrapper } from '@/shared/components/header-wrapper'
import { FlexBox } from '@/shared/components/flex-box'
import Button from '@/shared/components/button'
import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from '@/shared/components/dropdown'

// ** Column Import
import { incomeColumns } from './income-columns'

// ** Icon Import
import Icon from '@/shared/components/icon'

// ** React Table Import
import { ColumnDef } from '@tanstack/react-table'

// ** Type Imports
import { Income as IncomeType } from '@/app/requests/types/income'

// ** Mutation Imports
import { useIncomeDelete } from '@/app/requests/mutations/income-mutations'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

const Income = () => {
  // ** Navigation
  const naviate = useNavigate()

  // ** Query
  const { data: income, isLoading, error } = useIncome()
  const { mutateAsync: deleteIncome } = useIncomeDelete()

  const incomeColumnsWithAction: ColumnDef<IncomeType>[] = [
    ...incomeColumns,
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row: { original: income } }) => {
        return (
          <Dropdown>
            <DropdownTrigger>
              <Icon icon="tabler:dots" cursor={'pointer'} />
            </DropdownTrigger>
            <DropdownContent>
              <DropdownMenuItem onClick={() => naviate(`${income.id}/view`)}>
                <Icon icon="tabler:eye" />
                <span>View</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteIncome(income.id)}>
                <Icon icon="tabler:trash" />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => naviate(income.id)}>
                <Icon icon="tabler:pencil" />
                <span>Edit</span>
              </DropdownMenuItem>
            </DropdownContent>
          </Dropdown>
        )
      }
    }
  ]

  return (
    <section>
      <Breadcrumbs items={['Home', 'Income']} />
      <div style={{ textAlign: 'center' }}>
        <StyledSectionHeading>Income</StyledSectionHeading>
        <StyledSubtitle>Keep track of your income</StyledSubtitle>
      </div>
      <StyledPaper>
        <StyledHeaderWrapper>
          <FlexBox $alignItems="center" $justifyContent="space-between">
            <div>
              <StyledTitle>Income Records</StyledTitle>
              <StyledSubtitle>View and Manage Your Income</StyledSubtitle>
            </div>
            <Button onClick={() => naviate('add')}>
              <Icon icon="tabler:plus" />
              Add income
            </Button>
          </FlexBox>
        </StyledHeaderWrapper>
        <DataTable columns={incomeColumnsWithAction} data={income} error={error} isLoading={isLoading} />
      </StyledPaper>
    </section>
  )
}

export default Income
