import React from 'react';

import { EASY_WORD, HARD_WORD } from '../../constants';
import { useDifficulty } from '../../hooks';
import { AggregatedWord, Word, WordDifficulty } from '../../types';
import { StyledButton, StyledButtonsBox } from './styles';

interface WordCardButtonsProps {
  word: Word | AggregatedWord;
  difficulty: WordDifficulty | undefined;
}

function WordCardButtons({ word, difficulty }: WordCardButtonsProps) {
  const { toggleDifficulty } = useDifficulty(word);

  const toggleHardDifficulty = () => toggleDifficulty(difficulty, HARD_WORD);

  const toggleEasyDifficulty = () => toggleDifficulty(difficulty, EASY_WORD);

  return (
    <StyledButtonsBox>
      <StyledButton mode={HARD_WORD} onClick={toggleHardDifficulty}>
        {difficulty === HARD_WORD ? 'Удалить из сложных' : 'Добавить в сложные'}
      </StyledButton>
      <StyledButton mode={EASY_WORD} onClick={toggleEasyDifficulty}>
        {difficulty === EASY_WORD ? 'Удалить из изученных' : 'Добавить в изученные'}
      </StyledButton>
    </StyledButtonsBox>
  );
}

export default WordCardButtons;
