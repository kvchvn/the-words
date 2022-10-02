import React from 'react';

import { v4 as uuid } from 'uuid';

import { DELTA, MAX_GROUP } from '../../constants';
import { useGrouping } from '../../hooks';
import { useUserSelector } from '../../redux';
import { Theme } from '../../types';
import { StyledButton, StyledGroupBox } from './styles';

interface GroupSelectProps {
  firstGroup: number;
  lastGroupForUsers: number;
  lastGroupForGuests: number;
}

function GroupSelect({ firstGroup, lastGroupForUsers, lastGroupForGuests }: GroupSelectProps) {
  const user = useUserSelector();
  const { groupsArray, currentGroup, selectGroup } = useGrouping({
    firstGroup,
    lastGroupForUsers,
    lastGroupForGuests,
  });

  return (
    <StyledGroupBox>
      {!user && <p>Зарегистрируйтесь или войдите, чтобы получить доступ ко всем возможностям.</p>}
      <p>
        В учебнике вы можете узнать подробную информацию о выбранном слове: перевод, произношение.
        Добавить слово в &quot;Сложные&quot; или &quot;Изученные&quot;. А также увидеть актуальную
        статистику ответов в мини-играх.
      </p>
      <h4>Сложность</h4>
      <ul>
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
      </ul>
    </StyledGroupBox>
  );
}

export default GroupSelect;
