import React from 'react';

import { useSignOut } from '../../hooks';
import { MainSignInResponse } from '../../types';

interface ProfileProps {
  user: MainSignInResponse;
}

function Profile({ user }: ProfileProps) {
  const { signOut } = useSignOut();

  return (
    <>
      <h3>Привет, {user.name}</h3>
      <button type="button" onClick={signOut}>
        Выйти
      </button>
    </>
  );
}

export default Profile;
