import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainSignInResponse } from 'types';

import { getFromLocalStorage } from 'utils';

const initialState = getFromLocalStorage<MainSignInResponse>('user');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<MainSignInResponse>) => {
      state = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
