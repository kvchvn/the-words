import React from 'react';

import { useToggle } from '../../hooks';
import { StyledWrapper } from '../../styles/components';
import SectionsToggler from '../SectionsToggler';
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
          <SectionsToggler
            isFirstChecked={isSignUp}
            firstLabelName="Регистрация"
            secondLabelName="Вход"
            toggle={toggleValue}
          />
          {isSignUp ? <SignUp goToSignIn={toggleValue} /> : <SignIn />}
        </StyledArticle>
      </StyledWrapper>
    </StyledSection>
  );
}

export default Authorization;
