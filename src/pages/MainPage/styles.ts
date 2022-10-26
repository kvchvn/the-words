import { Link } from 'react-router-dom';
import styled from 'styled-components';

import london from '../../assets/img/london.webp';
import { StyledPageTitle } from '../../styles/components';
import { ThemeProps } from '../../types';

interface StyledItemProps {
  imgSrc: string;
}

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const StyledTitle = styled(StyledPageTitle)`
  font-family: 'Pacifico Regular', 'RoundedMplus1c Regular', sans-serif;
  max-width: 20rem;
  font-weight: 400;
  letter-spacing: 2px;
  z-index: 10;
`;

export const StyledTitleBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  height: 40vh;
  max-height: 20rem;
  width: 100%;
  max-width: 40rem;

  & > span {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 70%;
    height: 100%;
    background: url(${london}) no-repeat 100% 100% / contain;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: 50%;
  }
`;

export const StyledItem = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  background-color: rgba(245, 222, 179, 0.4);
  filter: grayscale(0.5);
  border-radius: 0.5rem;
  transition: filter 0.25s;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    flex-direction: row;
    text-align: left;
  }

  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    background: url(${({ imgSrc }: ThemeProps<StyledItemProps>) => imgSrc}) no-repeat 50% 50% /
      contain;
    transition: transform 0.25s;
  }

  &:hover {
    filter: grayscale(0);
  }

  &:hover::before {
    transform: scale(1.2);
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.7rem 1.2rem;
  margin: 0 auto;
  width: 70%;
  max-width: 17rem;
  text-align: center;
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.coral};
  filter: grayscale(0.2);
  border-radius: 0.25rem;
  color: white;
  transition: all 0.5s;

  &:hover {
    filter: grayscale(0);
    box-shadow: 2px 2px 0 black;
  }
`;

export const StyledLinkToTextbook = styled(StyledLink)`
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
`;

export const StyledLinkToGames = styled(StyledLink)`
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: 50%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const StyledDetailsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
  }

  & > details {
    padding: 0.5rem;
    width: 100%;
    max-width: 20rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    text-align: justify;
  }

  & summary {
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
  }

  & a {
    display: inline;
    color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};

    &:hover {
      color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
    }
  }

  & p {
    padding-top: 0.5rem;
  }
`;
