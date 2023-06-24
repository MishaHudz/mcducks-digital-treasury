import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BalanceBtn from '../BalanceBtn/BalanceBtn';
import BalanceModal from '../BalanceModal/BalanceModal';
import { Forma, Title, Data } from './BalanceCenter.styled';
import { getUserInfoOperation } from 'store/authOperation';

const BalanceCenter = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [input, setInput] = useState(0);

  const dispatch = useDispatch();

  const initialState = useSelector(store => store.auth.user.balance);
  const transaction = useSelector(store => store.auth.user.transactions);
  const { accessToken } = useSelector(state => state.auth);

  const render = transaction.length > 0 || initialState > 0; 

  useEffect(() => {
    if (accessToken) {  dispatch(getUserInfoOperation())}
  },[accessToken, dispatch])
  return (
    <Forma>
      <Title>Balance:</Title>
      <Data
        name="balanceCenter"
        title="Field must contain only numbers"
        type="number"
        value={!render ? input : initialState} 
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