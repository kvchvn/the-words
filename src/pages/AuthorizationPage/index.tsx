import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

import PageTitle from 'components/PageTitle';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';

import { getFromLocalStorage } from 'utils';

function AuthorizationPage() {
  const [isSignUp, setIsSignUp] = useState(() => {
    const token = getFromLocalStorage<string>('token');
    return !token;
  });

  const goToSignIn = useCallback(() => setIsSignUp(false), []);

  const goToSignUp = useCallback(() => setIsSignUp(true), []);

  return (
    <>
      <PageTitle>Авторизация</PageTitle>
      {isSignUp ? <SignUp goToSignIn={goToSignIn} /> : <SignIn goToSignUp={goToSignUp} />}
    </>
  );
}

export default AuthorizationPage;
