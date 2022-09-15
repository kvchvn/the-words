import { UserStatistic, WeeklyStatistic } from '../types';
import { getDateByWeekday } from '../utils';

export const DEFAULT_USER_WEEKLY_STATISTIC: WeeklyStatistic = {
  startDate: getDateByWeekday(1),
  finishDate: getDateByWeekday(7),
  mon: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  tue: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  wed: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  thu: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  fri: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  sat: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
  sun: {
    learnedWords: 0,
    rightAnswers: 0,
    totalAnswers: 0,
  },
};

export const DEFAULT_USER_STATISTIC: UserStatistic = {
  learnedWords: 0,
  optional: {
    day: new Date().getDate(),
    daily: {
      sprint: {
        newWords: 0,
        rightAnswers: 0,
        totalAnswers: 0,
      },
      audiocall: {
        newWords: 0,
        rightAnswers: 0,
        totalAnswers: 0,
      },
    },
    weekly: DEFAULT_USER_WEEKLY_STATISTIC,
  },
};
