import styled from 'styled-components';

import { EASY_WORD, HARD_WORD } from '../../constants';
import { ThemeProps } from '../../types';

interface StyledButtonProps {
  mode: typeof HARD_WORD | typeof EASY_WORD;
}

export const StyledButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  max-width: 20rem;
  min-width: 15rem;
  background-color: ${({ mode, theme }: ThemeProps<StyledButtonProps>) =>
    mode === HARD_WORD ? theme.difficultyColor.hard : theme.difficultyColor.easy};
  border-radius: 0.5rem;
`;
