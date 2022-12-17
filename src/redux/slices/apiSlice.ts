import { createApi } from '@reduxjs/toolkit/query/react';

import { ENDPOINTS, TAG_ID, WORDS_PER_PAGE } from '../../constants';
import {
  AggregatedWord,
  AggregatedWordResponse,
  AggregatedWords,
  AggregatedWordsResponse,
  SignInFields,
  SignInResponse,
  SignUpFields,
  SignUpResponse,
  UserStatistic,
  Word,
  WordsPage,
} from '../../types';
import { prepareParams } from '../../utils';
import {
  CreateUserWordArgs,
  GetAggregatedWordArgs,
  GetAggregatedWordsArgs,
  GetWordsQueryArgs,
  UpdateUserStatisticArgs,
} from '../types';
import baseQueryWithReauth from './baseQueryWithReauth';

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
    getWord: builder.query<Word, string>({
      query: (wordId) => `${ENDPOINTS.words}/${wordId}`,
    }),
    getAggregatedWords: builder.query<AggregatedWords, GetAggregatedWordsArgs>({
      query: ({ userId, group, page, wordsPerPage = WORDS_PER_PAGE, difficulty }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.aggregatedWords}`,
        params: {
          group,
          wordsPerPage,
          filter: prepareParams({ page, difficulty }),
        },
      }),
      providesTags: [{ type: 'UserWord', id: TAG_ID.difficulty }],
      transformResponse: (response: AggregatedWordsResponse) =>
        response[0].paginatedResults.map(({ userWord, _id, ...restOptions }) => ({
          id: _id,
          ...userWord,
          ...restOptions,
        })),
    }),
    getAggregatedWord: builder.query<AggregatedWord, GetAggregatedWordArgs>({
      query: ({ userId, wordId }) =>
        `${ENDPOINTS.users}/${userId}${ENDPOINTS.aggregatedWords}/${wordId}`,
      providesTags: [{ type: 'UserWord', id: TAG_ID.difficulty }],
      transformResponse: (response: Array<AggregatedWordResponse>) => {
        const { _id, userWord, ...options } = response[0];
        return { id: _id, ...userWord, ...options };
      },
    }),
    refreshToken: builder.query<SignInResponse, string>({
      query: (userId) => `${ENDPOINTS.users}/${userId}${ENDPOINTS.tokens}`,
    }),
    createUserWord: builder.mutation<void, CreateUserWordArgs>({
      query: ({ difficulty, userId, wordId, optional }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'POST',
        body: { difficulty, optional },
      }),
      invalidatesTags: (_, __, { tagId }) => [{ type: 'UserWord', id: tagId }],
    }),
    updateUserWord: builder.mutation<void, CreateUserWordArgs>({
      query: ({ difficulty, userId, wordId, optional }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'PUT',
        body: { difficulty, optional },
      }),
      invalidatesTags: (_, __, { tagId }) => [{ type: 'UserWord', id: tagId }],
    }),
    removeUserWord: builder.mutation<void, Pick<CreateUserWordArgs, 'userId' | 'wordId'>>({
      query: ({ userId, wordId }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.words}/${wordId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserWord'],
    }),
    getStatistic: builder.query<UserStatistic, string>({
      query: (userId) => `${ENDPOINTS.users}/${userId}${ENDPOINTS.statistics}`,
    }),
    updateStatistic: builder.mutation<void, UpdateUserStatisticArgs>({
      query: ({ userId, updatedStatistic: { learnedWords, optional } }) => ({
        url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.statistics}`,
        method: 'PUT',
        body: { learnedWords, optional },
      }),
    }),
  }),
});

export default apiSlice;
export const {
  useCreateUserMutation,
  useSignInUserMutation,
  useLazyGetWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useRemoveUserWordMutation,
  useLazyGetAggregatedWordsQuery,
  useLazyGetAggregatedWordQuery,
  useLazyGetWordQuery,
  useLazyGetStatisticQuery,
  useUpdateStatisticMutation,
} = apiSlice;
