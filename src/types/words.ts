import { EASY_WORD, HARD_WORD } from '../constants';

export interface Word {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export type WordsPage = Array<Word>;

export interface AggregatedWordResponse extends Omit<Word, 'id'> {
  _id: string;
  userWord: {
    difficulty: typeof HARD_WORD | typeof EASY_WORD;
    optional: {
      [key: string]: string;
    };
  };
}

export interface AggregatedWord extends Word {
  difficulty: typeof HARD_WORD | typeof EASY_WORD;
  optional: {
    [key: string]: string;
  };
}

export type AggregatedWords = Array<AggregatedWord>;

export type AggregatedWordsResponse = [
  {
    paginatedResults: Array<AggregatedWordResponse>;
    totalCount: [{ count: number }];
  }
];

export interface UserWordResponse {
  id: string;
  wordId: string;
  difficulty: string;
  optional: Word;
}

export interface UserWord extends Word {
  difficulty: string;
}

export type UserWordsResponse = Array<UserWordResponse>;

export type UserWords = Array<UserWord>;

export type WordsResult = WordsPage | UserWords | AggregatedWords | undefined;
