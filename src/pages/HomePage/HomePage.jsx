import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useEffect } from 'react';
import BalanceCenter  from '../../components/BalanceCenter/BalanceCenter';
import BalanceBtn from 'components/BalanceCenter/BalanceBtn';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { accessToken } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    !accessToken && navigate('/authorization');
  }, [accessToken, navigate]);

  return (
    <>
      <ReportsLink/>
      <div>Home Page</div>
      <BalanceCenter/>
      <BalanceBtn/>
      <Addtransaction/>
    </>
  );
}

export default HomePage;
