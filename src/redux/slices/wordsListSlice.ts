import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../utils';

const initialState = {
  group: getFromLocalStorage<number>('group') || 0,
  page: getFromLocalStorage<number>('page') || 0,
};

const wordsListSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    goToNextPage: (state) => {
      state.page++;
    },
    goToPrevPage: (state) => {
      state.page--;
    },
    goToPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    goToGroup: (state, { payload }: PayloadAction<number>) => {
      state.group = payload;
      state.page = 0;
    },
  },
});

export default wordsListSlice.reducer;
export const { goToNextPage, goToPrevPage, goToGroup } = wordsListSlice.actions;
