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
