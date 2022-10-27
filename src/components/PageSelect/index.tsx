import React from 'react';

import { DELTA, MAX_GROUP_FOR_USERS } from '../../constants';
import { usePagination } from '../../hooks';
import { useGroupSelector } from '../../redux';
import { StyledPageBox } from './styles';

interface PageSelectProps {
  firstPage: number;
  lastPage: number;
}

function PageSelect({ firstPage, lastPage }: PageSelectProps) {
  const group = useGroupSelector();
  const { currentPage, selectFirstPage, selectLastPage, selectNextPage, selectPrevPage } =
    usePagination({
      firstPage,
      lastPage,
    });

  return group === MAX_GROUP_FOR_USERS ? null : (
    <StyledPageBox>
      <button disabled={currentPage === firstPage} onClick={selectFirstPage}>
        {firstPage + DELTA}
      </button>
      <button disabled={currentPage === firstPage} onClick={selectPrevPage}>
        &#60;
      </button>
      <span>{currentPage + DELTA}</span>
      <button disabled={currentPage === lastPage} onClick={selectNextPage}>
        &#62;
      </button>
      <button disabled={currentPage === lastPage} onClick={selectLastPage}>
        {lastPage + DELTA}
      </button>
    </StyledPageBox>
  );
}

export default PageSelect;
