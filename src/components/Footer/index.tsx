import React from 'react';

import { useIsGameOverSelector, useIsGameStartedSelector } from '../../redux';

function Footer() {
  const isGameStarted = useIsGameStartedSelector();
  const isGameOver = useIsGameOverSelector();

  return isGameStarted && !isGameOver ? null : <h1>It`s Footer</h1>;
}

export default Footer;
