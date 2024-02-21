import { useIncomeCategory } from '@/app/requests/queries/income-queries'
import { useIncomeCategoryDelete } from '@/app/requests/mutations/income-mutations'
import CategoryManagement from './category-management'

const IncomeCategories = () => {
  const { data: incomeCategories, isLoading } = useIncomeCategory()
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
