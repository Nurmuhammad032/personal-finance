import CategoryManagement from './category-management'
import { useOutcomeCategory } from '@/app/requests/queries/outcome-queries'
import { useOutcomeCategoryDelete } from '@/app/requests/mutations/outcome-mutations'

const OutcomeCategories = () => {
  const { data: outcomeCategories, isLoading } = useOutcomeCategory()
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
