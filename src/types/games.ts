import { WordsResult } from './words';

export interface UpdateGameDataParams {
  allWords: Exclude<WordsResult, undefined>;
  notEasyWords: Exclude<WordsResult, undefined>;
  nextWordIndex: number;
}

export type UpdateGameDataFn = (options: UpdateGameDataParams) => void;
