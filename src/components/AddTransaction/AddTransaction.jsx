import { useState } from 'react';
import Select from 'react-select';
import { expenses, incomes } from './categories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  TransactionForm,
  Form,
  InputProduct,
  InputCalc,
  BtnInput,
  BtnClear,
  ContainerBtn,
} from './AddTransaction.styled';
import './AddTransaction.css';
import { useDispatch } from 'react-redux';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'store/transactionsOperations';
import { categoryTranslationEnToRu } from './TranslateFunc';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContainerDates from './ContainerDate';

export const Addtransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [descr, setDescription] = useState('');
  const [summ, setSumm] = useState('');
  const [searchParams] = useSearchParams();
  const [operation, setOperation] = useState('expences');

  useEffect(() => {
    setOperation(searchParams.get('operation'));
  }, [searchParams]);

  // const { accessToken } = useSelector(state => state.auth);

  const notify = () =>
    toast.info('Please enter a positive number', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const time =
    startDate.getFullYear() +
    '-' +
    ('0' + (startDate.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + startDate.getDate()).slice(-2);

  const dispatch = useDispatch();
  const formreset = () => {
    setStartDate(new Date());
    setSumm('');
    setDescription('');
    setSelectedOption('');
  };
  const transactionForm = {
    description: descr,
    amount: Number(summ),
    date: time,
    category: categoryTranslationEnToRu(selectedOption.label),
  };

  // useEffect(() => {
  //   if (accessToken) {
  //     dispatch(
  //       getTransactionPeriod(
  //         startDate.getFullYear() +
  //           '-' +
  //           ('0' + (startDate.getMonth() + 1)).slice(-2)
  //       )
  //     );
  //   }
  // }, [accessToken, startDate, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    if (summ < 0) {
      notify();
      return;
    }
    operation === 'expences' &&

    operation === 'income' && dispatch(addTransactionIncome(transactionForm));

    formreset();
  };

  return (
    <>
      <TransactionForm>
        <ToastContainer />
        <ContainerDates startDate={startDate} setStartDate={setStartDate} />
        <div>
          <Form onSubmit={handleSubmit}>
            <InputProduct
              type="text"
              onChange={e => setDescription(e.target.value)}
              name="description"
              placeholder="Product description"
              value={descr}
              pattern="^[a-zA-Z\s]+$"
              required
            />
            <Select
              className="select-container"
              classNamePrefix="select"
              menuShouldBlockScroll={true}
              menuShouldScrollIntoView={false}
              options={operation === 'expences' ? expenses : incomes}
              name="category"
              placeholder="Product category"
              required
              value={selectedOption}
              onChange={option => setSelectedOption(option)}
            />
            <InputCalc
              type="number"
              name="amount"
              placeholder="0.00"
              onChange={e => setSumm(e.target.value)}
              value={summ}
              required
            />
            <ContainerBtn>
              <BtnInput type="submit">Input</BtnInput>
              <BtnClear type="reset" onClick={formreset}>
                Clear
              </BtnClear>
            </ContainerBtn>
          </Form>
        </div>
      </TransactionForm>
    </>
  );
};
