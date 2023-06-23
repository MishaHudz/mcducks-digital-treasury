import { useDispatch } from 'react-redux';
import { Button } from './BalanceBnt.styled';
import { addTransactionExpense, addTransactionIncome } from 'store/transactionsOperations';
import { getUserInfo, userBalance } from 'services/walletApi';
import { balancePatch, getUserInfoOperation } from 'store/authOperation';
import { useEffect } from 'react';

const BalanceBtn = ({ balanceToUpdate, setIsInputDisabled }) => {
    const dispatch = useDispatch();
    
    const handleSubmit = (data, evt) => {
      setIsInputDisabled(true)
      dispatch(balancePatch(data)).unwrap().then(() => {
        evt.target.disabled = true;
        evt.target.style.display = 'none';
      })
      // dispatch(
      //  data <= 0 
      //     ? addTransactionExpense({
      //       description: 'initial value',
      //       amount: Number(data),
      //       date: new Date(),
      //       category: 'Доп. доход',
      //     })
      //     : addTransactionIncome({
      //         description: 'initial value',
      //         amount: Number(data),
      //         date: new Date(),
      //         category: 'Доп. доход',
      //       })
      // );
    };

    return (
        <Button type="button"
         onClick={evt => handleSubmit(+balanceToUpdate, evt)}
        >
          Confirm
        </Button>
      );
    };
    
    export default BalanceBtn;