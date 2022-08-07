import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MIN_GROUP, MIN_PAGE } from '../../constants';
import { getFromLocalStorage } from '../../utils';

const initialState = {
  group: getFromLocalStorage<number>('group') || MIN_GROUP,
  page: getFromLocalStorage<number>('page') || MIN_PAGE,
  wordId: '',
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
    setCurrentWordId: (state, { payload }: PayloadAction<string>) => {
      state.wordId = payload;
    },
    unsetCurrentWordId: (state) => {
      state.wordId = '';
    },
  },
});

export default wordsListSlice.reducer;
export const {
  goToNextPage,
  goToPrevPage,
  goToGroup,
  goToPage,
  setCurrentWordId,
  unsetCurrentWordId,
} = wordsListSlice.actions;
