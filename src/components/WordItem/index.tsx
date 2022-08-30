import React from 'react';

import { WORD_WITHOUT_DIFFICULTY } from '../../constants';
import { WordDifficulty } from '../../types';

interface WordItemProps {
  id: string;
  word: string;
  difficulty: WordDifficulty | undefined;
  showDetailedData: (wordId: string) => void;
}

function WordItem({ id, word, difficulty, showDetailedData }: WordItemProps) {
  const handleClick = () => {
    showDetailedData(id);
  };

  return (
    <li onClick={handleClick}>
      {word} ---{' '}
      {difficulty && difficulty !== WORD_WITHOUT_DIFFICULTY ? difficulty.toUpperCase() : ''}
    </li>
  );
}

export default WordItem;
