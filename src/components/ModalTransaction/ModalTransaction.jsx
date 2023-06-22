import {
  BackDrop,
  Modal,
  ButtonClose,
  Button,
  Title,
} from './ModalTransaction.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect } from 'react';

const ModalTransaction = ({ onConfirm, onClose }) => {

  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <BackDrop onClick={handleBackdropClick}>
      <Modal>
        <ButtonClose onClick={handleClose}>
          <CloseOutlinedIcon fontSize="medium" />
        </ButtonClose>
        <Title>Are you sure?</Title>

        <Button
          className="modal-confirm"
          onClick={handleConfirm}
          style={{ marginRight: '15px' }}
        >
          Yes
        </Button>
        <Button className="modal-cancel" onClick={handleClose}>No</Button>
      </Modal>
    </BackDrop>
  );
};

export default ModalTransaction;
