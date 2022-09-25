import styled from 'styled-components';

import room from '../../assets/img/room.webp';
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
    height: 500px;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM}) {
    height: 600px;
  }
`;

export const StyledParallax = styled.div`
  background: url(${room}) no-repeat 50% 50% / cover fixed;
  height: 400px;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: 65%;
    height: 100%;
    background-size: cover;
    background-attachment: unset;
  }

  & + span {
    position: absolute;
    top: 100px;
    left: 0;
    display: block;
    width: 100%;
    height: 300px;
    background: linear-gradient(transparent, white);
    z-index: 5;

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
  font-family: 'Pacifico Regular', 'RoundedMplus1c Regular', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledQuoteBox = styled.div`
  padding: 1rem;
  background-color: lightgray;

  & > q {
    font-family: 'Pacifico Regular', 'RoundedMplus1c Regular', sans-serif;
    font-size: 1.2rem;
  }

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
