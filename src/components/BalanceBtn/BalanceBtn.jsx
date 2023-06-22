import { useDispatch } from 'react-redux';
import { Button } from './BalanceBnt.styled';

const BalanceBtn = ({ balanceToUpdate }) => {
    // const dispatch = useDispatch();
    // const totalBalance = () => {
    //   const initialState = Number(balanceToUpdate);
    //   console.log(initialState);
    //   if (initialState > 0) {
    //     dispatch(...({ initialState: initialState }));
    //     setTimeout(() => {
    //       dispatch(...());
    //     }, 200);
    //   } else {
    //     alert('The balance must be positive');
    //   }
    // };

    return (
        <Button type="button"
        //  onClick={totalBalance}
        >
          Confirm
        </Button>
      );
    };
    
    export default BalanceBtn;