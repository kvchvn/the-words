import React from 'react';

import { useIsGameStartedSelector } from '../../redux';

function Footer() {
  const isGameStarted = useIsGameStartedSelector();
  return !isGameStarted ? <h1>It`s Footer</h1> : null;
}

export default Footer;
