import { useEffect, useMemo } from 'react';

import {
  useLazyGetWordsQuery,
  useGroupSelector,
  useLazyGetUserWordsQuery,
  usePageSelector,
  useUserSelector,
} from '../redux';
import { MAX_GROUP_FOR_USERS } from '../constants';
import { UserWords, WordsPage } from '../types';

const useWords = () => {
  const group = useGroupSelector();
  const page = usePageSelector();
  const user = useUserSelector();

  const [getAllWords, { data: wordsPage, isLoading }] = useLazyGetWordsQuery();
  const [getUserWords, { data: userWords }] = useLazyGetUserWordsQuery();

  useEffect(() => {
    if (user) {
      const { userId } = user;
      getUserWords(userId);
    }
  }, [user, getUserWords, getAllWords]);

  useEffect(() => {
    if (group !== MAX_GROUP_FOR_USERS) {
      getAllWords({ group, page });
    }
  }, [group, page, getAllWords]);

  const words: UserWords | WordsPage | undefined = useMemo(
    () => (group === MAX_GROUP_FOR_USERS ? userWords : wordsPage),
    [group, userWords, wordsPage]
  );

  return { words, isLoading };
};

export default useWords;
