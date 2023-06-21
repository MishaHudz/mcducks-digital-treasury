import { useState } from 'react';
import Select from 'react-select';
import { expenses } from './categories';
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

// import { categoryTranslationEnToRu } from './TranslateFunc';
// import { selectCurrentTransactionType } from 'store/transactionsSelectors';

export const Addtransaction = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

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

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   const amount = e.target.elements.amount.value;
  //   const description = e.target.elements.description.value;
  //   const category = categoryTranslationEnToRu(e.target.elements.category.value.toString());
  // }
  return (
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
        <Form>
          <InputProduct
            type="text"
            name="description"
            placeholder="Product description"
            required
          />
          <Select
            className="select-container"
            classNamePrefix="select"
            menuShouldBlockScroll={true}
            menuShouldScrollIntoView={false}
            options={expenses}
            name="category"
            placeholder="Product category"
            required
            value={selectedOption}
            onChange={option => setSelectedOption(option)}
          />
          <InputCalc name="amount" placeholder="0.00" required />
          <ContainerBtn>
            <BtnInput type="submit">Input</BtnInput>
            <BtnClear type="reset">Clear</BtnClear>
          </ContainerBtn>
        </Form>
      </div>
    </TransactionForm>
  );
};
