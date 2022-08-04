import { useState } from 'react';
import { disableScrolling, enableScrolling } from '../utils';

type callbackType = () => void;

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (onOpenModalAction: callbackType) => {
    onOpenModalAction();
    disableScrolling();
    setIsModalOpen(true);
  };

  const closeModal = (onCloseModalAction: callbackType) => {
    enableScrolling();
    onCloseModalAction();
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
