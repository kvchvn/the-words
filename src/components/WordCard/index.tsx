import React, { useEffect } from 'react';

import WordCardButtons from '../WordCardButtons';

import { AggregatedWord, UserWord, Word } from '../../types';

interface WordCardProps {
  word: Word | UserWord | AggregatedWord | undefined;
  closeModal: () => void;
}

function WordCard({ word, closeModal }: WordCardProps) {
  useEffect(() => {
    if (!word) {
      closeModal();
    }
  }, [word, closeModal]);

  return word ? (
    <div>
      <h1>{word.word}</h1>
      <h2>difficulty: {(word as AggregatedWord).difficulty || 'None'}</h2>
      <WordCardButtons wordData={word} difficulty={(word as AggregatedWord).difficulty} />
      <button type="button" onClick={closeModal}>
        Закрыть
      </button>
    </div>
  ) : null;
}

export default WordCard;
