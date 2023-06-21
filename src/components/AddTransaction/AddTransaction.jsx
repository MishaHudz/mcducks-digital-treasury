import { useState} from 'react';
import Select from 'react-select';
import { expenses } from './categories';
import {
  TransactionForm,
  Form,
  InputProduct,
  InputCalc,
  BtnInput,
  BtnClear,
  ContainerBtn
} from './AddTransaction.styled';
import './AddTransaction.css';
import { TransactionDate } from 'components/CalendarForma/CalendarForma';
// import { categoryTranslationEnToRu } from './TranslateFunc';
// import { selectCurrentTransactionType } from 'store/transactionsSelectors';

export const Addtransaction = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   const amount = e.target.elements.amount.value;
  //   const description = e.target.elements.description.value;
  //   const category = categoryTranslationEnToRu(e.target.elements.category.value.toString());
  // }
  return (
    <TransactionForm>
      <TransactionDate />
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
          <InputCalc 
          name="amount" 
          placeholder="0.00" 
          required />
          <ContainerBtn>
            <BtnInput type="submit">Input</BtnInput>
            <BtnClear type="reset">Clear</BtnClear>
          </ContainerBtn>
        </Form>
      </div>
    </TransactionForm>
  );
};
