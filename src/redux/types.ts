import { WordDifficulty, WordOptional } from '../types';

export interface GetWordsQueryArgs {
  group: number;
  page: number;
}

export interface CreateUserWordArgs {
  difficulty?: WordDifficulty;
  userId: string;
  wordId: string;
  optional?: WordOptional;
}

export interface GetAggregatedWordsArgs {
  userId: string;
  group?: number;
  page?: number;
  wordsPerPage?: number;
  difficulty?: WordDifficulty;
}

export interface GetAggregatedWordArgs extends Pick<GetAggregatedWordsArgs, 'userId'> {
  wordId: string;
}
