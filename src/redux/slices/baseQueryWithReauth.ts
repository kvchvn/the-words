import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { RootState } from '..';
import { removeUserData, setUserData } from './userSlice';
import { BASE_URL as baseUrl, TOKEN_EXPIRED_ERROR } from '../../constants';
import { SignInResponse } from '../../types';
import { clearLocalStorage } from '../../utils';
import apiSlice from './apiSlice';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, api) => {
    const store = api.getState() as RootState;
    if (store && store.user.user) {
      const { token, refreshToken } = store.user.user;
      if (api.endpoint === 'refreshToken') {
        headers.set('Authorization', `Bearer ${refreshToken}`);
      } else {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  const store = api.getState() as RootState;
  if (store && store.user.user) {
    const { userId } = store.user.user;

    if (
      result.error &&
      result.error.status === 'PARSING_ERROR' &&
      result.error.originalStatus === TOKEN_EXPIRED_ERROR
    ) {
      const refreshToken = apiSlice.endpoints.refreshToken.initiate(userId);
      const refreshTokenResult = await refreshToken(api.dispatch, api.getState, api.extra);
      if (refreshTokenResult && refreshTokenResult.data) {
        const { message: _, ...mainData } = refreshTokenResult.data as SignInResponse;
        api.dispatch(setUserData(mainData));

        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(removeUserData());
        clearLocalStorage();
      }
    }
  }
  return result;
};

export default baseQueryWithReauth;
