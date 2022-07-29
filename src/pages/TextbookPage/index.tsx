import React from 'react';

import { useGetWordsQuery } from '../../redux';
import { MAX_GROUP, MAX_PAGE, MIN_PAGE } from '../../constants';

import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import WordsList from '../../components/WordsList';
import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';

function TextbookPage() {
  const { data: wordsPage, isLoading } = useGetWordsQuery({ group: 0, page: 0 });

  return (
    <>
      {isLoading && <Loading />}
      <PageTitle>Учебник</PageTitle>
      <GroupSelect count={MAX_GROUP} />
      <PageSelect firstPage={MIN_PAGE} lastPage={MAX_PAGE} />
      {wordsPage && <WordsList words={wordsPage} />}
    </>
  );
}

export default TextbookPage;
