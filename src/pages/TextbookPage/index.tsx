import React from 'react';

import PageTitle from '../../components/PageTitle';
import WordsList from '../../components/WordsList';
import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';

import {
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MAX_PAGE,
  MIN_GROUP,
  MIN_PAGE,
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
    </>
  );
}

export default TextbookPage;
