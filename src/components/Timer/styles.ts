import styled from 'styled-components';

import arrow_right from '../../assets/svg/arrow_right.svg';
import chronometer from '../../assets/svg/chronometer.svg';
import { ThemeProps } from '../../types';

interface StyledTimeProps {
  time: number;
}

export const StyledArticle = styled.article`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: lightgray;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const StyledIcon = styled.span`
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(${chronometer}) no-repeat 50% 50% / contain;
`;

export const StyledBox = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledTime = styled.p`
  font-size: 2rem;
  font-family: 'Jura Regular', 'RoundedMplus1c Regular', sans-serif;
  color: ${({ time }: ThemeProps<StyledTimeProps>) => (time <= 10 ? 'darkred' : 'inherit')};
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
  color: ${({ theme }: ThemeProps<unknown>) => theme.color.milk};
  border-radius: 0.5rem;

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background: url(${arrow_right}) no-repeat 50% 50% / contain;
  }
`;
