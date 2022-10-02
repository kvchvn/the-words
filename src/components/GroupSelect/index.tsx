import React from 'react';

import { v4 as uuid } from 'uuid';

import { DELTA, MAX_GROUP } from '../../constants';
import { useGrouping } from '../../hooks';
import { useUserSelector } from '../../redux';
import { InfoText } from '../../styles/components';
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
      {!user && (
        <InfoText>
          Зарегистрируйтесь или войдите, чтобы получить доступ ко всем возможностям.
        </InfoText>
      )}
      <InfoText>
        В учебнике вы можете узнать подробную информацию о выбранном слове: перевод, произношение.
        Добавить слово в &quot;Сложные&quot; или &quot;Изученные&quot;. А также увидеть актуальную
        статистику ответов в мини-играх.
      </InfoText>
      <h3>Сложность</h3>
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
