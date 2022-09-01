import { useCallback, useEffect } from 'react';

import {
  EASY_WORD,
  HARD_WORD,
  MAX_PAGE,
  MEANING_ANSWERS_AMOUNT,
  STARTED_WORD_INDEX,
} from '../constants';
import {
  useAppDispatch,
  useCreateUserWordMutation,
  useGameDataSelector,
  useGroupSelector,
  useLazyGetAggregatedWordsQuery,
  useLazyGetWordsQuery,
  usePageSelector,
  useSprintDataSelector,
  useUpdateUserWordMutation,
  useUserSelector,
} from '../redux';
import { endGame } from '../redux/slices/gameSlice';
import { goToNextPage } from '../redux/slices/wordsListSlice';
import { AggregatedWord, UpdateGameDataFn, Word, WordDifficulty, WordOptional } from '../types';
import { getUserFriendlyErrorMessage } from '../utils';

const useGame = (updateGameData: UpdateGameDataFn) => {
  const user = useUserSelector();
  const page = usePageSelector();
  const group = useGroupSelector();
  const gameData = useGameDataSelector();
  const { translatedWord } = useSprintDataSelector();

  const dispatch = useAppDispatch();

  const [getAggregatedWords] = useLazyGetAggregatedWordsQuery();
  const [getWords] = useLazyGetWordsQuery();
  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();

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

  const updateWordStatistics = useCallback(
    (originalWord: Word | AggregatedWord, isTruthyAnswer: boolean) => {
      if (user) {
        const { userId } = user;
        const { id: wordId } = originalWord;
        const difficulty = 'difficulty' in originalWord ? originalWord.difficulty : undefined;
        const optional = 'optional' in originalWord ? originalWord.optional : undefined;

        let rightAnswers = 0;
        let totalAnswers = 0;
        let answersList: Array<boolean> = [];

        if (optional) {
          rightAnswers = optional.statistics.rightAnswers;
          totalAnswers = optional.statistics.totalAnswers;
          answersList = optional.statistics.answersList;
        }

        if (isTruthyAnswer) {
          // if userAnswer is true
          rightAnswers = rightAnswers + 1;
          answersList = [...answersList, true];
        } else {
          answersList = [...answersList, false];
        }
        totalAnswers = totalAnswers + 1;

        // updated values
        const statistics = { rightAnswers, totalAnswers, answersList };
        const lastSeveralAnswers = answersList.slice(-MEANING_ANSWERS_AMOUNT);

        const setWordDifficultyAs = (newDifficulty: WordDifficulty) => {
          const updatedOptional = { ...(optional as WordOptional), statistics };
          updateUserWord({ userId, wordId, difficulty: newDifficulty, optional: updatedOptional });
        };

        const updateOptional = () => {
          // just update statistics without difficulty changing
          const updatedOptional = { ...(optional as WordOptional), statistics };
          updateUserWord({ userId, wordId, optional: updatedOptional });
        };

        if (lastSeveralAnswers.length >= MEANING_ANSWERS_AMOUNT) {
          if (!lastSeveralAnswers.includes(true)) {
            // it means that all last answers are falsy, and the word should mark as hard
            setWordDifficultyAs(HARD_WORD);
          } else if (!lastSeveralAnswers.includes(false)) {
            // all last answers are true, and the word is easy for the user
            setWordDifficultyAs(EASY_WORD);
          } else {
            updateOptional();
          }
        } else {
          if (optional || difficulty) {
            updateOptional();
          } else {
            // if the user plays with the word at the first time
            const optional = { statistics };
            createUserWord({ userId, wordId, optional });
          }
        }
      }
    },
    [createUserWord, updateUserWord, user]
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

  return { gameData, translatedWord, user, toNextWord, updateWordStatistics, finishGame };
};

export default useGame;
