import { SERVER_ERROR } from '../constants';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ServerError } from '../types';

export const getUserFriendlyErrorMessage = (
  error: FetchBaseQueryError | SerializedError
): string => {
  let status = 'default';
  if ('originalStatus' in error) {
    status = String(error.originalStatus);
  } else if ('status' in error) {
    status = String(error.status);
  }
  return status in SERVER_ERROR ? SERVER_ERROR[status as keyof ServerError] : SERVER_ERROR.default;
};
