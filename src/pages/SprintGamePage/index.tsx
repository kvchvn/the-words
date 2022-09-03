import React from 'react';

import PageTitle from '../../components/PageTitle';
import SprintRound from '../../components/SprintRound';
import { useGame } from '../../hooks';
import useSprintGame from '../../hooks/useSprintGame';

function SprintGamePage() {
  const { updateSprintData } = useSprintGame();
  const {
    gameData: { originalWord, isGameOver },
    translatedWord,
    updateWordStatistics,
    playSound,
    toNextWord,
    finishGame,
  } = useGame(updateSprintData);
  return (
    <>
      <PageTitle>Спринт</PageTitle>
      <div>
        <SprintRound
          originalWord={originalWord}
          translatedWord={translatedWord}
          isGameOver={isGameOver}
          playSound={playSound}
          showNextWord={toNextWord}
          updateWordStatistics={updateWordStatistics}
          finishGame={finishGame}
        />
      </div>
    </>
  );
}

export default SprintGamePage;
