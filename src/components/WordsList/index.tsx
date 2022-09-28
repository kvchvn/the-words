import React, { useCallback, useEffect } from 'react';

import { EASY_WORD, MAX_GROUP } from '../../constants';
import { useModal, useWords } from '../../hooks';
import { useAppDispatch } from '../../redux';
import { setCurrentWordId, unsetCurrentWordId } from '../../redux/slices/wordsListSlice';
import { StyledWrapper } from '../../styles/components';
import { AggregatedWord } from '../../types';
import Loading from '../Loading';
import Modal from '../Modal';
import WordCard from '../WordCard';
import WordItem from '../WordItem';
import { StyledArticle, StyledLegendItem, StyledLegendList, StyledList } from './styles';

interface WordsListProps {
  toggleGames: (disable: boolean) => void;
}

function WordsList({ toggleGames }: WordsListProps) {
  const dispatch = useAppDispatch();
  const { wordsResult, isLoading, group, user } = useWords();
  const { isModalOpen, handleOpen, handleClose } = useModal();

  const closeModal = useCallback(() => {
    handleClose(() => dispatch(unsetCurrentWordId()));
  }, [handleClose, dispatch]);

  const openModal = useCallback(
    (wordId: string) => {
      handleOpen(() => dispatch(setCurrentWordId(wordId)));
    },
    [handleOpen, dispatch]
  );

  useEffect(() => {
    if (wordsResult) {
      const hasNotEasyWord = [...wordsResult].some((word) =>
        'difficulty' in word ? word.difficulty !== EASY_WORD : true
      );
      if (!hasNotEasyWord) {
        toggleGames(true);
      } else {
        toggleGames(false);
      }
    }
  }, [toggleGames, wordsResult]);

  return (
    <StyledArticle>
      <StyledWrapper>
        {isLoading ? (
          <Loading size="MEDIUM" />
        ) : (
          <>
            {wordsResult && (
              <StyledList>
                {wordsResult.map((word) => (
                  <WordItem
                    key={word.id}
                    id={word.id}
                    word={word.word}
                    difficulty={(word as AggregatedWord).difficulty}
                    showDetailedData={openModal}
                  />
                ))}
              </StyledList>
            )}
            {group !== MAX_GROUP && user && (
              <StyledLegendList>
                <StyledLegendItem difficulty="none">Обычные</StyledLegendItem>
                <StyledLegendItem difficulty="hard">Сложные</StyledLegendItem>
                <StyledLegendItem difficulty="easy">Изученные</StyledLegendItem>
              </StyledLegendList>
            )}
            {isModalOpen && (
              <Modal closeModal={closeModal}>
                <WordCard closeModal={closeModal} />
              </Modal>
            )}
          </>
        )}
      </StyledWrapper>
    </StyledArticle>
  );
}

export default WordsList;
