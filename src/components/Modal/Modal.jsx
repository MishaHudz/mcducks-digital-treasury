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
      style={{
        overlay: {
          background: 'rgba(255, 255, 255, 0.09)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(2.2px)',
        },
      }}
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
