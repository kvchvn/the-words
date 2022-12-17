import { MouseEvent } from 'react';

import { useGroupSelector, useAppDispatch, useUserSelector } from '../redux';
import { goToGroup } from '../redux/slices/wordsListSlice';

interface useGroupingHookArgs {
  firstGroup: number;
  lastGroupForUsers: number;
  lastGroupForGuests: number;
}

const useGrouping = ({
  firstGroup,
  lastGroupForUsers,
  lastGroupForGuests,
}: useGroupingHookArgs) => {
  const user = useUserSelector();
  const lastGroup = user ? lastGroupForUsers : lastGroupForGuests;

  const groupsArray: number[] = new Array(lastGroup - firstGroup + 1)
    .fill(firstGroup)
    .map((group, index) => group + index);

  const currentGroup = useGroupSelector();
  const dispatch = useAppDispatch();

  const selectGroup = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const groupNum = target.value ? Number(target.value) : 0;
    dispatch(goToGroup(groupNum));
  };

  return { groupsArray, currentGroup, selectGroup };
};

export default useGrouping;
