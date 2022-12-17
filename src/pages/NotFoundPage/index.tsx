import React from 'react';

import not_found from '../../assets/img/not_found.webp';
import not_found_tiny from '../../assets/img/not_found_tiny.webp';
import Image from '../../components/Image';
import { ROUTER_PATHS } from '../../constants';
import { StyledLink, StyledSection } from './styles';

function NotFoundPage() {
  return (
    <StyledSection>
      <Image src={not_found} placeholder={not_found_tiny} alt="404" type="notFound" />
      <h3>Такая страница не найдена</h3>
      <StyledLink to={ROUTER_PATHS.main}>
        <p>На главную</p>
      </StyledLink>
    </StyledSection>
  );
}

export default NotFoundPage;
