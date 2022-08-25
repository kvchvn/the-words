import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';

const saveToLocalStorage: Middleware<Record<string, unknown>, RootState> =
  (state) => (next) => (action: PayloadAction<number>) => {
    const result = next(action);

    if (action.type.startsWith('words')) {
      const savedGroup = getFromLocalStorage<number>('group');
      const savedPage = getFromLocalStorage<number>('page');

      const { group: currentGroup, page: currentPage } = state.getState().words;

      if (savedGroup !== currentGroup) {
        setToLocalStorage<number>('group', currentGroup);
      }

      if (savedPage !== currentPage) {
        setToLocalStorage<number>('page', currentPage);
      }
    }

    return result;
  };

export default saveToLocalStorage;
