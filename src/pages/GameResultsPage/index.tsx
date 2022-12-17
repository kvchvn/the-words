import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import finishGameSound from '../../assets/sounds/finish.mp3';
import Modal from '../../components/Modal';
import WordCard from '../../components/WordCard';
import { GAME_RESULTS_CONGRATULATIONS, ROUTER_PATHS } from '../../constants';
import { useModal, useUserStatistic } from '../../hooks';
import {
  useAppDispatch,
  useGameResultsSelector,
  useIsGameOverSelector,
  useUserSelector,
} from '../../redux';
import { resetGame } from '../../redux/slices/gameSlice';
import { resetGameStatistic } from '../../redux/slices/statisticSlice';
import { setCurrentWordId, unsetCurrentWordId } from '../../redux/slices/wordsListSlice';
import { StyledInfoText, StyledPageTitle, StyledWrapper } from '../../styles/components';
import { playAudio } from '../../utils/common';
import { StyledBox, StyledButtonsBox, StyledSection } from './styles';

function GameResultsPage() {
  const { updateUserStatistic } = useUserStatistic();
  const { isModalOpen, handleOpen, handleClose } = useModal();

  const { totalAnswers, rightAnswers, rightAnswersList, wrongAnswersList } =
    useGameResultsSelector();
  const isGameOver = useIsGameOverSelector();
  const user = useUserSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isButtonsHidden, setIsButtonsHidden] = useState(true);

  const closeModal = useCallback(() => {
    handleClose(() => dispatch(unsetCurrentWordId()));
  }, [handleClose, dispatch]);

  const openModal = useCallback(
    (wordId: string) => {
      handleOpen(() => dispatch(setCurrentWordId(wordId)));
    },
    [handleOpen, dispatch]
  );

  const resetGameData = (routerPath: string) => {
    updateUserStatistic().then(() => navigate(routerPath));
    dispatch(resetGameStatistic());
    dispatch(resetGame());
  };

  const getCongratulations = () => {
    let successRate = 0;
    let displayedMessage = '';
    if (rightAnswers !== 0 && totalAnswers !== 0) {
      successRate = rightAnswers / totalAnswers;
    }
    const resultsData = Object.values(GAME_RESULTS_CONGRATULATIONS) as Array<{
      rate: number;
      message: string;
    }>;

    resultsData.forEach(({ rate, message }) => {
      if (successRate <= rate && !displayedMessage) {
        displayedMessage = message;
      }
    });

    return displayedMessage;
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
      <StyledWrapper>
        <StyledPageTitle>Результаты игры</StyledPageTitle>
        <StyledSection>
          <p>
            {rightAnswers} из {totalAnswers} правильных ответов
          </p>
          <h3>{getCongratulations()}</h3>
          {!totalAnswers ? null : (
            <>
              <article>
                <h5>{rightAnswersList.length ? 'Правильные ответы' : 'Правильных ответов нет'}</h5>
                <StyledBox>
                  <ul>
                    {rightAnswersList.map((word) => (
                      <li onClick={openModal.bind(null, word.id)} key={uuid()}>
                        {word.word}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {rightAnswersList.map((word) => (
                      <li onClick={openModal.bind(null, word.id)} key={uuid()}>
                        {word.wordTranslate}
                      </li>
                    ))}
                  </ul>
                </StyledBox>
              </article>
              <article>
                <h5>
                  {wrongAnswersList.length ? 'Неправильные ответы' : 'Неправильных ответов нет'}
                </h5>
                <StyledBox>
                  <ul>
                    {wrongAnswersList.map((word) => (
                      <li onClick={openModal.bind(null, word.id)} key={uuid()}>
                        {word.word}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {wrongAnswersList.map((word) => (
                      <li onClick={openModal.bind(null, word.id)} key={uuid()}>
                        {word.wordTranslate}
                      </li>
                    ))}
                  </ul>
                </StyledBox>
              </article>
            </>
          )}
          {totalAnswers ? (
            <StyledInfoText>Нажмите на слово для подробной информации.</StyledInfoText>
          ) : null}
          {!isButtonsHidden && (
            <StyledButtonsBox>
              <button type="button" onClick={goToMainPage}>
                В главное меню
              </button>
              <button type="button" onClick={goToTextbook}>
                К учебнику
              </button>
              {user && (
                <button type="button" onClick={goToStatistic}>
                  К статистике
                </button>
              )}
            </StyledButtonsBox>
          )}
        </StyledSection>
      </StyledWrapper>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <WordCard />
        </Modal>
      )}
    </>
  );
}

export default GameResultsPage;
