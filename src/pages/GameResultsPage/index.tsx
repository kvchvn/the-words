import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import finishGameSound from '../../assets/sounds/finish.mp3';
import { ROUTER_PATHS } from '../../constants';
import { useUserStatistic } from '../../hooks';
import { useAppDispatch, useGameResultsSelector, useIsGameOverSelector } from '../../redux';
import { resetGame } from '../../redux/slices/gameSlice';
import { resetGameStatistic } from '../../redux/slices/statisticSlice';
import { StyledPageTitle } from '../../styles/components';
import { playAudio } from '../../utils/common';

function GameResultsPage() {
  const { updateUserStatistic } = useUserStatistic();

  const { totalAnswers, rightAnswers, rightAnswersList, wrongAnswersList } =
    useGameResultsSelector();
  const isGameOver = useIsGameOverSelector();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isButtonsHidden, setIsButtonsHidden] = useState(true);

  const resetGameData = (routerPath: string) => {
    updateUserStatistic().then(() => navigate(routerPath));
    dispatch(resetGameStatistic());
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
  const goToStatistic = () => resetGameData(`/${ROUTER_PATHS.statistic}`);

  return (
    <>
      <StyledPageTitle>Результаты игры</StyledPageTitle>
      <p>
        Правильных ответов: {rightAnswers} из {totalAnswers}
      </p>
      <hr />
      Правильно угаданы:
      <ul>
        {rightAnswersList.map((word) => (
          <li key={uuid()}>
            {word.word} --- {word.wordTranslate}
          </li>
        ))}
      </ul>
      <hr />
      Неправильно угаданы:
      <ul>
        {wrongAnswersList.map((word) => (
          <li key={uuid()}>
            {word.word} --- {word.wordTranslate}
          </li>
        ))}
      </ul>
      <hr />
      {!isButtonsHidden && (
        <div>
          <button type="button" onClick={goToMainPage}>
            В главное меню
          </button>
          <button type="button" onClick={goToTextbook}>
            К учебнику
          </button>
          <button type="button" onClick={goToStatistic}>
            К статистике
          </button>
        </div>
      )}
    </>
  );
}

export default GameResultsPage;
