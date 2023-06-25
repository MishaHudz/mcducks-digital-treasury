import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BalanceBtn from '../BalanceBtn/BalanceBtn';
import BalanceModal from '../BalanceModal/BalanceModal';
import { Forma, Title, Data, BoxBalance } from './BalanceCenter.styled';
import { getUserInfoOperation } from 'store/authOperation';

const BalanceCenter = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [input, setInput] = useState(0);

  const dispatch = useDispatch();

  const initialState = useSelector(store => store.auth.user.balance);
  const transaction = useSelector(store => store.auth.user.transactions);
  const { accessToken } = useSelector(state => state.auth);
  const balance = useSelector(state => state.auth.user.balance);

  const render = transaction.length > 0 || initialState !== 0;

  useEffect(() => {
    if (accessToken && !balance) {
      dispatch(getUserInfoOperation());
    }
  }, [accessToken, dispatch, balance]);
  return (
    <Forma>
      <Title>Balance:</Title>
      <BoxBalance>
        <Data
          name="balanceCenter"
          title="Field must contain only numbers"
          type="number"
          value={!render ? input : initialState.toFixed(2)}
          onChange={e => setInput(e.target.value)}
          disabled={isInputDisabled}
          isInputDisabled={render}
          placeholder={!render ? `00.00 UAH` : `${initialState.toFixed(2)} UAH`}
        />
        {!render && (
          <BalanceBtn
            balanceToUpdate={input}
            setIsInputDisabled={setIsInputDisabled}
          />
        )}
      </BoxBalance>
      {!initialState && transaction.length === 0 && <BalanceModal />}
    </Forma>
  );
};

export default BalanceCenter;
