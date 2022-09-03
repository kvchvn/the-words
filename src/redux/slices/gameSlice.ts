import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { STARTED_WORD_INDEX } from '../../constants';
import { AggregatedWords, Word, WordResult, WordsPage, WordsResult } from '../../types';

interface GameSliceState {
  isGameStarted: boolean;
  allWords: WordsResult;
  notEasyWords: WordsResult;
  originalWord: WordResult;
  wordIndex: number;
  isGameOver: boolean;
  results: {
    totalAnswers: number;
    rightAnswers: number;
  };
}

const initialState: GameSliceState = {
  isGameStarted: false,
  allWords: undefined,
  notEasyWords: undefined,
  originalWord: undefined,
  wordIndex: 0,
  isGameOver: false,
  results: {
    totalAnswers: 0,
    rightAnswers: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isGameStarted = true;
    },
    setWords: (
      state,
      {
        payload,
      }: PayloadAction<{
        allWords: WordsPage | AggregatedWords;
        notEasyWords: WordsPage | AggregatedWords;
      }>
    ) => {
      const { allWords, notEasyWords } = payload;
      state.allWords = [...allWords];
      state.notEasyWords = [...notEasyWords];
      state.originalWord = notEasyWords[STARTED_WORD_INDEX];
    },
    setWord: (state, { payload }: PayloadAction<{ originalWord: Word; wordIndex: number }>) => {
      const { originalWord, wordIndex } = payload;
      state.originalWord = originalWord;
      state.wordIndex = wordIndex;
    },
    saveAnswer: (state, { payload }: PayloadAction<boolean>) => {
      if (payload) {
        state.results.rightAnswers++;
      }
      state.results.totalAnswers++;
    },
    endGame: (state) => {
      state.isGameOver = true;
    },
    resetGame: () => initialState,
  },
});

export default gameSlice.reducer;
export const { setWords, setWord, endGame, resetGame, saveAnswer, startGame } = gameSlice.actions;
