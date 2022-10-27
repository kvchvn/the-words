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
  gap: 1rem;
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
  border: 3px solid ${({ theme }: ThemeProps<StyledButtonProps>) => theme.color.darkblue};
  border-radius: 0.5rem;

  &:disabled {
    opacity: 0.5;
  }
`;
