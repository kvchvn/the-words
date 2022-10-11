import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants';
import { StyledArticle, StyledBox, StyledButton, StyledIcon, StyledTime } from './styles';

interface TimerProps {
  range: number;
  finishGame: () => void;
}

function Timer({ range, finishGame }: TimerProps) {
  const [time, setTime] = useState(range);
  const navigate = useNavigate();

  const goToResults = () => navigate(`/${ROUTER_PATHS.gameResults}`);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      finishGame();
    }
  }, [time, finishGame]);

  return (
    <StyledArticle>
      <StyledBox>
        <StyledIcon />
        <StyledTime time={time}>{time !== 0 ? time : 'Время вышло!'}</StyledTime>
      </StyledBox>
      {time === 0 && (
        <StyledButton type="button" onClick={goToResults}>
          <span>Результат</span>
        </StyledButton>
      )}
    </StyledArticle>
  );
}

export default Timer;
