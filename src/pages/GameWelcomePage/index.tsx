import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import GroupSelect from '../../components/GroupSelect';
import {
  DELTA,
  FROM_MAIN,
  FROM_TEXTBOOK,
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MIN_GROUP,
  ROUTER_PATHS,
} from '../../constants';
import { useGroupSelector } from '../../redux';
import { RouterPaths } from '../../types';

interface GameWelcomePageLocationState {
  state: {
    entry: typeof FROM_MAIN | typeof FROM_TEXTBOOK;
    game: keyof Pick<RouterPaths, 'sprintGame' | 'audioCallGame'>;
  };
}

function GameWelcomePage() {
  const group = useGroupSelector();
  const {
    state: { entry, game },
  } = useLocation() as GameWelcomePageLocationState;

  const [isGroupSelection, setIsGroupSelection] = useState(entry === FROM_MAIN);

  const hideGroupSelection = () => setIsGroupSelection(false);

  return isGroupSelection ? (
    <div>
      <h4>Выберите уровень сложности</h4>
      <GroupSelect
        firstGroup={MIN_GROUP}
        lastGroupForUsers={MAX_GROUP_FOR_USERS}
        lastGroupForGuests={MAX_GROUP_FOR_GUESTS}
      />
      <button onClick={hideGroupSelection}>Выбрать группу</button>
    </div>
  ) : (
    <>
      <h5>Вы готовы?</h5>
      <p>Уровень сложности: {group + DELTA}</p>
      <Link to={`/${ROUTER_PATHS[game]}`}>Начать игру</Link>
    </>
  );
}

export default GameWelcomePage;
