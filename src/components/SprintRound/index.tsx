import React, { useCallback, useEffect } from 'react';

import { useAppDispatch, useSprintDataSelector } from '../../redux';
import { saveAnswer } from '../../redux/slices/gameSlice';
import { AggregatedWord, WordResult } from '../../types';

interface SprintRoundProps {
  originalWord: WordResult;
  isGameOver: boolean;
  playRoundSound: (isTruthyAnswer: boolean) => Promise<unknown>;
  updateWordStatistics: (originalWord: AggregatedWord, isTruthyAnswer: boolean) => void;
  showNextWord: () => void;
}

function SprintRound({
  originalWord,
  isGameOver,
  playRoundSound,
  updateWordStatistics,
  showNextWord,
}: SprintRoundProps) {
  const dispatch = useAppDispatch();
  const { translatedWord } = useSprintDataSelector();

  const goToNextRound = useCallback(
    (userAnswer: boolean) => {
      if (originalWord && translatedWord) {
        const rightAnswer = originalWord.id === translatedWord.id;
        const isTruthyAnswer = rightAnswer === userAnswer;

        playRoundSound(isTruthyAnswer).then(() => {
          updateWordStatistics(originalWord, isTruthyAnswer);
          showNextWord();
          dispatch(saveAnswer({ word: originalWord, isTruthyAnswer }));
        });
      }
    },
    [originalWord, translatedWord, dispatch, playRoundSound, updateWordStatistics, showNextWord]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code, key } = event;
      if (code === 'ArrowLeft' || key === 'ArrowLeft') {
        goToNextRound(true);
      }
      if (code === 'ArrowRight' || key === 'ArrowRight') {
        goToNextRound(false);
      }
    };

    if (!isGameOver) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNextRound, isGameOver]);

  return originalWord && translatedWord ? (
    <section>
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
