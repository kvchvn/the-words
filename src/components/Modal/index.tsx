import React, { ReactNode, useEffect, useMemo, useRef } from 'react';

import ReactDOM from 'react-dom';

import { StyledButtonClose, StyledModal, StyledOverlay } from './styles';

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

function Modal({ children, closeModal }: ModalProps) {
  const root = useMemo(() => document.createElement('div'), []);
  const appRoot = useRef(document.getElementById('root'));
  const appRootOpacity = '0.4';

  useEffect(() => {
    document.body.appendChild(root);
    if (appRoot.current) {
      appRoot.current.style.opacity = appRootOpacity;
    }
  }, [root]);

  const handleClose = () => {
    closeModal();
    if (appRoot.current) {
      appRoot.current.style.opacity = '';
    }
    document.body.removeChild(root);
  };

  const preventClose = (event: React.MouseEvent) => event.stopPropagation();

  return ReactDOM.createPortal(
    <StyledOverlay onClick={handleClose}>
      <StyledModal onClick={preventClose}>
        <>
          {children}
          <StyledButtonClose onClick={handleClose} />
        </>
      </StyledModal>
    </StyledOverlay>,
    root
  );
}

export default Modal;
