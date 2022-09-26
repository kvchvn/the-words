import React from 'react';

import { v4 as uuid } from 'uuid';

import { DELTA } from '../../constants';
import { useGrouping } from '../../hooks';
import { Theme } from '../../types';
import { StyledButton, StyledGroupBox } from './styles';

interface GroupSelectProps {
  firstGroup: number;
  lastGroupForUsers: number;
  lastGroupForGuests: number;
}

function GroupSelect({ firstGroup, lastGroupForUsers, lastGroupForGuests }: GroupSelectProps) {
  const { groupsArray, currentGroup, selectGroup } = useGrouping({
    firstGroup,
    lastGroupForUsers,
    lastGroupForGuests,
  });

  return (
    <StyledGroupBox>
      {groupsArray.map((group) => (
        <StyledButton
          type="button"
          key={uuid()}
          value={group}
          onClick={selectGroup}
          chosen={currentGroup === group}
          groupNum={String(group) as keyof Theme['groupColor']}
        >
          {group + DELTA}
        </StyledButton>
      ))}
    </StyledGroupBox>
  );
}

export default GroupSelect;
