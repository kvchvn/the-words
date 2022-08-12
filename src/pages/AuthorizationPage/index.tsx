import React from 'react';
import Authorization from '../../components/Authorization';

import PageTitle from '../../components/PageTitle';
import Profile from '../../components/Profile';

import { useUserSelector } from '../../redux';

function AuthorizationPage() {
  const user = useUserSelector();

  return (
    <section>
      <PageTitle>{user ? 'Профиль' : 'Авторизация'}</PageTitle>
      {user ? <Profile user={user} /> : <Authorization />}
    </section>
  );
}

export default AuthorizationPage;
