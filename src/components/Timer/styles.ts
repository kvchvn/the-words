import styled from 'styled-components';

import chronometer from '../../assets/svg/chronometer.svg';
import { ThemeProps } from '../../types';

interface StyledTimeProps {
  time: number;
}

export const StyledArticle = styled.article`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: lightgray;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    width: 50%;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 0;
  }
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
  font-family: 'Jura Regular', 'OpenSans Regular', sans-serif;
  color: ${({ time }: ThemeProps<StyledTimeProps>) => (time <= 10 ? 'darkred' : 'inherit')};
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
  border-radius: 0.5rem;
  color: white;
`;
