import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Summary } from 'components/Summary/Summary';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TransactionTable from 'components/TransactionTable/TransactionTab';
import { useEffect } from 'react';
import {
  OperationsBox,
  Section,
  TestBox,
  TestButton,
  TestTitle,
  SectionDiv,
  SectionImage,
  OperationsBoxTransaction,
} from './HomePage.styled';
import ExpenseIncomeBtn from 'components/ExpenseIncomeBtn/ExpenseIncomeBtn';
import BalanceBtn from 'components/BalanceBtn/BalanceBtn';
import BalanceCenter from 'components/BalanceCenter/BalanceCenter';

function HomePage() {
  const { accessToken } = useSelector(state => state.auth);
  const [, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ operation: 'expences' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !accessToken && navigate('/authorization');
  }, [accessToken, navigate]);

  return (
    <>
      <ReportsLink />
      <div>Home Page</div>
      <Summary />
      <Addtransaction />
      <TransactionTable />
      <BalanceCenter/>
      <BalanceBtn/>
    
    </>
  );
}

export default HomePage;
