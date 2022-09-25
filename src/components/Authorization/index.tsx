import React from 'react';

import { useToggle } from '../../hooks';
import { StyledWrapper } from '../../styles/components';
import AuthFormToggler from '../AuthFormToggler';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { StyledArticle, StyledImage, StyledSection } from './styles';

function Authorization() {
  const { value: isSignUp, toggleValue } = useToggle();

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledImage />
        <StyledArticle>
          <AuthFormToggler isSignUp={isSignUp} toggleIsSignUp={toggleValue} />
          {isSignUp ? <SignUp goToSignIn={toggleValue} /> : <SignIn />}
        </StyledArticle>
      </StyledWrapper>
    </StyledSection>
  );
}

export default Authorization;
