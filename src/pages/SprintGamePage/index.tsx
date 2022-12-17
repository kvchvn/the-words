import React from 'react';

import { useLocation } from 'react-router-dom';

import GameBoard from '../../components/GameBoard';
import SprintRound from '../../components/SprintRound';
import { FROM_MAIN, FROM_TEXTBOOK } from '../../constants';
import { useGame, useWordStatistic } from '../../hooks';
import useSprintGame from '../../hooks/useSprintGame';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';

interface SprintGamePageLocation {
  state: typeof FROM_MAIN | typeof FROM_TEXTBOOK | null;
}

function SprintGamePage() {
  const { state: entry } = useLocation() as SprintGamePageLocation;
  const { updateSprintData } = useSprintGame();
  const {
    gameData: { originalWord, isGameOver },
    playRoundSound,
    toNextWord,
    finishGame,
  } = useGame(entry, updateSprintData);
  const { updateWordStatistic } = useWordStatistic('SPRINT');

  return (
    <StyledWrapper>
      <StyledPageTitle>Спринт</StyledPageTitle>
      <GameBoard finishGame={finishGame} />
      <SprintRound
        originalWord={originalWord}
        isGameOver={isGameOver}
        playRoundSound={playRoundSound}
        showNextWord={toNextWord}
        updateWordStatistic={updateWordStatistic}
      />
    </StyledWrapper>
  );
}

export default SprintGamePage;
