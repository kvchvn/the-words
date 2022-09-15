import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameType } from '../../types';

interface StatisticSliceState {
  perGame: {
    type: GameType | null;
    newWords: number;
    learnedWords: number;
  };
}

const initialState: StatisticSliceState = {
  perGame: {
    type: null,
    newWords: 0,
    learnedWords: 0,
  },
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    setGameType: (state, { payload }: PayloadAction<GameType>) => {
      state.perGame.type = payload;
    },
    addNewWord: (state) => {
      state.perGame.newWords++;
    },
    addLearnedWord: (state) => {
      state.perGame.learnedWords++;
    },
    resetGameStatistic: (state) => {
      state.perGame = initialState.perGame;
    },
  },
});

export default statisticSlice.reducer;
export const { addNewWord, addLearnedWord, resetGameStatistic, setGameType } =
  statisticSlice.actions;
