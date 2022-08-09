import React from 'react';

interface WordItemProps {
  id: string;
  word: string;
  difficulty: string | undefined;
  showDetailedData: (wordId: string) => void;
}

function WordItem({ id, word, difficulty, showDetailedData }: WordItemProps) {
  const handleClick = () => {
    showDetailedData(id);
  };

  return (
    <li onClick={handleClick}>
      {word} --- {difficulty?.toUpperCase()}
    </li>
  );
}

export default WordItem;
