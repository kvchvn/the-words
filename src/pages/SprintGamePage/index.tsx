import React from 'react';

import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import SprintRound from '../../components/SprintRound';
import { FROM_MAIN, FROM_TEXTBOOK } from '../../constants';
import { useGame } from '../../hooks';
import useSprintGame from '../../hooks/useSprintGame';

interface SprintGamePageLocationState {
  state: typeof FROM_MAIN | typeof FROM_TEXTBOOK | null;
}

function SprintGamePage() {
  const { state: entry } = useLocation() as SprintGamePageLocationState;
  const { updateSprintData } = useSprintGame();
  const {
    gameData: { originalWord, isGameOver },
    translatedWord,
    updateWordStatistics,
    playSound,
    toNextWord,
    finishGame,
  } = useGame(entry, updateSprintData);

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
