import React, { useCallback, useState } from 'react';

import GroupSelect from '../../components/GroupSelect';
import PageSelect from '../../components/PageSelect';
import WordsList from '../../components/WordsList';
import {
  FROM_TEXTBOOK,
  GAME_TYPES,
  MAX_GROUP_FOR_GUESTS,
  MAX_GROUP_FOR_USERS,
  MAX_PAGE,
  MIN_GROUP,
  MIN_PAGE,
  ROUTER_PATHS,
} from '../../constants';
import { useUserSelector } from '../../redux';
import { InfoText, StyledPageTitle, StyledWrapper } from '../../styles/components';
import {
  StyledAudiocallLink,
  StyledBox,
  StyledImage,
  StyledNav,
  StyledSection,
  StyledSprintLink,
} from './styles';

function TextbookPage() {
  const user = useUserSelector();
  const [isGamesDisabled, setIsGamesDisabled] = useState(false);

  const toggleGames = useCallback((disable: boolean) => setIsGamesDisabled(disable), []);

  return (
    <>
      <StyledPageTitle>
        <StyledWrapper>Учебник</StyledWrapper>
      </StyledPageTitle>
      <StyledSection>
        <StyledWrapper>
          <StyledBox>
            {!user && (
              <InfoText>
                Зарегистрируйтесь или войдите, чтобы получить доступ ко всем возможностям.
              </InfoText>
            )}
            <InfoText>
              В учебнике вы можете узнать подробную информацию о выбранном слове: перевод,
              произношение. Добавить слово в &quot;Сложные&quot; или &quot;Изученные&quot;. А также
              увидеть актуальную статистику ответов в мини-играх.
            </InfoText>
            <GroupSelect
              firstGroup={MIN_GROUP}
              lastGroupForUsers={MAX_GROUP_FOR_USERS}
              lastGroupForGuests={MAX_GROUP_FOR_GUESTS}
            />
          </StyledBox>
          <StyledImage />
          <StyledNav>
            <h3>Мини-игры</h3>
            {isGamesDisabled && <InfoText>Все слова на странице изучены.</InfoText>}
            <StyledSprintLink
              to={`/${ROUTER_PATHS.gameWelcome}`}
              state={{ entry: FROM_TEXTBOOK, game: GAME_TYPES.sprintGame }}
            >
              <button disabled={isGamesDisabled}>Спринт</button>
            </StyledSprintLink>
            <StyledAudiocallLink
              to={`/${ROUTER_PATHS.gameWelcome}`}
              state={{ entry: FROM_TEXTBOOK, game: GAME_TYPES.audioCallGame }}
            >
              <button disabled={isGamesDisabled}>Аудиовызов</button>
            </StyledAudiocallLink>
          </StyledNav>
          <PageSelect firstPage={MIN_PAGE} lastPage={MAX_PAGE} />
        </StyledWrapper>
        <WordsList toggleGames={toggleGames} />
      </StyledSection>
    </>
  );
}

export default TextbookPage;
