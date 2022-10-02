import { Link } from 'react-router-dom';
import styled from 'styled-components';

import books from '../../assets/img/books.webp';
import audiocall from '../../assets/svg/audiocall.svg';
import sprint from '../../assets/svg/sprint.svg';
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
  gap: 1rem;
  width: 100%;

  @media (max-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    flex-direction: column;
  }

  & > a {
    width: 100%;
    height: 4rem;
    border: 2px solid ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
    border-radius: 0.5rem;
    overflow: hidden;

    & > button {
      padding-right: 1rem;
      width: 100%;
      height: 100%;

      @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
        text-align: right;
      }

      @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
        text-align: center;
      }
    }
  }
`;

export const StyledAudiocallLink = styled(Link)`
  & > button {
    background: url(${audiocall}) no-repeat 5% 50% / contain;
  }
`;

export const StyledSprintLink = styled(Link)`
  & > button {
    background: url(${sprint}) no-repeat 5% 50% / contain;
  }
`;
