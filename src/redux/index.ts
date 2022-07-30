import { useDispatch } from 'react-redux';

import store from './store';
import rootReducer from './reducer';
import { useGetWordsQuery, useSignInUserMutation, useCreateUserMutation } from './slices/apiSlice';
import { setUserData, removeUserData } from './slices/userSlice';
import { useGroupSelector, usePageSelector, useUserSelector } from './selectors';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;

export {
  store,
  useGetWordsQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  setUserData,
  removeUserData,
  useGroupSelector,
  usePageSelector,
  useUserSelector,
};
