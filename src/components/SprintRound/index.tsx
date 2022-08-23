import React from 'react';

interface SprintRoundProps {
  word: string | undefined;
  showNextWord: () => void;
}

function SprintRound({ word, showNextWord }: SprintRoundProps) {
  return word ? (
    <section>
      <h4>{word}</h4>
      <button type="button" onClick={showNextWord}>
        Следующее слово
      </button>
    </section>
  ) : (
    <p>Loading</p>
  );
}

export default SprintRound;
