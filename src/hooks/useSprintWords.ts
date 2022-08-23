import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  useAppDispatch,
  useGroupSelector,
  useLazyGetAggregatedWordsQuery,
  useLazyGetWordsQuery,
  usePageSelector,
  useUserSelector,
} from '../redux';
import { goToNextPage } from '../redux/slices/wordsListSlice';
import { AggregatedWords, WordsPage } from '../types';
import { EASY_WORD, MAX_PAGE, ROUTER_PATHS } from '../constants';
import { getUserFriendlyErrorMessage } from '../utils';

type WordsType = WordsPage | AggregatedWords | undefined;

interface SprintGameData {
  allWords: WordsType;
  notEasyWords: WordsType;
  currentWord: string | undefined;
  currentWordIndex: number;
  wordsRunOut: boolean;
  answers: Array<string> | undefined;
}

const useSprintWords = () => {
  const { state } = useLocation();
  const user = useUserSelector();
  const page = usePageSelector();
  const group = useGroupSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [getAggregatedWords] = useLazyGetAggregatedWordsQuery();
  const [getWords] = useLazyGetWordsQuery();

  const [gameData, setGameData] = useState<SprintGameData>({
    allWords: undefined,
    notEasyWords: undefined,
    currentWord: undefined,
    currentWordIndex: 0,
    wordsRunOut: false,
    answers: undefined,
  });

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
    const { notEasyWords, currentWordIndex } = gameData;
    if (notEasyWords) {
      if (currentWordIndex === notEasyWords.length - 1) {
        if (page !== MAX_PAGE) {
          dispatch(goToNextPage());
        } else {
          alert('Words ran out!');
          setGameData((prevState) => ({ ...prevState, wordsRunOut: true }));
        }
      } else {
        const nextIndex = currentWordIndex + 1;
        const nextWord = notEasyWords[nextIndex].word;
        setGameData((prevState) => ({ ...prevState, word: nextWord, wordIndex: nextIndex }));
      }
    }
  };

  useEffect(() => {
    fetchWords(group, page).then(({ data, isError, error }) => {
      if (isError && error) {
        getUserFriendlyErrorMessage(error, 'words');
      } else if (data) {
        const allWords = [...data];
        // if user isn't signed in, notEasyWords array be equals to allWords
        const notEasyWords = [...data].filter((word) =>
          'difficulty' in word ? word.difficulty !== EASY_WORD : true
        );
        const currentWordIndex = 0;
        const currentWord = notEasyWords[currentWordIndex].word;
        setGameData((prevState) => ({
          ...prevState,
          allWords,
          notEasyWords,
          currentWord,
          currentWordIndex,
        }));
      }
    });
  }, [fetchWords, group, page]);

  useEffect(() => {
    if (gameData.wordsRunOut) {
      navigate(ROUTER_PATHS.gameResults);
    }
  }, [gameData.wordsRunOut, navigate]);

  return { state, gameData, user, toNextWord };
};

export default useSprintWords;
