import React from 'react';

import { Word } from '../../types';
import WordCardButtons from '../WordCardButtons';

interface WordCardProps {
  word: Word | undefined;
  difficulty: string | undefined;
}

function WordCard({ word, difficulty }: WordCardProps) {
  return word ? (
    <div>
      <h1>{word.word}</h1>
      <h2>difficulty: {difficulty ? difficulty : 'none'}</h2>
      <WordCardButtons wordData={word} difficulty={difficulty} />
    </div>
  ) : (
    <p>word was not defined</p>
  );
}

export default WordCard;
