import styled from 'styled-components';

import { ThemeProps } from '../../types';

interface StyledButtonProps {
  mode: 'TRUE' | 'FALSE';
}

export const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 25rem;
`;

export const StyledWordsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

export const StyledButtonsBox = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 4rem;
  letter-spacing: 1px;
  font-size: 1.1rem;
  background-color: ${({ mode, theme }: ThemeProps<StyledButtonProps>) =>
    mode === 'TRUE' ? theme.color.darkblue : theme.color.milk};
  color: ${({ mode, theme }: ThemeProps<StyledButtonProps>) =>
    mode === 'TRUE' ? theme.color.milk : theme.color.darkblue};
  border: 3px solid
    ${({ mode, theme }: ThemeProps<StyledButtonProps>) =>
      mode === 'FALSE' ? theme.color.darkblue : 'none'};

  &:disabled {
    opacity: 0.5;
  }

  &:first-child {
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  &:last-child {
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;
