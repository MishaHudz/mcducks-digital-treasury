import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceBtn from '../BalanceBtn/BalanceBtn';
import BalanceModal from '../BalanceModal/BalanceModal';
import { Forma, Title, Data } from './BalanceCenter.styled';



const BalanceCenter = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const initialState = useSelector(store => store.auth.user.balance);
  const [input, setInput] = useState(0);
  const incomeState = useSelector (store => store.transaction.incomes);
  const spanState = useSelector (store => store.transaction.expenses);
  const render = incomeState.length > 0 || spanState.length > 0;

  return (
    <Forma>
      <Title>Balance:</Title>
      <Data
        name="balanceCenter"
        title="Field must contain only numbers"
        type="number"
        value={!render ? input : incomeState} 
        onChange={e => setInput(e.target.value)}
        disabled={isInputDisabled}
        placeholder={
          !render
            ? `00.00 UAH`
            : `${(initialState.toFixed(2))} UAH`}
        
      />
      {!render && <BalanceBtn balanceToUpdate={input} setIsInputDisabled={setIsInputDisabled} />}
      {!initialState && <BalanceModal />}
    </Forma>
  );
};



export default BalanceCenter;
