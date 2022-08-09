import React from 'react';

import WordCardButtons from '../WordCardButtons';
import Loading from '../Loading';

import { useCurrentWord } from '../../hooks';
import { AggregatedWord } from '../../types';

interface WordCardProps {
  closeModal: () => void;
}

function WordCard({ closeModal }: WordCardProps) {
  const { wordData, isLoading, user } = useCurrentWord();

  const UI = wordData ? (
    <div>
      <h1>{wordData.word}</h1>
      {user && <h2>difficulty: {(wordData as AggregatedWord).difficulty || 'None'}</h2>}
      {user && (
        <WordCardButtons wordData={wordData} difficulty={(wordData as AggregatedWord).difficulty} />
      )}
      <button type="button" onClick={closeModal}>
        Закрыть
      </button>
    </div>
  ) : (
    <p>Ой... Мы не нашли информацию об этом слове</p>
  );

  return isLoading ? <Loading /> : UI;
}

export default WordCard;
