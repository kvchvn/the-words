import React from 'react';

import { useWords } from '../../hooks';

import Loading from '../Loading';

function WordsList() {
  const { words, isLoading } = useWords();

  return (
    <div>
      {isLoading && <Loading />}
      {words && (
        <ul>
          {words.map((word) => (
            <li key={word.id}>{word.word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WordsList;
