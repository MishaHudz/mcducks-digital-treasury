import { useState } from 'react';
import Select from 'react-select';
import { expenses, incomes } from './categories';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import { enGB } from 'date-fns/locale';
import { Input, ContainerDate } from './Calendar.styled';
import './Calendar.css';
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
  getTransactionPeriod,
  // getTransactionPeriod,
} from 'store/transactionsOperations';
import { categoryTranslationEnToRu } from './TranslateFunc';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Addtransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [descr, setDescription] = useState('');
  const [summ, setSumm] = useState('');
  const [searchParams] = useSearchParams();
  const [operation, setOperation] = useState('expences');
  // console.log(searchParams.get('operation'));
  useEffect(() => {
    setOperation(searchParams.get('operation'));
  }, [searchParams]);

  // console.log(categoryTranslationEnToRu('Alcohol'));
  // const expensArr = Object.entries(expens);
  // const englArr = expensArr.map(el => {
  //   return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
  // });
  // console.log(englArr);

  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <Input
      value={value}
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></Input>
  ));

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

  useEffect(() => {
    dispatch(getTransactionPeriod('2023-06'));
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(
  //     getTransactionPeriod(
  //       startDate.getFullYear() +
  //         '-' +
  //         ('0' + (startDate.getMonth() + 1)).slice(-2)
  //     )
  //   );
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      operation === 'expences'
        ? addTransactionExpense(transactionForm)
        : addTransactionIncome({
            description: descr,
            amount: Number(summ),
            date: time,
            category: categoryTranslationEnToRu(selectedOption.label),
          })
    );
    formreset();
  };

  return (
    <>
      <TransactionForm>
        <ContainerDate>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            customInput={<ExampleCustomInput />}
            locale={enGB}
            maxDate={new Date()}
          />
        </ContainerDate>
        <div>
          <Form onSubmit={handleSubmit}>
            <InputProduct
              type="text"
              onChange={e => setDescription(e.target.value)}
              name="description"
              placeholder="Product description"
              value={descr}
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
