import React from 'react';

import { MONTHS_RU } from '../../constants';
import { UserStatistic } from '../../types';
import DayStatisticDetails from '../DayStatisticDetails';
import {
  StyledAudiocallBox,
  StyledContainer,
  StyledSection,
  StyledSprintBox,
  StyledSubtitleBox,
  StyledToday,
} from './styles';

interface DayStatisticProps {
  statistic: UserStatistic;
}

function DayStatistic({ statistic }: DayStatisticProps) {
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const {
    learnedWords,
    optional: {
      daily: { sprint, audiocall },
    },
  } = statistic;

  return (
    <StyledSection>
      <StyledSubtitleBox>
        <h2>Сегодня</h2>
        <StyledToday>
          {date} {MONTHS_RU[month]}
        </StyledToday>
        <p>
          Слов выучено - <strong>{learnedWords}</strong>
        </p>
      </StyledSubtitleBox>
      <StyledContainer>
        <StyledSprintBox>
          <h4>Спринт</h4>
          <DayStatisticDetails statistic={sprint} />
        </StyledSprintBox>
        <StyledAudiocallBox>
          <h4>Аудиовызов</h4>
          <DayStatisticDetails statistic={audiocall} />
        </StyledAudiocallBox>
      </StyledContainer>
    </StyledSection>
  );
}

export default DayStatistic;
