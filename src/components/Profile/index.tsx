import React from 'react';

import { useSignOut } from '../../hooks';
import { StyledWrapper } from '../../styles/components';
import { MainSignInResponse } from '../../types';
import {
  StyledArticle,
  StyledButton,
  StyledContentBox,
  StyledGreetingTitle,
  StyledParallax,
  StyledQuoteBox,
  StyledSection,
  StyledUserIcon,
} from './styles';

interface ProfileProps {
  user: MainSignInResponse;
}

function Profile({ user }: ProfileProps) {
  const { signOut } = useSignOut();

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledArticle>
          <StyledParallax />
          <span />
          <StyledContentBox>
            <StyledUserIcon />
            <StyledGreetingTitle>Hello, {user.name}</StyledGreetingTitle>
            <div>
              <StyledQuoteBox>
                <q>Путь в тысячу ли начинается с первого шага.</q>
                <p>Лао-Цзы</p>
              </StyledQuoteBox>
            </div>
          </StyledContentBox>
        </StyledArticle>
        <StyledButton onClick={signOut} />
      </StyledWrapper>
    </StyledSection>
  );
}

export default Profile;
