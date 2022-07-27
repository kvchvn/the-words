import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WordsPage } from 'types';
import { BASE_URL as baseUrl, ENDPOINTS } from '../constants';
import { GetWordsQueryArg } from './types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWords: builder.query<WordsPage, GetWordsQueryArg>({
      query: ({ group, page }) => `${ENDPOINTS.words}?group=${group}&page=${page}`,
    }),
  }),
});

export default apiSlice;
export const { useGetWordsQuery } = apiSlice;
