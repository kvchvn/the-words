import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants';

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
    <section>
      <p>{time !== 0 ? `Time: ${time}` : 'Время вышло!'}</p>
      {time === 0 && (
        <button type="button" onClick={goToResults}>
          Результат
        </button>
      )}
    </section>
  );
}

export default Timer;
