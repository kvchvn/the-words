import React from 'react';

interface PageSelectProps {
  firstPage: number;
  lastPage: number;
}

function PageSelect({ firstPage, lastPage }: PageSelectProps) {
  return (
    <article>
      <button type="button">First: {firstPage}</button>
      <button type="button">Prev</button>
      <button type="button">Next</button>
      <button type="button">Last: {lastPage}</button>
    </article>
  );
}

export default PageSelect;
