import { useEffect } from 'react';

import {
  useLazyGetAggregatedWordQuery,
  useLazyGetWordQuery,
  useUserSelector,
  useWordIdSelector,
} from '../redux';
import { MainSignInResponse, WordResult } from '../types';

interface UseWordReturnType {
  wordData: WordResult;
  isLoading: boolean;
  user: MainSignInResponse | null;
}

const useCurrentWord = (): UseWordReturnType => {
  const user = useUserSelector();
  const wordId = useWordIdSelector();

  const [getWord, { data: word, isLoading: isWordLoading }] = useLazyGetWordQuery();
  const [getAggregatedWord, { data: aggregatedWord, isLoading: isAggregatedWordLoading }] =
    useLazyGetAggregatedWordQuery();

  useEffect(() => {
    if (wordId) {
      if (user) {
        const { userId } = user;
        getAggregatedWord({ userId, wordId });
      } else {
        getWord(wordId);
      }
    }
  }, [wordId, user, getAggregatedWord, getWord]);

  const isLoading = isWordLoading || isAggregatedWordLoading;

  const wordData = word || aggregatedWord;

  return { wordData, isLoading, user };
};

export default useCurrentWord;
