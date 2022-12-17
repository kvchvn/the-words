import React, { useCallback, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { BASE_MEDIA_URL } from '../../constants';
import { useAppDispatch, useAudioCallDataSelector } from '../../redux';
import { saveAnswer } from '../../redux/slices/gameSlice';
import { AggregatedWord, Word, WordResult } from '../../types';
import { playAudio } from '../../utils/common';
import Loading from '../Loading';
import {
  StyledBox,
  StyledButtonPlay,
  StyledImage,
  StyledItem,
  StyledItemProps,
  StyledList,
  StyledSection,
} from './styles';

interface AudioCallRoundProps {
  originalWord: WordResult;
  isGameOver: boolean;
  playRoundSound: (isTruthyAnswer: boolean) => Promise<unknown>;
  updateWordStatistic: (originalWord: AggregatedWord, isTruthyAnswer: boolean) => void;
  showNextWord: () => void;
}

interface AudioCallRoundState {
  isAnswered: boolean;
  answerId: string | null;
}

function AudioCallRound({
  originalWord,
  isGameOver,
  playRoundSound,
  updateWordStatistic,
  showNextWord,
}: AudioCallRoundProps) {
  const [{ isAnswered, answerId }, setAnswer] = useState<AudioCallRoundState>({
    isAnswered: false,
    answerId: null,
  });

  const { wordsArray } = useAudioCallDataSelector();
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (userAnswerId: string | null) => {
      if (isAnswered) return;

      if (originalWord && wordsArray.length) {
        let isTruthyAnswer: boolean;
        if (!userAnswerId) {
          isTruthyAnswer = false;
        } else {
          isTruthyAnswer = originalWord.id === userAnswerId;
        }

        setAnswer((prevState) => ({ ...prevState, isAnswered: true, answerId: userAnswerId }));
        playRoundSound(isTruthyAnswer).then(() => {
          updateWordStatistic(originalWord, isTruthyAnswer);
          dispatch(saveAnswer({ word: originalWord, isTruthyAnswer }));
        });
      }
    },
    [originalWord, wordsArray.length, dispatch, playRoundSound, updateWordStatistic, isAnswered]
  );

  const handleNextButtonClick = useCallback(() => {
    if (!isAnswered) {
      setAnswer((prevState) => ({ ...prevState, isAnswered: true, answerId: null }));
    } else {
      setAnswer((prevState) => ({ ...prevState, isAnswered: false }));
      showNextWord();
    }
  }, [isAnswered, showNextWord]);

  const handleAudioButtonClick = useCallback(() => {
    if (originalWord) {
      const src = `${BASE_MEDIA_URL}${originalWord.audio}`;
      playAudio(src);
    }
  }, [originalWord]);

  const setStyledItemMode = (wordId: string): StyledItemProps['mode'] => {
    if (isAnswered) {
      if (wordId === (originalWord as Word).id) {
        return 'RIGHT';
      }
      if (answerId && answerId === wordId && answerId !== (originalWord as Word).id) {
        return 'WRONG';
      }
    }
    return 'COMMON';
  };

  useEffect(() => {
    handleAudioButtonClick();
  }, [handleAudioButtonClick]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code, key } = event;

      if (code === 'Digit5' || key === '5') {
        handleNextButtonClick();
        return;
      }

      if (code === 'Digit1' || key === '1') {
        handleClick(wordsArray[0].id);
      }
      if (code === 'Digit2' || key === '2') {
        handleClick(wordsArray[1].id);
      }
      if (code === 'Digit3' || key === '3') {
        handleClick(wordsArray[2].id);
      }
      if (code === 'Digit4' || key === '4') {
        handleClick(wordsArray[3].id);
      }
    };

    if (!isGameOver) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGameOver, wordsArray, handleClick, handleNextButtonClick]);

  return originalWord && wordsArray.length ? (
    <StyledSection>
      <StyledBox>
        {isAnswered ? (
          <StyledImage src={`${BASE_MEDIA_URL}${originalWord.image}`} />
        ) : (
          <StyledButtonPlay onClick={handleAudioButtonClick} />
        )}
        <p>{isAnswered ? originalWord.word : ''}</p>
      </StyledBox>
      <StyledList>
        {wordsArray.map((word) => (
          <StyledItem mode={setStyledItemMode(word.id)} key={uuid()}>
            <button onClick={handleClick.bind(null, word.id)} disabled={isGameOver || isAnswered}>
              {word.wordTranslate}
            </button>
          </StyledItem>
        ))}
        <StyledItem mode="DO_NOT_KNOW">
          <button onClick={handleNextButtonClick} disabled={isGameOver}>
            {isAnswered ? 'Следующее слово' : 'Не знаю'}
          </button>
        </StyledItem>
      </StyledList>
    </StyledSection>
  ) : (
    <Loading size="MEDIUM" />
  );
}

export default AudioCallRound;
