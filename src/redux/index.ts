import store from './store';
import { useGetWordsQuery, useSignInUserMutation, useCreateUserMutation } from './slices/apiSlice';
import { setUserData, removeUserData } from './slices/userSlice';

export {
  store,
  useGetWordsQuery,
  useSignInUserMutation,
  useCreateUserMutation,
  setUserData,
  removeUserData,
};
