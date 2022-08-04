import React, { useCallback, useMemo } from 'react';

import { useModal, useWords } from '../../hooks';
import { useAppDispatch, useWordIdSelector } from '../../redux';
import { setCurrentWordId, unsetCurrentWordId } from '../../redux/slices/wordsListSlice';

import Loading from '../Loading';
import Modal from '../Modal';
import WordCard from '../WordCard';

function WordsList() {
  const dispatch = useAppDispatch();
  const currentWordId = useWordIdSelector();
  const { words, isLoading } = useWords();
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleClose = useCallback(() => {
    closeModal(() => dispatch(unsetCurrentWordId()));
  }, [closeModal, dispatch]);

  const handleOpen = useCallback(
    (wordId: string) => {
      openModal(() => dispatch(setCurrentWordId(wordId)));
    },
    [dispatch, openModal]
  );

  const currentWord = useMemo(() => {
    if (words && currentWordId) {
      return words.find((word) => word.id === currentWordId);
    }
  }, [words, currentWordId]);

  return (
    <>
      <div>
        {isLoading && <Loading />}
        {words && (
          <ul>
            {words.map((word) => (
              <li key={word.id} onClick={handleOpen.bind(null, word.id)}>
                {word.word}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        <Modal closeModal={handleClose}>
          <WordCard word={currentWord} />
        </Modal>
      )}
    </>
  );
}

export default WordsList;
