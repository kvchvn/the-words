import { TAG_ID } from '../constants';
import { TagId, UserStatistic, WordDifficulty, WordOptional } from '../types';

export interface GetWordsQueryArgs {
  group: number;
  page: number;
}

export interface CreateUserWordArgs {
  userId: string;
  wordId: string;
  tagId: typeof TAG_ID[keyof TagId];
  difficulty?: WordDifficulty;
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

export interface UpdateUserStatisticArgs {
  userId: string;
  updatedStatistic: Partial<UserStatistic>;
}
