import React from 'react';

import { AggregatedWord } from '../../types';

interface WordCardStatisticsProps {
  wordData: AggregatedWord;
}

function WordCardStatistics({ wordData }: WordCardStatisticsProps) {
  return wordData.optional ? (
    <ul>
      <li>
        Все игры: {wordData.optional.statistics.total.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistics.total.totalAnswers}
      </li>
      <li>
        Последние результаты в играх:{' '}
        {wordData.optional.statistics.total.answersList.map((answer) => (answer ? '+' : '-'))}
      </li>
      <li>
        Спринт: {wordData.optional.statistics.sprint.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistics.sprint.totalAnswers}
      </li>
      <li>
        Аудиовызов: {wordData.optional.statistics.audiocall.rightAnswers} правильных ответов из{' '}
        {wordData.optional.statistics.audiocall.totalAnswers}
      </li>
    </ul>
  ) : (
    <p>По данному слову статистика пока отсутствует</p>
  );
}

export default WordCardStatistics;
