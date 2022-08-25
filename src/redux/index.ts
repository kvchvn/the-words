import { useDispatch } from 'react-redux';

import rootReducer from './reducer';
import { useGroupSelector, usePageSelector, useUserSelector, useWordIdSelector } from './selectors';
import {
  useLazyGetWordsQuery,
  useLazyGetWordQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  useLazyGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
  useLazyGetAggregatedWordsQuery,
  useLazyGetAggregatedWordQuery,
} from './slices/apiSlice';
import { setUserData, removeUserData } from './slices/userSlice';
import store from './store';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;

export {
  store,
  useLazyGetWordsQuery,
  useLazyGetWordQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  useLazyGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
  useLazyGetAggregatedWordsQuery,
  useLazyGetAggregatedWordQuery,
  setUserData,
  removeUserData,
  useGroupSelector,
  usePageSelector,
  useUserSelector,
  useWordIdSelector,
};
