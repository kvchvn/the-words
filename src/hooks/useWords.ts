import { useEffect } from 'react';

import {
  useLazyGetWordsQuery,
  useGroupSelector,
  useLazyGetUserWordsQuery,
  usePageSelector,
  useUserSelector,
  useWordIdSelector,
} from '../redux';
import { MAX_GROUP_FOR_USERS } from '../constants';

const useWords = () => {
  const group = useGroupSelector();
  const page = usePageSelector();
  const user = useUserSelector();
  const currentWordId = useWordIdSelector();

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

  const checkWordDifficulty = (wordId: string) => {
    return userWords?.find((userWord) => userWord.id === wordId)?.difficulty;
  };

  const words = group === MAX_GROUP_FOR_USERS ? userWords : wordsPage;

  const currentWord = words?.find((word) => word.id === currentWordId);

  const currentWordDifficulty = checkWordDifficulty(currentWordId);

  return { words, userWords, currentWord, currentWordDifficulty, checkWordDifficulty, isLoading };
};

export default useWords;
