import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants';
import { removeFromLocalStorage } from '../../utils';

function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    removeFromLocalStorage('user');
    navigate(ROUTER_PATHS.main);
  };

  return (
    <div>
      <h1>It`s Header</h1>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Header;
