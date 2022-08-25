import { useEffect } from 'react';

import { HARD_WORD, MAX_GROUP_FOR_USERS, WORDS_PER_PAGE as wordsPerPage } from '../constants';
import {
  useLazyGetWordsQuery,
  useGroupSelector,
  useLazyGetAggregatedWordsQuery,
  usePageSelector,
  useUserSelector,
} from '../redux';
import { WordsResult } from '../types';

interface UseWordsReturnType {
  wordsResult: WordsResult;
  isLoading: boolean;
}

const useWords = (): UseWordsReturnType => {
  const group = useGroupSelector();
  const page = usePageSelector();
  const user = useUserSelector();

  const [getWords, { data: words, isLoading: isWordsLoading }] = useLazyGetWordsQuery();
  const [getAggregatedWords, { data: aggregatedWords, isLoading: isAggregatedWordsLoading }] =
    useLazyGetAggregatedWordsQuery();

  useEffect(() => {
    if (user) {
      const { userId } = user;
      if (group === MAX_GROUP_FOR_USERS) {
        const difficulty = HARD_WORD;
        getAggregatedWords({ userId, difficulty });
      } else {
        getAggregatedWords({ group, page, userId, wordsPerPage });
      }
    } else {
      getWords({ group, page });
    }
  }, [user, group, page, getAggregatedWords, getWords]);

  const isLoading = isWordsLoading || isAggregatedWordsLoading;

  const wordsResult = aggregatedWords || words;

  return { wordsResult, isLoading };
};

export default useWords;
