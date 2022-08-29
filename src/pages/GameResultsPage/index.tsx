import React from 'react';

import { useNavigate } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import { ROUTER_PATHS } from '../../constants';
import { useAppDispatch, useGameResultsSelector } from '../../redux';
import { resetGame } from '../../redux/slices/gameSlice';

function GameResultsPage() {
  const { totalAnswers, rightAnswers } = useGameResultsSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetGameData = (routerPath: string) => {
    navigate(routerPath);
    dispatch(resetGame());
  };

  const goToMainPage = () => resetGameData(ROUTER_PATHS.main);
  const goToTextbook = () => resetGameData(`/${ROUTER_PATHS.textbook}`);

  return (
    <>
      <PageTitle>Результаты игры</PageTitle>
      <p>
        Правильных ответов: {rightAnswers} из {totalAnswers}
      </p>
      <div>
        <button type="button" onClick={goToMainPage}>
          В главное меню
        </button>
        <button type="button" onClick={goToTextbook}>
          К учебнику
        </button>
      </div>
    </>
  );
}

export default GameResultsPage;
