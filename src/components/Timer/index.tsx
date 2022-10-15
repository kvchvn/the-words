import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants';
import { useIsGameOverSelector } from '../../redux';
import { StyledArticle, StyledBox, StyledButton, StyledIcon, StyledTime } from './styles';

interface TimerProps {
  range: number;
  finishGame: () => void;
}

function Timer({ range, finishGame }: TimerProps) {
  const [time, setTime] = useState(range);
  const isGameOver = useIsGameOverSelector();
  const navigate = useNavigate();

  const goToResults = () => navigate(`/${ROUTER_PATHS.gameResults}`);

  useEffect(() => {
    if (time > 0 && !isGameOver) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      finishGame();
    }
  }, [time, finishGame, isGameOver]);

  return (
    <StyledArticle>
      <StyledBox>
        <StyledIcon />
        <StyledTime time={time}>{time !== 0 ? time : 'Время вышло!'}</StyledTime>
      </StyledBox>
      {time === 0 || isGameOver ? (
        <StyledButton onClick={goToResults}>Перейти к результатам</StyledButton>
      ) : (
        <StyledButton onClick={finishGame}>Завершить игру</StyledButton>
      )}
    </StyledArticle>
  );
}

export default Timer;
