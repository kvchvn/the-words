import { combineReducers } from '@reduxjs/toolkit';

import apiSlice from './slices/apiSlice';
import audioCallGameReducer from './slices/audioCallGameSlice';
import gameReducer from './slices/gameSlice';
import sprintGameReducer from './slices/sprintGameSlice';
import userReducer from './slices/userSlice';
import wordsListSliceReducer from './slices/wordsListSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userReducer,
  words: wordsListSliceReducer,
  game: gameReducer,
  sprint: sprintGameReducer,
  audioCall: audioCallGameReducer,
});

export default rootReducer;
