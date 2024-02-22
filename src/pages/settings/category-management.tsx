// ** React Imports
import { useState } from 'react'

// ** Custom Component Imports
import { FlexBox } from '@/shared/components/flex-box'
import { StyledTitle } from '@/shared/components/typography/title'
import Iconify from '@/shared/components/icon'
import Modal from '@/shared/components/modal'
import IncomeCategoryForm from '@/shared/components/category-form/income-category-form'
import OutcomeCategoryForm from '@/shared/components/category-form/outcome-category-form'

// ** Third Party Import
import Skeleton from 'react-loading-skeleton'

// ** Styled Component Imports
import { StyledCategoryCard, StyledCategoryTitle } from './styles'

interface Category {
  id: string
  name: string
}

interface CategoryManagementProps {
  title: string
  data: Category[]
  isLoading: boolean
  onDeleteCategory: (id: string) => void
  category: 'income' | 'outcome'
}

const CategoryManagement: React.FC<CategoryManagementProps> = (props: CategoryManagementProps) => {
  // ** Props
  const { title, data, isLoading, onDeleteCategory, category } = props

  // ** States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [editModalId, setEditModalId] = useState('')

  // ** Manage State of Modal
  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true)
  }

  const handleOpenEditModal = (id: string) => {
    setEditModalId(id)
  }

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false)
  }

  const handleCloseEditModal = () => {
    setEditModalId('')
  }

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <FlexBox $gap="1rem" $flexWrap="wrap" $margin="0.8rem 0 0">
        {isLoading
          ? new Array(5).fill(undefined).map((_, i) => <Skeleton key={i} width={100} height={85} />)
          : Array.isArray(data) &&
            data?.map(({ name, id }) => (
              <StyledCategoryCard key={id}>
                <StyledCategoryTitle style={{ textAlign: 'center' }}>{name}</StyledCategoryTitle>
                <FlexBox $alignItems="center" $justifyContent="center" $gap="1rem" $margin="0.8rem 0 0">
                  <Iconify icon="tabler:trash" cursor={'pointer'} onClick={() => onDeleteCategory(id)} />
                  <Iconify icon="tabler:pencil" cursor={'pointer'} onClick={() => handleOpenEditModal(id)} />
                </FlexBox>
              </StyledCategoryCard>
            ))}
        <StyledCategoryCard
          style={{
            cursor: 'pointer'
          }}
          onClick={handleOpenCreateModal}
        >
          <StyledCategoryTitle>Add</StyledCategoryTitle>
          <FlexBox $alignItems="center" $justifyContent="center" $gap="1rem" $margin="0.8rem 0 0">
            <Iconify icon="tabler:plus" cursor={'pointer'} />
          </FlexBox>
        </StyledCategoryCard>
      </FlexBox>

      <Modal
        onClose={handleCloseCreateModal}
        isOpen={isCreateModalOpen}
        renderContent={() => {
          if (category === 'income') {
            return <IncomeCategoryForm mode="create" close={handleCloseCreateModal} />
          } else {
            return <OutcomeCategoryForm mode="create" close={handleCloseCreateModal} />
          }
        }}
      />
      <Modal
        onClose={handleCloseEditModal}
        isOpen={!!editModalId}
        renderContent={() => {
          if (category === 'income') {
            return <IncomeCategoryForm mode="edit" id={editModalId} close={() => handleOpenEditModal(editModalId)} />
          } else {
            return <OutcomeCategoryForm mode="edit" id={editModalId} close={() => handleOpenEditModal(editModalId)} />
          }
        }}
      />
    </div>
  )
}

export default CategoryManagement
