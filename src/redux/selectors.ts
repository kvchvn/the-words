import { useSelector } from 'react-redux';
import { RootState } from '.';

export const useUserSelector = () => useSelector((state: RootState) => state.user);

export const useGroupSelector = () => useSelector((state: RootState) => state.words.group);

export const usePageSelector = () => useSelector((state: RootState) => state.words.page);
