import React from 'react';

import { v4 as uuid } from 'uuid';

import { DELTA } from '../../constants';
import { useGrouping } from '../../hooks';

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
      {groupsArray.map((group) => (
        <button type="button" key={uuid()} value={group} onClick={selectGroup}>
          {currentGroup === group ? `__${group + DELTA}__` : group + DELTA}
        </button>
      ))}
    </article>
  );
}

export default GroupSelect;
