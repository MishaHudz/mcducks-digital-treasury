import { Sms, TextUp, TextDown } from './BalanceModal.styled';

const BalanceModal = () => {
  return (
    <Sms>
      <TextUp>
        Hello! To get started, enter the current balance of your account!
      </TextUp>
      <TextDown>
        You can't spend money until you have it :)
      </TextDown>
    </Sms>
  );
};

export default BalanceModal;
