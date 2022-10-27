import React, { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import audiocall from '../../assets/img/audiocall.webp';
import sprint from '../../assets/img/sprint.webp';
import GroupSelect from '../../components/GroupSelect';
import {
  DELTA,
  FROM_MAIN,
  FROM_TEXTBOOK,
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MIN_GROUP,
  ROUTER_PATHS,
} from '../../constants';
import { useAppDispatch, useGroupSelector } from '../../redux';
import { startGame } from '../../redux/slices/gameSlice';
import { goToGroup } from '../../redux/slices/wordsListSlice';
import { StyledPageTitle, StyledWrapper } from '../../styles/components';
import { RouterPaths } from '../../types';
import { StyledBox, StyledButton, StyledImg, StyledSection } from './styles';

interface GameWelcomePageLocationState {
  state: {
    entry: typeof FROM_MAIN | typeof FROM_TEXTBOOK;
    game: keyof Pick<RouterPaths, 'sprintGame' | 'audioCallGame'>;
  };
}

function GameWelcomePage() {
  const group = useGroupSelector();
  const navigate = useNavigate();
  const { state } = useLocation() as GameWelcomePageLocationState;

  const dispatch = useAppDispatch();

  const [isGroupSelection, setIsGroupSelection] = useState(
    state ? state.entry === FROM_MAIN : true
  );

  const showGroupSelection = () => setIsGroupSelection(true);

  const hideGroupSelection = () => setIsGroupSelection(false);

  const launchGame = () => dispatch(startGame());

  const getGameName = () => {
    if (state) {
      const { game } = state;
      switch (game) {
        case 'sprintGame':
          return 'Спринт';
        case 'audioCallGame':
          return 'Аудиовызов';
      }
    }
    return '';
  };

  const getGameImageSrc = () => {
    if (state) {
      const { game } = state;
      switch (game) {
        case 'sprintGame':
          return sprint;
        case 'audioCallGame':
          return audiocall;
      }
    }
    return '';
  };

  useEffect(() => {
    if (state && state.entry === FROM_MAIN) {
      dispatch(goToGroup(MIN_GROUP));
    }
  }, [dispatch, state]);

  useEffect(() => {
    if (!state) {
      navigate(ROUTER_PATHS.main);
    }
  }, [navigate, state]);

  if (!state) {
    return null;
  }

  return (
    <StyledSection>
      <StyledPageTitle>
        <StyledWrapper>{getGameName()}</StyledWrapper>
      </StyledPageTitle>
      <StyledImg src={getGameImageSrc()} />
      <StyledWrapper>
        {isGroupSelection ? (
          <>
            <h3>Выберите уровень сложности</h3>
            <GroupSelect
              firstGroup={MIN_GROUP}
              lastGroupForUsers={MAX_GROUP_FOR_USERS}
              lastGroupForGuests={MAX_GROUP_FOR_GUESTS}
            />
            <StyledButton onClick={hideGroupSelection}>Выбрать группу</StyledButton>
          </>
        ) : (
          <StyledBox>
            <h4>Уровень сложности: {group + DELTA}</h4>
            <h3>Вы готовы?</h3>
            <Link to={`/${ROUTER_PATHS[state.game]}`} onClick={launchGame} state={state.entry}>
              <StyledButton>Начать игру</StyledButton>
            </Link>
            <button onClick={showGroupSelection}>Вернуться назад</button>
          </StyledBox>
        )}
      </StyledWrapper>
    </StyledSection>
  );
}

export default GameWelcomePage;
