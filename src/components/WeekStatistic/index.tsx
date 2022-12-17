import React from 'react';

import { MONTHS_RU, WEEKDAYS_ORDERED, WEEKDAYS_RU } from '../../constants';
import { useToggle } from '../../hooks';
import { UserStatistic } from '../../types';
import SectionsToggler from '../SectionsToggler';
import StatisticBarChart from '../StatisticBarChart';
import { StyledChartBox, StyledDateRange, StyledSection, StyledSubtitleBox } from './styles';

interface WeekStatisticProps {
  statistic: UserStatistic;
}

function WeekStatistic({ statistic }: WeekStatisticProps) {
  const { value: isLearnedWords, toggleValue } = useToggle();

  const {
    optional: {
      weekly: { startDate: startDateString, finishDate: finishDateString, ...weekdaysStatistic },
    },
  } = statistic;

  const startDate = new Date(startDateString);
  const finishDate = new Date(finishDateString);

  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth();
  const finishDay = finishDate.getDate();
  const finishMonth = finishDate.getMonth();

  const learnedWords = WEEKDAYS_ORDERED.map(
    (day) => weekdaysStatistic[day as keyof typeof weekdaysStatistic].learnedWords
  );
  const rightAnswers = WEEKDAYS_ORDERED.map(
    (day) => weekdaysStatistic[day as keyof typeof weekdaysStatistic].rightAnswers
  );
  const totalAnswers = WEEKDAYS_ORDERED.map(
    (day) => weekdaysStatistic[day as keyof typeof weekdaysStatistic].totalAnswers
  );

  const learnedWordsData = [
    {
      name: 'Изученные',
      values: learnedWords,
    },
  ];

  const answersData = [
    {
      name: 'Правильные',
      values: rightAnswers,
    },
    {
      name: 'Общие',
      values: totalAnswers,
    },
  ];

  return (
    <StyledSection>
      <StyledSubtitleBox>
        <h2>7 дней</h2>
        <StyledDateRange>
          {startDay} {MONTHS_RU[startMonth]} - {finishDay} {MONTHS_RU[finishMonth]}
        </StyledDateRange>
      </StyledSubtitleBox>
      <SectionsToggler
        isFirstChecked={isLearnedWords}
        firstLabelName="Изученные слова"
        secondLabelName="Ответы"
        toggle={toggleValue}
      />
      <StyledChartBox>
        <StatisticBarChart
          xAxisNames={WEEKDAYS_RU}
          data={isLearnedWords ? learnedWordsData : answersData}
        />
      </StyledChartBox>
    </StyledSection>
  );
}

export default WeekStatistic;
