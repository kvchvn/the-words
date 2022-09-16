import React from 'react';

import { UserStatistic } from '../../types';

interface DayStatisticProps {
  statistic: UserStatistic;
}

function DayStatistic({ statistic }: DayStatisticProps) {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const {
    learnedWords,
    optional: {
      daily: { sprint, audiocall },
    },
  } = statistic;

  return (
    <section>
      <h2>{} Статистика за день:</h2>
      <h3>
        {date}.{month < 10 ? `0${month}` : month}
      </h3>
      Всего выученных слов: {learnedWords}
      <hr />
      <h4>Спринт</h4>
      <ul>
        <li>Новых слов: {sprint.newWords}</li>
        <li>Правильных ответов: {sprint.rightAnswers}</li>
        <li>Всего ответов: {sprint.totalAnswers}</li>
      </ul>
      <hr />
      <h4>Аудиовызов</h4>
      <ul>
        <li>Новых слов: {audiocall.newWords}</li>
        <li>Правильных ответов: {audiocall.rightAnswers}</li>
        <li>Всего ответов: {audiocall.totalAnswers}</li>
      </ul>
    </section>
  );
}

export default DayStatistic;
