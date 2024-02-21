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
// import { incomeColumns } from './income-columns'

// ** Icon Import
import Icon from '@/shared/components/icon'

// ** React Table Import
import { ColumnDef } from '@tanstack/react-table'

// ** Type Imports
import { Outcome as OutcomeType } from '@/app/requests/types/outcome'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Query Import
import { useOutcome } from '@/app/requests/queries/outcome-queries'

// ** Mutation Imports
import { useOutcomeDelete } from '@/app/requests/mutations/outcome-mutations'
import { outcomeColumns } from './outcome-columns'

const Income = () => {
  // ** Navigation
  const naviate = useNavigate()

  // ** Query
  const { data: outcome, isLoading, error } = useOutcome()
  const { mutateAsync: deleteOutcome } = useOutcomeDelete()

  const incomeColumnsWithAction: ColumnDef<OutcomeType>[] = [
    ...outcomeColumns,
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row: { original: outcome } }) => {
        return (
          <Dropdown>
            <DropdownTrigger>
              <Icon icon="tabler:dots" cursor={'pointer'} />
            </DropdownTrigger>
            <DropdownContent>
              <DropdownMenuItem onClick={() => naviate(`${outcome.id}/view`)}>
                <Icon icon="tabler:eye" />
                <span>View</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteOutcome(outcome.id)}>
                <Icon icon="tabler:trash" />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => naviate(outcome.id)}>
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
        <StyledSectionHeading>Outcome</StyledSectionHeading>
        <StyledSubtitle>Keep track of your outcome</StyledSubtitle>
      </div>
      <StyledPaper>
        <StyledHeaderWrapper>
          <FlexBox $alignItems="center" $justifyContent="space-between">
            <div>
              <StyledTitle>Outcome Records</StyledTitle>
              <StyledSubtitle>View and Manage Your Outcome</StyledSubtitle>
            </div>
            <Button onClick={() => naviate('add')}>
              <Icon icon="tabler:plus" />
              Add outcome
            </Button>
          </FlexBox>
        </StyledHeaderWrapper>
        <DataTable columns={incomeColumnsWithAction} data={outcome!} error={error} isLoading={isLoading} />
      </StyledPaper>
    </section>
  )
}

export default Income
