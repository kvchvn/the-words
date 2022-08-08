import { useEffect } from 'react';

import {
  useLazyGetWordsQuery,
  useGroupSelector,
  useLazyGetUserWordsQuery,
  useLazyGetAggregatedWordsQuery,
  usePageSelector,
  useUserSelector,
  useWordIdSelector,
} from '../redux';
import { HARD_WORD, MAX_GROUP_FOR_USERS, WORDS_PER_PAGE as wordsPerPage } from '../constants';
import { UserWord, Word, WordsResult, AggregatedWord } from '../types';

interface UseWordsReturnType {
  wordsResult: WordsResult;
  currentWord: Word | UserWord | AggregatedWord | undefined;
  isLoading: boolean;
  hardUserWords: UserWord[] | undefined;
}

const useWords = (): UseWordsReturnType => {
  const group = useGroupSelector();
  const page = usePageSelector();
  const user = useUserSelector();
  const currentWordId = useWordIdSelector();

  const [getWords, { data: words, isLoading: isWordsLoading }] = useLazyGetWordsQuery();
  const [getUserWords, { data: userWords, isLoading: isAggregatedWordsLoading }] =
    useLazyGetUserWordsQuery();
  const [getAggregatedWords, { data: aggregatedWords, isLoading: isUserWordsLoading }] =
    useLazyGetAggregatedWordsQuery();

  useEffect(() => {
    if (user) {
      const { userId } = user;
      if (group === MAX_GROUP_FOR_USERS) {
        getUserWords(userId);
      } else {
        getAggregatedWords({ group, page, userId, wordsPerPage });
      }
    } else {
      getWords({ group, page });
    }
  }, [user, group, page, getAggregatedWords, getUserWords, getWords]);

  const isLoading = isWordsLoading || isAggregatedWordsLoading || isUserWordsLoading;

  const hardUserWords = userWords?.filter((word) => word.difficulty === HARD_WORD);

  const wordsResult = group === MAX_GROUP_FOR_USERS ? hardUserWords : aggregatedWords || words;

  const currentWord: Word | UserWord | AggregatedWord | undefined = wordsResult?.find(
    (word) => word.id === currentWordId
  );

  return { wordsResult, currentWord, isLoading, hardUserWords };
};

export default useWords;
