import { useCallback } from 'react';

import { AUDIOCALL_ANSWERS_ARRAY_LENGTH, STARTED_WORD_INDEX } from '../constants';
import { useAppDispatch, useUserSelector } from '../redux';
import { setWordsArray } from '../redux/slices/audioCallGameSlice';
import { setWord, setWords } from '../redux/slices/gameSlice';
import { AggregatedWord, UpdateGameDataFn, Word, WordsPage } from '../types';
import { getRandomBetween } from '../utils';

const useAudioCallGame = () => {
  const user = useUserSelector();
  const dispatch = useAppDispatch();

  const getRandomWords = (wordsList: WordsPage, currentIndex: number): Array<Word> => {
    const set = new Set([currentIndex]);
    while (set.size !== AUDIOCALL_ANSWERS_ARRAY_LENGTH) {
      const newIndex = getRandomBetween(0, wordsList.length - 1);
      set.add(newIndex);
    }
    return [...set].sort().map((index) => wordsList[index]);
  };

  const updateAudioCallData: UpdateGameDataFn = useCallback(
    ({ allWords, notEasyWords, nextWordIndex }) => {
      const originalWord = notEasyWords[nextWordIndex];
      const indexAtAllWords = user
        ? allWords.indexOf(originalWord as AggregatedWord)
        : nextWordIndex;
      const wordsArray = getRandomWords(allWords, indexAtAllWords);
      if (nextWordIndex === STARTED_WORD_INDEX) {
        dispatch(setWords({ allWords, notEasyWords }));
      } else {
        dispatch(setWord({ originalWord, wordIndex: nextWordIndex }));
      }
      dispatch(setWordsArray(wordsArray));
    },
    [user, dispatch]
  );

  return { updateAudioCallData };
};

export default useAudioCallGame;
