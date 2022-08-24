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
import { AggregatedWord, AggregatedWords, Word, WordsPage } from '../types';
import { EASY_WORD, MAX_PAGE, ROUTER_PATHS } from '../constants';
import { getRandomBetween, getUserFriendlyErrorMessage } from '../utils';

type WordsType = WordsPage | AggregatedWords;

interface SprintGameData {
  allWords: WordsType | undefined;
  notEasyWords: WordsType | undefined;
  originalWord: string | undefined;
  translatedWord: string | undefined;
  isRightAnswer: boolean;
  currentWordIndex: number;
  wordsRunOut: boolean;
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
    originalWord: undefined,
    translatedWord: undefined,
    isRightAnswer: false,
    currentWordIndex: 0,
    wordsRunOut: false,
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

  const updateGameData = useCallback(
    ({
      allWords,
      notEasyWords,
      nextWordIndex,
    }: {
      allWords: WordsType;
      notEasyWords: WordsType;
      nextWordIndex: number;
    }) => {
      const currentWordIndex = nextWordIndex;
      const originalWordData = notEasyWords[currentWordIndex];
      let indexAtAllWords = currentWordIndex;
      if (user) {
        indexAtAllWords = allWords.indexOf(originalWordData as AggregatedWord);
      }
      const translatedWordData = getRandomWord(allWords, indexAtAllWords);
      const originalWord = originalWordData.word;
      const translatedWord = translatedWordData.wordTranslate;
      const isRightAnswer = originalWordData.id === translatedWordData.id;
      setGameData((prevState) => {
        const required = { originalWord, translatedWord, currentWordIndex, isRightAnswer };
        // if allWords & notEasyWords aren't in the State yet
        if (currentWordIndex === 0) {
          return { ...prevState, allWords, notEasyWords, ...required };
        }
        return { ...prevState, ...required };
      });
    },
    [user]
  );

  const toNextWord = () => {
    const { notEasyWords, currentWordIndex, allWords } = gameData;
    if (notEasyWords && allWords) {
      if (currentWordIndex === notEasyWords.length - 1) {
        if (page !== MAX_PAGE) {
          dispatch(goToNextPage());
        } else {
          alert('Words ran out!');
          setGameData((prevState) => ({ ...prevState, wordsRunOut: true }));
        }
      } else {
        const nextWordIndex = currentWordIndex + 1;
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
        // if user isn't signed in, notEasyWords array be equals to allWords
        const notEasyWords = [...data].filter((word) =>
          'difficulty' in word ? word.difficulty !== EASY_WORD : true
        );
        const startedWordIndex = 0;
        updateGameData({ allWords, notEasyWords, nextWordIndex: startedWordIndex });
      }
    });
  }, [fetchWords, group, page, updateGameData]);

  useEffect(() => {
    if (gameData.wordsRunOut) {
      navigate(`/${ROUTER_PATHS.gameResults}`);
    }
  }, [gameData.wordsRunOut, navigate]);

  return { state, gameData, user, toNextWord };
};

export default useSprintWords;
