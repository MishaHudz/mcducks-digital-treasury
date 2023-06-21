import React from 'react';
import Modal from 'react-modal';
import { BoxButton, Button, ExitModal, Title } from './Modal.styled';

Modal.setAppElement('#root');

function CustomModal({ isOpen, onRequestClose, onConfirm, onCancel }) {
  return (
    <ExitModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Exit Confirmation"
    >
      <Title>Do you really want to leave?</Title>
      <BoxButton>
        <Button onClick={onConfirm}>Yes</Button>
        <Button onClick={onCancel}>No</Button>
      </BoxButton>
    </ExitModal>
  );
}

export default CustomModal;
