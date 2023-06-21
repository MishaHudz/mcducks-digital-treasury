import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Summary } from 'components/Summary/Summary';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TransactionTable from 'components/TransactionTable/TransactionTab';

function HomePage() {
  const [date, setDate] = useState('');
  const [year, setYear] = useState(null);
  const { accessToken } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const day = new Date();
  const startDate = `${day.getDate()}.${
    day.getMonth() + 1
  }.${day.getFullYear()}`;
  useEffect(() => {
    !accessToken && navigate('/authorization');
  }, [accessToken, navigate]);

  useEffect(() => {
    setDate(startDate);
    setYear(startDate.split('.')[2]);
  }, []);
  const getTransactionsMonthYear = (month, year) => async () => {
    try {
      const response = await getTransactionsByPeriod(`${month}-${year}`);
      console.log(response);
    } catch ({ response }) {
      console.log(response);
    }
  };
  return (
    <>
      {console.log(startDate)}
      {/* {getTransactionsMonthYear(year)} */}
      <ReportsLink />
      <div>Home Page</div>
      <Summary year={year}></Summary>
      <Addtransaction />
      <TransactionTable />
    </>
  );
}

export default HomePage;
