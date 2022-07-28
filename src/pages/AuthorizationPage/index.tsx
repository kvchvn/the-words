import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

import { getFromLocalStorage } from '../../utils';
import { MainSignInResponse } from '../../types';
import { useEffect } from 'react';
import { ROUTER_PATHS } from '../../constants';

function AuthorizationPage() {
  const userData = getFromLocalStorage<MainSignInResponse>('user');
  const [isSignUp, setIsSignUp] = useState(!userData);
  const navigate = useNavigate();

  const goToSignIn = useCallback(() => setIsSignUp(false), []);

  const goToSignUp = useCallback(() => setIsSignUp(true), []);

  useEffect(() => {
    if (userData) {
      navigate(ROUTER_PATHS.main);
    }
  }, [navigate, userData]);

  return (
    <>
      <PageTitle>Авторизация</PageTitle>
      {isSignUp ? <SignUp goToSignIn={goToSignIn} /> : <SignIn goToSignUp={goToSignUp} />}
    </>
  );
}

export default AuthorizationPage;
