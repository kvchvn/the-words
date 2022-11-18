import React from 'react';

import { ROUTER_PATHS } from '../../constants';
import { StyledImage, StyledLink, StyledSection } from './styles';

function NotFoundPage() {
  return (
    <StyledSection>
      <StyledImage src="" alt="" />
      <h3>Такая страница не найдена</h3>
      <StyledLink to={ROUTER_PATHS.main}>
        <p>На главную</p>
      </StyledLink>
    </StyledSection>
  );
}

export default NotFoundPage;
