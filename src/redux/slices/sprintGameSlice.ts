import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Word } from '../../types';

interface SprintGameSliceState {
  translatedWord: Word | undefined;
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
