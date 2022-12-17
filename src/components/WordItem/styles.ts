import styled from 'styled-components';

import { Theme, ThemeProps, WordDifficulty } from '../../types';

interface StyledListElementProps {
  difficulty: WordDifficulty | undefined;
}

export const StyledListElement = styled.li`
  height: 3rem;
  line-height: 3rem;
  background-color: ${({ difficulty, theme }: ThemeProps<StyledListElementProps>) =>
    difficulty
      ? theme.difficultyColor[difficulty.toLowerCase() as keyof Theme['difficultyColor']]
      : theme.difficultyColor.none};
  text-align: center;
  cursor: pointer;
  letter-spacing: 1px;
  border-radius: 0.25rem;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: 2px 2px 2px black;
  }
`;
