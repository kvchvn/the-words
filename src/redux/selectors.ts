import { useSelector } from 'react-redux';

import { RootState } from './store';

export const useUserSelector = () => useSelector((state: RootState) => state.user);
