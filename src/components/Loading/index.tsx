import React from 'react';

import { StyledLoading, StyledLoadingProps } from './styles';

type LoadingProps = StyledLoadingProps;

function Loading({ size }: LoadingProps) {
  return <StyledLoading size={size} />;
}

export default Loading;
