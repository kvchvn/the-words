import styled from 'styled-components';

import play from '../../assets/svg/play.svg';
import { ThemeProps } from '../../types';

export interface StyledItemProps {
  mode: 'DO_NOT_KNOW' | 'RIGHT' | 'WRONG' | 'COMMON';
}

export const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 25rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    max-width: 100%;
  }
`;

export const StyledBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 9rem;
  height: 9rem;

  & > p {
    letter-spacing: 1px;
    height: 1rem;
    line-height: 1rem;
  }
`;

export const StyledButtonPlay = styled.button`
  width: 4rem;
  height: 4rem;
  background: url(${play}) ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue} no-repeat 60%
    50% / contain;
  background-size: 50%;
  border-radius: 50%;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledItem = styled.li`
  width: 70%;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    max-width: 12rem;
  }

  & > button {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    background-color: ${({ mode, theme }: ThemeProps<StyledItemProps>) => {
      switch (mode) {
        case 'DO_NOT_KNOW':
          return theme.color.coral;
        case 'RIGHT':
          return '#006400CC';
        case 'WRONG':
          return '#8B0000CC';
        case 'COMMON':
          return theme.color.blue;
        default:
          return theme.color.blue;
      }
    }};
`;
