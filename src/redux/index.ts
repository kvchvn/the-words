import { useDispatch } from 'react-redux';

import rootReducer from './reducer';
import {
  useAudioCallDataSelector,
  useGameDataSelector,
  useGameResultsSelector,
  useGroupSelector,
  useIsGameOverSelector,
  useIsGameStartedSelector,
  usePageSelector,
  useSprintDataSelector,
  useUserSelector,
  useUserStatisticPerGameSelector,
  useWordIdSelector,
} from './selectors';
import {
  useCreateUserMutation,
  useCreateUserWordMutation,
  useLazyGetAggregatedWordQuery,
  useLazyGetAggregatedWordsQuery,
  useLazyGetStatisticQuery,
  useLazyGetWordQuery,
  useLazyGetWordsQuery,
  useRemoveUserWordMutation,
  useSignInUserMutation,
  useUpdateStatisticMutation,
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
  useLazyGetStatisticQuery,
  useUpdateStatisticMutation,
  setUserData,
  removeUserData,
  useGroupSelector,
  usePageSelector,
  useUserSelector,
  useWordIdSelector,
  useGameDataSelector,
  useSprintDataSelector,
  useGameResultsSelector,
  useIsGameStartedSelector,
  useIsGameOverSelector,
  useAudioCallDataSelector,
  useUserStatisticPerGameSelector,
};
