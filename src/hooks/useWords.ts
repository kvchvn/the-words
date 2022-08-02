import { useEffect } from 'react';

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
      const { userId, token } = user;
      getUserWords({ userId, token });
    }
    if (group !== MAX_GROUP_FOR_USERS) {
      getAllWords({ group, page });
    }
  }, [user, getUserWords, group, page, getAllWords]);

  const words: UserWords | WordsPage | undefined =
    group === MAX_GROUP_FOR_USERS ? userWords : wordsPage;

  return { words, isLoading };
};

export default useWords;
