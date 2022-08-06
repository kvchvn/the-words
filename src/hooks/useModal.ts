import { useState } from 'react';

import { disableScrolling, enableScrolling } from '../utils';

type callbackType = () => void;

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (onOpenModalAction: callbackType) => {
    onOpenModalAction();
    disableScrolling();
    setIsModalOpen(true);
  };

  const handleClose = (onCloseModalAction: callbackType) => {
    enableScrolling();
    onCloseModalAction();
    setIsModalOpen(false);
  };

  return { isModalOpen, handleOpen, handleClose };
};

export default useModal;
