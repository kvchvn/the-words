import React from 'react';

import { ROUTER_PATHS } from '../../constants';
import { useIsGameStartedSelector } from '../../redux';
import Navbar from '../Navbar';
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledHeaderWrapper,
  StyledLogoLink,
  StyledLogoWrapper,
  StyledNav,
} from './styles';

interface HeaderProps {
  menuToggler: React.RefObject<HTMLInputElement>;
}

function Header({ menuToggler }: HeaderProps) {
  const isGameStarted = useIsGameStartedSelector();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'A' && menuToggler.current) {
      menuToggler.current.checked = false;
    }
  };

  return (
    <StyledHeader disabled={isGameStarted}>
      <StyledHeaderWrapper>
        <StyledLogoWrapper>
          <StyledLogoLink to={ROUTER_PATHS.main} />
          <StyledHeaderTitle>the words</StyledHeaderTitle>
        </StyledLogoWrapper>
        <StyledNav onClick={handleClick}>
          <Navbar />
        </StyledNav>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
