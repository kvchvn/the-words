import React from 'react';

import { GAME_ROUND_TIME } from '../../constants';
import Score from '../Score';
import Timer from '../Timer';
import { StyledBox } from './styles';

interface GameBoardProps {
  finishGame: () => void;
}

function GameBoard({ finishGame }: GameBoardProps) {
  return (
    <StyledBox>
      <Timer range={GAME_ROUND_TIME} finishGame={finishGame} />
      <Score />
    </StyledBox>
  );
}

export default GameBoard;
