type NavLink = {
  label: string
  path: string
  icon: string
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    path: '/',
    icon: 'streamline:home-3'
  },
  {
    label: 'Income',
    path: '/income',
    icon: 'streamline:graph-bar-increase'
  },
  {
    label: 'Outcome',
    path: '/outcome',
    icon: 'streamline:graph-bar-decrease'
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: 'solar:settings-outline'
  }
]
