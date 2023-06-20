import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Summary } from 'components/Summary/Summary';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useEffect } from 'react';
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
      <ReportsLink />
      <div>Home Page</div>
      <Summary></Summary>
      <Addtransaction />
    </>
  );
}

export default HomePage;
