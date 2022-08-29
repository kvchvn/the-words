import { useDispatch } from 'react-redux';

import rootReducer from './reducer';
import {
  useGameDataSelector,
  useGameResultsSelector,
  useGroupSelector,
  usePageSelector,
  useSprintDataSelector,
  useUserSelector,
  useWordIdSelector,
} from './selectors';
import {
  useCreateUserMutation,
  useCreateUserWordMutation,
  useLazyGetAggregatedWordQuery,
  useLazyGetAggregatedWordsQuery,
  useLazyGetUserWordsQuery,
  useLazyGetWordQuery,
  useLazyGetWordsQuery,
  useRemoveUserWordMutation,
  useSignInUserMutation,
  useUpdateUserWordMutation,
} from './slices/apiSlice';
import { removeUserData, setUserData } from './slices/userSlice';
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
  useGameDataSelector,
  useSprintDataSelector,
  useGameResultsSelector,
};
