import React from 'react';

import { EASY_WORD, HARD_WORD } from '../../constants';
import { useDifficulty } from '../../hooks';
import { AggregatedWord, Word, WordDifficulty } from '../../types';

interface WordCardButtonsProps {
  word: Word | AggregatedWord;
  difficulty: WordDifficulty | undefined;
}

function WordCardButtons({ word, difficulty }: WordCardButtonsProps) {
  const { user, toggleDifficulty } = useDifficulty(word);

  const toggleHardDifficulty = () => toggleDifficulty(difficulty, HARD_WORD);

  const toggleEasyDifficulty = () => toggleDifficulty(difficulty, EASY_WORD);

  return (
    user && (
      <div>
        <button type="button" onClick={toggleHardDifficulty}>
          Add to {HARD_WORD}
        </button>
        <button type="button" onClick={toggleEasyDifficulty}>
          Add to {EASY_WORD}
        </button>
      </div>
    )
  );
}

export default WordCardButtons;
