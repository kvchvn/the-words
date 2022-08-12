import React from 'react';
import { Link } from 'react-router-dom';

import { useUserSelector } from '../../redux';
import { ROUTER_PATHS } from '../../constants';

function Header() {
  const user = useUserSelector();

  return (
    <div>
      <h1>It`s Header</h1>
      <nav>
        <Link to={ROUTER_PATHS.textbook}>Учебник</Link>
        <Link to={ROUTER_PATHS.sprintGame}>Спринт</Link>
        <Link to={ROUTER_PATHS.audioCallGame}>Аудиовызов</Link>
        <Link to={ROUTER_PATHS.authorization}>{user ? 'Профиль' : 'Авторизация'}</Link>
      </nav>
    </div>
  );
}

export default Header;
