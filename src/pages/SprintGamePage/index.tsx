import React from 'react';

import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import SprintRound from '../../components/SprintRound';
import { FROM_MAIN, FROM_TEXTBOOK } from '../../constants';
import { useGame } from '../../hooks';
import useSprintGame from '../../hooks/useSprintGame';

interface SprintGamePageLocation {
  state: typeof FROM_MAIN | typeof FROM_TEXTBOOK | null;
}

function SprintGamePage() {
  const { state: entry } = useLocation() as SprintGamePageLocation;
  const { updateSprintData } = useSprintGame();
  const {
    gameData: { originalWord, isGameOver },
    updateWordStatistics,
    playRoundSound,
    toNextWord,
    finishGame,
  } = useGame(entry, updateSprintData);

  return (
    <>
      <PageTitle>Спринт</PageTitle>
      <div>
        <SprintRound
          originalWord={originalWord}
          isGameOver={isGameOver}
          playRoundSound={playRoundSound}
          showNextWord={toNextWord}
          updateWordStatistics={updateWordStatistics}
        />
      </div>
    </>
  );
}

export default SprintGamePage;
