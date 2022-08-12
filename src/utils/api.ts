import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { SERVER_ERROR } from '../constants';
import { PreparingParams, ServerError, ServerErrorType } from '../types';

const getErrorStatus = (error: FetchBaseQueryError | SerializedError): number | null => {
  if ('originalStatus' in error) {
    return error.originalStatus;
  }
  if ('status' in error) {
    if (typeof error.status === 'number') {
      return error.status;
    }
  }
  return null;
};

export const getUserFriendlyErrorMessage = (
  error: FetchBaseQueryError | SerializedError,
  type: keyof ServerErrorType
): string => {
  const errorStatus = getErrorStatus(error);
  const formattedErrorStatus = errorStatus ? String(errorStatus) : 'default';

  const message =
    formattedErrorStatus in SERVER_ERROR
      ? SERVER_ERROR[formattedErrorStatus as keyof ServerError]
      : SERVER_ERROR.default;
  if (typeof message === 'object') {
    return message[type];
  }
  return message;
};

export const prepareParams = ({ page, difficulty }: PreparingParams) => {
  if (page !== undefined) {
    return `{"page":${page}}`;
  }
  if (difficulty) {
    return `{"userWord.difficulty":"${difficulty}"}`;
  }
  return '';
};
