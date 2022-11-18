import { Link } from 'react-router-dom';
import styled from 'styled-components';

import not_found from '../../assets/img/not_found.webp';
import home from '../../assets/svg/home.svg';
import { flex } from '../../styles/templates';

export const StyledSection = styled.section`
  ${flex({ direction: 'column', align: 'center', justify: 'center', gap: '2rem' })};
  padding-top: 1rem;
  height: 70vh;
`;

export const StyledImage = styled.img.attrs({ src: not_found })`
  object-fit: contain;
  width: 100%;
  max-width: 15rem;
`;

export const StyledLink = styled(Link)`
  & > p {
    ${flex({ align: 'center', gap: '1rem' })};
    padding: 0.3rem 1.3rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    filter: grayscale(0.7);
    transition: filter 0.25s;

    &:hover {
      filter: grayscale(0);
    }

    &::before {
      content: '';
      display: block;
      width: 2rem;
      height: 2rem;
      background: url(${home}) no-repeat 50% 50% / contain;
    }
  }
`;
