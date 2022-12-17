import React from 'react';

import Authorization from '../../components/Authorization';
import Profile from '../../components/Profile';
import { useUserSelector } from '../../redux';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';

function AuthorizationPage() {
  const user = useUserSelector();

  return (
    <>
      <StyledPageTitle>
        <StyledWrapper>{user ? 'Профиль' : 'Авторизация'}</StyledWrapper>
      </StyledPageTitle>
      {user ? <Profile user={user} /> : <Authorization />}
    </>
  );
}

export default AuthorizationPage;
