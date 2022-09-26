import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';
import WordsList from '../../components/WordsList';
import {
  FROM_TEXTBOOK,
  GAME_TYPES,
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MAX_PAGE,
  MIN_GROUP,
  MIN_PAGE,
  ROUTER_PATHS,
} from '../../constants';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';

function TextbookPage() {
  const [isGamesDisabled, setIsGamesDisabled] = useState(false);

  const toggleGames = useCallback((disable: boolean) => setIsGamesDisabled(disable), []);

  return (
    <>
      <StyledPageTitle>
        <StyledWrapper>Учебник</StyledWrapper>
      </StyledPageTitle>
      <section>
        <StyledWrapper>
          <GroupSelect
            firstGroup={MIN_GROUP}
            lastGroupForUsers={MAX_GROUP_FOR_USERS}
            lastGroupForGuests={MAX_GROUP_FOR_GUESTS}
          />
          <PageSelect firstPage={MIN_PAGE} lastPage={MAX_PAGE} />
          <WordsList toggleGames={toggleGames} />
          <nav>
            <Link
              to={`/${ROUTER_PATHS.gameWelcome}`}
              state={{ entry: FROM_TEXTBOOK, game: GAME_TYPES.sprintGame }}
            >
              <button disabled={isGamesDisabled}>Спринт</button>
            </Link>
            <Link
              to={`/${ROUTER_PATHS.gameWelcome}`}
              state={{ entry: FROM_TEXTBOOK, game: GAME_TYPES.audioCallGame }}
            >
              <button disabled={isGamesDisabled}>Аудиовызов</button>
            </Link>
          </nav>
        </StyledWrapper>
      </section>
    </>
  );
}

export default TextbookPage;
