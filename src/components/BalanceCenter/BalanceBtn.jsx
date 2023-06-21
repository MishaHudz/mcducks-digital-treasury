import { useDispatch } from 'react-redux';
import { Button } from './BalanceCenter.styled';

const BalanceBtn = ({ balanceToUpdate }) => {
    const dispatch = useDispatch();
    const totalBalance = () => {
      const newBalance = Number(balanceToUpdate);
      console.log(newBalance);
      // if (newBalance > 0) {
      //   // dispatch(setNewBalance({ newBalance: newBalance }));
      //   // setTimeout(() => {
      //   //   dispatch(getAuthUser());
      //   // }, 200);
      // } else {
      //   alert('The balance must be positive');
      // }
    };

    return (
        <Button type="button" onClick={totalBalance}>
          Confirm
        </Button>
      );
    };
    
    export default BalanceBtn;