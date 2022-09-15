import React from 'react';

import { AggregatedWord } from '../../types';

interface WordCardStatisticProps {
  wordData: AggregatedWord;
}

function WordCardStatistic({ wordData }: WordCardStatisticProps) {
  return wordData.optional ? (
    <ul>
      <li>
        Все игры: {wordData.optional.statistic.total.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistic.total.totalAnswers}
      </li>
      <li>
        Последние результаты в играх:{' '}
        {wordData.optional.statistic.total.answersList.map((answer) => (answer ? '+' : '-'))}
      </li>
      <li>
        Спринт: {wordData.optional.statistic.sprint.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistic.sprint.totalAnswers}
      </li>
      <li>
        Аудиовызов: {wordData.optional.statistic.audiocall.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistic.audiocall.totalAnswers}
      </li>
    </ul>
  ) : (
    <p>По данному слову статистика пока отсутствует</p>
  );
}

export default WordCardStatistic;
