import { combineReducers } from '@reduxjs/toolkit';

import apiSlice from './slices/apiSlice';
import userReducer from './slices/userSlice';
import wordsListSliceReducer from './slices/wordsListSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userReducer,
  words: wordsListSliceReducer,
});

export default rootReducer;
