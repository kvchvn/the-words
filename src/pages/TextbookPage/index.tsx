import React from 'react';

import { useGetWordsQuery, useGroupSelector, usePageSelector } from '../../redux';
import { DELTA, MAX_GROUP, MAX_PAGE, MIN_GROUP, MIN_PAGE } from '../../constants';

import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import WordsList from '../../components/WordsList';
import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';

function TextbookPage() {
  const group = useGroupSelector();
  const page = usePageSelector();
  const { data: wordsPage, isLoading } = useGetWordsQuery({ group, page });

  return (
    <>
      {isLoading && <Loading />}
      <PageTitle>Учебник</PageTitle>
      <hr />
      page: {page + DELTA}, group: {group + DELTA}
      <hr />
      <GroupSelect firstGroup={MIN_GROUP} lastGroup={MAX_GROUP} />
      <hr />
      <PageSelect firstPage={MIN_PAGE} lastPage={MAX_PAGE} />
      <hr />
      {wordsPage && <WordsList words={wordsPage} />}
    </>
  );
}

export default TextbookPage;
