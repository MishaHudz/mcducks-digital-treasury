import './AddTransaction.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { expenses } from './categories';
import { 
TransactionForm,
DataForm,
Form,
InputProduct,
InputCalc,
BtnInput,
BtnClear
 } from './AddTransaction.styled';
// import { categoryTranslationEnToRu } from './TranslateFunc';
// import { selectCurrentTransactionType } from 'store/transactionsSelectors';

export const Addtransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      <BsFillCalendarCheckFill size="1rem" />
      {value}
    </button>
  ));
  const [selectedOption, setSelectedOption] = useState(null);

  
  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   const amount = e.target.elements.amount.value;
  //   const description = e.target.elements.description.value;
  //   const category = categoryTranslationEnToRu(e.target.elements.category.value.toString());
  // }
  return (
    <TransactionForm>
        <DataForm>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            customInput={<ExampleCustomInput />}
          />
        </DataForm>
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
          onChange={(option) => setSelectedOption(option)}
        />
        <InputCalc 
        name="amount"
        placeholder="0.00" 
        required />
        <div>
          <BtnInput type="submit">
            Input
          </BtnInput>
          <BtnClear type="reset">
            Clear
          </BtnClear>
        </div>
      </Form>
    </TransactionForm>
  );
};
