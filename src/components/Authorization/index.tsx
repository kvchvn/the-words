import React from 'react';

import SignUp from '../SignUp';
import SignIn from '../SignIn';

import { useToggle } from '../../hooks';

function Authorization() {
  const { value: isSignUp, toggleValue } = useToggle();

  return (
    <>{isSignUp ? <SignUp goToSignIn={toggleValue} /> : <SignIn goToSignUp={toggleValue} />}</>
  );
}

export default Authorization;
