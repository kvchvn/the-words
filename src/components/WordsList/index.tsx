import React from 'react';
import { WordsPage } from '../../types';

interface WordsListProps {
  words: WordsPage;
}

function WordsList({ words }: WordsListProps) {
  return (
    <ul>
      {words.map((word) => (
        <li key={word.id}>{word.word}</li>
      ))}
    </ul>
  );
}

export default WordsList;
