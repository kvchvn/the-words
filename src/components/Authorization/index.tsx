import React from 'react';

import welcome from '../../assets/img/welcome.webp';
import welcome_tiny from '../../assets/img/welcome_tiny.webp';
import { useToggle } from '../../hooks';
import { StyledWrapper } from '../../styles/components';
import Image from '../Image';
import SectionsToggler from '../SectionsToggler';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { StyledArticle, StyledSection } from './styles';

function Authorization() {
  const { value: isSignUp, toggleValue } = useToggle();

  return (
    <StyledSection>
      <StyledWrapper>
        <Image
          src={welcome}
          placeholder={welcome_tiny}
          alt="Добро пожаловать"
          type="authorization"
        />
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
