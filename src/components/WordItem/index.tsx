import React from 'react';

interface WordItemProps {
  id: string;
  word: string;
  showDetailedData: (wordId: string) => void;
  checkDifficulty: (wordId: string) => string | undefined;
}

function WordItem({ id, word, showDetailedData, checkDifficulty }: WordItemProps) {
  const handleClick = () => {
    showDetailedData(id);
  };

  const difficulty = checkDifficulty(id);

  return (
    <li onClick={handleClick}>
      {word} --- {difficulty?.toUpperCase()}
    </li>
  );
}

export default WordItem;
