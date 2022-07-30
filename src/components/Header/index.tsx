import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants';
import { removeUserData, useAppDispatch, useUserSelector } from '../../redux';
import { removeFromLocalStorage } from '../../utils';

function Header() {
  const { user } = useUserSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    removeFromLocalStorage('user');
    dispatch(removeUserData());
    navigate(ROUTER_PATHS.main);
  };

  return (
    <div>
      <h1>It`s Header</h1>
      {user && (
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Header;
