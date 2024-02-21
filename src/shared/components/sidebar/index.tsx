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
  StyledSidebar
} from './sidebarStyle'

// ** Router Imports
import { NavLink, Link } from 'react-router-dom'

import { useToggle } from '@/shared/hooks/useToggle'

const Sidebar = () => {
  // ** Hook
  const [isOpen, toggle] = useToggle(false)

  return (
    <StyledSidebar $isOpen={isOpen}>
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
          <LinkItem as={NavLink} key={path} to={path} onClick={toggle}>
            <Icon icon={icon} fontSize="1.2rem" data-testid={`icon-${label}`} />
            <LinkText>{label}</LinkText>
          </LinkItem>
        ))}
      </div>
    </StyledSidebar>
  )
}
export default Sidebar
