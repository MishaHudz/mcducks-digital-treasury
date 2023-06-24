import Modal from 'react-modal';
import { BoxButton, ExitModal } from './AddTransactionModal.styled';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { GoToMain } from 'components/goBack/goToMain';

Modal.setAppElement('#root');

function AddTransactionModal({
  isOpen,
  onRequestClose,
  startDate,
  setStartDate,
}) {
  return (
    <ExitModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Exit Confirmation"
      style={{
        overlay: {
          background: 'rgba(255, 255, 255, 0.09)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(1.2px)',
        },
      }}
    >
      <GoToMain />
      <BoxButton>
        <Addtransaction isOpen={isOpen} mobStartDate={startDate} />
      </BoxButton>
    </ExitModal>
  );
}

export default AddTransactionModal;
