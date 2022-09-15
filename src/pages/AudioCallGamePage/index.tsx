import React from 'react';

import { useLocation } from 'react-router-dom';

import AudioCallRound from '../../components/AudioCallRound';
import PageTitle from '../../components/PageTitle';
import Score from '../../components/Score';
import Timer from '../../components/Timer';
import { FROM_MAIN, FROM_TEXTBOOK, GAME_ROUND_TIME } from '../../constants';
import { useAudioCallGame, useGame, useWordStatistic } from '../../hooks';

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
    <>
      <PageTitle>Аудиовызов</PageTitle>
      <div>
        <Timer range={GAME_ROUND_TIME} finishGame={finishGame} />
        <Score />
        <AudioCallRound
          originalWord={originalWord}
          isGameOver={isGameOver}
          playRoundSound={playRoundSound}
          showNextWord={toNextWord}
          updateWordStatistic={updateWordStatistic}
        />
      </div>
    </>
  );
}

export default AudioCallGamePage;
