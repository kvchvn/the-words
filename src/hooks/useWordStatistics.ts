import { useCallback } from 'react';

import {
  DEFAULT_STATISTICS,
  EASY_WORD,
  HARD_WORD,
  MEANING_ANSWERS_AMOUNT,
  TAG_ID,
  WORD_WITHOUT_DIFFICULTY,
} from '../constants';
import { useCreateUserWordMutation, useUpdateUserWordMutation, useUserSelector } from '../redux';
import { AggregatedWord, GameType, Word, WordDifficulty } from '../types';

const useWordStatistics = (gameType: GameType) => {
  const user = useUserSelector();

  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();

  const updateWordStatistics = useCallback(
    (originalWord: Word | AggregatedWord, isTruthyAnswer: boolean) => {
      if (user) {
        const { userId } = user;
        const { id: wordId } = originalWord;
        const tagId = TAG_ID.game;
        const difficulty = 'difficulty' in originalWord ? originalWord.difficulty : undefined;
        const optional = 'optional' in originalWord ? originalWord.optional : undefined;

        const defaultStatistics = { ...DEFAULT_STATISTICS };
        let { rightAnswers, totalAnswers, answersList } = defaultStatistics.total;
        let {
          sprint: { rightAnswers: sprintRightAnswers, totalAnswers: sprintTotalAnswers },
          audiocall: { rightAnswers: audiocallRightAnswers, totalAnswers: audiocallTotalAnswers },
        } = defaultStatistics;

        if (optional) {
          rightAnswers = optional.statistics.total.rightAnswers;
          totalAnswers = optional.statistics.total.totalAnswers;
          answersList = optional.statistics.total.answersList;
          sprintRightAnswers = optional.statistics.sprint.rightAnswers;
          sprintTotalAnswers = optional.statistics.sprint.totalAnswers;
          audiocallRightAnswers = optional.statistics.audiocall.rightAnswers;
          audiocallTotalAnswers = optional.statistics.audiocall.totalAnswers;
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
          statistics: {
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
          if (!lastSeveralAnswers.includes(true)) {
            // it means that all last answers are falsy, and the word should mark as hard
            alert(`${originalWord.word} теперь в разделе "${HARD_WORD}"`);
            setWordDifficultyAs(HARD_WORD);
          } else if (!lastSeveralAnswers.includes(false)) {
            // all last answers are true, and the word is easy for the user
            alert(`${originalWord.word} теперь в разделе "${EASY_WORD}"`);
            setWordDifficultyAs(EASY_WORD);
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
    [createUserWord, updateUserWord, user, gameType]
  );

  return { updateWordStatistics };
};

export default useWordStatistics;
