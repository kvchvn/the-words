import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from './baseQueryWithReauth';

import { ENDPOINTS } from '../../constants';
import { CreateUserWordArgs, GetWordsQueryArgs } from '../types';
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
  tagTypes: ['UserWord'],
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
    getUserWords: builder.query<UserWords, string>({
      query: (userId) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}`,
      }),
      providesTags: ['UserWord'],
      transformResponse: (response: UserWordsResponse) =>
        response.map<UserWord>(({ optional, difficulty }) => ({ ...optional, difficulty })),
    }),
    refreshToken: builder.query<SignInResponse, string>({
      query: (userId) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.tokens}`,
      }),
    }),
    createUserWord: builder.mutation<void, CreateUserWordArgs>({
      query: ({ difficulty, userId, wordId, optional }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'POST',
        body: { difficulty, optional },
      }),
      invalidatesTags: ['UserWord'],
    }),
    updateUserWord: builder.mutation<void, CreateUserWordArgs>({
      query: ({ difficulty, userId, wordId, optional }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'PUT',
        body: { difficulty, optional },
      }),
      invalidatesTags: ['UserWord'],
    }),
    removeUserWord: builder.mutation<void, Pick<CreateUserWordArgs, 'userId' | 'wordId'>>({
      query: ({ userId, wordId }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserWord'],
    }),
  }),
});

export default apiSlice;
export const {
  useCreateUserMutation,
  useSignInUserMutation,
  useLazyGetWordsQuery,
  useLazyGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
} = apiSlice;
