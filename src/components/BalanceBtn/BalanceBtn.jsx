import { useDispatch } from 'react-redux';
import { Button } from './BalanceBnt.styled';
import { addTransactionExpense, addTransactionIncome } from 'store/transactionsOperations';

const BalanceBtn = ({ balanceToUpdate, setIsInputDisabled }) => {
    const dispatch = useDispatch();
    const handleSubmit = data => {
      setIsInputDisabled(true)
      dispatch(
       data <= 0 
          ? addTransactionExpense({
            description: 'initial value',
            amount: Number(data),
            date: new Date(),
            category: 'Доп. доход',
          })
          : addTransactionIncome({
              description: 'initial value',
              amount: Number(data),
              date: new Date(),
              category: 'Доп. доход',
            })
      );
    };

    return (
        <Button type="button"
         onClick={()=> handleSubmit(+balanceToUpdate)}
        >
          Confirm
        </Button>
      );
    };
    
    export default BalanceBtn;