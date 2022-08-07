import React, { useCallback } from 'react';

import { useModal, useWords } from '../../hooks';
import { useAppDispatch } from '../../redux';
import { setCurrentWordId, unsetCurrentWordId } from '../../redux/slices/wordsListSlice';

import Loading from '../Loading';
import Modal from '../Modal';
import WordCard from '../WordCard';
import WordItem from '../WordItem';

function WordsList() {
  const dispatch = useAppDispatch();
  const { words, currentWord, currentWordDifficulty, checkWordDifficulty, isLoading } = useWords();
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

  return (
    <>
      <div>
        {isLoading && <Loading />}
        {words && (
          <ul>
            {words.map((word) => (
              <WordItem
                key={word.id}
                id={word.id}
                word={word.word}
                showDetailedData={openModal}
                checkDifficulty={checkWordDifficulty}
              />
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <WordCard word={currentWord} difficulty={currentWordDifficulty} />
        </Modal>
      )}
    </>
  );
}

export default WordsList;
