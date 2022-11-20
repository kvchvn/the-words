import styled from 'styled-components';

import ruins from '../../assets/img/ruins.webp';
import { flex } from '../../styles/templates';

export const StyledMain = styled.main`
  ${flex({ direction: 'column', align: 'center', justify: 'center' })};
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: url(${ruins}) no-repeat 43% 50% / cover;
    filter: blur(8px) grayscale(0.1) opacity(0.9);
    z-index: 5;
  }
`;

export const StyledBox = styled.div`
  ${flex({ direction: 'column', align: 'center', justify: 'center', gap: '1rem' })};
  padding: 1.5rem;
  border-radius: 1rem;
  backdrop-filter: sepia(100%) grayscale(50%);
  z-index: 10;

  & > h2 {
    text-align: center;
    font-family: 'Pacifico Regular', 'OpenSans Regular', 'sans-serif';
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  & > button {
    background: none;
    text-align: center;
    padding: 0 0.5rem;
    font-family: 'OpenSans Regular', 'sans-serif';
    font-size: 1.1rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    z-index: 10;
    transition: border-bottom 0.25s;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;
