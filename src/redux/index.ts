import { useDispatch } from 'react-redux';

import store from './store';
import rootReducer from './reducer';
import {
  useLazyGetWordsQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  useLazyGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
} from './slices/apiSlice';
import { setUserData, removeUserData } from './slices/userSlice';
import { useGroupSelector, usePageSelector, useUserSelector, useWordIdSelector } from './selectors';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;

export {
  store,
  useLazyGetWordsQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  useLazyGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
  setUserData,
  removeUserData,
  useGroupSelector,
  usePageSelector,
  useUserSelector,
  useWordIdSelector,
};
