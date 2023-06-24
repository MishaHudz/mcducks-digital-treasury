import Modal from 'react-modal';
import {
  BoxButton,
  CloseModalAddTransaction,
  ExitModal,
} from './AddTransactionModal.styled';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';

Modal.setAppElement('#root');

function AddTransactionModal({
  isOpen,
  onRequestClose,
  startDate,
  setStartDate,
}) {
  return (
    <>
      {isOpen && (
        <CloseModalAddTransaction onClick={onRequestClose}>
          <svg
            style={{ marginRight: '0px' }}
            xmlns="http://www.w3.org/2000/svg"
            width={'18px'}
            height={'18px'}
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="keyboard_backspace-24px 1" clipPath="url(#clip0_15_1344)">
              <path
                id="Vector"
                d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
                fill="#F6F7FB"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_1344">
                <rect width={'18px'} height={'18px'} fill="white" />
              </clipPath>
            </defs>
          </svg>
          to transaction
        </CloseModalAddTransaction>
      )}

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
        <BoxButton>
          <Addtransaction isOpen={isOpen} mobStartDate={startDate} />
        </BoxButton>
      </ExitModal>
    </>
  );
}

export default AddTransactionModal;
