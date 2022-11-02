import React from 'react';

import { StyledWrapper } from '../../styles/components';
import Navbar from '../Navbar';
import {
  StyledFooter,
  StyledGithubLink,
  StyledLinkedinLink,
  StyledNav,
  StyledRssLink,
  StyledSection,
  StyledSocialBox,
} from './styles';

function Footer() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledSection>
          <p>the words</p>
          <span />
          <p>2022</p>
        </StyledSection>
        <StyledNav>
          <Navbar />
        </StyledNav>
        <StyledSocialBox>
          <StyledGithubLink href="https://github.com/kvchvn/the-words" />
          <StyledLinkedinLink href="https://www.linkedin.com/in/aakachan/" />
          <StyledRssLink href="https://rs.school/" />
        </StyledSocialBox>
      </StyledWrapper>
    </StyledFooter>
  );
}

export default Footer;
