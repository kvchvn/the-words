import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Word, WordResult } from '../../types';

interface SprintGameSliceState {
  translatedWord: WordResult;
}

const initialState: SprintGameSliceState = {
  translatedWord: undefined,
};

const sprintGameSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setTranslatedWord: (state, { payload }: PayloadAction<Word>) => {
      state.translatedWord = payload;
    },
  },
});

export default sprintGameSlice.reducer;
export const { setTranslatedWord } = sprintGameSlice.actions;
