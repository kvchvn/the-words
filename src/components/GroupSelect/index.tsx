import React from 'react';

import { v4 as uuid } from 'uuid';

import { DELTA, MAX_GROUP } from '../../constants';
import { useGrouping } from '../../hooks';
import { Theme } from '../../types';
import { StyledButton, StyledList } from './styles';

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
    <article>
      <h3>Сложность</h3>
      <StyledList>
        {groupsArray.map((group) => (
          <li key={uuid()}>
            <StyledButton
              type="button"
              value={group}
              onClick={selectGroup}
              chosen={currentGroup === group}
              groupNum={String(group) as keyof Theme['groupColor']}
            >
              {group === MAX_GROUP ? 'Сложные' : group + DELTA}
            </StyledButton>
          </li>
        ))}
      </StyledList>
    </article>
  );
}

export default GroupSelect;
