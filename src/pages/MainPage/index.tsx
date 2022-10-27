import React from 'react';

import difficulty from '../../assets/svg/difficulty.svg';
import gamepad from '../../assets/svg/gamepad.svg';
import profile from '../../assets/svg/profile.svg';
import textbook from '../../assets/svg/textbook.svg';
import { FROM_MAIN, GAME_TYPES, ROUTER_PATHS } from '../../constants';
import { StyledWrapper } from '../../styles/components';
import {
  StyledTitle,
  StyledTitleBox,
  StyledList,
  StyledSection,
  StyledLink,
  StyledBox,
  StyledLinkToTextbook,
  StyledLinkToGames,
  StyledArticle,
  StyledItem,
  StyledDetailsBox,
} from './styles';

function MainPage() {
  return (
    <StyledWrapper>
      <StyledSection>
        <StyledTitleBox>
          <StyledTitle>Изучай английские слова легко!</StyledTitle>
          <span />
        </StyledTitleBox>
        <StyledArticle>
          <StyledList>
            <StyledItem imgSrc={textbook}>
              3600 наиболее употребляемых слов с переводом, транскрипцией и произношением
            </StyledItem>
            <StyledItem imgSrc={difficulty}>6 уровней сложности</StyledItem>
            <StyledItem imgSrc={gamepad}>Изучение с помощью мини-игр</StyledItem>
            <StyledItem imgSrc={profile}>Личный кабинет с отслеживанием прогресса</StyledItem>
          </StyledList>
          <StyledBox>
            <div>
              <p>Если вы еще не зарегистрированы</p>
              <StyledLink to={`/${ROUTER_PATHS.authorization}`}>Авторизация</StyledLink>
            </div>
            <div>
              <p>Также вы можете уже начать изучение</p>
              <StyledLinkToTextbook to={`/${ROUTER_PATHS.textbook}`}>Учебник</StyledLinkToTextbook>
            </div>
            <div>
              <p>Или попрактиковаться</p>
              <StyledLinkToGames
                to={`/${ROUTER_PATHS.gameWelcome}`}
                state={{ entry: FROM_MAIN, game: GAME_TYPES.sprintGame }}
              >
                Спринт
              </StyledLinkToGames>
              <StyledLinkToGames
                to={`/${ROUTER_PATHS.gameWelcome}`}
                state={{ entry: FROM_MAIN, game: GAME_TYPES.audioCallGame }}
              >
                Аудиовызов
              </StyledLinkToGames>
            </div>
          </StyledBox>
        </StyledArticle>
        <StyledDetailsBox>
          <h3>О приложении</h3>
          <details>
            <summary>Пользователям</summary>
            <p>
              Это приложение не позволит вам полноценно выучить английский язык, а только поможет с
              запоминанием слов.
            </p>
            <p>
              Будет замечательно, если кому-нибудь оно поможет. Но основная цель его создания -
              практика полученных мной, главным и единственным разработчиком, знаний.
            </p>
          </details>
          <details>
            <summary>Разработчикам</summary>
            <p>
              Приложение выполнено в качестве pet-проекта в соответствии с{' '}
              <a
                href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md"
                target="_blank"
                rel="noreferrer"
              >
                условиями задания
              </a>{' '}
              <strong>не</strong> в рамках курса, а для самообучения.
            </p>{' '}
            <p>
              <strong>Технологии:</strong> TypeScript, react.
            </p>
            <p>
              <strong>Библиотеки:</strong> redux-toolkit, rtk-query, styled-components, formik.
            </p>
          </details>
        </StyledDetailsBox>
      </StyledSection>
    </StyledWrapper>
  );
}

export default MainPage;
