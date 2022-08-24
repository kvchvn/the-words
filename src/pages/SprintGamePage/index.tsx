import React from 'react';

import PageTitle from '../../components/PageTitle';
import SprintRound from '../../components/SprintRound';

import { useSprintWords } from '../../hooks';
import { FROM_MAIN } from '../../constants';

function SprintGamePage() {
  const {
    state,
    gameData: { originalWord, translatedWord, isRightAnswer },
    user,
    toNextWord,
  } = useSprintWords();

  return (
    <>
      <PageTitle>Спринт</PageTitle>
      {state === FROM_MAIN ? (
        <div>
          <button type="button" value={1}>
            1 группа
          </button>
          <button type="button" value={2}>
            2 группа
          </button>
          <button type="button" value={3}>
            3 группа
          </button>
          <button type="button" value={4}>
            4 группа
          </button>
          <button type="button" value={5}>
            5 группа
          </button>
          <button type="button" value={6}>
            6 группа
          </button>
          {user && (
            <button type="button" value={7}>
              Сложные
            </button>
          )}
        </div>
      ) : (
        <div>
          <SprintRound
            originalWord={originalWord}
            translatedWord={translatedWord}
            isRightAnswer={isRightAnswer}
            showNextWord={toNextWord}
          />
        </div>
      )}
    </>
  );
}

export default SprintGamePage;
