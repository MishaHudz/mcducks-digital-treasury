import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Summary } from 'components/Summary/Summary';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TransactionTable from 'components/TransactionTable/TransactionTab';
import 

function HomePage() {
  const { accessToken } = useSelector(state => state.auth);

  const navigate = useNavigate();
  return (
    <>
      <ReportsLink/>
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
