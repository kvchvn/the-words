import { useCallback } from 'react';

import { STARTED_WORD_INDEX } from '../constants';
import { useAppDispatch, useUserSelector } from '../redux';
import { setWord, setWords } from '../redux/slices/gameSlice';
import { setTranslatedWord } from '../redux/slices/sprintGameSlice';
import { AggregatedWord, AggregatedWords, UpdateGameDataFn, Word, WordsPage } from '../types';
import { getRandomBetween } from '../utils';

const useSprintGame = () => {
  const user = useUserSelector();
  const dispatch = useAppDispatch();

  const getRandomWord = (
    wordsList: WordsPage | AggregatedWords,
    currentIndex: number
  ): Word | AggregatedWord => {
    // it's made in order to true answers are encountering more times
    const RANGE_WIDTH = 1;
    const minIndex = currentIndex - RANGE_WIDTH;
    const maxIndex = currentIndex + RANGE_WIDTH;
    const correctedMinIndex = minIndex < 0 ? 0 : minIndex;
    const correctedMaxIndex = maxIndex > wordsList.length - 1 ? wordsList.length - 1 : maxIndex;
    const randomWordIndex = getRandomBetween(correctedMinIndex, correctedMaxIndex);
    return wordsList[randomWordIndex];
  };

  const updateSprintData: UpdateGameDataFn = useCallback(
    ({ allWords, notEasyWords, nextWordIndex }) => {
      if (allWords && notEasyWords) {
        const originalWord = notEasyWords[nextWordIndex];
        const indexAtAllWords = user
          ? allWords.indexOf(originalWord as AggregatedWord)
          : nextWordIndex;
        const translatedWord = getRandomWord(allWords, indexAtAllWords);
        if (nextWordIndex === STARTED_WORD_INDEX) {
          dispatch(setWords({ allWords, notEasyWords }));
        } else {
          dispatch(setWord({ originalWord, wordIndex: nextWordIndex }));
        }
        dispatch(setTranslatedWord(translatedWord));
      }
    },
    [dispatch, user]
  );

  return { updateSprintData };
};

export default useSprintGame;
