import { EASY_WORD, HARD_WORD } from '../constants';

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

export interface PreparingParams {
  page: number;
  difficulty?: typeof HARD_WORD | typeof EASY_WORD;
}
