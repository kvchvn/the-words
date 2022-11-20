import React from 'react';

import room from '../../assets/img/room.webp';
import room_tiny from '../../assets/img/room_tiny.webp';
import { useSignOut } from '../../hooks';
import { StyledWrapper } from '../../styles/components';
import { MainSignInResponse } from '../../types';
import Image from '../Image';
import {
  StyledArticle,
  StyledButton,
  StyledContentBox,
  StyledGreetingTitle,
  StyledParallaxBox,
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
          <StyledParallaxBox>
            <span />
            <Image src={room} placeholder={room_tiny} alt="Профиль" type="profile" />
            <span />
          </StyledParallaxBox>
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
