import React, { useCallback, useState } from 'react';

import { BASE_MEDIA_URL, EASY_WORD, HARD_WORD } from '../../constants';
import { useCurrentWord } from '../../hooks';
import { AggregatedWord } from '../../types';
import { playAudio } from '../../utils/common';
import Loading from '../Loading';
import SectionsToggler from '../SectionsToggler';
import WordCardButtons from '../WordCardButtons';
import WordCardStatistics from '../WordCardStatistic';
import { StyledArticle, StyledAudioButton, StyledDifficulty, StyledSection } from './styles';

function WordCard() {
  const { wordData, isLoading, user } = useCurrentWord();
  const [isInfoShowed, setIsInfoShowed] = useState(true);

  const toggleSections = () => {
    setIsInfoShowed((prevState) => !prevState);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (wordData) {
      target.disabled = true;
      playAudio(`${BASE_MEDIA_URL}${wordData.audio}`)
        .then(() => playAudio(`${BASE_MEDIA_URL}${wordData.audioMeaning}`))
        .then(() => playAudio(`${BASE_MEDIA_URL}${wordData.audioExample}`))
        .then(() => (target.disabled = false));
    }
  };

  const getDifficulty = useCallback(() => {
    if (wordData) {
      const difficulty = (wordData as AggregatedWord).difficulty;
      switch (difficulty) {
        case HARD_WORD:
          return 'Сложное слово';
        case EASY_WORD:
          return 'Изученное слово';
        default:
          return '';
      }
    }
    return '';
  }, [wordData]);

  const UI = wordData ? (
    <StyledSection>
      <img width="150" src={`${BASE_MEDIA_URL}${wordData.image}`} alt={`${wordData.word} image`} />
      <div>
        <h3>{wordData.word}</h3>
        <h5>{wordData.transcription}</h5>
        <h3>{wordData.wordTranslate}</h3>
      </div>
      {user && (
        <SectionsToggler
          isFirstChecked={isInfoShowed}
          firstLabelName="Информация"
          secondLabelName="Статистика"
          toggle={toggleSections}
        />
      )}
      {isInfoShowed ? (
        <StyledArticle>
          <div>
            <p dangerouslySetInnerHTML={{ __html: wordData.textMeaning }} />
            <p dangerouslySetInnerHTML={{ __html: wordData.textMeaningTranslate }} />
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: wordData.textExample }} />
            <p dangerouslySetInnerHTML={{ __html: wordData.textExampleTranslate }} />
          </div>
          <StyledAudioButton onClick={handleClick} />
        </StyledArticle>
      ) : (
        user && (
          <StyledArticle>
            <WordCardStatistics wordData={wordData} />
          </StyledArticle>
        )
      )}
      {user && (
        <>
          <StyledDifficulty>{getDifficulty()}</StyledDifficulty>
          <WordCardButtons word={wordData} difficulty={(wordData as AggregatedWord).difficulty} />
        </>
      )}
    </StyledSection>
  ) : (
    <p>Ой... Мы не нашли информацию об этом слове</p>
  );

  return isLoading ? <Loading size="MEDIUM" /> : UI;
}

export default WordCard;
