import React, { useEffect, useState } from 'react';

import {
  MAX_PROGRESS_TO_COMBO,
  MIN_COMBO,
  MIN_PROGRESS_TO_COMBO,
  ROUND_SCORE,
} from '../../constants';
import { useGameResultsSelector } from '../../redux';

function Score() {
  const [score, setScore] = useState({
    combo: MIN_COMBO,
    progressToCombo: MIN_PROGRESS_TO_COMBO,
    value: 0,
  });
  const { rightAnswers, answers } = useGameResultsSelector();

  useEffect(() => {
    if (answers.length) {
      if (answers.at(-1)) {
        // if the last answer is right
        setScore((prevState) => {
          const value = prevState.value + ROUND_SCORE * prevState.combo;
          if (prevState.progressToCombo === MAX_PROGRESS_TO_COMBO) {
            // increase value of combo and reset progress
            const combo = prevState.combo + 1;
            const progressToCombo = MIN_PROGRESS_TO_COMBO;
            return { ...prevState, combo, progressToCombo, value };
          } else {
            const progressToCombo = prevState.progressToCombo + 1;
            return { ...prevState, progressToCombo, value };
          }
        });
      } else {
        // if the last answer is wrong
        setScore((prevState) => {
          const combo = MIN_COMBO;
          const progressToCombo = MIN_PROGRESS_TO_COMBO;
          return { ...prevState, combo, progressToCombo };
        });
      }
    }
  }, [answers]);

  return (
    <article>
      <h3>Множитель: {score.combo}</h3>
      <h4>
        Прогресс: [{score.progressToCombo}, {MAX_PROGRESS_TO_COMBO}]
      </h4>
      <h4>Правильных ответов: {rightAnswers}</h4>
      <h4>Всего очков: {score.value}</h4>
    </article>
  );
}

export default Score;
