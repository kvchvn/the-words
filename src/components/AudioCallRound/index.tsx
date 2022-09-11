import React, { useCallback, useEffect } from 'react';

import { v4 as uuid } from 'uuid';

import { AUDIOCALL_DO_NOT_KNOW_ANSWER, BASE_MEDIA_URL } from '../../constants';
import { useAppDispatch, useAudioCallDataSelector } from '../../redux';
import { saveAnswer } from '../../redux/slices/gameSlice';
import { AggregatedWord, Word, WordResult } from '../../types';
import { playAudio } from '../../utils/common';

interface AudioCallRoundProps {
  originalWord: WordResult;
  isGameOver: boolean;
  playRoundSound: (isTruthyAnswer: boolean) => Promise<unknown>;
  updateWordStatistics: (originalWord: AggregatedWord, isTruthyAnswer: boolean) => void;
  showNextWord: () => void;
}

function AudioCallRound({
  originalWord,
  isGameOver,
  playRoundSound,
  updateWordStatistics,
  showNextWord,
}: AudioCallRoundProps) {
  const { wordsArray } = useAudioCallDataSelector();
  const dispatch = useAppDispatch();

  const goToNextRound = useCallback(
    (userAnswer: Word | typeof AUDIOCALL_DO_NOT_KNOW_ANSWER) => {
      if (originalWord && wordsArray.length) {
        let isTruthyAnswer: boolean;
        if (userAnswer === AUDIOCALL_DO_NOT_KNOW_ANSWER) {
          isTruthyAnswer = false;
        } else {
          isTruthyAnswer = originalWord.id === userAnswer.id;
        }

        playRoundSound(isTruthyAnswer).then(() => {
          updateWordStatistics(originalWord, isTruthyAnswer);
          showNextWord();
          dispatch(saveAnswer({ word: originalWord, isTruthyAnswer }));
        });
      }
    },
    [originalWord, wordsArray.length, dispatch, playRoundSound, updateWordStatistics, showNextWord]
  );

  const handleClick = useCallback(() => {
    if (originalWord) {
      const src = `${BASE_MEDIA_URL}${originalWord.audio}`;
      playAudio(src);
    }
  }, [originalWord]);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code, key } = event;

      if (code === 'Digit5' || key === '5') {
        goToNextRound(AUDIOCALL_DO_NOT_KNOW_ANSWER);
        return;
      }

      if (code === 'Digit1' || key === '1') {
        goToNextRound(wordsArray[0]);
      }
      if (code === 'Digit2' || key === '2') {
        goToNextRound(wordsArray[1]);
      }
      if (code === 'Digit3' || key === '3') {
        goToNextRound(wordsArray[2]);
      }
      if (code === 'Digit4' || key === '4') {
        goToNextRound(wordsArray[3]);
      }
    };

    if (!isGameOver) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNextRound, isGameOver, wordsArray]);

  return originalWord && wordsArray.length ? (
    <section>
      <button onClick={handleClick}>Play</button>
      <ul>
        {wordsArray.map((word) => (
          <li key={uuid()}>
            <button onClick={goToNextRound.bind(null, word)} disabled={isGameOver}>
              {word.wordTranslate}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={goToNextRound.bind(null, AUDIOCALL_DO_NOT_KNOW_ANSWER)}
            disabled={isGameOver}
          >
            Не знаю
          </button>
        </li>
      </ul>
    </section>
  ) : (
    <p>Loading</p>
  );
}

export default AudioCallRound;
