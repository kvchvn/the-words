import React from 'react';

import { DELTA } from '../../constants';
import { usePagination } from '../../hooks';

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
    <article>
      <button type="button" disabled={currentPage === firstPage} onClick={selectFirstPage}>
        First: {firstPage + DELTA}
      </button>
      <button type="button" disabled={currentPage === firstPage} onClick={selectPrevPage}>
        Prev
      </button>
      <span>{currentPage + DELTA}</span>
      <button type="button" disabled={currentPage === lastPage} onClick={selectNextPage}>
        Next
      </button>
      <button type="button" disabled={currentPage === lastPage} onClick={selectLastPage}>
        Last: {lastPage + DELTA}
      </button>
    </article>
  );
}

export default PageSelect;
