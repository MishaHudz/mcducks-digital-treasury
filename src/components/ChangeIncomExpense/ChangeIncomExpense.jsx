import { useEffect } from 'react';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import { ButtonChange, ExInBox, ExInTitle } from './ChangeIncomExpense.styled';

const ChangeIncomExpense = () => {
  const [text, setText] = useState('EXPENSES');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setText(prev =>
      prev === 'EXPENSES' ? setText('INCOME') : setText('EXPENSES')
    );
  };
  useEffect(() => {
    // console.log(text);
    setSearchParams({
      operation: text.toLocaleLowerCase(),
      category: searchParams.get('category'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <ExInBox>
      <ButtonChange onClick={handleChange}>
        <MdKeyboardArrowRight size="26" color="green" />
      </ButtonChange>
      <ExInTitle>{text}</ExInTitle>
      <ButtonChange onClick={handleChange}>
        <MdKeyboardArrowLeft size="26" color="green" />
      </ButtonChange>
    </ExInBox>
  );
};

export default ChangeIncomExpense;
