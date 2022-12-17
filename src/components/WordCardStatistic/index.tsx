import React from 'react';

import { v4 as uuid } from 'uuid';

import { AggregatedWord } from '../../types';
import { StyledIcon, StyledIconsBox, StyledList } from './styles';

interface WordCardStatisticProps {
  wordData: AggregatedWord;
}

function WordCardStatistic({ wordData }: WordCardStatisticProps) {
  return wordData.optional ? (
    <StyledList>
      <li>
        <h4>
          {wordData.optional.statistic.total.answersList.length
            ? 'Последние результаты в играх'
            : 'Последних результатов в играх нет'}
        </h4>
        <StyledIconsBox>
          {wordData.optional.statistic.total.answersList.map((answer) => (
            <StyledIcon key={uuid()} answer={answer} />
          ))}
        </StyledIconsBox>
      </li>
      <li>
        <h4>Правильные ответы</h4>
        <StyledList>
          <li>
            <h5>Во всех играх</h5>
            {wordData.optional.statistic.total.rightAnswers} из{' '}
            {wordData.optional.statistic.total.totalAnswers}
          </li>
          <li>
            <h5>Спринт</h5>
            {wordData.optional.statistic.sprint.rightAnswers} из{' '}
            {wordData.optional.statistic.sprint.totalAnswers}
          </li>
          <li>
            <h5>Аудиовызов</h5>
            {wordData.optional.statistic.audiocall.rightAnswers} из{' '}
            {wordData.optional.statistic.audiocall.totalAnswers}
          </li>
        </StyledList>
      </li>
    </StyledList>
  ) : (
    <p>По данному слову статистика отсутствует</p>
  );
}

export default WordCardStatistic;
