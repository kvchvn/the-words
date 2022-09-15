import { useCallback, useEffect, useState } from 'react';

import { DEFAULT_USER_STATISTIC, DEFAULT_USER_WEEKLY_STATISTIC } from '../constants';
import {
  useGameResultsSelector,
  useLazyGetStatisticQuery,
  useUpdateStatisticMutation,
  useUserSelector,
  useUserStatisticPerGameSelector,
} from '../redux';
import { UserStatistic, WeekdayStatistic, WeeklyStatistic } from '../types';
import { getUserFriendlyErrorMessage } from '../utils';

const useUserStatistic = () => {
  const [statistic, setStatistic] = useState<UserStatistic | null>(null);

  const {
    type: gameType,
    learnedWords: learnedWordsPerGame,
    newWords: newWordsPerGame,
  } = useUserStatisticPerGameSelector();
  const { rightAnswers: rightAnswersPerGame, totalAnswers: totalAnswersPerGame } =
    useGameResultsSelector();
  const user = useUserSelector();

  const [getStatistic] = useLazyGetStatisticQuery();
  const [updateStatistic] = useUpdateStatisticMutation();

  const updateWeeklyStatistic = (
    weeklyStatistic: WeeklyStatistic,
    updStatistic: WeekdayStatistic
  ) => {
    let initialWeeklyStatistic = { ...weeklyStatistic };

    const { finishDate } = initialWeeklyStatistic;
    const present = new Date();
    const presentDay = present.getDay();
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const day = days[presentDay] as keyof WeeklyStatistic;

    if (present >= finishDate) {
      initialWeeklyStatistic = { ...DEFAULT_USER_WEEKLY_STATISTIC };
    }

    const updatedDayStatistic = { ...updStatistic };
    return { ...initialWeeklyStatistic, [day]: updatedDayStatistic };
  };

  const updateUserStatistic = useCallback(async () => {
    const presentDate = new Date().getDate();

    if (user) {
      const { userId } = user;
      const { data: currentStatistic } = await getStatistic(userId);

      let initialStatistic = { ...DEFAULT_USER_STATISTIC };

      if (currentStatistic) {
        const { day } = initialStatistic.optional;
        if (day === presentDate) {
          initialStatistic = { ...currentStatistic };
        }
      }

      let { learnedWords } = initialStatistic;
      const { optional } = initialStatistic;
      const {
        day,
        daily: { sprint, audiocall },
        weekly,
      } = optional;

      const updatedSprint = { ...sprint };
      const updatedAudiocall = { ...audiocall };

      learnedWords += learnedWordsPerGame;

      switch (gameType) {
        case 'SPRINT':
          updatedSprint.newWords += newWordsPerGame;
          updatedSprint.rightAnswers += rightAnswersPerGame;
          updatedSprint.totalAnswers += totalAnswersPerGame;
          break;
        case 'AUDIOCALL':
          updatedAudiocall.newWords += newWordsPerGame;
          updatedAudiocall.rightAnswers += rightAnswersPerGame;
          updatedAudiocall.totalAnswers += totalAnswersPerGame;
          break;
      }

      const rightAnswers = updatedSprint.rightAnswers + updatedAudiocall.rightAnswers;
      const totalAnswers = updatedSprint.totalAnswers + updatedAudiocall.totalAnswers;

      const updatedWeekly = updateWeeklyStatistic(weekly, {
        learnedWords,
        rightAnswers,
        totalAnswers,
      });

      const updatedStatistic: UserStatistic = {
        learnedWords,
        optional: {
          day,
          daily: { sprint: updatedSprint, audiocall: updatedAudiocall },
          weekly: updatedWeekly,
        },
      };

      updateStatistic({ userId, updatedStatistic });
    }
  }, [
    gameType,
    getStatistic,
    updateStatistic,
    user,
    learnedWordsPerGame,
    newWordsPerGame,
    rightAnswersPerGame,
    totalAnswersPerGame,
  ]);

  useEffect(() => {
    const displayUserStatistic = async (): Promise<UserStatistic | null> => {
      if (user) {
        const present = new Date();
        const presentDate = present.getDate();
        const { userId } = user;
        const { data: currentStatistic } = await getStatistic(userId);

        if (currentStatistic) {
          const { optional } = currentStatistic;
          let { weekly } = optional;

          if (present >= weekly.finishDate) {
            weekly = { ...DEFAULT_USER_WEEKLY_STATISTIC };
          }

          const updatedOptional = { ...optional, weekly };

          if (currentStatistic.optional.day !== presentDate) {
            // reset statistic
            const updatedStatistic = { ...DEFAULT_USER_STATISTIC, optional: updatedOptional };
            await updateStatistic({
              userId,
              updatedStatistic,
            });
            return updatedStatistic;
          }
          return currentStatistic;
        }
        return DEFAULT_USER_STATISTIC;
      }
      return null;
    };

    displayUserStatistic()
      .then((data) => {
        if (data) {
          setStatistic(data);
        }
      })
      .catch((error) => {
        const message = getUserFriendlyErrorMessage(error, 'words');
        alert(message);
      });
  }, [getStatistic, updateStatistic, user]);

  return { updateUserStatistic, statistic };
};

export default useUserStatistic;
