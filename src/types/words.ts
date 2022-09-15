import { EASY_WORD, HARD_WORD, WORD_WITHOUT_DIFFICULTY } from '../constants';

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

export type WordDifficulty = typeof HARD_WORD | typeof EASY_WORD | typeof WORD_WITHOUT_DIFFICULTY;

export interface WordStatistic {
  rightAnswers: number;
  totalAnswers: number;
  answersList: Array<boolean>;
}

export interface WordOptional {
  statistic: {
    total: WordStatistic;
    sprint: Omit<WordStatistic, 'answersList'>;
    audiocall: Omit<WordStatistic, 'answersList'>;
  };
}

export type WordsPage = Array<Word>;

export interface AggregatedWordResponse extends Omit<Word, 'id'> {
  _id: string;
  userWord: {
    difficulty: WordDifficulty;
    optional: WordOptional;
  };
}

export interface AggregatedWord extends Word {
  difficulty?: WordDifficulty;
  optional?: WordOptional;
}

export type AggregatedWords = Array<AggregatedWord>;

export type AggregatedWordsResponse = [
  {
    paginatedResults: Array<AggregatedWordResponse>;
    totalCount: [{ count: number }];
  }
];

export type WordsResult = WordsPage | AggregatedWords | undefined;

export type WordResult = Word | AggregatedWord | undefined;
