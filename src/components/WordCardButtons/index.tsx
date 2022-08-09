import React from 'react';

import { useDifficulty } from '../../hooks';
import { EASY_WORD, HARD_WORD } from '../../constants';
import { Word } from '../../types';

interface WordCardButtonsProps {
  wordData: Word;
  difficulty: string | undefined;
}

function WordCardButtons({ wordData, difficulty }: WordCardButtonsProps) {
  const { user, toggleDifficulty } = useDifficulty(wordData);

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
