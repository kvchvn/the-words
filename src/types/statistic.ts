export interface GameStatistic {
  newWords: number;
  rightAnswers: number;
  totalAnswers: number;
}

export interface WeekdayStatistic {
  learnedWords: number;
  rightAnswers: number;
  totalAnswers: number;
}

export interface WeeklyStatistic {
  startDate: string;
  finishDate: string;
  mon: WeekdayStatistic;
  tue: WeekdayStatistic;
  wed: WeekdayStatistic;
  thu: WeekdayStatistic;
  fri: WeekdayStatistic;
  sat: WeekdayStatistic;
  sun: WeekdayStatistic;
}

export interface UserStatistic {
  learnedWords: number;
  optional: {
    day: number;
    daily: {
      sprint: GameStatistic;
      audiocall: GameStatistic;
    };
    weekly: WeeklyStatistic;
  };
}
