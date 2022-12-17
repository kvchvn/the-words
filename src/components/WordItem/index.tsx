import React from 'react';

import { WordDifficulty } from '../../types';
import { StyledListElement } from './styles';

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
    <StyledListElement difficulty={difficulty} onClick={handleClick}>
      {word}
    </StyledListElement>
  );
}

export default WordItem;
