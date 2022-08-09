import { EASY_WORD, HARD_WORD } from '../constants';
import { Word } from '../types';

export interface GetWordsQueryArgs {
  group: number;
  page: number;
}

export interface CreateUserWordArgs {
  difficulty: typeof HARD_WORD | typeof EASY_WORD;
  userId: string;
  wordId: string;
  optional: Word;
}

export interface GetAggregatedWordsArgs {
  userId: string;
  group?: number;
  page?: number;
  wordsPerPage?: number;
  difficulty?: typeof HARD_WORD | typeof EASY_WORD;
}

export interface GetAggregatedWordArgs extends Pick<GetAggregatedWordsArgs, 'userId'> {
  wordId: string;
}
