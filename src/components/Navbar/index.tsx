import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { FROM_MAIN, FROM_TEXTBOOK, GAME_TYPES, ROUTER_PATHS } from '../../constants';
import { useUserSelector } from '../../redux';
import { RouterPaths } from '../../types';

interface LocationState {
  state: {
    entry: typeof FROM_MAIN | typeof FROM_TEXTBOOK;
    game: keyof Pick<RouterPaths, 'sprintGame' | 'audioCallGame'>;
  } | null;
}

function Navbar() {
  const user = useUserSelector();
  const { state } = useLocation() as LocationState;

  const isActiveLink = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return 'active-link';
    } else {
      return undefined;
    }
  };

  return (
    <>
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
    </>
  );
}

export default Navbar;
