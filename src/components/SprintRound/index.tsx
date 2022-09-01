import React from 'react';

import { GAME_ROUND_TIME } from '../../constants';
import { useAppDispatch } from '../../redux';
import { saveAnswer } from '../../redux/slices/gameSlice';
import { AggregatedWord, WordResult } from '../../types';
import Timer from '../Timer';

interface SprintRoundProps {
  originalWord: WordResult;
  translatedWord: WordResult;
  isGameOver: boolean;
  updateWordStatistics: (originalWord: AggregatedWord, isTruthyAnswer: boolean) => void;
  showNextWord: () => void;
  finishGame: () => void;
}

function SprintRound({
  originalWord,
  translatedWord,
  isGameOver,
  updateWordStatistics,
  showNextWord,
  finishGame,
}: SprintRoundProps) {
  const dispatch = useAppDispatch();

  const goToNextRound = (userAnswer: boolean) => {
    if (originalWord && translatedWord) {
      const rightAnswer = originalWord.id === translatedWord.id;
      const isTruthyAnswer = rightAnswer === userAnswer;
      updateWordStatistics(originalWord, isTruthyAnswer);
      showNextWord();
      dispatch(saveAnswer(isTruthyAnswer));
    }
  };

  return originalWord && translatedWord ? (
    <section>
      <Timer range={GAME_ROUND_TIME} finishGame={finishGame} />
      <h4>{originalWord.word}</h4>
      <h4>{translatedWord.wordTranslate}</h4>
      <div>
        <button disabled={isGameOver} type="button" onClick={goToNextRound.bind(null, true)}>
          Правда
        </button>
        <button disabled={isGameOver} type="button" onClick={goToNextRound.bind(null, false)}>
          Неправда
        </button>
      </div>
    </section>
  ) : (
    <p>Loading</p>
  );
}

export default SprintRound;
