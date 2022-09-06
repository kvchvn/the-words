import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import finishGameSound from '../../assets/sounds/finish.mp3';
import PageTitle from '../../components/PageTitle';
import { ROUTER_PATHS } from '../../constants';
import { useAppDispatch, useGameResultsSelector, useIsGameOverSelector } from '../../redux';
import { resetGame } from '../../redux/slices/gameSlice';
import { playAudio } from '../../utils/common';

function GameResultsPage() {
  const { totalAnswers, rightAnswers } = useGameResultsSelector();
  const isGameOver = useIsGameOverSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isButtonsHidden, setIsButtonsHidden] = useState(true);

  const resetGameData = (routerPath: string) => {
    navigate(routerPath);
    dispatch(resetGame());
  };

  useEffect(() => {
    // if user wants to open page directly
    if (!isGameOver) {
      navigate(ROUTER_PATHS.main);
    }
  }, [navigate, isGameOver]);

  useEffect(() => {
    playAudio(finishGameSound).then(() => setIsButtonsHidden(false));
  }, []);

  const goToMainPage = () => resetGameData(ROUTER_PATHS.main);
  const goToTextbook = () => resetGameData(`/${ROUTER_PATHS.textbook}`);

  return (
    <>
      <PageTitle>Результаты игры</PageTitle>
      <p>
        Правильных ответов: {rightAnswers} из {totalAnswers}
      </p>
      {!isButtonsHidden && (
        <div>
          <button type="button" onClick={goToMainPage}>
            В главное меню
          </button>
          <button type="button" onClick={goToTextbook}>
            К учебнику
          </button>
        </div>
      )}
    </>
  );
}

export default GameResultsPage;
