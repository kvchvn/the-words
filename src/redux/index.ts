import { useDispatch } from 'react-redux';

import rootReducer from './reducer';
import {
  useGameDataSelector,
  useGameResultsSelector,
  useGroupSelector,
  useIsGameStarted,
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
  useIsGameStarted,
};
