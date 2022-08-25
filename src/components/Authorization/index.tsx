import React from 'react';

import { useToggle } from '../../hooks';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

function Authorization() {
  const { value: isSignUp, toggleValue } = useToggle();

  return (
    <>{isSignUp ? <SignUp goToSignIn={toggleValue} /> : <SignIn goToSignUp={toggleValue} />}</>
  );
}

export default Authorization;
