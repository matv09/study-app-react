import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, isOpen, children}) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose }>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;