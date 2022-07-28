import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MainSignInResponse } from '../../types';
import { getFromLocalStorage } from '../../utils';

const initialState = {
  user: getFromLocalStorage<MainSignInResponse>('user'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<MainSignInResponse>) => {
      state.user = payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
