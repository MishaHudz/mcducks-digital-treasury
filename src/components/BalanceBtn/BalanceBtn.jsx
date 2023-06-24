import { useDispatch } from 'react-redux';
import { Button } from './BalanceBnt.styled';

import { balancePatch } from 'store/authOperation';

const BalanceBtn = ({ balanceToUpdate, setIsInputDisabled }) => {
  const dispatch = useDispatch();

  const handleSubmit = (data, evt) => {
    setIsInputDisabled(true);
    dispatch(balancePatch(data))
      .unwrap()
      .then(() => {
        evt.target.disabled = true;
        evt.target.style.display = 'none';
      });
  };

  return (
    <Button type="button" onClick={evt => handleSubmit(+balanceToUpdate, evt)}>
      Confirm
    </Button>
  );
};

export default BalanceBtn;
