import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { RootState } from '..';
import { removeUserData, setUserData } from './userSlice';
import { BASE_URL as baseUrl, ENDPOINTS, TOKEN_EXPIRED_ERROR } from '../../constants';
import { SignInResponse } from '../../types';
import { clearLocalStorage } from '../../utils';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, api) => {
    const store = api.getState() as RootState;
    if (store && store.user.user) {
      const { token } = store.user.user;
      headers.set('Authorization', `Bearer ${token}`);
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
    const { userId, refreshToken } = store.user.user;
    if (
      result.error &&
      result.error.status === 'PARSING_ERROR' &&
      result.error.originalStatus === TOKEN_EXPIRED_ERROR
    ) {
      const refreshTokenResult = await baseQuery(
        {
          url: `${ENDPOINTS.users}/${userId}${ENDPOINTS.tokens}`,
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
        api,
        extraOptions
      );
      if (refreshTokenResult.data) {
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
