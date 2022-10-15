import React from 'react';

import { useLocation } from 'react-router-dom';

import AudioCallRound from '../../components/AudioCallRound';
import GameBoard from '../../components/GameBoard';
import { FROM_MAIN, FROM_TEXTBOOK } from '../../constants';
import { useAudioCallGame, useGame, useWordStatistic } from '../../hooks';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';

interface AudioCallGamePageLocation {
  state: typeof FROM_MAIN | typeof FROM_TEXTBOOK;
}

function AudioCallGamePage() {
  const { state: entry } = useLocation() as AudioCallGamePageLocation;
  const { updateAudioCallData } = useAudioCallGame();
  const {
    gameData: { originalWord, isGameOver },
    playRoundSound,
    toNextWord,
    finishGame,
  } = useGame(entry, updateAudioCallData);
  const { updateWordStatistic } = useWordStatistic('AUDIOCALL');

  return (
    <StyledWrapper>
      <StyledPageTitle>Аудиовызов</StyledPageTitle>
      <GameBoard finishGame={finishGame} />
      <AudioCallRound
        originalWord={originalWord}
        isGameOver={isGameOver}
        playRoundSound={playRoundSound}
        showNextWord={toNextWord}
        updateWordStatistic={updateWordStatistic}
      />
    </StyledWrapper>
  );
}

export default AudioCallGamePage;
