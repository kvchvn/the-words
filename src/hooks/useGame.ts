import { useCallback, useEffect } from 'react';

import { EASY_WORD, MAX_PAGE, STARTED_WORD_INDEX } from '../constants';
import {
  useAppDispatch,
  useGameDataSelector,
  useGroupSelector,
  useLazyGetAggregatedWordsQuery,
  useLazyGetWordsQuery,
  usePageSelector,
  useSprintDataSelector,
  useUserSelector,
} from '../redux';
import { endGame } from '../redux/slices/gameSlice';
import { goToNextPage } from '../redux/slices/wordsListSlice';
import { UpdateGameDataFn } from '../types';
import { getUserFriendlyErrorMessage } from '../utils';

const useGame = (updateGameData: UpdateGameDataFn) => {
  const user = useUserSelector();
  const page = usePageSelector();
  const group = useGroupSelector();
  const dispatch = useAppDispatch();

  const gameData = useGameDataSelector();
  const { translatedWord } = useSprintDataSelector();

  const [getAggregatedWords] = useLazyGetAggregatedWordsQuery();
  const [getWords] = useLazyGetWordsQuery();

  const finishGame = () => dispatch(endGame());

  const fetchWords = useCallback(
    async (group: number, page: number) => {
      if (user) {
        const { userId } = user;
        return await getAggregatedWords({ userId, group, page });
      }
      return await getWords({ group, page });
    },
    [getAggregatedWords, getWords, user]
  );

  const toNextWord = () => {
    const { notEasyWords, wordIndex, allWords } = gameData;
    if (allWords && notEasyWords) {
      if (wordIndex === notEasyWords.length - 1) {
        if (page !== MAX_PAGE) {
          dispatch(goToNextPage());
        } else {
          alert('Words ran out!');
          finishGame();
        }
      } else {
        const nextWordIndex = wordIndex + 1;
        updateGameData({ allWords, notEasyWords, nextWordIndex });
      }
    }
  };

  useEffect(() => {
    fetchWords(group, page).then(({ data, isError, error }) => {
      if (isError && error) {
        getUserFriendlyErrorMessage(error, 'words');
      } else if (data) {
        const allWords = [...data];
        const notEasyWords = [...data].filter((word) =>
          'difficulty' in word ? word.difficulty !== EASY_WORD : true
        );
        updateGameData({ allWords, notEasyWords, nextWordIndex: STARTED_WORD_INDEX });
      }
    });
  }, [fetchWords, group, page, updateGameData, dispatch]);

  return { gameData, translatedWord, user, toNextWord, finishGame };
};

export default useGame;
