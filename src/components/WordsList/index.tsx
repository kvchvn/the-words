import React, { useCallback, useEffect } from 'react';

import { EASY_WORD } from '../../constants';
import { useModal, useWords } from '../../hooks';
import { useAppDispatch } from '../../redux';
import { setCurrentWordId, unsetCurrentWordId } from '../../redux/slices/wordsListSlice';
import { AggregatedWord } from '../../types';
import Loading from '../Loading';
import Modal from '../Modal';
import WordCard from '../WordCard';
import WordItem from '../WordItem';

interface WordsListProps {
  toggleGames: (disable: boolean) => void;
}

function WordsList({ toggleGames }: WordsListProps) {
  const dispatch = useAppDispatch();
  const { wordsResult, isLoading } = useWords();
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
    <>
      <div>
        {isLoading && <Loading size="SMALL" />}
        {wordsResult && (
          <ul>
            {wordsResult.map((word) => (
              <WordItem
                key={word.id}
                id={word.id}
                word={word.word}
                difficulty={(word as AggregatedWord).difficulty}
                showDetailedData={openModal}
              />
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <WordCard closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default WordsList;
