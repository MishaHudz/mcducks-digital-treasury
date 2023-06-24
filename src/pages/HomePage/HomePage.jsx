import ReportsLink from 'components/ReportsLink/ReportsLink';
import { Summary } from 'components/Summary/Summary';
import { Addtransaction } from 'components/AddTransaction/AddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import TransactionTable from 'components/TransactionTable/TransactionTab';
import { useEffect, useState } from 'react';
import {
  OperationsBox,
  Section,
  TestBox,
  TestButton,
  TestTitle,
  SectionDiv,
  SectionImage,
  OperationsBoxTransaction,
  AddTransactionBtn,
  AddTransactionBtnTitle,
} from './HomePage.styled';
import ExpenseIncomeBtn from 'components/ExpenseIncomeBtn/ExpenseIncomeBtn';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import AddTransactionModal from 'components/Modal/AddTransactionModal';
import plusLogo from '../../images/plus.png';
import ContainerDates from 'components/AddTransaction/ContainerDate';
import {
  getTransactionExpense,
  getTransactionIncome,
} from 'store/transactionsOperations';

function HomePage() {
  const { accessToken } = useSelector(state => state.auth);
  const [, setSearchParams] = useSearchParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ operation: 'expences' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !accessToken && navigate('/authorization');
  }, [accessToken, navigate]);

  //

  function openMobModal() {
    setModalIsOpen(true);
  }

  function handleModalConfirm() {
    setModalIsOpen(false);
  }

  function handleModalCancel() {
    setModalIsOpen(false);
  }

  // const { accessToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const operation = urlSearchParams.get('operation');
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (accessToken && isMobile) {
      if (operation === 'income') {
        dispatch(getTransactionIncome());
      }
      if (operation === 'expences') {
        dispatch(getTransactionExpense());
      }
    }
  }, [dispatch, accessToken, operation, isMobile]);

  //

  return (
    <>
      <Section>
        <SectionImage>
          <SectionDiv>
            <MediaQuery minWidth={768}>
              <TestBox>
                <TestTitle>Balance:</TestTitle>
                <TestButton>00.00 UAH</TestButton>
                <TestButton>Confirm</TestButton>
                <ReportsLink />
              </TestBox>
            </MediaQuery>

            <MediaQuery minWidth={768}>
              <ExpenseIncomeBtn />
            </MediaQuery>
            <OperationsBox>
              <MediaQuery maxWidth={767}>
                <AddTransactionBtn onClick={openMobModal}>
                  <img
                    src={plusLogo}
                    alt="addtransaction"
                    width="24px"
                    height="24px"
                  />
                  <AddTransactionBtnTitle>
                    Add Transaction
                  </AddTransactionBtnTitle>
                </AddTransactionBtn>
                <ReportsLink />
                <ContainerDates
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </MediaQuery>
              <MediaQuery minWidth={768}>
                <Addtransaction />
              </MediaQuery>

              <OperationsBoxTransaction>
                <TransactionTable />
                <MediaQuery minWidth={768}>
                  <Summary />
                </MediaQuery>
              </OperationsBoxTransaction>
            </OperationsBox>
          </SectionDiv>
        </SectionImage>
      </Section>
      <MediaQuery maxWidth={767}>
        <ExpenseIncomeBtn />
      </MediaQuery>

      <AddTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalCancel}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
        startDate={startDate}
        setStartDate={setStartDate}
      />
    </>
  );
}

export default HomePage;
