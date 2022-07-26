import { WordDifficulty } from './words';

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
  page?: number;
  difficulty?: WordDifficulty;
}

export interface TagId {
  difficulty: 'DIFFICULTY';
  game: 'GAME';
}
