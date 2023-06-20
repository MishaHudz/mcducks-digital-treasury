import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
function HomePage() {
  return (
    <>
      <ReportsLink />
      <div>Home Page</div>
      <Addtransaction/>
    </>
  );
}

export default HomePage;
