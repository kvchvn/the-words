import React from 'react';

import { UserStatistic } from '../../types';

interface WeekStatisticProps {
  statistic: UserStatistic;
}

function WeekStatistic({ statistic }: WeekStatisticProps) {
  const {
    optional: {
      weekly: { mon, tue, wed, thu, fri, sat, sun },
    },
  } = statistic;

  return (
    <section>
      <h4>Недельная статистика</h4>
      <ul>
        <li>
          <h5>ПН</h5>
          <ol>
            <li>Выучено слов: {mon.learnedWords}</li>
            <li>Правильных ответов: {mon.rightAnswers}</li>
            <li>Всего ответов: {mon.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>ВТ</h5>
          <ol>
            <li>Выучено слов: {tue.learnedWords}</li>
            <li>Правильных ответов: {tue.rightAnswers}</li>
            <li>Всего ответов: {tue.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>СР</h5>
          <ol>
            <li>Выучено слов: {wed.learnedWords}</li>
            <li>Правильных ответов: {wed.rightAnswers}</li>
            <li>Всего ответов: {wed.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>ЧТ</h5>
          <ol>
            <li>Выучено слов: {thu.learnedWords}</li>
            <li>Правильных ответов: {thu.rightAnswers}</li>
            <li>Всего ответов: {thu.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>ПТ</h5>
          <ol>
            <li>Выучено слов: {fri.learnedWords}</li>
            <li>Правильных ответов: {fri.rightAnswers}</li>
            <li>Всего ответов: {fri.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>СБ</h5>
          <ol>
            <li>Выучено слов: {sat.learnedWords}</li>
            <li>Правильных ответов: {sat.rightAnswers}</li>
            <li>Всего ответов: {sat.totalAnswers}</li>
          </ol>
          <hr />
        </li>
        <li>
          <h5>ВС</h5>
          <ol>
            <li>Выучено слов: {sun.learnedWords}</li>
            <li>Правильных ответов: {sun.rightAnswers}</li>
            <li>Всего ответов: {sun.totalAnswers}</li>
          </ol>
          <hr />
        </li>
      </ul>
    </section>
  );
}

export default WeekStatistic;
