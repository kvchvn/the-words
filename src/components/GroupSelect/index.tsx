import React from 'react';
import { v4 as uuid } from 'uuid';

interface GroupSelectProps {
  count: number;
}

function GroupSelect({ count }: GroupSelectProps) {
  // count = max number of group
  const groups: number[] = new Array(count).fill(0).map((group, index) => group + (index + 1));

  return (
    <article>
      {groups.map((group) => (
        <button type="button" key={uuid()}>
          {group}
        </button>
      ))}
    </article>
  );
}

export default GroupSelect;
