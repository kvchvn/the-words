import React from 'react';

import { Link } from 'react-router-dom';

import { FROM_MAIN, GAME_TYPES, ROUTER_PATHS } from '../../constants';
import { useIsGameStartedSelector, useUserSelector } from '../../redux';
import { StyledHeader } from './styles';

function Header() {
  const user = useUserSelector();
  const isGameStarted = useIsGameStartedSelector();

  return isGameStarted ? null : (
    <StyledHeader>
      <h1>Хэдэр</h1>
      <nav>
        <Link to={ROUTER_PATHS.textbook}>Учебник</Link>
        <Link
          to={ROUTER_PATHS.gameWelcome}
          state={{ entry: FROM_MAIN, game: GAME_TYPES.sprintGame }}
        >
          Спринт
        </Link>
        <Link
          to={ROUTER_PATHS.gameWelcome}
          state={{ entry: FROM_MAIN, game: GAME_TYPES.audioCallGame }}
        >
          Аудиовызов
        </Link>
        {user && <Link to={ROUTER_PATHS.statistic}>Статистика</Link>}
        <Link to={ROUTER_PATHS.authorization}>{user ? user.name : 'Авторизация'}</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
