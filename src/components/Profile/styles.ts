import styled from 'styled-components';

import exit from '../../assets/svg/exit.svg';
import user from '../../assets/svg/user.svg';
import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  & > .wrapper {
    @media (max-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
      width: 100vw;
    }
  }
`;

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 1rem;
    height: 25rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM}) {
    height: 30rem;
  }
`;

export const StyledParallaxBox = styled.div`
  position: relative;
  height: 35rem;
  clip-path: inset(0);

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: 65%;
    height: 100%;
  }

  & span {
    left: 0;
    display: block;
    width: 100%;
    height: 15rem;
    z-index: 5;

    &:first-child {
      position: fixed;
      background: linear-gradient(white, transparent);
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      background: linear-gradient(transparent, white);
    }

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
      display: none;
    }
  }
`;

export const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    justify-content: flex-end;
  }
`;

export const StyledUserIcon = styled.span`
  display: block;
  width: 6rem;
  height: 6rem;
  align-self: center;
  background: white url(${user}) no-repeat 50% 50% / contain;
  border: 3px solid ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
  border-radius: 50%;
`;

export const StyledGreetingTitle = styled.h3`
  font-size: 2rem;
  font-family: 'Pacifico Regular', 'OpenSans Regular', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledQuoteBox = styled.div`
  padding: 1rem;
  background-color: lightgray;

  & > p {
    text-align: right;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  margin: 1rem auto;
  width: 4rem;
  height: 4rem;
  background: url(${exit}) no-repeat 60% 50% / contain;
  background-size: 50%;
  background-color: inherit;
  border: 3px solid ${({ theme }: ThemeProps<unknown>) => theme.color.coral};
  border-radius: 50%;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.coral};
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    margin-top: 3rem;
    width: 5rem;
    height: 5rem;
  }
`;
