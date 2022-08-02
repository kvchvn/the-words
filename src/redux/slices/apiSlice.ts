import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './baseQueryWithReauth';

import { ENDPOINTS } from '../../constants';
import { GetUserWordsQueryArgs, GetWordsQueryArgs } from '../types';
import {
  SignInFields,
  SignInResponse,
  SignUpFields,
  SignUpResponse,
  UserWord,
  UserWords,
  UserWordsResponse,
  WordsPage,
} from '../../types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // sign up
    createUser: builder.mutation<SignUpResponse, SignUpFields>({
      query: (userData) => ({
        url: ENDPOINTS.users,
        method: 'POST',
        body: userData,
      }),
    }),
    signInUser: builder.mutation<SignInResponse, SignInFields>({
      query: (userData) => ({
        url: ENDPOINTS.signin,
        method: 'POST',
        body: userData,
      }),
    }),
    // get a chunk of all words
    getWords: builder.query<WordsPage, GetWordsQueryArgs>({
      query: ({ group, page }) => ({
        url: ENDPOINTS.words,
        params: {
          group,
          page,
        },
      }),
    }),
    // get words are user marked as 'hard' or 'easy'
    getUserWords: builder.query<UserWords, GetUserWordsQueryArgs>({
      query: ({ userId }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}`,
      }),
      transformResponse: (response: UserWordsResponse) =>
        response.map<UserWord>(({ optional, difficulty }) => ({ ...optional, difficulty })),
    }),
  }),
});

export default apiSlice;
export const {
  useCreateUserMutation,
  useSignInUserMutation,
  useLazyGetWordsQuery,
  useLazyGetUserWordsQuery,
} = apiSlice;
