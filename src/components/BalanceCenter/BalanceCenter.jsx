import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceBtn from './BalanceBtn';
import BalanceModal from '../BalanceModal/BalanceModal';
import { Forma, Title, Data } from './BalanceCenter.styled';

const BalanceCenter = () => {

  const initialState = useSelector(store => store.auth.balance);
  const [input, setInput] = useState(0);

console.log(initialState);
  return (
    <Forma>
      <Title>Balance:</Title>
      <Data
        name="balanceCenter"
        title="Field must contain only numbers"
        type="number"
        value={initialState === 0 ? input : `${initialState.toFixed(2)} UAH`}  
        onChange={setInput(e.target.value)}
        disabled={initialState === 0 ? false : true}
        placeholder={
          initialState === 0
            ? `00.00 UAH`
            : `${formBalanc(balance.toFixed(2))} UAH`
        }
      />
      {initialState === 0 && <BalanceBtn balanceToUpdate={input} />}
      {!initialState && <BalanceModal />}
    </Forma>
  );
};

export default BalanceCenter;
