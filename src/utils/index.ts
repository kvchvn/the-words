import { getErrorStatus, getUserFriendlyErrorMessage, prepareParams } from './api';
import {
  clearLocalStorage,
  disableScrolling,
  enableScrolling,
  getDateByWeekday,
  getFromLocalStorage,
  getRandomBetween,
  removeFromLocalStorage,
  setToLocalStorage,
} from './common';

export {
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  getUserFriendlyErrorMessage,
  disableScrolling,
  enableScrolling,
  prepareParams,
  getRandomBetween,
  getErrorStatus,
  getDateByWeekday,
};
