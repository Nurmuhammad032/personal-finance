// ** Import Constants
import { navLinks } from '@/shared/constants/navLinks'

// ** Import Icon
import Icon from '@/shared/components/icon/index'

// ** Styled Component Imports
import { LinkItem, LinkText, Logo, LogoText, ProjectDescription, ProjectInfo, Sidebar } from './sidebarStyle'

// ** Router Imports
import { NavLink, Link } from 'react-router-dom'

// ** Theme hook Import
import { useTheme } from '@/app/theme/hooks/useTheme'
import Button from '../button'

const ProjectSidebar = () => {
  // ** Hook
  const { setTheme } = useTheme()

  return (
    <Sidebar>
      <div>
        <ProjectInfo as={Link} to={'/'}>
          <Logo src="/images/logo.png" alt="Logo" />
          <div>
            <LogoText>Finance Peak</LogoText>
            <ProjectDescription>Strategic Money Moves</ProjectDescription>
          </div>
        </ProjectInfo>
        <div>
          {navLinks.map(({ label, path, icon }) => (
            <LinkItem as={NavLink} key={path} to={path}>
              <Icon icon={icon} fontSize="1.2rem" data-testid={`icon-${label}`} />
              <LinkText>{label}</LinkText>
            </LinkItem>
          ))}
          <div style={{ marginTop: '2rem' }}>
            <Button
              variant="ghost"
              onClick={() => {
                setTheme('light')
                console.log('first')
              }}
            >
              light
            </Button>
            <Button onClick={() => setTheme('dark')}>dark</Button>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
export default ProjectSidebar
