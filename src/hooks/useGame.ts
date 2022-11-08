import { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import rightAnswerSound from '../assets/sounds/right.mp3';
import wrongAnswerSound from '../assets/sounds/wrong.mp3';
import {
  EASY_WORD,
  FROM_MAIN,
  FROM_TEXTBOOK,
  MAX_PAGE,
  ROUTER_PATHS,
  STARTED_WORD_INDEX,
} from '../constants';
import {
  useAppDispatch,
  useGameDataSelector,
  useGroupSelector,
  useIsGameStartedSelector,
  useLazyGetAggregatedWordsQuery,
  useLazyGetWordsQuery,
  usePageSelector,
  useUserSelector,
} from '../redux';
import { endGame } from '../redux/slices/gameSlice';
import { goToNextPage } from '../redux/slices/wordsListSlice';
import { UpdateGameDataFn } from '../types';
import { getUserFriendlyErrorMessage } from '../utils';
import { playAudio } from '../utils/common';

const useGame = (
  entry: typeof FROM_MAIN | typeof FROM_TEXTBOOK | null,
  updateGameData: UpdateGameDataFn
) => {
  const user = useUserSelector();
  const page = usePageSelector();
  const group = useGroupSelector();
  const gameData = useGameDataSelector();
  const isGameStarted = useIsGameStartedSelector();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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

  const playRoundSound = (isTruthyAnswer: boolean) => {
    const src = isTruthyAnswer ? rightAnswerSound : wrongAnswerSound;
    return playAudio(src);
  };

  const toNextWord = () => {
    const { notEasyWords, wordIndex, allWords } = gameData;
    if (allWords && notEasyWords) {
      if (wordIndex === notEasyWords.length - 1) {
        if (page !== MAX_PAGE) {
          dispatch(goToNextPage());
        } else {
          toast.success('Слова закончились!');
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
        const notEasyWords =
          entry === FROM_MAIN
            ? [...data]
            : [...data].filter((word) =>
                'difficulty' in word ? word.difficulty !== EASY_WORD : true
              );
        updateGameData({ allWords, notEasyWords, nextWordIndex: STARTED_WORD_INDEX });
      }
    });
  }, [fetchWords, group, page, updateGameData, dispatch, entry]);

  useEffect(() => {
    // if user goes to game-page directly (by entering address to searchbar)
    if (!isGameStarted) {
      navigate(ROUTER_PATHS.main);
    }
  }, [navigate, isGameStarted]);

  return {
    gameData,
    user,
    toNextWord,
    playRoundSound,
    finishGame,
  };
};

export default useGame;
