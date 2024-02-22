// ** React Imports
import { useEffect, useState } from 'react'

// ** Custom Component Imports
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { StyledHeaderWrapper } from '@/shared/components/header-wrapper'
import { StyledSectionHeading } from '@/shared/components/typography/section-heading'
import { StyledPaper } from '@/shared/components/paper'
import IncomeCategories from './income-categories'
import OutcomeCategories from './outcome-categories'
import { FlexBox } from '@/shared/components/flex-box'
import { StyledTitle } from '@/shared/components/typography/title'
import SingleSelect from '@/shared/components/select/single-select'

// ** Theme Import
import { useTheme } from '@/app/theme/hooks/useTheme'

// ** Styled Component Imports
import { ModeToggleWrapper, StyledContainer } from './styles'

// ** Theme Options
const options = [
  {
    value: 'dark',
    label: 'Dark Mode'
  },
  {
    value: 'light',
    label: 'Light Mode'
  }
]

const Settings = () => {
  // ** Theme hook
  const { theme, setTheme } = useTheme()

  // ** State for keep current theme mode
  const [selectedMode, setSelectedMode] = useState(() => {
    return options.find(option => option.value === theme)
  })

  // ** Changing theme mode
  useEffect(() => {
    if (selectedMode?.value) {
      setTheme(selectedMode.value as typeof theme)
    }
  }, [selectedMode])

  return (
    <section>
      <StyledContainer>
        <Breadcrumbs items={['Home', 'Settings']} />
        <StyledHeaderWrapper>
          <StyledSectionHeading $position="center">Settings</StyledSectionHeading>
        </StyledHeaderWrapper>
        <StyledPaper>
          <ModeToggleWrapper>
            <StyledTitle>Change mode</StyledTitle>
            <SingleSelect
              isSearchable={false}
              value={selectedMode}
              options={options}
              onChange={e => {
                if (e?.value) {
                  setSelectedMode(e)
                }
              }}
            />
          </ModeToggleWrapper>
          <FlexBox $flexDir="column" $gap="1.5rem">
            <StyledSectionHeading>Manage your categories</StyledSectionHeading>
            <IncomeCategories />
            <OutcomeCategories />
          </FlexBox>
        </StyledPaper>
      </StyledContainer>
    </section>
  )
}

export default Settings
