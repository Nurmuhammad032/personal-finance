// ** Import Constants
import { navLinks } from '@/shared/constants/navLinks';

// ** Import Icon
import Icon from '@/shared/components/icon/index';

// ** Import Styled Components
import { LinkItem, LinkText, Logo, LogoText, ProjectDescription, ProjectInfo, Sidebar } from './sidebarStyle';

// ** Import Link
import { Link } from 'react-router-dom';

const ProjectSidebar = () => {
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
            <LinkItem as={Link} key={path} to={path}>
              <Icon icon={icon} fontSize="1.2rem" data-testid={`icon-${label}`} />
              <LinkText>{label}</LinkText>
            </LinkItem>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};
export default ProjectSidebar;
