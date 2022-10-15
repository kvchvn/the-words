import styled from 'styled-components';

import { ThemeProps } from '../../types';

interface StyledProgressLineProps {
  current: number;
  max: number;
}

export const StyledArticle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgray;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    width: 50%;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
  }

  & > h4 {
    text-align: right;
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledCombo = styled.p`
  font-size: 1.5rem;
  font-family: 'PermanentMarker-Regular', 'RoundedMplus1c Regular', sans-serif;
  letter-spacing: 2px;
`;

export const StyledProgressLine = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 3px;
  width: 100%;
  height: 1.5rem;
  background-color: ${({ theme }: ThemeProps<StyledProgressLineProps>) => theme.color.darkblue};
  border: 2px solid ${({ theme }: ThemeProps<StyledProgressLineProps>) => theme.color.darkblue};
  border-radius: 0.25rem;

  & > span {
    display: block;
    min-width: 0.25rem;
    width: ${({ current, max }: ThemeProps<StyledProgressLineProps>) =>
      (current / max) * 100 + '%'};
    height: 100%;
    background-color: white;
    border-radius: 0.2rem;
  }
`;
