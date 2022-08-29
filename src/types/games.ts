import { WordsResult } from './words';

export interface UpdateGameDataParams {
  allWords: WordsResult;
  notEasyWords: WordsResult;
  nextWordIndex: number;
}

export type UpdateGameDataFn = (options: UpdateGameDataParams) => void;
