import styled from 'styled-components'

export const StyledContainer = styled.section`
  max-width: 890px;
  margin: 0 auto;
`

export const StyledCategoryCard = styled.div`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  transition: all 0.2s ease;
  /* box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3); */
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryForeground};
  }
`

export const StyledCategoryTitle = styled.h4`
  text-align: center;
`

export const ModeToggleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`
