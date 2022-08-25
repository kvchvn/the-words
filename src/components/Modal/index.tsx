import React, { ReactNode, useEffect, useMemo } from 'react';

import ReactDOM from 'react-dom';

import { StyledOverlay, StyledModal } from './theme';

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

function Modal({ children, closeModal }: ModalProps) {
  const root = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(root);
  }, [root]);

  const handleClose = () => {
    closeModal();
    document.body.removeChild(root);
  };

  const preventClose = (event: React.MouseEvent) => event.stopPropagation();

  return ReactDOM.createPortal(
    <StyledOverlay onClick={handleClose}>
      <StyledModal onClick={preventClose}>{children}</StyledModal>
    </StyledOverlay>,
    root
  );
}

export default Modal;
