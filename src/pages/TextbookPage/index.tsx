import React from 'react';

import { Link } from 'react-router-dom';

import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';
import PageTitle from '../../components/PageTitle';
import WordsList from '../../components/WordsList';
import {
  FROM_TEXTBOOK,
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MAX_PAGE,
  MIN_GROUP,
  MIN_PAGE,
  ROUTER_PATHS,
} from '../../constants';

function TextbookPage() {
  return (
    <>
      <PageTitle>Учебник</PageTitle>
      <hr />
      <GroupSelect
        firstGroup={MIN_GROUP}
        lastGroupForUsers={MAX_GROUP_FOR_USERS}
        lastGroupForGuests={MAX_GROUP_FOR_GUESTS}
      />
      <hr />
      <PageSelect firstPage={MIN_PAGE} lastPage={MAX_PAGE} />
      <hr />
      <WordsList />
      <nav>
        <Link to={`/${ROUTER_PATHS.sprintGame}`} state={FROM_TEXTBOOK}>
          Спринт
        </Link>
        <Link to={`/${ROUTER_PATHS.audioCallGame}`} state={FROM_TEXTBOOK}>
          Аудиовызов
        </Link>
      </nav>
    </>
  );
}

export default TextbookPage;
