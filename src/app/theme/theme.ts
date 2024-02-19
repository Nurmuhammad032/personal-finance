export const lightTheme = {
  background: '#f4f4fb',
  cardBackground: '#ffffff',
  foreground: 'hsl(222.2, 84%, 4.9%)',
  card: 'hsl(0, 0%, 100%)',
  cardForeground: 'hsl(222.2, 84%, 4.9%)',
  popover: 'hsl(0, 0%, 100%)',
  popoverForeground: 'hsl(222.2, 84%, 4.9%)',
  primary: 'hsl(221.2, 83.2%, 53.3%)',
  primaryForeground: 'hsl(210, 40%, 98%)',
  secondary: 'hsl(210, 40%, 96.1%)',
  secondaryForeground: 'hsl(222.2, 47.4%, 11.2%)',
  muted: 'hsl(210, 40%, 96.1%)',
  mutedForeground: 'hsl(215.4, 16.3%, 46.9%)',
  accent: 'hsl(210, 40%, 96.1%)',
  accentForeground: 'hsl(222.2, 47.4%, 11.2%)',
  destructive: 'hsl(0, 84.2%, 60.2%)',
  destructiveForeground: 'hsl(210, 40%, 98%)',
  border: 'hsl(214.3, 31.8%, 91.4%)',
  input: 'hsl(214.3, 31.8%, 91.4%)',
  ring: 'hsl(221.2, 83.2%, 53.3%)'
}

// Ensures that the dark theme matches the light theme for consistency.
type Theme = typeof lightTheme

export const darkTheme: Theme = {
  background: 'hsl(222.2, 84%, 4.9%)',
  cardBackground: 'hsl(222.2, 84%, 4.9%)',
  foreground: 'hsl(210, 40%, 98%)',
  card: 'hsl(222.2, 84%, 4.9%)',
  cardForeground: 'hsl(210, 40%, 98%)',
  popover: 'hsl(222.2, 84%, 4.9%)',
  popoverForeground: 'hsl(210, 40%, 98%)',
  primary: 'hsl(217.2, 91.2%, 59.8%)',
  primaryForeground: 'hsl(222.2, 47.4%, 11.2%)',
  secondary: 'hsl(217.2, 32.6%, 17.5%)',
  secondaryForeground: 'hsl(210, 40%, 98%)',
  muted: 'hsl(217.2, 32.6%, 17.5%)',
  mutedForeground: 'hsl(215, 20.2%, 65.1%)',
  accent: 'hsl(217.2, 32.6%, 17.5%)',
  accentForeground: 'hsl(210, 40%, 98%)',
  destructive: 'hsl(0, 62.8%, 30.6%)',
  destructiveForeground: 'hsl(210, 40%, 98%)',
  border: 'hsl(217.2, 32.6%, 17.5%)',
  input: 'hsl(217.2, 32.6%, 17.5%)',
  ring: 'hsl(224.3, 76.3%, 48%)'
}
