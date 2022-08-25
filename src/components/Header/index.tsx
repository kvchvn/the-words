import React from 'react';

import { Link } from 'react-router-dom';

import { FROM_MAIN, ROUTER_PATHS } from '../../constants';
import { useUserSelector } from '../../redux';

function Header() {
  const user = useUserSelector();

  return (
    <div>
      <h1>Хэдэр</h1>
      <nav>
        <Link to={ROUTER_PATHS.textbook}>Учебник</Link>
        <Link to={ROUTER_PATHS.sprintGame} state={FROM_MAIN}>
          Спринт
        </Link>
        <Link to={ROUTER_PATHS.audioCallGame} state={FROM_MAIN}>
          Аудиовызов
        </Link>
        <Link to={ROUTER_PATHS.authorization}>{user ? user.name : 'Авторизация'}</Link>
      </nav>
    </div>
  );
}

export default Header;
