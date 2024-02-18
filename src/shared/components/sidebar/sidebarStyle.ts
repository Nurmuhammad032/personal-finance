import { color, font, mixin, sizes } from '@/shared/utils/styles';
import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${sizes.sideBarWidth}px;
  padding: 0 16px 24px;
  background-color: ${color.backgroundLightest};
  ${mixin.scrollableY};
  ${mixin.customScrollbar()}
  height: 100vh;
`;

export const ProjectInfo = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const LogoText = styled.h1`
  ${font.size(15)}
`;

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 8px 12px;
  border-radius: 3px;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
  svg {
    margin-right: 15px;
  }
  &.active {
    color: ${color.primary};
    background: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.p`
  padding-top: 2px;
  ${font.size(14.7)};
`;

export const ProjectDescription = styled.p`
  ${font.size(10)}
  color: ${color.textMedium};
`;
