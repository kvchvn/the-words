import { useCallback } from 'react';

import { toast } from 'react-toastify';

import {
  DEFAULT_STATISTIC,
  EASY_WORD,
  HARD_WORD,
  MEANING_ANSWERS_AMOUNT,
  TAG_ID,
  WORD_WITHOUT_DIFFICULTY,
} from '../constants';
import {
  useAppDispatch,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useUserSelector,
  useUserStatisticPerGameSelector,
} from '../redux';
import { addLearnedWord, addNewWord, setGameType } from '../redux/slices/statisticSlice';
import { AggregatedWord, GameType, Word, WordDifficulty } from '../types';

const useWordStatistic = (gameType: GameType) => {
  const { type: typeOfGame } = useUserStatisticPerGameSelector();
  const user = useUserSelector();
  const dispatch = useAppDispatch();

  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();

  const updateWordStatistic = useCallback(
    (originalWord: Word | AggregatedWord, isTruthyAnswer: boolean) => {
      if (user) {
        const { userId } = user;
        const { id: wordId } = originalWord;
        const tagId = TAG_ID.game;
        const difficulty = 'difficulty' in originalWord ? originalWord.difficulty : undefined;
        const optional = 'optional' in originalWord ? originalWord.optional : undefined;

        if (!typeOfGame) {
          dispatch(setGameType(gameType));
        }

        const defaultStatistics = { ...DEFAULT_STATISTIC };
        let { rightAnswers, totalAnswers, answersList } = defaultStatistics.total;
        let {
          sprint: { rightAnswers: sprintRightAnswers, totalAnswers: sprintTotalAnswers },
          audiocall: { rightAnswers: audiocallRightAnswers, totalAnswers: audiocallTotalAnswers },
        } = defaultStatistics;

        if (optional) {
          rightAnswers = optional.statistic.total.rightAnswers;
          totalAnswers = optional.statistic.total.totalAnswers;
          answersList = optional.statistic.total.answersList;
          sprintRightAnswers = optional.statistic.sprint.rightAnswers;
          sprintTotalAnswers = optional.statistic.sprint.totalAnswers;
          audiocallRightAnswers = optional.statistic.audiocall.rightAnswers;
          audiocallTotalAnswers = optional.statistic.audiocall.totalAnswers;
        } else {
          // for gathering user's statistics
          dispatch(addNewWord());
        }

        if (isTruthyAnswer) {
          // if userAnswer is true
          rightAnswers++;
          answersList = [...answersList, true];
          switch (gameType) {
            case 'SPRINT':
              sprintRightAnswers++;
              break;
            case 'AUDIOCALL':
              audiocallRightAnswers++;
              break;
          }
        } else {
          answersList = [...answersList, false];
        }
        totalAnswers++;
        switch (gameType) {
          case 'SPRINT':
            sprintTotalAnswers++;
            break;
          case 'AUDIOCALL':
            audiocallTotalAnswers++;
            break;
        }

        // updated values
        const totalStatistics = { rightAnswers, totalAnswers, answersList };
        const sprintStatistics = {
          rightAnswers: sprintRightAnswers,
          totalAnswers: sprintTotalAnswers,
        };
        const audiocallStatistics = {
          rightAnswers: audiocallRightAnswers,
          totalAnswers: audiocallTotalAnswers,
        };

        const lastSeveralAnswers = answersList.slice(-MEANING_ANSWERS_AMOUNT);

        const updatedOptional = {
          statistic: {
            total: totalStatistics,
            sprint: sprintStatistics,
            audiocall: audiocallStatistics,
          },
        };

        const setWordDifficultyAs = (newDifficulty: WordDifficulty) => {
          updateUserWord({
            userId,
            wordId,
            difficulty: newDifficulty,
            optional: updatedOptional,
            tagId,
          });
        };

        const updateOptional = () =>
          updateUserWord({ userId, wordId, tagId, optional: updatedOptional });

        if (difficulty === EASY_WORD && !isTruthyAnswer) {
          // reset difficulty, if the user will answer wrong to an easy word
          setWordDifficultyAs(WORD_WITHOUT_DIFFICULTY);
          return;
        }

        if (lastSeveralAnswers.length >= MEANING_ANSWERS_AMOUNT) {
          if (!lastSeveralAnswers.includes(true) && difficulty !== HARD_WORD) {
            // it means that all last answers are falsy, and the word should mark as hard
            toast.success(`${originalWord.word} теперь в разделе "${HARD_WORD}"`, {
              autoClose: 1000,
            });
            setWordDifficultyAs(HARD_WORD);
          } else if (!lastSeveralAnswers.includes(false) && difficulty !== EASY_WORD) {
            // all last answers are true, and the word is easy for the user
            toast.success(`${originalWord.word} теперь в разделе "${EASY_WORD}"`, {
              autoClose: 1000,
            });
            setWordDifficultyAs(EASY_WORD);
            // for gathering user's statistics
            dispatch(addLearnedWord());
          } else {
            updateOptional();
          }
        } else {
          if (optional || difficulty) {
            updateOptional();
          } else {
            // if the user plays with the word at the first time
            createUserWord({ userId, wordId, tagId, optional: updatedOptional });
          }
        }
      }
    },
    [createUserWord, updateUserWord, user, gameType, dispatch, typeOfGame]
  );

  return { updateWordStatistic };
};

export default useWordStatistic;
