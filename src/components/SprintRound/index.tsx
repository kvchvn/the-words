import React, { useCallback, useEffect } from 'react';

import { useAppDispatch, useSprintDataSelector } from '../../redux';
import { saveAnswer } from '../../redux/slices/gameSlice';
import { AggregatedWord, WordResult } from '../../types';
import Loading from '../Loading';
import { StyledButton, StyledButtonsBox, StyledSection, StyledWordsBox } from './styles';

interface SprintRoundProps {
  originalWord: WordResult;
  isGameOver: boolean;
  playRoundSound: (isTruthyAnswer: boolean) => Promise<unknown>;
  updateWordStatistic: (originalWord: AggregatedWord, isTruthyAnswer: boolean) => void;
  showNextWord: () => void;
}

function SprintRound({
  originalWord,
  isGameOver,
  playRoundSound,
  updateWordStatistic,
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
          updateWordStatistic(originalWord, isTruthyAnswer);
          showNextWord();
          dispatch(saveAnswer({ word: originalWord, isTruthyAnswer }));
        });
      }
    },
    [originalWord, translatedWord, dispatch, playRoundSound, updateWordStatistic, showNextWord]
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
    <StyledSection>
      <StyledWordsBox>
        <h3>{originalWord.word}</h3>
        <h3>{translatedWord.wordTranslate}</h3>
      </StyledWordsBox>
      <StyledButtonsBox>
        <StyledButton mode="TRUE" disabled={isGameOver} onClick={goToNextRound.bind(null, true)}>
          Правда
        </StyledButton>
        <StyledButton mode="FALSE" disabled={isGameOver} onClick={goToNextRound.bind(null, false)}>
          Неправда
        </StyledButton>
      </StyledButtonsBox>
    </StyledSection>
  ) : (
    <Loading size="LARGE" />
  );
}

export default SprintRound;
