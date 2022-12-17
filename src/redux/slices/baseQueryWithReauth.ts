import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

import { RootState } from '..';
import { BASE_URL as baseUrl, MIN_GROUP, TOKEN_EXPIRED_ERROR } from '../../constants';
import { SignInResponse } from '../../types';
import { clearLocalStorage } from '../../utils';
import apiSlice from './apiSlice';
import { removeUserData, setUserData } from './userSlice';
import { goToGroup } from './wordsListSlice';

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
  const logOut = () => {
    api.dispatch(removeUserData());
    api.dispatch(goToGroup(MIN_GROUP));
    clearLocalStorage();
    toast.warning('Время ожидания истекло. Вам следует войти заново');
  };
  const store = api.getState() as RootState;

  if (store && store.user.user) {
    const { userId } = store.user.user;

    if (
      result.error &&
      result.error.status === 'PARSING_ERROR' &&
      result.error.originalStatus === TOKEN_EXPIRED_ERROR
    ) {
      // if refreshToken request has been sent yet
      if (api.endpoint === 'refreshToken') {
        logOut();
      }
      const refreshToken = apiSlice.endpoints.refreshToken.initiate(userId);
      const refreshTokenResult = await refreshToken(api.dispatch, api.getState, api.extra);
      if (refreshTokenResult.data) {
        const { message: _, ...mainData } = refreshTokenResult.data as SignInResponse;
        api.dispatch(setUserData(mainData));

        result = await baseQuery(args, api, extraOptions);
      } else {
        logOut();
      }
    }
  }
  return result;
};

export default baseQueryWithReauth;
