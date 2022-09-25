import React from 'react';

import { StyledToggler } from './styles';

interface AuthFormTogglerProps {
  isSignUp: boolean;
  toggleIsSignUp: () => void;
}

function AuthFormToggler({ isSignUp, toggleIsSignUp }: AuthFormTogglerProps) {
  const handleChange = () => {
    toggleIsSignUp();
  };

  return (
    <StyledToggler>
      <input type="radio" name="toggler" id="sign-up" onChange={handleChange} checked={isSignUp} />
      <label htmlFor="sign-up">Регистрация</label>
      <input type="radio" name="toggler" id="sign-in" onChange={handleChange} checked={!isSignUp} />
      <label htmlFor="sign-in">Вход</label>
    </StyledToggler>
  );
}

export default AuthFormToggler;
