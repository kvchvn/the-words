import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Word } from '../../types';

interface AudioCallGameSliceState {
  wordsArray: Array<Word>;
}

const initialState: AudioCallGameSliceState = {
  wordsArray: [],
};

const audioCallGameSlice = createSlice({
  name: 'audioCall',
  initialState,
  reducers: {
    setWordsArray: (state, { payload }: PayloadAction<Array<Word>>) => {
      state.wordsArray = payload;
    },
  },
});

export default audioCallGameSlice.reducer;
export const { setWordsArray } = audioCallGameSlice.actions;
