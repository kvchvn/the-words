import { configureStore } from '@reduxjs/toolkit';

import apiSlice from './slices/apiSlice';
import userReducer from './slices/userSlice';
import wordsListSliceReducer from './slices/wordsListSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    words: wordsListSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export default store;
