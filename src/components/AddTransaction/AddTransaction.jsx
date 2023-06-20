import './AddTransaction.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

export const Addtransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      <BsFillCalendarCheckFill size="1rem" />
      {value}
    </button>
  ));

  const options = [
    { value: 'transport', label: 'Transport' },
    { value: 'products', label: 'Products' },
    { value: 'health', label: 'Health' },
    { value: 'alcohol', label: 'Alcohol' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'housing', label: 'Housing' },
    { value: 'technique', label: 'Technique' },
    { value: 'communal,communication', label: 'Communal,Communication' },
    { value: 'sports,hobbies', label: 'Sports,Hobbies' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' },
  ];
  return (
    <div className="transaction-form">
        <div className="data_form">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <form className="form">
        <input
          type="text"
          name="description"
          placeholder="Product description"
          required
          className="input_product"
        />
        <Select
          className="select-container"
          classNamePrefix="select"
          menuShouldBlockScroll={true}
          menuShouldScrollIntoView={false}
          options={options}
          name="category"
          placeholder="Product category"
          required
        />
        <input className="input_calc" placeholder="0.00" required />
        <div>
          <button type="submit" className="btnInput">
            Input
          </button>
          <button type="reset" className="btnClear">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
