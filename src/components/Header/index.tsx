import React from 'react';
import { useSignOut } from '../../hooks';

import { useUserSelector } from '../../redux';

function Header() {
  const user = useUserSelector();
  const { signOut } = useSignOut();

  return (
    <div>
      <h1>It`s Header</h1>
      {user && (
        <button type="button" onClick={signOut}>
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Header;
