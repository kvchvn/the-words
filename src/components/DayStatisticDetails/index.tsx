import React from 'react';

import { GameStatistic } from '../../types';

interface DayStatisticDetailsProps {
  statistic: GameStatistic;
}

function DayStatisticDetails({ statistic }: DayStatisticDetailsProps) {
  const { newWords, totalAnswers, rightAnswers } = statistic;
  const truthPercent = totalAnswers !== 0 ? (rightAnswers / totalAnswers) * 100 : 0;

  return (
    <ul>
      <li>
        Новых слов - <strong>{newWords}</strong>
      </li>
      <li>
        Правильных ответов - <strong>{rightAnswers}</strong>
      </li>
      <li>
        Всего ответов - <strong>{totalAnswers}</strong>
      </li>
      <li>
        Правильность - <strong>{truthPercent.toFixed()}%</strong>
      </li>
    </ul>
  );
}

export default DayStatisticDetails;
