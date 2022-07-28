import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetWordsQueryArg } from '../types';
import { SignInFields, SignInResponse, SignUpFields, SignUpResponse, WordsPage } from '../../types';
import { BASE_URL as baseUrl, ENDPOINTS } from '../../constants';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
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
    getWords: builder.query<WordsPage, GetWordsQueryArg>({
      query: ({ group, page }) => `${ENDPOINTS.words}?group=${group}&page=${page}`,
    }),
  }),
});

export default apiSlice;
export const { useCreateUserMutation, useSignInUserMutation, useGetWordsQuery } = apiSlice;
