import { Link } from 'react-router-dom';
import styled from 'styled-components';

import books from '../../assets/img/books.webp';
import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  & > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
    }
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    width: 35%;
  }
`;

export const StyledImage = styled.img.attrs({ src: books })`
  display: none;
  width: 60%;
  height: auto;
  object-fit: contain;
  border-radius: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    display: block;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    flex-direction: row;
  }

  & > h3,
  & > p {
    width: 100%;
  }

  & > a {
    width: 100%;
    height: 4rem;
    border: 2px solid ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
    border-radius: 0.5rem;
    overflow: hidden;

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
      width: 48%;
    }

    & > button {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      letter-spacing: 1px;
      font-family: 'Pacifico Regular', 'RoundedMplus1c Regular', sans-serif;

      &:disabled {
        filter: grayscale(0.8);
        cursor: default;
      }
    }
  }
`;

export const StyledAudiocallLink = styled(Link)`
  & > button {
    background-color: darkseagreen;
  }
`;

export const StyledSprintLink = styled(Link)`
  & > button {
    background-color: goldenrod;
  }
`;
