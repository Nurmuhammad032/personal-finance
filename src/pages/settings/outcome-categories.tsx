// ** Query & Mutation Imports
import { useOutcomeCategory } from '@/app/requests/queries/outcome-queries'
import { useOutcomeCategoryDelete } from '@/app/requests/mutations/outcome-mutations'

// ** Custom Component Imports
import CategoryManagement from './category-management'

const OutcomeCategories = () => {
  // ** Query
  const { data: outcomeCategories, isLoading } = useOutcomeCategory()

  // ** Mutation
  const { mutateAsync: deleteOutcomeCategory } = useOutcomeCategoryDelete()

  const handleDeleteOutcomeCategory = async (id: string) => {
    await deleteOutcomeCategory(id)
  }

  return (
    <CategoryManagement
      title="Outcome Categories"
      data={outcomeCategories!}
      isLoading={isLoading}
      onDeleteCategory={handleDeleteOutcomeCategory}
      category="outcome"
    />
  )
}

export default OutcomeCategories
