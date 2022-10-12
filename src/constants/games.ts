import { GameCongratulations, RouterPaths, WordOptional } from '../types';

export const STARTED_WORD_INDEX = 0;

export const GAME_TYPES: Pick<RouterPaths, 'sprintGame' | 'audioCallGame'> = {
  sprintGame: 'sprintGame',
  audioCallGame: 'audioCallGame',
};

export const MEANING_ANSWERS_AMOUNT = 3;

export const AUDIOCALL_ANSWERS_ARRAY_LENGTH = 4;

export const AUDIOCALL_DO_NOT_KNOW_ANSWER = 'do not know';

export const GAME_ROUND_TIME = 20;

export const ROUND_SCORE = 20;

export const MIN_COMBO = 1;

export const MIN_PROGRESS_TO_COMBO = 0;

export const MAX_PROGRESS_TO_COMBO = 3;

export const DEFAULT_STATISTIC: WordOptional['statistic'] = {
  total: {
    rightAnswers: 0,
    totalAnswers: 0,
    answersList: [],
  },
  sprint: {
    rightAnswers: 0,
    totalAnswers: 0,
  },
  audiocall: {
    rightAnswers: 0,
    totalAnswers: 0,
  },
};

export const GAME_RESULTS_CONGRATULATIONS: GameCongratulations = {
  veryBad: {
    rate: 0.1,
    message: 'Попытайтесь еще раз',
  },
  bad: {
    rate: 0.4,
    message: 'Ничего страшного. Дальше - лучше',
  },
  normal: {
    rate: 0.6,
    message: 'Хороший результат, но не расслабляйтесь',
  },
  good: {
    rate: 0.8,
    message: 'Очень хорошо! Вы молодец!',
  },
  veryGood: {
    rate: 1,
    message: 'Просто невероятно! Perfect!',
  },
};
