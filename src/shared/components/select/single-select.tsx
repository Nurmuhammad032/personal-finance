import Select, { Props } from 'react-select'
import { useTheme } from 'styled-components'

function SingleSelect<Option>(props: Props<Option, false>) {
  const theme = useTheme()

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? theme.primary : theme.border,
          borderWidth: '2px',
          boxShadow: 'none',
          borderRadius: '9px',
          height: '42px',
          backgroundColor: 'transparent',
          ':hover': {
            borderColor: state.isFocused ? theme.primary : theme.border
          }
        }),
        singleValue: baseStyles => ({
          ...baseStyles,
          color: theme.foreground
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected ? theme.accent : 'transparent',
          color: state.isSelected ? theme.primary : theme.foreground,
          ':hover': {
            backgroundColor: theme.accent
          }
        }),
        menu: baseStyles => ({
          ...baseStyles,
          backgroundColor: theme.cardBackground,
          border: `1px solid ${theme.border}`
        })
      }}
      {...props}
      isMulti={false}
    />
  )
}

export default SingleSelect
