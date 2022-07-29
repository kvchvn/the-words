import { createSlice } from '@reduxjs/toolkit';
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
    goToNextGroup: (state) => {
      state.group++;
      state.page = 0;
    },
    goToPrevGroup: (state) => {
      state.group--;
      state.page = 0;
    },
  },
});

export default wordsListSlice.reducer;
export const { goToNextPage, goToPrevPage, goToNextGroup, goToPrevGroup } = wordsListSlice.actions;
