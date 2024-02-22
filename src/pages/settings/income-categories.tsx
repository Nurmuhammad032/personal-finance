// ** Query & Mutation Imports
import { useIncomeCategory } from '@/app/requests/queries/income-queries'
import { useIncomeCategoryDelete } from '@/app/requests/mutations/income-mutations'

// ** Custom Component Imports
import CategoryManagement from './category-management'

const IncomeCategories = () => {
  // ** Query
  const { data: incomeCategories, isLoading } = useIncomeCategory()

  // ** Mutation
  const { mutateAsync: deleteIncomeCategory } = useIncomeCategoryDelete()

  const handleDeleteIncomeCategory = async (id: string) => {
    await deleteIncomeCategory(id)
  }

  return (
    <CategoryManagement
      title="Income Categories"
      data={incomeCategories!}
      isLoading={isLoading}
      onDeleteCategory={handleDeleteIncomeCategory}
      category="income"
    />
  )
}

export default IncomeCategories
