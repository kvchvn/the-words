import { EASY_WORD, HARD_WORD, NOT_EASY_WORD } from '../constants';

export interface ServerErrorType {
  authorization: string;
  words: string;
}

export interface ServerError {
  default: string;
  '417': string;
  '403': string;
  '404': ServerErrorType;
}

export type WordDifficulty = typeof HARD_WORD | typeof EASY_WORD | typeof NOT_EASY_WORD;

export interface PreparingParams {
  page?: number;
  difficulty?: WordDifficulty;
}
