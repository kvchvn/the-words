import React from 'react';

interface SprintRoundProps {
  originalWord: string | undefined;
  translatedWord: string | undefined;
  isRightAnswer: boolean;
  showNextWord: () => void;
}

function SprintRound({
  originalWord,
  translatedWord,
  isRightAnswer,
  showNextWord,
}: SprintRoundProps) {
  return originalWord ? (
    <section>
      <h4>{originalWord}</h4>
      <h4>{translatedWord}</h4>
      <h5>Ответ: {String(isRightAnswer)}</h5>
      <button type="button" onClick={showNextWord}>
        Следующее слово
      </button>
    </section>
  ) : (
    <p>Loading</p>
  );
}

export default SprintRound;
