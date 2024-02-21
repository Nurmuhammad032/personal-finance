import CategoryForm from './index'
import { FormSchema } from './form-schema'
import { CategoryProps } from './types'
import { useOutcomeCategoryCreate, useOutcomeCategoryUpdate } from '@/app/requests/mutations/outcome-mutations'
import { useOutcomeCategorySingle } from '@/app/requests/queries/outcome-queries'

const OutcomeCategoryForm: React.FC<CategoryProps> = ({ mode, close, id }) => {
  const { mutateAsync: createOutcomeCategory, isPending: creatingOutcomeCategory } = useOutcomeCategoryCreate()
  const { mutateAsync: updateOutcomeCategory, isPending: updatingOutcomeCategory } = useOutcomeCategoryUpdate()
  const { data: outcomeCategory } = useOutcomeCategorySingle(id)

  const handleSubmit = async (values: FormSchema) => {
    if (mode === 'create') {
      await createOutcomeCategory(values)
    } else {
      await updateOutcomeCategory({ id: id!, data: values })
    }
  }

  return (
    <CategoryForm
      mode={mode}
      close={close}
      id={id}
      onSubmit={handleSubmit}
      isLoading={creatingOutcomeCategory || updatingOutcomeCategory}
      categoryData={outcomeCategory}
      category="outcome"
    />
  )
}

export default OutcomeCategoryForm
