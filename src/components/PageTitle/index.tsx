import React from 'react';

interface PageTitleProps {
  children: string;
}

function PageTitle({ children }: PageTitleProps) {
  return <h1>{children}</h1>;
}

export default PageTitle;
