import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { FROM_MAIN, FROM_TEXTBOOK, GAME_TYPES, ROUTER_PATHS } from '../../constants';
import { useIsGameOverSelector, useIsGameStartedSelector, useUserSelector } from '../../redux';
import { RouterPaths } from '../../types';
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

interface LocationState {
  state: {
    entry: typeof FROM_MAIN | typeof FROM_TEXTBOOK;
    game: keyof Pick<RouterPaths, 'sprintGame' | 'audioCallGame'>;
  } | null;
}

function Header({ menuToggler }: HeaderProps) {
  const user = useUserSelector();
  const isGameStarted = useIsGameStartedSelector();
  const isGameOver = useIsGameOverSelector();
  const { state } = useLocation() as LocationState;

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'A' && menuToggler.current) {
      menuToggler.current.checked = false;
    }
  };

  const isActiveLink = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return 'active-link';
    } else {
      return undefined;
    }
  };

  return isGameStarted && !isGameOver ? null : (
    <StyledHeader disabled={isGameOver}>
      <StyledHeaderWrapper>
        <StyledLogoWrapper>
          <StyledLogoLink to={ROUTER_PATHS.main} />
          <StyledHeaderTitle>the words</StyledHeaderTitle>
        </StyledLogoWrapper>
        <StyledNav onClick={handleClick}>
          <NavLink to={ROUTER_PATHS.main} className={isActiveLink}>
            Главная
          </NavLink>
          <NavLink to={ROUTER_PATHS.textbook} className={isActiveLink}>
            Учебник
          </NavLink>
          <NavLink
            to={ROUTER_PATHS.gameWelcome}
            state={{ entry: FROM_MAIN, game: GAME_TYPES.sprintGame }}
            className={state && state.game === GAME_TYPES.sprintGame ? 'active-link' : ''}
          >
            Спринт
          </NavLink>
          <NavLink
            to={ROUTER_PATHS.gameWelcome}
            state={{ entry: FROM_MAIN, game: GAME_TYPES.audioCallGame }}
            className={state && state.game === GAME_TYPES.audioCallGame ? 'active-link' : ''}
          >
            Аудиовызов
          </NavLink>
          {user && (
            <NavLink to={ROUTER_PATHS.statistic} className={isActiveLink}>
              Статистика
            </NavLink>
          )}
          <NavLink to={ROUTER_PATHS.authorization} className={isActiveLink}>
            {user ? user.name : 'Авторизация'}
          </NavLink>
        </StyledNav>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
