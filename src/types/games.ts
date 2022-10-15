import { WordsResult } from './words';

export interface UpdateGameDataParams {
  allWords: Exclude<WordsResult, undefined>;
  notEasyWords: Exclude<WordsResult, undefined>;
  nextWordIndex: number;
}

export type UpdateGameDataFn = (options: UpdateGameDataParams) => void;

export type GameType = 'SPRINT' | 'AUDIOCALL';

export interface GameCongratulations {
  veryBad: {
    rate: number;
    message: string;
  };
  bad: {
    rate: number;
    message: string;
  };
  normal: {
    rate: number;
    message: string;
  };
  good: {
    rate: number;
    message: string;
  };
  veryGood: {
    rate: number;
    message: string;
  };
}
