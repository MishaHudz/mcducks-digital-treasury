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
      <Section>
        <SectionImage>
          <SectionDiv>
            <TestBox>
              <TestTitle>Balance:</TestTitle>
              <TestButton>00.00 UAH</TestButton>
              <TestButton>Confirm</TestButton>
              <ReportsLink />
            </TestBox>

            <ExpenseIncomeBtn />

            <OperationsBox>
              <Addtransaction />
              <OperationsBoxTransaction>
                <TransactionTable />
                <Summary />
              </OperationsBoxTransaction>
            </OperationsBox>
          </SectionDiv>
        </SectionImage>
      </Section>
    </>
  );
}

export default HomePage;
