import React from 'react';

import { useLocation } from 'react-router-dom';

import Score from '../../components/Score';
import SprintRound from '../../components/SprintRound';
import Timer from '../../components/Timer';
import { FROM_MAIN, FROM_TEXTBOOK, GAME_ROUND_TIME } from '../../constants';
import { useGame, useWordStatistic } from '../../hooks';
import useSprintGame from '../../hooks/useSprintGame';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';
import { StyledBox } from './styles';

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
      <StyledBox>
        <Timer range={GAME_ROUND_TIME} finishGame={finishGame} />
        <Score />
      </StyledBox>
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
