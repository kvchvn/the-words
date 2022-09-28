import styled from 'styled-components';

import { Theme, ThemeProps } from '../../types';

interface StyledInfoItemProps {
  difficulty: keyof Theme['difficultyColor'];
}

export const StyledArticle = styled.article`
  position: relative;
  background-color: rgb(248, 235, 235);
  min-height: 20rem;

  & > .wrapper {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2rem;
    background: linear-gradient(to bottom, white, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2rem;
    background: linear-gradient(to top, white, transparent);
  }
`;

export const StyledLegendList = styled.ul`
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  font-size: 0.75rem;
  background-color: #f3f3f3;
  border-radius: 0.5rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

export const StyledLegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: ${({ difficulty, theme }: ThemeProps<StyledInfoItemProps>) =>
      theme.difficultyColor[difficulty]};
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    gap: 1rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
