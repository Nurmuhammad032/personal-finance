import Breadcrumbs from '@/shared/components/breadcrumbs'
import { ModeToggleWrapper, StyledContainer } from './styles'
import { StyledHeaderWrapper } from '@/shared/components/header-wrapper'
import { StyledSectionHeading } from '@/shared/components/typography/section-heading'
import { StyledPaper } from '@/shared/components/paper'
import IncomeCategories from './income-categories'
import OutcomeCategories from './outcome-categories'
import { FlexBox } from '@/shared/components/flex-box'
import { StyledTitle } from '@/shared/components/typography/title'
import SingleSelect from '@/shared/components/select/single-select'
import { useEffect, useState } from 'react'
import { useTheme } from '@/app/theme/hooks/useTheme'

const Settings = () => {
  const { theme, setTheme } = useTheme()
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

  const [selectedMode, setSelectedMode] = useState(() => {
    return options.find(option => option.value === theme)
  })

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
