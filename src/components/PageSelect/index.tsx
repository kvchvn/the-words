import React from 'react';

import { DELTA } from '../../constants';
import { usePagination } from '../../hooks';
import { StyledPageBox } from './styles';

interface PageSelectProps {
  firstPage: number;
  lastPage: number;
}

function PageSelect({ firstPage, lastPage }: PageSelectProps) {
  const { currentPage, selectFirstPage, selectLastPage, selectNextPage, selectPrevPage } =
    usePagination({
      firstPage,
      lastPage,
    });

  return (
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
