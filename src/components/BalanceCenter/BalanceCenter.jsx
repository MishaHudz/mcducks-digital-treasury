import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceBtn from './BalanceBtn';
import BalanceModal from '../BalanceModal/BalanceModal';
import { Forma, Title, Data } from './BalanceCenter.styled';

// const formBalanc = value => {

// };

const BalanceCenter = () => {
  // const initialState = useSelector(Users.balance);
//   const newBalance = useSelector();
//   const balance = newBalance === 0 ? initialState : newBalance;
  // const [input, setInput] = useState(
  //   `${formBalanc(initialState.toFixed(2))} UAH`
  // );

  // const handleChange = e => {
  //   setInput(e.target.value);
  // };

  return (
    <Forma>
      <Title>Balance:</Title>
      <Data
        name="balanceCenter"
        title="Field must contain only numbers"
        type="number"
        // value={input}
        // onChange={handleChange}
        // disabled={initialState === 0 ? false : true}
        // placeholder={
        //   initialState === 0
        //     ? `00.00 UAH`
        //     : `${formBalanc(balance.toFixed(2))} UAH`
        // }
      />
      {/* {!initialState && <BalanceBtn balanceToUpdate={input} />}
      {!initialState && <BalanceModal />} */}
    </Forma>
  );
};

export default BalanceCenter;
