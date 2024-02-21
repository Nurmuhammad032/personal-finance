import { useIncomeCategoryCreate, useIncomeCategoryUpdate } from '@/app/requests/mutations/income-mutations'
import { useIncomeCategorySingle } from '@/app/requests/queries/income-queries'
import CategoryForm from './index'
import { FormSchema } from './form-schema'
import { CategoryProps } from './types'

const IncomeCategoryForm: React.FC<CategoryProps> = ({ mode, close, id }) => {
  const { mutateAsync: createIncomeCategory, isPending: creatingIncomeCategory } = useIncomeCategoryCreate()
  const { mutateAsync: updateIncomeCategory, isPending: updatingIncomeCategory } = useIncomeCategoryUpdate()
  const { data: incomeCategory } = useIncomeCategorySingle(id)

  const handleSubmit = async (values: FormSchema) => {
    if (mode === 'create') {
      await createIncomeCategory(values)
    } else {
      await updateIncomeCategory({ id: id!, data: values })
    }
  }

  return (
    <CategoryForm
      mode={mode}
      close={close}
      id={id}
      onSubmit={handleSubmit}
      isLoading={creatingIncomeCategory || updatingIncomeCategory}
      categoryData={incomeCategory}
      category="income"
    />
  )
}

export default IncomeCategoryForm
