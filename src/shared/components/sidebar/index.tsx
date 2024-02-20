// ** Import Constants
import { navLinks } from '@/shared/constants/nav-links'

// ** Import Icon
import Icon from '@/shared/components/icon/index'

// ** Styled Component Imports
import {
  CloseIconWrapper,
  LinkItem,
  LinkText,
  Logo,
  LogoText,
  ProjectDescription,
  ProjectInfo,
  Sidebar
} from './sidebarStyle'

// ** Router Imports
import { NavLink, Link } from 'react-router-dom'

// ** Theme hook Import
import { useTheme } from '@/app/theme/hooks/useTheme'
import Button from '../button'
import { useToggle } from '@/shared/hooks/useToggle'

const ProjectSidebar = () => {
  // ** Hooks
  const { setTheme } = useTheme()
  const [isOpen, toggle] = useToggle(false)

  return (
    <Sidebar $isOpen={isOpen}>
      <CloseIconWrapper onClick={toggle}>
        {isOpen ? (
          <Icon icon="tabler:chevron-left" />
        ) : (
          <div
            style={{
              paddingLeft: '18px'
            }}
          >
            <Icon icon="tabler:chevron-right" />
          </div>
        )}
      </CloseIconWrapper>
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
            $variant="ghost"
            onClick={() => {
              setTheme('light')
              console.log('first')
            }}
          >
            Light
          </Button>
          <Button
            $variant="outline"
            onClick={() => {
              setTheme('dark')
            }}
          >
            Dark
          </Button>
        </div>
      </div>
    </Sidebar>
  )
}
export default ProjectSidebar
